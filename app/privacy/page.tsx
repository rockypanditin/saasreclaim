import Link from "next/link";
import { Header } from "@/components/layout/header";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - SaaSReclaim",
  description: "SaaSReclaim Privacy Policy regarding data protection, user privacy, and security practices.",
};

export default function PrivacyPage() {
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
            <ShieldCheck className="h-4 w-4" />
            <span>Data Protection & Compliance</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-500">Last Updated: July 2026</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
            <p>
              SaaSReclaim collects minimal data necessary to provide subscription audit services. This includes user account information (email address, full name, company name) provided voluntarily during signup.
            </p>
            <p>
              When you use our CSV or PDF invoice dropzone parser, all calculations are processed securely to extract software names, renewal dates, and amounts. We do not store or transmit raw banking credentials or payment credit card numbers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">2. How We Use Information</h2>
            <p>
              Your subscription data is strictly used to display spend metrics, highlight redundant tools, and compute estimated savings on your private dashboard. We do not sell, rent, or trade your data to third-party advertisers or vendors.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">3. Data Security & Storage</h2>
            <p>
              All stored data is protected using industry-standard AES-256 encryption at rest and TLS encryption in transit. Row Level Security (RLS) policies ensure that only authorized users can access their own workspace data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">4. Contact & User Rights</h2>
            <p>
              Under GDPR and CCPA, you have the right to access, export, or permanently delete your account data at any time. For questions regarding data privacy, contact our security team at privacy@saasreclaim.com.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
