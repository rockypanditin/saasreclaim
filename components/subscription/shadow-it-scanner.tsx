"use client";

import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Sparkles,
  Layers,
  SearchCheck,
  TrendingDown
} from "lucide-react";
import { Subscription } from "@/types/subscription";
import { formatCurrency } from "@/lib/utils";

interface ShadowITScannerProps {
  subscriptions: Subscription[];
  currency?: string;
}

export function ShadowITScanner({ subscriptions, currency = "USD" }: ShadowITScannerProps) {
  const [, setCurrencyTick] = useState(0);
  useEffect(() => {
    const handleCurrency = () => setCurrencyTick((t) => t + 1);
    window.addEventListener("currencyChange", handleCurrency);
    return () => window.removeEventListener("currencyChange", handleCurrency);
  }, []);

  const analysis = useMemo(() => {
    const categories: Record<string, Subscription[]> = {};

    subscriptions.forEach((sub) => {
      if (sub.status === "cancelled") return;
      if (!categories[sub.category]) categories[sub.category] = [];
      categories[sub.category].push(sub);
    });

    const duplicates: { category: string; tools: string[]; potentialSavings: number }[] = [];

    Object.entries(categories).forEach(([cat, list]) => {
      if (list.length > 1) {
        // Sort by cost ascending so cheaper tool or duplicate can be flagged
        const sorted = [...list].sort((a, b) => Number(a.monthly_cost) - Number(b.monthly_cost));
        const savings = sorted.slice(0, sorted.length - 1).reduce((sum, item) => sum + Number(item.monthly_cost), 0);

        duplicates.push({
          category: cat,
          tools: list.map((t) => t.name),
          potentialSavings: savings,
        });
      }
    });

    const totalRedundantSavings = duplicates.reduce((sum, d) => sum + d.potentialSavings, 0);

    let riskLevel: "LOW" | "MEDIUM" | "HIGH" = "LOW";
    let riskColor = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";

    if (duplicates.length >= 2 || totalRedundantSavings >= 200) {
      riskLevel = "HIGH";
      riskColor = "text-rose-500 bg-rose-500/10 border-rose-500/20";
    } else if (duplicates.length === 1 || totalRedundantSavings > 0) {
      riskLevel = "MEDIUM";
      riskColor = "text-amber-500 bg-amber-500/10 border-amber-500/20";
    }

    return {
      duplicates,
      totalRedundantSavings,
      riskLevel,
      riskColor,
    };
  }, [subscriptions]);

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <ShieldAlert className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Shadow IT & Redundant Tool AI Risk Scanner</span>
              </CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Automated detection of overlapping software subscriptions across departments.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Compliance Risk Score:</span>
            <span className={`rounded-full px-3 py-0.5 text-xs font-black border ${analysis.riskColor}`}>
              {analysis.riskLevel} RISK
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-4">
        {analysis.duplicates.length === 0 ? (
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-center space-y-2">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Zero Redundant Tool Overlaps Detected</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Great job! No duplicate software categories found in your tracked subscriptions. Your software stack is clean and compliant.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-rose-500/10 border border-rose-500/20 p-3 text-xs text-rose-300">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-400 shrink-0" />
                <span>
                  <strong>{analysis.duplicates.length} Category Overlap(s) Found:</strong> You are paying for multiple software tools in the same functional category.
                </span>
              </div>
              <span className="font-black text-rose-400 shrink-0">
                Potential Waste: {formatCurrency(analysis.totalRedundantSavings, currency)}/mo
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {analysis.duplicates.map((dup, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Category: {dup.category}
                    </span>
                    <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                      Save {formatCurrency(dup.potentialSavings, currency)}/mo
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Overlapping Tools: <strong className="text-slate-900 dark:text-white">{dup.tools.join(" vs ")}</strong>
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    Recommendation: Consolidate team usage into 1 primary platform to recover licenses and standardize workflows.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
