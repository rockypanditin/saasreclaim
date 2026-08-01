"use client";

import { getBrandColorHex, formatCurrency } from "@/lib/utils";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Sparkles,
  Plus,
  CheckCircle2,
  Filter,
  Layers,
  Zap,
  ArrowRight,
  X,
  Database
} from "lucide-react";
import { MASTER_SAAS_CATALOG, CatalogSaaSTool, SaaSPlanPreset } from "@/lib/saas-catalog";
import { Subscription } from "@/types/subscription";

interface SaaSCatalogPickerProps {
  onAddSubscription: (sub: Partial<Subscription>) => void;
}

export function SaaSCatalogPicker({ onAddSubscription }: SaaSCatalogPickerProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTool, setSelectedTool] = useState<CatalogSaaSTool | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<SaaSPlanPreset | null>(null);
  const [addedMsg, setAddedMsg] = useState("");
  const [catalogList, setCatalogList] = useState<CatalogSaaSTool[]>(MASTER_SAAS_CATALOG);
  const [isDbLoaded, setIsDbLoaded] = useState(false);

  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const [, setCurrencyTick] = useState(0);

  useEffect(() => {
    fetch("/api/catalog")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.catalog && data.catalog.length > 0) {
          setCatalogList(data.catalog);
          setIsDbLoaded(true);
        }
      })
      .catch(() => {});

    const handleCurrency = () => setCurrencyTick((t) => t + 1);
    window.addEventListener("currencyChange", handleCurrency);
    return () => window.removeEventListener("currencyChange", handleCurrency);
  }, []);

  const categories = useMemo(() => {
    const dbCats = Array.from(new Set(catalogList.map((t) => t.category?.trim()).filter(Boolean)));
    return ["all", ...dbCats.sort()];
  }, [catalogList]);

  // Deduplicate catalog items by ID to prevent React DOM key reuse bugs
  const uniqueCatalogList = useMemo(() => {
    const map = new Map<string, CatalogSaaSTool>();
    for (const tool of catalogList) {
      if (tool && tool.id && !map.has(tool.id)) {
        map.set(tool.id, tool);
      }
    }
    return Array.from(map.values());
  }, [catalogList]);

  const filteredTools = useMemo(() => {
    return uniqueCatalogList.filter((tool) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "all" ||
        tool.category?.trim().toLowerCase() === selectedCategory.trim().toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [uniqueCatalogList, search, selectedCategory]);

  const handleSelectTool = (tool: CatalogSaaSTool) => {
    setSelectedTool(tool);
    setSelectedPlan(tool.plans[0]);
  };

  const handleConfirmAdd = () => {
    if (!selectedTool || !selectedPlan) return;

    onAddSubscription({
      name: `${selectedTool.name} (${selectedPlan.name})`,
      category: selectedTool.category,
      monthly_cost: selectedPlan.monthlyCost,
      billing_cycle: selectedPlan.billingCycle,
      renewal_date: new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
      description: `${selectedTool.description} — Plan: ${selectedPlan.name}`,
    });

    setAddedMsg(`Added ${selectedTool.name} (${selectedPlan.name}) to audit grid!`);
    setSelectedTool(null);
    setSelectedPlan(null);

    setTimeout(() => setAddedMsg(""), 3000);
  };

  const handleQuickAdd = (tool: CatalogSaaSTool) => {
    const defaultPlan = tool.plans[0];
    onAddSubscription({
      name: `${tool.name} (${defaultPlan.name})`,
      category: tool.category,
      monthly_cost: defaultPlan.monthlyCost,
      billing_cycle: defaultPlan.billingCycle,
      renewal_date: new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
      description: `${tool.description} — Plan: ${defaultPlan.name}`,
    });

    setAddedMsg(`Quick-added ${tool.name} (${defaultPlan.name})!`);
    setTimeout(() => setAddedMsg(""), 3000);
  };

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
              <Database className="h-3.5 w-3.5 text-blue-500" />
              <span>SaaS Database ({catalogList.length}+ Real Tools & Plans Connected)</span>
            </div>
            <CardTitle className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              Software Library & Plan Directory
            </CardTitle>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Search any software tool to instantly preview its official real pricing tiers and add it to your audit with 1-click.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Slack, Zoom, AWS, ChatGPT, Cursor..."
              className="pl-9 bg-slate-50 dark:bg-slate-950 text-xs rounded-xl"
            />
          </div>
        </div>

        {/* Category Pills Header with Smooth Horizontal Mouse Wheel & Touch Scroll */}
        <div className="relative pt-3">
          <div
            ref={categoryScrollRef}
            onWheel={(e) => {
              if (categoryScrollRef.current) {
                categoryScrollRef.current.scrollLeft += e.deltaY;
              }
            }}
            className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-slate-100 dark:scrollbar-track-slate-800/40 touch-pan-x"
          >
            {categories.map((cat) => {
              const count =
                cat === "all"
                  ? catalogList.length
                  : catalogList.filter((t) => t.category?.trim().toLowerCase() === cat.trim().toLowerCase()).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-bold whitespace-nowrap shrink-0 transition-all ${
                    selectedCategory.trim().toLowerCase() === cat.trim().toLowerCase()
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 ring-2 ring-blue-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat === "all" ? `All Categories (${count}+)` : `${cat} (${count})`}
                </button>
              );
            })}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-4">
        {addedMsg && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>{addedMsg}</span>
          </div>
        )}

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[420px] overflow-y-auto pr-1">
          {filteredTools.map((tool, idx) => (
            <div
              key={`${tool.id}-${selectedCategory}-${idx}`}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 p-4 transition-all hover:border-blue-500/40 hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div style={{ backgroundColor: getBrandColorHex(tool.iconBg) }} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white font-black text-xs shadow-md border border-white/20">
                      {tool.iconText}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{tool.name}</h4>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400">{tool.category}</span>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold text-blue-600 dark:text-blue-400">
                    {formatCurrency(tool.plans[0].monthlyCost)}<span className="text-[10px] font-normal text-slate-400">/mo</span>
                  </span>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed min-h-[32px]">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleQuickAdd(tool)}
                  className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  ⚡ Quick Add
                </button>
                <Button
                  size="sm"
                  onClick={() => handleSelectTool(tool)}
                  className="h-7 px-3 text-[11px] font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-lg gap-1 shadow-sm"
                >
                  <Plus className="h-3 w-3" />
                  <span>Select Plan</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      {/* Plan Selection Modal */}
      {selectedTool && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${selectedTool.iconBg} text-white font-black text-xs`}>
                  {selectedTool.iconText}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{selectedTool.name}</h3>
                  <span className="text-[10px] text-slate-400">{selectedTool.category}</span>
                </div>
              </div>
              <button onClick={() => setSelectedTool(null)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-300">Choose Subscription Tier & Plan:</label>
              <div className="space-y-2">
                {selectedTool.plans.map((p) => {
                  const isSelected = selectedPlan?.name === p.name;
                  return (
                    <div
                      key={p.name}
                      onClick={() => setSelectedPlan(p)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "border-blue-500 bg-blue-500/10 text-white"
                          : "border-slate-800 bg-slate-950/50 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold">{p.name}</div>
                        <div className="text-[10px] text-slate-400 capitalize">{p.billingCycle} billing</div>
                      </div>
                      <div className="text-sm font-black text-blue-400">${p.monthlyCost}/mo</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
              <Button variant="outline" onClick={() => setSelectedTool(null)} className="flex-1 text-slate-300 border-slate-700 text-xs">
                Cancel
              </Button>
              <Button onClick={handleConfirmAdd} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs gap-1.5">
                <CheckCircle2 className="h-4 w-4" />
                <span>Add to Audit Grid</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
