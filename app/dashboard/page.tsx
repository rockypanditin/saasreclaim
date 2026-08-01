"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SubscriptionCard } from "@/components/subscription/subscription-card";
import { SubscriptionForm } from "@/components/subscription/subscription-form";
import { InvoiceDropzone } from "@/components/subscription/invoice-dropzone";
import { ContractPdfUploader } from "@/components/subscription/contract-pdf-uploader";
import { ViralShare } from "@/components/subscription/viral-share";
import { SaaSCatalogPicker } from "@/components/subscription/saas-catalog-picker";
import { ShadowITScanner } from "@/components/subscription/shadow-it-scanner";
import { SaaSBenchmarks } from "@/components/subscription/saas-benchmarks";
import { DepartmentBudgets } from "@/components/subscription/department-budgets";
import { BotAlerts } from "@/components/subscription/bot-alerts";
import { SpendingChart } from "@/components/subscription/spending-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { INITIAL_DEMO_SUBSCRIPTIONS, generateWasteReport, findDuplicates, findUnused } from "@/lib/subscription-utils";
import { Subscription } from "@/types/subscription";
import { formatCurrency, exportToCSV, getDaysUntil, ALL_CATEGORIES } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Sparkles,
  Layers,
  Search,
  Download,
  Upload,
  BellRing,
  CheckCircle2,
  RefreshCw,
  PlusCircle
} from "lucide-react";
import { getStoredSubscriptions, saveStoredSubscriptions, deleteStoredSubscription, isDemoMode, setDemoMode, fetchLiveDatabaseSubscriptions } from "@/lib/storage";

