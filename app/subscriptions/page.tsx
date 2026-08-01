"use client";

import { useEffect, useState, useCallback } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SubscriptionCard } from "@/components/subscription/subscription-card";
import { SubscriptionForm } from "@/components/subscription/subscription-form";
import { getStoredSubscriptions, saveStoredSubscriptions, deleteStoredSubscription, isDemoMode, fetchLiveDatabaseSubscriptions } from "@/lib/storage";
import { Subscription } from "@/types/subscription";
import { ALL_CATEGORIES } from "@/lib/utils";
import { Search, Filter } from "lucide-react";

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [mounted, setMounted] = useState(false);

  const syncData = useCallback(() => {
    const localData = getStoredSubscriptions();
    if (localData && localData.length > 0) {
      setSubscriptions(localData);
    }
    fetchLiveDatabaseSubscriptions().then((dbSubs) => {
      if (dbSubs && dbSubs.length > 0) {
        setSubscriptions(dbSubs);
      }
    });
  }, []);

  const [, setCurrencyTick] = useState(0);

  useEffect(() => {
    syncData();
    setMounted(true);
    const handleCurrency = () => setCurrencyTick((t) => t + 1);
    window.addEventListener("storageChange", syncData);
    window.addEventListener("currencyChange", handleCurrency);
    return () => {
      window.removeEventListener("storageChange", syncData);
      window.removeEventListener("currencyChange", handleCurrency);
    };
  }, [syncData]);

  const handleAddSubscription = (newSubData: Partial<Subscription>) => {
    const newSub: Subscription = {
      id: `sub-${Date.now()}`,
      user_id: isDemoMode() ? "demo-user" : "real-user",
      name: newSubData.name || "Untitled Tool",
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

  const handleDelete = (id: string) => {
    const updated = subscriptions.filter((s) => s.id !== id);
    setSubscriptions(updated);
    deleteStoredSubscription(id);
  };

  const handleEdit = (updatedSub: Subscription) => {
    const updated = subscriptions.map((s) => s.id === updatedSub.id ? updatedSub : s);
    setSubscriptions(updated);
    saveStoredSubscriptions(updated);
  };

  const filtered = subscriptions.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                          s.category.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || s.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || s.category.toLowerCase() === categoryFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Software Subscriptions Catalog</h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Audit, filter, and eliminate unneeded seats.</p>
          </div>
        </div>

        <div className="mb-8">
          <SubscriptionForm onAddSubscription={handleAddSubscription} />
        </div>

        {/* Filter controls */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-900 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <Filter className="h-3.5 w-3.5" />
              <span>Status:</span>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="duplicate">Duplicate</option>
              <option value="unused">Unused</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none"
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

        {/* Catalog */}
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
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((sub) => (
              <SubscriptionCard key={sub.id} subscription={sub} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
