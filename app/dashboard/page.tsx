import { AuthForm } from "@/components/auth/AuthForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="relative pt-16">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
                Welcome to Consentify Dashboard
              </h1>
              <p className="text-lg text-muted-foreground mb-6" data-aos="fade-up" data-aos-delay="100">
                Login to access your secure dashboard and manage your digital
                consent preferences.
              </p>
              <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <svg
                      className="h-4 w-4 text-primary"
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
                  <p className="text-sm">
                    Manage your consent records and digital signatures
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <svg
                      className="h-4 w-4 text-primary"
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
                  <p className="text-sm">
                    Track who has requested access to your identity
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                    <svg
                      className="h-4 w-4 text-primary"
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
                  <p className="text-sm">
                    View detailed consent history and audit logs
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <AuthForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-2">Dashboard Preview</h2>
            <p className="text-muted-foreground">
              After logging in, you'll have access to these features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <h3 className="text-lg font-medium mb-2">Consent Management</h3>
              <p className="text-sm text-muted-foreground mb-4">
                View and manage all your consent records in one secure location.
              </p>
              <div className="bg-muted rounded-md p-4">
                <div className="h-40 flex items-center justify-center border border-dashed rounded-md">
                  <p className="text-xs text-muted-foreground">
                    Consent management interface preview
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <h3 className="text-lg font-medium mb-2">Identity Verification</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manage your identity verification settings and security preferences.
              </p>
              <div className="bg-muted rounded-md p-4">
                <div className="h-40 flex items-center justify-center border border-dashed rounded-md">
                  <p className="text-xs text-muted-foreground">
                    Verification dashboard preview
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border shadow-sm">
              <h3 className="text-lg font-medium mb-2">Audit Logs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Review detailed logs of all access and consent activity.
              </p>
              <div className="bg-muted rounded-md p-4">
                <div className="h-40 flex items-center justify-center border border-dashed rounded-md">
                  <p className="text-xs text-muted-foreground">
                    Activity logs preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}