export default function DashboardPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [inDemo, setInDemo] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currency, setCurrency] = useState("USD");
  const [mounted, setMounted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const syncData = useCallback(() => {
    const subs = getStoredSubscriptions();

    // Auto-detect statuses (only for non-cancelled subscriptions)
    const duplicateIds = new Set(findDuplicates(subs).map((d) => d.id));
    const unusedIds = new Set(findUnused(subs).map((u) => u.id));
    let changed = false;

    const autoUpdated = subs.map((sub) => {
      if (sub.status === "cancelled") return sub;
      if (duplicateIds.has(sub.id) && sub.status !== "duplicate") {
        changed = true;
        return { ...sub, status: "duplicate" as const };
      }
      if (unusedIds.has(sub.id) && sub.status !== "unused" && !duplicateIds.has(sub.id)) {
        changed = true;
        return { ...sub, status: "unused" as const };
      }
      return sub;
    });

    if (changed) saveStoredSubscriptions(autoUpdated);
    setSubscriptions(autoUpdated);
    setInDemo(isDemoMode());
  }, []);

  useEffect(() => {
    syncData();
    setMounted(true);

    // Initial currency load
    const savedCurrency = localStorage.getItem("currency") || "USD";
    setCurrency(savedCurrency);

    // Listen for currency switcher updates & storage changes
    const handleCurrencyChange = () => {
      const updated = localStorage.getItem("currency") || "USD";
      setCurrency(updated);
    };

    window.addEventListener("currencyChange", handleCurrencyChange);
    window.addEventListener("storageChange", syncData);

    return () => {
      window.removeEventListener("currencyChange", handleCurrencyChange);
      window.removeEventListener("storageChange", syncData);
    };
  }, [syncData]);

  const report = useMemo(() => generateWasteReport(subscriptions), [subscriptions]);

  // Subscriptions renewing in 7 days or less
  const upcomingRenewals = useMemo(() => {
    return subscriptions.filter((s) => {
      const days = getDaysUntil(s.renewal_date);
      return days >= 0 && days <= 7 && s.status !== "cancelled";
    });
  }, [subscriptions]);

  const [showUpgradeLimitModal, setShowUpgradeLimitModal] = useState(false);

  const handleAddSubscription = (newSubData: Partial<Subscription>) => {
    // Freemium Limit Check: Free users can add up to 5 tools max
    const currentPlan = localStorage.getItem("saasreclaim_plan") || "Free Trial";
    if (!inDemo && currentPlan === "Free Trial" && subscriptions.length >= 5) {
      setShowUpgradeLimitModal(true);
      return;
    }

    const newSub: Subscription = {
      id: `sub-${Date.now()}`,
      user_id: inDemo ? "demo-user" : "real-user",
      name: newSubData.name || "Untitled Software",
      category: newSubData.category || "Other",
      monthly_cost: Number(newSubData.monthly_cost) || 0,
      billing_cycle: newSubData.billing_cycle || "monthly",
      renewal_date: newSubData.renewal_date || new Date().toISOString().split("T")[0],
      status: "active",
      description: newSubData.description,
      last_used: new Date().toISOString().split("T")[0],
      created_at: new Date().toISOString(),
    };

    const updated = [newSub, ...subscriptions];
    setSubscriptions(updated);
    saveStoredSubscriptions(updated);
  };

  const handleDeleteSubscription = (id: string) => {
    const updated = subscriptions.filter((s) => s.id !== id);
    setSubscriptions(updated);
    deleteStoredSubscription(id);
  };

  const handleEditSubscription = (updatedSub: Subscription) => {
    const updated = subscriptions.map((s) => s.id === updatedSub.id ? updatedSub : s);
    setSubscriptions(updated);
    saveStoredSubscriptions(updated);
  };

  const handleExportCSV = () => {
    exportToCSV(subscriptions, "saas-waste-detector-audit.csv");
  };

  const handleCSVImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target?.result as string;
      if (!text) return;

      const lines = text.split("\n").filter((l) => l.trim().length > 0);
      if (lines.length <= 1) return;

      const imported: Subscription[] = [];
      lines.slice(1).forEach((line, idx) => {
        const parts = line.split(",").map((p) => p.replace(/^"|"$/g, "").trim());
        if (parts.length >= 3) {
          imported.push({
            id: `csv-${Date.now()}-${idx}`,
            user_id: "demo-user",
            name: parts[0] || "Imported Software",
            category: parts[1] || "Other",
            monthly_cost: Number(parts[2]) || 1000,
            billing_cycle: (parts[3] as any) || "monthly",
            renewal_date: parts[4] || new Date().toISOString().split("T")[0],
            status: (parts[5] as any) || "active",
            description: parts[6] || "Imported via CSV",
            created_at: new Date().toISOString(),
          });
        }
      });

      if (imported.length > 0) {
        const updated = [...imported, ...subscriptions];
        setSubscriptions(updated);
        saveStoredSubscriptions(updated);
      }
    };
    reader.readAsText(file);
  };

  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter((sub) => {
      const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            sub.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === "all" || sub.category.toLowerCase() === categoryFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [subscriptions, searchTerm, categoryFilter]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Demo Mode vs Real Account Mode Banner */}
        {inDemo ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
              <span>
                <strong>Demo Mode Active:</strong> You are viewing sample software subscription data.
              </span>
            </div>
            <Button
              size="sm"
              onClick={() => {
                setDemoMode(false);
                syncData();
              }}
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shrink-0 gap-1.5"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Switch to Clean Real Account Workspace</span>
            </Button>
          </div>
        ) : (
          subscriptions.length === 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 p-4 sm:p-5 text-white shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/30 text-blue-400 border border-blue-500/30 shadow-sm">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Clean Account Workspace</span>
                    <span className="rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 text-[10px] font-semibold">0 Subscriptions</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Your software inventory is clean. Add subscriptions below or drop invoice receipts to detect waste.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  size="sm"
                  onClick={() => {
                    setDemoMode(true);
                    syncData();
                  }}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs gap-1.5 shadow-md"
                >
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  <span>Load Sample Audit Data</span>
                </Button>
              </div>
            </div>
          )
        )}

        {/* Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 p-6 text-white shadow-xl">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 backdrop-blur-md mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Waste Detector Active</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl">SaaS Spend Dashboard</h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">Real-time subscription audit and waste identification portal.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white/10 p-3 rounded-xl backdrop-blur-md border border-white/10 text-right">
              <div className="text-[10px] text-slate-300 font-semibold uppercase">Potential Savings</div>
              <div className="text-xl font-extrabold text-emerald-400">
                {formatCurrency(report.potential_savings, currency)} <span className="text-xs font-normal text-slate-300">/mo</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleExportCSV}
              className="gap-1.5 border-white/20 bg-white/10 text-white hover:bg-white/20 text-xs"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CSV</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="gap-1.5 border-white/20 bg-white/10 text-white hover:bg-white/20 text-xs"
            >
              <Upload className="h-3.5 w-3.5" />
              <span>Import CSV</span>
            </Button>
            <input
              type="file"
              accept=".csv"
              ref={fileInputRef}
              onChange={handleCSVImport}
              className="hidden"
            />
          </div>
        </div>

        {/* Upcoming Renewal Alert Banner */}
        {upcomingRenewals.length > 0 && (
          <div className="flex items-center justify-between rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/90 dark:bg-rose-950/40 p-4 text-rose-900 dark:text-rose-200 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500 text-white shrink-0">
                <BellRing className="h-4 w-4 animate-bounce" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold">
                  {upcomingRenewals.length} Tool(s) Renewing in the Next 7 Days
                </h4>
                <p className="text-xs text-rose-700 dark:text-rose-300">
                  {upcomingRenewals.map((u) => `${u.name} (${getDaysUntil(u.renewal_date)} days)`).join(", ")}. Review seats to avoid unwanted auto-charges.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4x Metric Summary Cards with Premium Visual Aesthetics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="relative overflow-hidden border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Total Monthly Spend</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">Live</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">{formatCurrency(report.total_monthly_spend, currency)}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <Wallet className="h-5.5 w-5.5" />
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">Combined software billing across all seats</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600" />
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Annualized Run Rate</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">ARR</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">{formatCurrency(report.total_annual_spend, currency)}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  <TrendingUp className="h-5.5 w-5.5" />
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">Projected 12-month software budget</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                <span>Recoverable Waste</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">Savings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">{formatCurrency(report.potential_savings, currency)}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                  <TrendingDown className="h-5.5 w-5.5" />
                </div>
              </div>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mt-2">Immediate monthly cash savings</p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-rose-500/40 transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-amber-500" />
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Redundant & Inactive Tools</span>
                {(report.duplicate_count + report.unused_count) > 0 && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 tracking-tight">
                  {report.duplicate_count + report.unused_count}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
                  <AlertTriangle className="h-5.5 w-5.5" />
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-2">
                <strong className="text-rose-600 dark:text-rose-400">{report.duplicate_count} Duplicates</strong> | <strong className="text-amber-600 dark:text-amber-400">{report.unused_count} Unused</strong>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Spending by Category Chart */}
        <SpendingChart subscriptions={subscriptions} currency={currency} />

        {/* AI Recommendations Action Widget */}
        {report.recommendations.length > 0 && (
          <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-amber-100/40 dark:from-amber-950/30 dark:via-slate-900 dark:to-amber-950/20 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white font-bold text-sm">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-amber-950 dark:text-amber-200">
                    {report.recommendations.length} Actionable Waste Optimization Opportunities
                  </h3>
                  <p className="text-xs text-amber-800 dark:text-amber-300">Cancelling these unneeded tools will recover {formatCurrency(report.potential_savings, currency)} every month.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {report.recommendations.map((rec, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-amber-200/80 dark:border-amber-900/40 bg-white dark:bg-slate-900 p-4 shadow-sm transition-all hover:shadow">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white text-sm">{rec.title}</span>
                      <span className="rounded-md bg-amber-100 dark:bg-amber-950 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:text-amber-300 capitalize">
                        {rec.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{rec.description}</p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-semibold block">Potential Savings</span>
                      <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">+{formatCurrency(rec.potential_savings, currency)}/mo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Smart Document Upload Hub (Invoice + Contract side by side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InvoiceDropzone onAutoAddSubscription={handleAddSubscription} />
          <ContractPdfUploader />
        </div>

        {/* Master SaaS Software Library & Plan Directory (50+ Tools with Quick Add) */}
        <SaaSCatalogPicker onAddSubscription={handleAddSubscription} />

        {/* AI Analysis Grid: Shadow IT Scanner + Pricing Benchmark */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ShadowITScanner subscriptions={subscriptions} currency={currency} />
          <SaaSBenchmarks subscriptions={subscriptions} currency={currency} />
        </div>

        {/* Operations Grid: Department Budgets + Bot Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DepartmentBudgets subscriptions={subscriptions} currency={currency} />
          <BotAlerts subscriptions={subscriptions} currency={currency} />
        </div>

        {/* Manual Subscription Form */}
        <SubscriptionForm onAddSubscription={handleAddSubscription} />

        {/* Filters & Search Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Tracked Software ({filteredSubscriptions.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Manage seats, categories, and renewal countdowns.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search software..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Category dropdown */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 focus:border-blue-500 focus:outline-none"
            >
              <option value="all">All Categories</option>
              {Array.from(new Set([...ALL_CATEGORIES, ...subscriptions.map((s) => s.category).filter(Boolean)])).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Subscription List Grid */}
        {!mounted ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-56 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-slate-200 dark:bg-slate-800" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
                  </div>
                </div>
                <div className="h-12 rounded-xl bg-slate-100 dark:bg-slate-800/50" />
                <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            ))}
          </div>
        ) : filteredSubscriptions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
            <Layers className="mx-auto h-8 w-8 text-slate-400 dark:text-slate-600 mb-2" />
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">No subscriptions found</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try adjusting your search query or add a new software subscription above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredSubscriptions.map((sub) => (
              <SubscriptionCard
                key={sub.id}
                subscription={sub}
                onDelete={handleDeleteSubscription}
                onEdit={handleEditSubscription}
              />
            ))}
          </div>
        )}

        {/* Viral Share Widget (Bottom) */}
        <ViralShare monthlySavings={report.potential_savings} toolsAudited={subscriptions.length} />

        {/* Freemium 5-Tool Limit Reached Modal */}
        {showUpgradeLimitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-2xl space-y-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Sparkles className="h-7 w-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-white">Free Plan Limit Reached (5 Tools)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You have reached the maximum limit of 5 software subscriptions on the Free Trial. Upgrade to Growth Plan ($79/mo) to unlock UNLIMITED software tracking and AI contract negotiations.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Button variant="outline" onClick={() => setShowUpgradeLimitModal(false)} className="flex-1 text-slate-300 border-slate-700 text-xs">
                  Cancel
                </Button>
                <Link href="/pricing" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Upgrade Plan</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
