"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Sparkles } from "lucide-react";
import { Subscription } from "@/types/subscription";
import { formatCurrency } from "@/lib/utils";

interface SpendingChartProps {
  subscriptions: Subscription[];
  currency?: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Communication": "#3b82f6",
  "Productivity": "#8b5cf6",
  "Design": "#ec4899",
  "Infrastructure": "#f97316",
  "Developer Tools": "#06b6d4",
  "Marketing": "#10b981",
  "CRM & Sales": "#eab308",
  "Security & HR": "#6366f1",
  "Analytics": "#14b8a6",
  "AI & Machine Learning": "#10b981",
  "Finance & Accounting": "#3b82f6",
  "Legal & Compliance": "#a855f7",
  "Other": "#94a3b8",
};

export function SpendingChart({ subscriptions, currency = "USD" }: SpendingChartProps) {
  const categoryData = useMemo(() => {
    const data: Record<string, number> = {};
    subscriptions.forEach((sub) => {
      if (sub.status === "cancelled") return;
      data[sub.category] = (data[sub.category] || 0) + Number(sub.monthly_cost);
    });

    const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
    const total = entries.reduce((sum, [, v]) => sum + v, 0);

    return { entries, total };
  }, [subscriptions]);

  if (categoryData.entries.length === 0) return null;

  // SVG Donut chart values
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  let cumulativeOffset = 0;

  const segments = categoryData.entries.map(([category, amount]) => {
    const percentage = amount / categoryData.total;
    const dashLength = percentage * circumference;
    const dashOffset = -cumulativeOffset;
    cumulativeOffset += dashLength;
    return { category, amount, percentage, dashLength, dashOffset, color: CATEGORY_COLORS[category] || "#94a3b8" };
  });

  return (
    <Card className="border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
            <PieChart className="h-4 w-4" />
          </div>
          <div>
            <CardTitle className="text-sm font-bold text-slate-900 dark:text-white">Spend by Category</CardTitle>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Monthly breakdown of active subscriptions</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Donut Chart */}
          <div className="relative shrink-0">
            <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
              {segments.map((seg, i) => (
                <circle
                  key={i}
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="20"
                  strokeDasharray={`${seg.dashLength} ${circumference - seg.dashLength}`}
                  strokeDashoffset={seg.dashOffset}
                  className="transition-all duration-500"
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">{formatCurrency(categoryData.total, currency)}</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Total / mo</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-2 w-full">
            {segments.map((seg) => (
              <div key={seg.category} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">{seg.category}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{formatCurrency(seg.amount, currency)}</span>
                  <span className="text-[10px] text-slate-400 font-medium w-8 text-right">{(seg.percentage * 100).toFixed(0)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
