import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, FileCheck, Video, Clock, Scale } from "lucide-react";

export default function Home() {
  return (
    <div className="relative pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <Badge className="mb-4">India's First AI-Powered Consent System</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-card-foreground">
              Consentify: Secure Your Identity with AI + Law
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Protect your identity with AI-verified consent, secure legal proof,
              and real-time verification. Never lose control of your digital
              identity again.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Consentify Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our innovative approach combines artificial intelligence, legal
              expertise, and digital signatures to create a secure consent
              system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-card rounded-lg p-6 shadow-sm border" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI Verification
              </h3>
              <p className="text-muted-foreground">
                Our advanced AI technology analyzes consent patterns and verifies
                identity in real-time, providing secure authentication methods.
              </p>
            </div>

            <div 
              className="bg-card rounded-lg p-6 shadow-sm border" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Scale className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Legal Backing
              </h3>
              <p className="text-muted-foreground">
                Every consent is backed by legal frameworks and compliance with
                Indian regulations, making it legally binding and enforceable.
              </p>
            </div>

            <div 
              className="bg-card rounded-lg p-6 shadow-sm border" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Lock className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Digital Signatures
              </h3>
              <p className="text-muted-foreground">
                Secure, tamper-proof digital signatures create an immutable record
                of consent that can be verified at any time in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consent Matters */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Consent Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In today's digital world, your consent is being exploited.
                From unauthorized KYC to OTP misuse, identity theft is on the rise.
                Consentify gives you back control.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center shrink-0">
                    <FileCheck className="text-destructive h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Stop KYC Fraud
                    </h3>
                    <p className="text-muted-foreground">
                      Prevent unauthorized use of your identity documents with verified consent.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center shrink-0">
                    <Video className="text-destructive h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Combat OTP Misuse
                    </h3>
                    <p className="text-muted-foreground">
                      Shield yourself from scams that trick you into sharing OTPs for fraudulent transactions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-destructive h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">
                      Establish Proof
                    </h3>
                    <p className="text-muted-foreground">
                      Create immutable evidence of consent that stands up in legal disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative" data-aos="fade-left">
              <div className="relative bg-muted rounded-lg overflow-hidden aspect-video shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                <img 
                  src="https://images.pexels.com/photos/4098365/pexels-photo-4098365.jpeg" 
                  alt="Digital identity protection" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-lg p-6 shadow-md border w-3/4 md:w-2/3">
                <blockquote className="text-sm md:text-base italic text-muted-foreground">
                  "When someone uses your identity without proper consent, it's not just a breach of privacy—it's theft of your digital self."
                </blockquote>
                <div className="mt-4 font-medium text-sm">
                  — Akash Kumar, Founder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consentify offers a suite of tools designed to protect your identity
              across digital platforms and transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Video Consent",
                description: "Record video proof of consent with identity verification and secure storage.",
                icon: Video,
                delay: "100"
              },
              {
                title: "Real-time Verification",
                description: "Validate consent in seconds with our advanced authentication system.",
                icon: Clock,
                delay: "200"
              },
              {
                title: "Legal Proof",
                description: "Generate court-admissible evidence of consent for legal protection.",
                icon: Scale,
                delay: "300"
              },
              {
                title: "Secure Storage",
                description: "All consent records are encrypted and stored with enterprise-grade security.",
                icon: Lock,
                delay: "400"
              },
              {
                title: "Consent Management",
                description: "Easily manage, revoke, or update your consent records anytime.",
                icon: FileCheck,
                delay: "500"
              },
              {
                title: "Identity Protection",
                description: "Comprehensive shield against identity theft and unauthorized use.",
                icon: Shield,
                delay: "600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg p-6 border transition-all hover:shadow-md" 
                data-aos="fade-up" 
                data-aos-delay={feature.delay}
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up">
            <Button asChild size="lg">
              <Link href="/dashboard">Start Protecting Your Identity</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Digital Consent Revolution
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the movement to create a safer digital India where
              consent is respected and identity is protected.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/redside">Join Red Side India</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}