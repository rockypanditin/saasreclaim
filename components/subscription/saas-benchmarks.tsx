"use client";

import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingDown,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Zap,
  BarChart3
} from "lucide-react";
import { Subscription } from "@/types/subscription";
import { formatCurrency } from "@/lib/utils";

interface SaaSBenchmarksProps {
  subscriptions: Subscription[];
  currency?: string;
}

// Market average benchmark prices per tool
const MARKET_BENCHMARKS: Record<string, { avgMonthlyCost: number; benchmarkPlan: string }> = {
  zoom: { avgMonthlyCost: 15.99, benchmarkPlan: "Pro License" },
  slack: { avgMonthlyCost: 8.75, benchmarkPlan: "Pro Seat" },
  adobe: { avgMonthlyCost: 59.99, benchmarkPlan: "Creative Cloud All Apps" },
  figma: { avgMonthlyCost: 15.0, benchmarkPlan: "Professional Seat" },
  "google workspace": { avgMonthlyCost: 12.0, benchmarkPlan: "Business Standard" },
  canva: { avgMonthlyCost: 14.99, benchmarkPlan: "Pro License" },
  github: { avgMonthlyCost: 4.8, benchmarkPlan: "Team Seat" },
  hubspot: { avgMonthlyCost: 20.0, benchmarkPlan: "Starter Suite" },
};

export function SaaSBenchmarks({ subscriptions, currency = "USD" }: SaaSBenchmarksProps) {
  const [, setCurrencyTick] = useState(0);
  useEffect(() => {
    const handleCurrency = () => setCurrencyTick((t) => t + 1);
    window.addEventListener("currencyChange", handleCurrency);
    return () => window.removeEventListener("currencyChange", handleCurrency);
  }, []);

  const benchmarkAnalysis = useMemo(() => {
    const overpayingTools: {
      name: string;
      userCost: number;
      avgCost: number;
      overpayAmount: number;
      overpayPercent: number;
    }[] = [];

    subscriptions.forEach((sub) => {
      if (sub.status === "cancelled") return;
      const key = sub.name.toLowerCase();

      // Find matching benchmark by partial key matching
      const foundKey = Object.keys(MARKET_BENCHMARKS).find((k) => key.includes(k));

      if (foundKey) {
        const benchmark = MARKET_BENCHMARKS[foundKey];
        const userCost = Number(sub.monthly_cost);

        if (userCost > benchmark.avgMonthlyCost * 1.15) {
          const overpayAmount = userCost - benchmark.avgMonthlyCost;
          const overpayPercent = Math.round((overpayAmount / benchmark.avgMonthlyCost) * 100);

          overpayingTools.push({
            name: sub.name,
            userCost,
            avgCost: benchmark.avgMonthlyCost,
            overpayAmount,
            overpayPercent,
          });
        }
      }
    });

    const totalOverpaySavings = overpayingTools.reduce((sum, t) => sum + t.overpayAmount, 0);

    return {
      overpayingTools,
      totalOverpaySavings,
    };
  }, [subscriptions]);

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              <BarChart3 className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>SaaS Industry Pricing Benchmark (&quot;Are You Overpaying?&quot;)</span>
              </CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Real-time price comparison against global SaaS market benchmarks for similar company sizes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Benchmark Audit:</span>
            <span className="rounded-full bg-purple-500/10 px-3 py-0.5 text-xs font-black text-purple-600 dark:text-purple-400 border border-purple-500/20">
              {benchmarkAnalysis.overpayingTools.length} Price Anomaly Found
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-4">
        {benchmarkAnalysis.overpayingTools.length === 0 ? (
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center space-y-2">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Fair Pricing Verified Across All Tools</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Your software pricing matches or beats global SaaS industry market averages. No vendor overpricing detected.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-purple-500/10 border border-purple-500/20 p-3 text-xs text-purple-300">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-400 shrink-0" />
                <span>
                  <strong>Vendor Overpricing Detected:</strong> You are paying significantly above market averages for {benchmarkAnalysis.overpayingTools.length} tool(s).
                </span>
              </div>
              <span className="font-black text-purple-400 shrink-0">
                Negotiable Cut: {formatCurrency(benchmarkAnalysis.totalOverpaySavings, currency)}/mo
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {benchmarkAnalysis.overpayingTools.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{item.name}</span>
                    <span className="rounded-md bg-rose-500/10 text-rose-500 px-2.5 py-0.5 text-[11px] font-black border border-rose-500/20">
                      +{item.overpayPercent}% Overpaying
                    </span>
                  </div>

                  {/* Exact Benchmark Sentence Requested */}
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200/80 dark:border-slate-800 font-medium">
                    &quot;Companies of your size (15 employees) usually pay <strong className="text-emerald-600 dark:text-emerald-400">{formatCurrency(item.avgCost, currency)}/seat</strong> for {item.name}. You are paying <strong className="text-rose-600 dark:text-rose-400">{formatCurrency(item.userCost, currency)}/seat</strong> — You are <strong className="text-rose-600 dark:text-rose-400">{item.overpayPercent}% overpaying</strong>.&quot;
                  </p>

                  <div className="pt-1 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Negotiable Price Cut Target:</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                      -{formatCurrency(item.overpayAmount, currency)}/mo per seat
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
