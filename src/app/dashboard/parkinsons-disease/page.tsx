"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { analyzeParkinsonsDiseaseRisk } from "@/lib/model/prompt/ai";
import { ResultCard } from "@/components/ui/result-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { savePrediction } from "@/app/dashboard/actions";
import { toast } from "sonner";

const ParkinsonsDiseasePage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    probability: number;
    key_factors: string[];
    recommendations: string[];
    analysis?: string;
  }>(null);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    mdvp_fo: 154.23,
    mdvp_fhi: 197.11,
    mdvp_flo: 116.82,
    mdvp_jitter_percentage: 0.006,
    mdvp_jitter_abs: 0.00004,
    mdvp_rap: 0.00303,
    mdvp_ppq: 0.00314,
    jitter_ddp: 0.00908,
    mdvp_shimmer: 0.0499,
    mdvp_shimmer_db: 0.426,
    shimmer_apq3: 0.0264,
    shimmer_apq5: 0.0296,
    mdvp_apq: 0.0314,
    shimmer_dda: 0.0791,
    nhr: 0.01111,
    hnr: 24.67,
    rpde: 0.529,
    d2: 2.301,
    dfa: 0.715,
    spread1: -5.684,
    spread2: 0.227,
    ppe: 0.173,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = {
        ascii_subject_name: "Patient-001",
        recording_number: 1,
        mdvp_fo: Number(formData.mdvp_fo),
        mdvp_fhi: Number(formData.mdvp_fhi),
        mdvp_flo: Number(formData.mdvp_flo),
        mdvp_jitter_percentage: Number(formData.mdvp_jitter_percentage),
        mdvp_jitter_abs: Number(formData.mdvp_jitter_abs),
        mdvp_rap: Number(formData.mdvp_rap),
        mdvp_ppq: Number(formData.mdvp_ppq),
        jitter_ddp: Number(formData.jitter_ddp),
        mdvp_shimmer: Number(formData.mdvp_shimmer),
        mdvp_shimmer_db: Number(formData.mdvp_shimmer_db),
        shimmer_apq3: Number(formData.shimmer_apq3),
        shimmer_apq5: Number(formData.shimmer_apq5),
        mdvp_apq: Number(formData.mdvp_apq),
        shimmer_dda: Number(formData.shimmer_dda),
        nhr: Number(formData.nhr),
        hnr: Number(formData.hnr),
        rpde: Number(formData.rpde),
        d2: Number(formData.d2),
        dfa: Number(formData.dfa),
        spread1: Number(formData.spread1),
        spread2: Number(formData.spread2),
        ppe: Number(formData.ppe),
      };

      const analysisResult = await analyzeParkinsonsDiseaseRisk(data);

      if (analysisResult && typeof analysisResult === "object") {
        let probability =
          typeof analysisResult.probability === "number"
            ? analysisResult.probability
            : 0.5;

        probability = Math.max(0, Math.min(1, probability));

        const key_factors = Array.isArray(analysisResult.key_factors)
          ? analysisResult.key_factors
          : [];

        const recommendations = Array.isArray(analysisResult.recommendations)
          ? analysisResult.recommendations
          : [];

        const resultData = {
          probability,
          key_factors,
          recommendations,
          analysis: analysisResult.analysis || "Analysis not available",
        };

        setResult(resultData);

        // Save prediction to database
        try {
          await savePrediction(data, probability);
          toast.success("Prediction saved successfully!");
        } catch (saveError) {
          console.error("Error saving prediction:", saveError);
          toast.error("Could not save prediction to history");
        }
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error predicting Parkinson's disease:", error);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
      setResult({
        probability: 0.5,
        key_factors: [],
        recommendations: [],
        analysis: "An error occurred during analysis. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderInputField = (
    name: string,
    label: string,
    type: string = "number",
    step: string = "any"
  ) => (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        step={step}
        value={formData[name as keyof typeof formData]}
        onChange={handleInputChange}
        className="h-9"
      />
    </div>
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] p-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-xl border-0 rounded-2xl mt-26 h-fit">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">
              Parkinson's Disease Risk Prediction
            </CardTitle>
            <CardDescription>
              Enter voice measurements to assess the risk of Parkinson's disease
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs defaultValue="frequency" className="w-full">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="frequency">Frequency</TabsTrigger>
                  <TabsTrigger value="jitter">Jitter</TabsTrigger>
                  <TabsTrigger value="shimmer">Shimmer</TabsTrigger>
                  <TabsTrigger value="harmonic">Harmonic</TabsTrigger>
                </TabsList>

                <TabsContent value="frequency" className="space-y-4">
                  <div className="bg-muted/30 p-3 rounded-md mb-4">
                    <h3 className="font-medium text-base mb-1">
                      Frequency Measurements
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fundamental frequency variations of voice
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {renderInputField(
                      "mdvp_fo",
                      "Average Frequency (Hz)",
                      "number",
                      "0.01"
                    )}
                    {renderInputField(
                      "mdvp_fhi",
                      "Maximum Frequency (Hz)",
                      "number",
                      "0.01"
                    )}
                    {renderInputField(
                      "mdvp_flo",
                      "Minimum Frequency (Hz)",
                      "number",
                      "0.01"
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="jitter" className="space-y-4">
                  <div className="bg-muted/30 p-3 rounded-md mb-4">
                    <h3 className="font-medium text-base mb-1">
                      Jitter Measurements
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Frequency variation from cycle to cycle
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInputField(
                      "mdvp_jitter_percentage",
                      "Jitter (%)",
                      "number",
                      "0.0001"
                    )}
                    {renderInputField(
                      "mdvp_jitter_abs",
                      "Jitter (Abs)",
                      "number",
                      "0.00001"
                    )}
                    {renderInputField("mdvp_rap", "RAP", "number", "0.00001")}
                    {renderInputField("mdvp_ppq", "PPQ", "number", "0.00001")}
                    {renderInputField("jitter_ddp", "DDP", "number", "0.00001")}
                  </div>
                </TabsContent>

                <TabsContent value="shimmer" className="space-y-4">
                  <div className="bg-muted/30 p-3 rounded-md mb-4">
                    <h3 className="font-medium text-base mb-1">
                      Shimmer Measurements
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Amplitude variation in the voice
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInputField(
                      "mdvp_shimmer",
                      "Shimmer",
                      "number",
                      "0.0001"
                    )}
                    {renderInputField(
                      "mdvp_shimmer_db",
                      "Shimmer (dB)",
                      "number",
                      "0.001"
                    )}
                    {renderInputField(
                      "shimmer_apq3",
                      "APQ3",
                      "number",
                      "0.0001"
                    )}
                    {renderInputField(
                      "shimmer_apq5",
                      "APQ5",
                      "number",
                      "0.0001"
                    )}
                    {renderInputField("mdvp_apq", "APQ", "number", "0.0001")}
                    {renderInputField("shimmer_dda", "DDA", "number", "0.0001")}
                  </div>
                </TabsContent>

                <TabsContent value="harmonic" className="space-y-4">
                  <div className="bg-muted/30 p-3 rounded-md mb-4">
                    <h3 className="font-medium text-base mb-1">
                      Harmonic and Nonlinear Measurements
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced voice analysis metrics
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {renderInputField(
                      "nhr",
                      "Noise-to-harmonics ratio",
                      "number",
                      "0.00001"
                    )}
                    {renderInputField(
                      "hnr",
                      "Harmonics-to-noise ratio",
                      "number",
                      "0.01"
                    )}
                    {renderInputField("rpde", "RPDE", "number", "0.001")}
                    {renderInputField(
                      "d2",
                      "Correlation dimension",
                      "number",
                      "0.001"
                    )}
                    {renderInputField("dfa", "DFA", "number", "0.001")}
                    {renderInputField("spread1", "Spread1", "number", "0.001")}
                    {renderInputField("spread2", "Spread2", "number", "0.001")}
                    {renderInputField("ppe", "PPE", "number", "0.001")}
                  </div>
                </TabsContent>
              </Tabs>

              <Button
                type="submit"
                className="w-full py-6 mt-6 text-base font-medium"
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Predict Parkinson's Disease Risk"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="sticky mt-28 top-20 h-fit">
          <ResultCard
            loading={loading}
            result={result}
            error={error}
            title="Parkinson's Disease Risk Assessment"
          />

          {/* Show recommendations card only if not already shown in ResultCard */}
          {result &&
            result.recommendations &&
            result.recommendations.length > 0 && (
              <Card className="mt-6 bg-transparent border-none transition-all hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    Recommendations
                  </CardTitle>
                  <CardDescription>
                    Based on your risk assessment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border bg-muted/50 p-4">
                    <ul className="list-disc list-inside space-y-1.5 ml-1">
                      {result.recommendations.map((recommendation, i) => (
                        <li key={i} className="text-muted-foreground">
                          {recommendation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
        </div>
      </div>
    </main>
  );
};

export default ParkinsonsDiseasePage;
