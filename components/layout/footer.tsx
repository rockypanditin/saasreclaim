import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="SaaSReclaim Logo"
              className="h-7 w-7 rounded-lg object-cover shadow-sm border border-blue-500/30"
            />
            <span className="font-bold text-sm text-slate-700 dark:text-slate-200">SaaSReclaim</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <Link href="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Dashboard</Link>
            <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link>
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms & Disclaimer</Link>
          </div>

          <p className="text-xs text-slate-400 dark:text-slate-500">
            © 2026 SaaSReclaim Inc.
          </p>
        </div>

        <p className="text-[11px] text-slate-400 dark:text-slate-600 max-w-4xl mx-auto text-center leading-relaxed">
          <strong>Disclaimer:</strong> SaaSReclaim is an independent software tool. All third-party product names, logos, and trademarks belong strictly to their respective owners. Savings metrics are informative estimates.
        </p>
      </div>
    </footer>
  );
}
