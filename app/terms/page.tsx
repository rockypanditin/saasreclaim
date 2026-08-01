import Link from "next/link";
import { Header } from "@/components/layout/header";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service & Legal Disclaimer - SaaSReclaim",
  description: "SaaSReclaim Terms of Service, liability disclaimers, and trademark notices.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-12 max-w-4xl space-y-8">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <ShieldAlert className="h-4 w-4" />
            <span>Legal Terms & Trademark Notice</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Terms of Service & Disclaimer</h1>
          <p className="text-xs text-slate-500">Last Updated: July 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-6">
          <section className="space-y-2 bg-amber-50/80 dark:bg-amber-950/40 p-4 rounded-xl border border-amber-200 dark:border-amber-900/60">
            <h2 className="text-sm font-bold text-amber-900 dark:text-amber-200">Important Trademark Disclaimer</h2>
            <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
              SaaSReclaim is an independent software tracking platform. SaaSReclaim is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Zoom Video Communications, Slack Technologies, Figma Inc., Adobe Inc., Google LLC, Microsoft Corporation, Amazon Web Services, Salesforce, or any third-party SaaS vendors mentioned.
              <br /><br />
              All product names, logos, brands, and registered trademarks mentioned on this website belong strictly to their respective owners. Their inclusion is solely for descriptive educational reference.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Service Overview & Educational Purpose</h2>
            <p>
              SaaSReclaim provides automated software inventory tracking and general analytical estimates. Savings metrics, duplicate warnings, and benchmarks are informative estimates. Actual savings depend on individual software vendor contract terms, seat counts, and negotiation results.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. Limitation of Liability</h2>
            <p>
              SaaSReclaim and its operators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from vendor contract cancellations, auto-renewals, or billing disputes with third-party software providers. Users are solely responsible for reviewing contract terms before terminating any third-party software service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Content Accuracy</h2>
            <p>
              Guides, blog articles, and benchmarks provided on SaaSReclaim are for educational purposes. We strive for accuracy, but vendor pricing and software features change frequently. Users should verify vendor terms directly on official vendor websites.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
