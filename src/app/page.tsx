"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FloatingFooter } from "@/components/floating-footer";
import { FooterSection } from "@/components/footer-section";

export default function HeroSection() {
  return (
    <>
      <main>
        <div
          aria-hidden
          className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative mt-28 z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Parkinson's Disease Prediction System
              </h1>
              <p className="mx-auto my-8 max-w-2xl text-xl">
                Advanced AI-powered analysis of voice measurements for early
                Parkinson's disease risk assessment.
              </p>

              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    <span className="btn-label">Get Started</span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/dashboard">
                    <span className="btn-label">Dashboard</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-auto -mt-16 max-w-7xl">
            <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
              <div className="[transform:rotateX(20deg);]">
                <div className="lg:h-176 relative skew-x-[.36rad]">
                  <div
                    aria-hidden
                    className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32"
                  />
                  <div
                    aria-hidden
                    className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent"
                  />

                  <div
                    aria-hidden
                    className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
                  />
                  <div
                    aria-hidden
                    className="from-background z-11 absolute inset-0 bg-gradient-to-l"
                  />
                  <div
                    aria-hidden
                    className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                  />
                  <div
                    aria-hidden
                    className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
                  />

                  <Image
                    className="rounded-(--radius) z-1 relative border dark:hidden"
                    src="/image.png"
                    alt="Health AI Dashboard Preview"
                    width={2880}
                    height={2074}
                  />
                  <Image
                    className="rounded-(--radius) z-1 relative hidden border dark:block"
                    src="/image3.png"
                    alt="Health AI Dashboard Preview"
                    width={2880}
                    height={2074}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Comprehensive Health Prediction Tools
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our AI models analyze your health data to provide personalized
              disease risk assessments and early detection
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Model Card 1 */}
              {/* <div className="group">
                <Card className="h-full transition-all hover:shadow-md border-border">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <CardTitle>Heart Disease Prediction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      AI-powered analysis of cardiovascular health markers to
                      assess heart disease risk with 94% accuracy.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Badge
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground"
                    >
                      94% Accuracy
                    </Badge>
                    <Button
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link href="/dashboard/heart-disease">Try Model</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div> */}

              {/* Model Card 2 */}
              {/* <div className="group">
                <Card className="h-full transition-all hover:shadow-md border-border">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <CardTitle>Diabetes Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Early detection of Type 2 diabetes risk based on medical
                      history and biomarker analysis.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Badge
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground"
                    >
                      91% Accuracy
                    </Badge>
                    <Button
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link href="/dashboard/diabetes">Try Model</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div> */}

              {/* Model Card 3 */}
              {/* <div className="group">
                <Card className="h-full transition-all hover:shadow-md border-border">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <CardTitle>Breast Cancer Screening</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      AI-assisted breast cancer detection using cell nucleus
                      features with high precision rates.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Badge
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground"
                    >
                      96% Accuracy
                    </Badge>
                    <Button
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link href="/dashboard/breast-cancer">Try Model</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div> */}

              {/* Model Card 4 */}
              {/* <div className="group">
                <Card className="h-full transition-all hover:shadow-md border-border">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </div>
                    <CardTitle>Kidney Disease Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Detect early signs of kidney disease through comprehensive
                      blood and urine biomarker assessment.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Badge
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground"
                    >
                      92% Accuracy
                    </Badge>
                    <Button
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link href="/dashboard/kidney-disease">Try Model</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div> */}

              {/* Model Card 5 */}
              <div className="group">
                <Card className="h-full transition-all hover:shadow-md border-border">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <CardTitle>Parkinson's Disease</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Early detection of Parkinson's disease through voice
                      pattern analysis and movement assessments.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Badge
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground"
                    >
                      89% Accuracy
                    </Badge>
                    <Button
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <Link href="/dashboard/parkinsons-disease">
                        Try Model
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Add new model card */}
              <div className="group">
                <Card className="h-full transition-all hover:shadow-md border-2 border-dashed border-border">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-2 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-center">
                      More Coming Soon
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      We're constantly developing new health prediction models
                      to serve your needs.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" disabled>
                      Stay Tuned
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}
