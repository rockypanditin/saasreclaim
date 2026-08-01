"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { formatCurrency, getDaysUntil } from "@/lib/utils";
import { getStoredSubscriptions, fetchLiveDatabaseSubscriptions } from "@/lib/storage";
import { Subscription } from "@/types/subscription";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, AlertCircle, Clock, CheckCircle2, ArrowRight, Layers } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function CalendarPage() {
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

  // Group subscriptions by renewal proximity
  const urgentRenewals = subscriptions.filter((s) => {
    const days = getDaysUntil(s.renewal_date);
    return days >= 0 && days <= 7 && s.status !== "cancelled";
  });

  const upcomingRenewals = subscriptions.filter((s) => {
    const days = getDaysUntil(s.renewal_date);
    return days > 7 && days <= 30 && s.status !== "cancelled";
  });

  const futureRenewals = subscriptions.filter((s) => {
    const days = getDaysUntil(s.renewal_date);
    return days > 30 && s.status !== "cancelled";
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
              <CalendarIcon className="h-3.5 w-3.5" />
              <span>SaaS Renewal Timeline</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight sm:text-3xl">Renewal Calendar & Deadlines</h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Track exact renewal dates to cancel unused tools 14 days before auto-billing.</p>
          </div>
        </div>

        {subscriptions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-16 text-center">
            <Layers className="mx-auto h-10 w-10 text-slate-400 dark:text-slate-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No Renewal Deadlines Yet</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">Add software subscriptions to your Dashboard first. Renewal dates will appear here automatically.</p>
          </div>
        ) : (
        <div>
        {/* Proximity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Urgent 7-Day Renewals */}
          <Card className="border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 shadow-sm">
            <CardHeader className="pb-3 border-b border-rose-100 dark:border-rose-900/40">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-rose-600" />
                  <span>Renewing in 7 Days</span>
                </CardTitle>
                <span className="rounded-full bg-rose-600 px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                  {urgentRenewals.length} Tools
                </span>
              </div>
            </CardHeader>

            <CardContent className="pt-4 space-y-3">
              {urgentRenewals.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-4">No tools renewing in the next 7 days.</p>
              ) : (
                urgentRenewals.map((sub) => (
                  <div key={sub.id} className="rounded-xl border border-rose-200 dark:border-rose-900/80 bg-white dark:bg-slate-900 p-3 shadow-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">{sub.name}</span>
                      <span className="text-xs font-black text-rose-600">{formatCurrency(sub.monthly_cost, currency)}/mo</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Renewal: <strong>{sub.renewal_date}</strong></span>
                      <span className="font-bold text-rose-600">{getDaysUntil(sub.renewal_date)} days left</span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Upcoming 30-Day Renewals */}
          <Card className="border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 shadow-sm">
            <CardHeader className="pb-3 border-b border-amber-100 dark:border-amber-900/40">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-600" />
                  <span>Renewing in 30 Days</span>
                </CardTitle>
                <span className="rounded-full bg-amber-600 px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                  {upcomingRenewals.length} Tools
                </span>
              </div>
            </CardHeader>

            <CardContent className="pt-4 space-y-3">
              {upcomingRenewals.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-4">No tools renewing in the next 30 days.</p>
              ) : (
                upcomingRenewals.map((sub) => (
                  <div key={sub.id} className="rounded-xl border border-amber-200 dark:border-amber-900/80 bg-white dark:bg-slate-900 p-3 shadow-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">{sub.name}</span>
                      <span className="text-xs font-black text-amber-600">{formatCurrency(sub.monthly_cost, currency)}/mo</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Renewal: <strong>{sub.renewal_date}</strong></span>
                      <span className="font-bold text-amber-600">{getDaysUntil(sub.renewal_date)} days left</span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Future Renewals */}
          <Card className="border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20 shadow-sm">
            <CardHeader className="pb-3 border-b border-emerald-100 dark:border-emerald-900/40">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>30+ Days (Safe)</span>
                </CardTitle>
                <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                  {futureRenewals.length} Tools
                </span>
              </div>
            </CardHeader>

            <CardContent className="pt-4 space-y-3">
              {futureRenewals.length === 0 ? (
                <p className="text-xs text-slate-500 text-center py-4">No future renewals scheduled.</p>
              ) : (
                futureRenewals.map((sub) => (
                  <div key={sub.id} className="rounded-xl border border-emerald-200 dark:border-emerald-900/80 bg-white dark:bg-slate-900 p-3 shadow-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">{sub.name}</span>
                      <span className="text-xs font-black text-emerald-600">{formatCurrency(sub.monthly_cost, currency)}/mo</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Renewal: <strong>{sub.renewal_date}</strong></span>
                      <span className="font-bold text-emerald-600">{getDaysUntil(sub.renewal_date)} days left</span>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
        </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
