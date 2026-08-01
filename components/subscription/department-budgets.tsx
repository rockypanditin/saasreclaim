"use client";

import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Building2,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Sliders,
  DollarSign,
  Edit2,
  Save,
  ShieldAlert
} from "lucide-react";
import { Subscription } from "@/types/subscription";
import { formatCurrency } from "@/lib/utils";

interface DepartmentBudgetProps {
  subscriptions: Subscription[];
  currency?: string;
}

interface DeptBudgetSetting {
  dept: string;
  categoryMatch: string[];
  limit: number;
}

const DEFAULT_BUDGETS: DeptBudgetSetting[] = [
  { dept: "Engineering & Cloud", categoryMatch: ["Infrastructure", "Developer Tools"], limit: 2000 },
  { dept: "Marketing & Growth", categoryMatch: ["Marketing", "Analytics"], limit: 1200 },
  { dept: "Design & Creative", categoryMatch: ["Design"], limit: 1000 },
  { dept: "Sales & CRM", categoryMatch: ["CRM & Sales", "Communication"], limit: 1500 },
  { dept: "Executive & Admin", categoryMatch: ["Productivity", "Security & HR", "Other"], limit: 1000 },
];

export function DepartmentBudgets({ subscriptions, currency = "USD" }: DepartmentBudgetProps) {
  const [budgets, setBudgets] = useState<DeptBudgetSetting[]>(DEFAULT_BUDGETS);
  const [editingDept, setEditingDept] = useState<string | null>(null);
  const [editVal, setEditVal] = useState<number>(0);

  const [, setCurrencyTick] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("saasreclaim_department_budgets");
    if (saved) {
      try {
        setBudgets(JSON.parse(saved));
      } catch {
        // Fallback to default
      }
    }

    const handleCurrency = () => setCurrencyTick((t) => t + 1);
    window.addEventListener("currencyChange", handleCurrency);
    return () => window.removeEventListener("currencyChange", handleCurrency);
  }, []);

  const saveBudgetsToStorage = (updated: DeptBudgetSetting[]) => {
    setBudgets(updated);
    localStorage.setItem("saasreclaim_department_budgets", JSON.stringify(updated));
  };

  const handleStartEdit = (dept: string, currentLimit: number) => {
    setEditingDept(dept);
    setEditVal(currentLimit);
  };

  const handleSaveEdit = (dept: string) => {
    const updated = budgets.map((b) => (b.dept === dept ? { ...b, limit: Number(editVal) || 500 } : b));
    saveBudgetsToStorage(updated);
    setEditingDept(null);
  };

  const departmentAnalysis = useMemo(() => {
    return budgets.map((b) => {
      // Sum monthly spend for subscriptions in matching categories
      const currentSpend = subscriptions
        .filter((s) => s.status !== "cancelled" && b.categoryMatch.includes(s.category))
        .reduce((sum, s) => sum + Number(s.monthly_cost), 0);

      const isExceeded = currentSpend > b.limit;
      const percent = Math.min(100, Math.round((currentSpend / b.limit) * 100));

      return {
        ...b,
        currentSpend,
        isExceeded,
        percent,
        overAmount: currentSpend - b.limit,
      };
    });
  }, [subscriptions, budgets]);

  const exceededCount = departmentAnalysis.filter((d) => d.isExceeded).length;

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Department Budget Limits & Spending Caps</span>
              </CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Set monthly spending limits per department and track over-budget alerts in real time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Budget Status:</span>
            {exceededCount > 0 ? (
              <span className="rounded-full bg-rose-500/10 px-3 py-0.5 text-xs font-black text-rose-600 dark:text-rose-400 border border-rose-500/20 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" /> {exceededCount} Dept Exceeded
              </span>
            ) : (
              <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-black text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> All Depts Within Budget
              </span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {departmentAnalysis.map((deptItem) => (
            <div
              key={deptItem.dept}
              className={`rounded-2xl border p-4 transition-all space-y-3 ${
                deptItem.isExceeded
                  ? "border-rose-500/40 bg-rose-500/5 dark:bg-rose-950/20"
                  : "border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-indigo-500" />
                  <span>{deptItem.dept}</span>
                </span>

                {editingDept === deptItem.dept ? (
                  <div className="flex items-center gap-1">
                    <Input
                      type="number"
                      value={editVal}
                      onChange={(e) => setEditVal(Number(e.target.value))}
                      className="h-7 w-20 text-xs bg-white dark:bg-slate-900"
                    />
                    <Button size="sm" onClick={() => handleSaveEdit(deptItem.dept)} className="h-7 px-2 bg-emerald-600 text-white">
                      <Save className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleStartEdit(deptItem.dept, deptItem.limit)}
                    className="text-[11px] font-semibold text-slate-400 hover:text-blue-500 flex items-center gap-1 p-1"
                    title="Edit Budget Cap"
                  >
                    <Edit2 className="h-3 w-3" /> Edit Cap
                  </button>
                )}
              </div>

              {/* Exact Requested Status String Formatting */}
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                <span>{deptItem.dept} Budget: <strong>{formatCurrency(deptItem.limit, currency)}/mo</strong></span>
                <span className="ml-1">
                  (Current Spend: <strong>{formatCurrency(deptItem.currentSpend, currency)}/mo</strong>
                  {deptItem.isExceeded && (
                    <span className="ml-1 font-extrabold text-rose-600 dark:text-rose-400">
                      ⚠️ Budget Exceeded by +{formatCurrency(deptItem.overAmount, currency)}
                    </span>
                  )})
                </span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      deptItem.isExceeded ? "bg-rose-500" : "bg-emerald-500"
                    }`}
                    style={{ width: `${deptItem.percent}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>0%</span>
                  <span>{deptItem.percent}% of Limit</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
