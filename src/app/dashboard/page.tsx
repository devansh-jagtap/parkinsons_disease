import { getUserPredictions } from "./actions";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeletePredictionButton } from "@/components/delete-prediction-button";
import { Activity, TrendingUp, Calendar, BarChart3 } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const predictions = await getUserPredictions();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome, {user.firstName || user.username || "User"}!
          </h1>
          <p className="text-muted-foreground mt-1">{user.emailAddresses[0]?.emailAddress}</p>
        </div>

        {/* Quick Action Card */}
        <div className="mb-8">
          <Card>
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Parkinson's Disease Assessment</CardTitle>
              <CardDescription className="mt-2 text-base">
                Analyze voice measurements to assess Parkinson's disease risk
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-6">
              <Link href="/dashboard/parkinsons-disease">
                <Button size="lg" className="px-8">
                  <Activity className="w-4 h-4 mr-2" />
                  Start New Prediction
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Predictions
                </CardTitle>
                <BarChart3 className="w-4 h-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {predictions.length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                All-time predictions
              </p>
            </CardContent>
          </Card>

          {predictions.length > 0 && (
            <>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Latest Risk
                    </CardTitle>
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {(predictions[0].probability * 100).toFixed(1)}%
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Most recent assessment
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Average Risk
                    </CardTitle>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {(
                      (predictions.reduce((sum, p) => sum + p.probability, 0) /
                        predictions.length) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Across all predictions
                  </p>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Prediction History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Prediction History
            </CardTitle>
            <CardDescription>
              View and manage your past Parkinson's disease predictions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {predictions.length === 0 ? (
              <div className="text-center py-12">
                <Activity className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">
                  No predictions yet
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Start your first prediction to see your history here
                </p>
                <Link href="/dashboard/parkinsons-disease">
                  <Button>
                    <Activity className="w-4 h-4 mr-2" />
                    Start First Prediction
                  </Button>
                </Link>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Predicted Risk</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {predictions.map((prediction) => (
                    <TableRow key={prediction.id}>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm">{new Date(prediction.createdAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(prediction.createdAt).toLocaleTimeString('en-US', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold">
                        {(prediction.probability * 100).toFixed(1)}%
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            prediction.probability > 0.7
                              ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                              : prediction.probability > 0.4
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                              : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          }`}
                        >
                          {prediction.probability > 0.7
                            ? "High Risk"
                            : prediction.probability > 0.4
                            ? "Medium Risk"
                            : "Low Risk"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <DeletePredictionButton predictionId={prediction.id} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}