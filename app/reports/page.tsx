"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { Header } from "@/components/layout/header";
import { generateWasteReport } from "@/lib/subscription-utils";
import { formatCurrency, formatDate } from "@/lib/utils";
import { getStoredSubscriptions, fetchLiveDatabaseSubscriptions } from "@/lib/storage";
import { Subscription } from "@/types/subscription";
import { Button } from "@/components/ui/button";
import { Printer, AlertTriangle, CheckCircle2, PieChart, Layers } from "lucide-react";
import { NegotiationAssistant } from "@/components/subscription/negotiation-assistant";
import { Footer } from "@/components/layout/footer";

export default function ReportsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const syncData = useCallback(() => {
    const local = getStoredSubscriptions();
    if (local && local.length > 0) setSubscriptions(local);
    fetchLiveDatabaseSubscriptions().then((dbSubs) => {
      if (dbSubs && dbSubs.length > 0) setSubscriptions(dbSubs);
    });
  }, []);

  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    syncData();
    setCurrency(localStorage.getItem("currency") || "USD");
    const handleCurrency = () => setCurrency(localStorage.getItem("currency") || "USD");
    window.addEventListener("storageChange", syncData);
    window.addEventListener("currencyChange", handleCurrency);
    return () => {
      window.removeEventListener("storageChange", syncData);
      window.removeEventListener("currencyChange", handleCurrency);
    };
  }, [syncData]);

  const report = useMemo(() => generateWasteReport(subscriptions), [subscriptions]);

  const handlePrint = () => {
    window.print();
  };

  // Category breakdown calculation
  const categoryCosts: Record<string, number> = {};
  subscriptions.forEach((sub) => {
    if (sub.status === "cancelled") return;
    categoryCosts[sub.category] = (categoryCosts[sub.category] || 0) + Number(sub.monthly_cost);
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 print:bg-white print:p-0 transition-colors duration-200">
      <div className="print:hidden">
        <Header />
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-8">
        {subscriptions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-16 text-center">
            <Layers className="mx-auto h-10 w-10 text-slate-400 dark:text-slate-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No Subscriptions to Analyze</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">Add software tools to your Dashboard first. Waste reports will generate automatically once you have tracked subscriptions.</p>
          </div>
        ) : (
        <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 print:hidden">
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Executive SaaS Waste Report</h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Detailed analysis & monthly recovery audit for leadership review.</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handlePrint} className="gap-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
              <Printer className="h-4 w-4" />
              <span>Print / Save PDF</span>
            </Button>
          </div>
        </div>

        {/* Printable Report Paper */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-lg print:shadow-none print:border-none">
          {/* Company & Header Title */}
          <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="SaaSReclaim Logo"
                  className="h-8 w-8 rounded-lg object-cover shadow-sm border border-blue-500/20"
                />
                <span className="text-xl font-extrabold text-slate-900 dark:text-white">SaaSReclaim Audit</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Generated: {formatDate(new Date().toISOString())}</p>
            </div>

            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Audit Status: Complete
              </span>
            </div>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-5 border border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Total SaaS Spend</span>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{formatCurrency(report.total_monthly_spend, currency)} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/mo</span></div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Annualized: {formatCurrency(report.total_annual_spend, currency)}</p>
            </div>

            <div className="rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 p-5 border border-emerald-200 dark:border-emerald-900/60">
              <span className="text-xs text-emerald-800 dark:text-emerald-300 font-semibold uppercase">Identified Waste Recovery</span>
              <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400 mt-1">{formatCurrency(report.potential_savings, currency)} <span className="text-xs font-normal text-emerald-800 dark:text-emerald-300">/mo</span></div>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-1">Annual Recovery: {formatCurrency(report.potential_savings * 12, currency)}</p>
            </div>

            <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 p-5 border border-amber-200 dark:border-amber-900/60">
              <span className="text-xs text-amber-900 dark:text-amber-300 font-semibold uppercase">Inefficient Tools Count</span>
              <div className="text-2xl font-black text-amber-700 dark:text-amber-400 mt-1">{report.duplicate_count + report.unused_count} Seats</div>
              <p className="text-[11px] text-amber-800 dark:text-amber-300 mt-1">{report.duplicate_count} Duplicate, {report.unused_count} Unused</p>
            </div>
          </div>

          {/* Category Breakdown Table */}
          <div className="mb-10">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <PieChart className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Spend Breakdown by Category</span>
            </h3>

            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="p-4">Category</th>
                    <th className="p-4">Active Tools</th>
                    <th className="p-4 text-right">Monthly Spend</th>
                    <th className="p-4 text-right">% of Total Budget</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {Object.entries(categoryCosts).map(([category, cost]) => {
                    const pct = Math.round((cost / (report.total_monthly_spend || 1)) * 100);
                    const toolsCount = subscriptions.filter((s) => s.category === category && s.status !== "cancelled").length;
                    return (
                      <tr key={category} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <td className="p-4 font-bold text-slate-900 dark:text-white">{category}</td>
                        <td className="p-4">{toolsCount} tool(s)</td>
                        <td className="p-4 text-right font-extrabold text-slate-900 dark:text-white">{formatCurrency(cost, currency)}</td>
                        <td className="p-4 text-right font-semibold text-blue-600 dark:text-blue-400">{pct}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Audit Findings */}
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              <span>Recommended Cost Cancellation Directives</span>
            </h3>

            <div className="space-y-4">
              {report.recommendations.map((rec, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-slate-50/50 dark:bg-slate-800/40">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{rec.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{rec.description}</p>
                      <div className="mt-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        Affected Tools: <span className="text-slate-800 dark:text-slate-200">{rec.subscriptions_involved.join(", ")}</span>
                      </div>
                    </div>

                    <span className="shrink-0 font-extrabold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1.5 rounded-xl text-xs">
                      Recover {formatCurrency(rec.potential_savings, currency)}/mo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

          {/* AI Negotiation Copy Assistant */}
          <div className="mt-10 print:hidden">
            <NegotiationAssistant />
          </div>
        </div>
        )}
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
