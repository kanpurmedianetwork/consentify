"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  ExternalLink,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  AlertCircle,
} from "lucide-react";

export default function RedSidePage() {
  // Update page metadata dynamically
  useEffect(() => {
    document.title = "Red Side India | Exposing Digital Frauds";
  }, []);

  return (
    <div className="relative pt-16 bg-gradient-to-b from-background to-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#FF000A]/5" />
        <div className="container mx-auto px-4 relative">
          <div
            className="max-w-3xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="mb-6">
              <div className="  flex items-center justify-center mx-auto">

              <img src="/codered.svg" alt="Red Side India" className="w-40 h-40 object-contain" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-destructive via-destructive to-orange-600">
              Red Side India
            </h1>
            <p className="text-2xl font-medium mb-8">
              Exposing Digital Frauds with Collective Power
            </p>
            <p className="text-xl text-muted-foreground mb-8 italic">
              "When an OTP replaces consent, we raise our voice."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="destructive"
                className="group"
                onClick={() => {
                  const reportSection = document.getElementById("submit-report");
                  if (reportSection) {
                    reportSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Report a Fraud
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Why Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Why</h2>
            <blockquote className="text-2xl md:text-3xl font-medium italic mb-6">
              "India doesn't lack coders. It lacks digital dignity."
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Red Side India was born from a simple realization: in our rush to
              digitize India, we've compromised on the ethical foundations of
              technology. Our mission is to restore the balance by empowering
              citizens to understand, protect, and defend their digital rights.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            data-aos="fade-up"
          >
            What We Believe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className="bg-card border shadow-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-destructive"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Consent is a right, not a checkbox.
                </h3>
                <p className="text-muted-foreground">
                  True consent requires understanding, choice, and the ability to
                  withdraw. We fight against systems that manipulate, coerce, or
                  bypass meaningful consent.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-card border shadow-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-destructive"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Tech must protect, not exploit.
                </h3>
                <p className="text-muted-foreground">
                  Technology should serve humanity, not extract from it.
                  We stand against designs that prioritize addiction,
                  surveillance, and exploitation over user wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-card border shadow-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="h-6 w-6 text-destructive"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" x2="12" y1="9" y2="13" />
                    <line x1="12" x2="12.01" y1="17" y2="17" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Digital India without digital ethics is a ticking bomb.
                </h3>
                <p className="text-muted-foreground">
                  As we race toward a digital future, ethical guardrails
                  must be installed. We advocate for technology that respects
                  human dignity and cultural contexts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            data-aos="fade-up"
          >
            What We're Building
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-card rounded-lg p-8 border relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1">
                LIVE
              </div>
              <h3 className="text-xl font-bold mb-4">Consentify</h3>
              <p className="text-muted-foreground mb-6">
                India's first AI-powered digital consent system that provides
                legal proof and protection against identity theft and
                unauthorized use of personal information.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="/">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div
              className="bg-card rounded-lg p-8 border relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1">
                COMING SOON
              </div>
              <h3 className="text-xl font-bold mb-4">Sammati</h3>
              <p className="text-muted-foreground mb-6">
                A ground movement to educate citizens about digital consent
                rights and train them to identify and avoid digital fraud
                schemes in local languages.
              </p>
              <Button variant="outline" size="sm" disabled>
                Coming Soon
              </Button>
            </div>

            <div
              className="bg-card rounded-lg p-8 border relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1">
                COMING SOON
              </div>
              <h3 className="text-xl font-bold mb-4">RedSide Pulse</h3>
              <p className="text-muted-foreground mb-6">
                A news and awareness platform documenting the latest digital
                fraud techniques, legal precedents, and success stories in
                the fight against digital exploitation.
              </p>
              <Button variant="outline" size="sm" disabled>
                Coming Soon
              </Button>
            </div>

            <div
              className="bg-card rounded-lg p-8 border relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1">
                COMING SOON
              </div>
              <h3 className="text-xl font-bold mb-4">
                Identity Theft Support
              </h3>
              <p className="text-muted-foreground mb-6">
                A support network and resource center for victims of identity
                theft, providing guidance on legal recourse and recovery
                steps.
              </p>
              <Button variant="outline" size="sm" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Submit a Report Section */}
      <section id="submit-report" className="py-20">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Submit a Report
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-center">
              Have you experienced a digital fraud or consent violation? Report
              it here to help us document and fight against these practices.
            </p>

            <div className="bg-card rounded-lg border shadow-md overflow-hidden">
              <Tabs defaultValue="form" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="form">Submit Report</TabsTrigger>
                  <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                </TabsList>
                <TabsContent value="form" className="p-0">
                  <div className="h-[600px] w-full">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScDcztn5D0_5jz_hLdZBcgWMzaYRZx4F9jt22QS2eyBh2IQ8g/viewform?embedded=true"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                    >
                      Loading form...
                    </iframe>
                  </div>
                </TabsContent>
                <TabsContent value="guidelines" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2">
                        Reporting Guidelines
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Please follow these guidelines when submitting a report:
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="bg-destructive/10 rounded-full p-1 mt-0.5">
                          <svg
                            className="h-4 w-4 text-destructive"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Be specific and detailed</p>
                          <p className="text-sm text-muted-foreground">
                            Include names, dates, and specific actions that
                            occurred during the incident.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-destructive/10 rounded-full p-1 mt-0.5">
                          <svg
                            className="h-4 w-4 text-destructive"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Provide evidence</p>
                          <p className="text-sm text-muted-foreground">
                            Screenshots, recordings, or any documentation that
                            supports your report.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-destructive/10 rounded-full p-1 mt-0.5">
                          <svg
                            className="h-4 w-4 text-destructive"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Explain the impact</p>
                          <p className="text-sm text-muted-foreground">
                            How did this incident affect you or others? What
                            were the consequences?
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-destructive/10 rounded-full p-1 mt-0.5">
                          <svg
                            className="h-4 w-4 text-destructive"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">
                            Include contact information
                          </p>
                          <p className="text-sm text-muted-foreground">
                            We may need to reach you for additional details or
                            follow-up.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t text-center">
                      <Button
                        variant="destructive"
                        onClick={() => {
                          const tabTrigger = document.querySelector(
                            '[data-state="inactive"]'
                          ) as HTMLButtonElement;
                          if (tabTrigger) tabTrigger.click();
                        }}
                      >
                        Go to Report Form
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Case Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            data-aos="fade-up"
          >
            Case Highlights
          </h2>
          <p
            className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Real stories from our community that showcase the importance of
            digital consent and the consequences of its violation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bank Account Opened With Forged KYC",
                description:
                  "A Pune resident discovered multiple bank accounts opened in his name using his PAN card and Aadhaar details without his knowledge. These accounts were used for money laundering.",
                category: "Identity Theft",
                resolution: "Case under investigation by cyber cell",
                delay: "100",
              },
              {
                title: "OTP Scam Results in ₹1.5 Lakh Loss",
                description:
                  "A Delhi woman received a call claiming to be from her bank, asking for an OTP to 'prevent unauthorized transaction.' She shared the OTP and lost ₹1.5 lakh in seconds.",
                category: "OTP Fraud",
                resolution: "Partial recovery through timely bank notification",
                delay: "200",
              },
              {
                title: "Digital Signature Misused for Loan Application",
                description:
                  "A Bangalore IT professional's digital signature was misused to apply for a high-interest loan. He only discovered when debt collectors started calling him.",
                category: "Document Fraud",
                resolution: "Court case ongoing",
                delay: "300",
              },
            ].map((caseItem, index) => (
              <Card
                key={index}
                className="bg-card border shadow-sm"
                data-aos="fade-up"
                data-aos-delay={caseItem.delay}
              >
                <CardContent className="pt-6">
                  <div className="bg-destructive/10 text-destructive text-xs font-medium rounded-full px-2.5 py-0.5 inline-block mb-4">
                    {caseItem.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {caseItem.description}
                  </p>
                  <div className="text-sm">
                    <span className="font-medium">Resolution: </span>
                    <span className="text-muted-foreground">
                      {caseItem.resolution}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center" data-aos="fade-up">
            <Button variant="outline">View More Cases</Button>
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Together, we can build a safer digital India. Follow us on social
              media and spread awareness about digital consent and rights.
            </p>

            <div className="flex justify-center space-x-6 mb-12">
              <Link
                href="https://instagram.com/theredsideindia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-accent transition-colors rounded-full p-4"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com/theredsideindia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-accent transition-colors rounded-full p-4"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://facebook.com/theredsideindia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-accent transition-colors rounded-full p-4"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://linkedin.com/company/theredsideindia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card hover:bg-accent transition-colors rounded-full p-4"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up">
              <Button asChild variant="destructive" size="lg">
                <Link href="#submit-report">Report a Fraud</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Explore Consentify</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Pledge */}
      <section className="py-20 bg-gradient-to-b from-destructive/5 to-background/0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Founder's Pledge
            </h2>

            <blockquote className="text-xl md:text-2xl italic mb-6">
              "Mujhse meri pehchaan churaayi gayi... tab tak RedSide India
              rukega nahi."
            </blockquote>
            <img
              src="/founder.svg"
              alt="Founder's Signature"
              width={200}
              height={100}
              className="mx-auto mb-4"
            />
            <p className="text-muted-foreground mb-8">
              — Akash Kumar, Founder
            </p>

            <p className="text-lg">
              We will not rest until every Indian citizen understands their
              digital rights and has the tools to protect their identity in the
              digital age.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}