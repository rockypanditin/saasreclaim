"use client";

import { useState, useEffect } from "react";
import { Subscription } from "@/types/subscription";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate, getDaysUntil, getBrandColorHex } from "@/lib/utils";
import { AlertTriangle, CheckCircle2, Clock, Trash2, Calendar, Tag, FileText, Sparkles, Pencil, X, Save } from "lucide-react";
import { CancellationAssistant } from "@/components/subscription/cancellation-assistant";

interface SubscriptionCardProps {
  subscription: Subscription;
  onDelete?: (id: string) => void;
  onEdit?: (updated: Subscription) => void;
}

export function SubscriptionCard({ subscription, onDelete, onEdit }: SubscriptionCardProps) {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: subscription.name,
    category: subscription.category,
    monthly_cost: subscription.monthly_cost,
    billing_cycle: subscription.billing_cycle,
    renewal_date: subscription.renewal_date,
    status: subscription.status,
  });
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    setCurrency(localStorage.getItem("currency") || "USD");
    const handleCurrency = () => setCurrency(localStorage.getItem("currency") || "USD");
    window.addEventListener("currencyChange", handleCurrency);
    return () => window.removeEventListener("currencyChange", handleCurrency);
  }, []);

  const daysUntil = getDaysUntil(subscription.renewal_date);

  const statusConfig = {
    active: { variant: "active" as const, label: "Active", icon: CheckCircle2 },
    unused: { variant: "unused" as const, label: "Unused (60+ days)", icon: AlertTriangle },
    duplicate: { variant: "duplicate" as const, label: "Duplicate Tool", icon: AlertTriangle },
    cancelled: { variant: "cancelled" as const, label: "Cancelled", icon: CheckCircle2 },
  };

  const currentStatus = statusConfig[subscription.status] || statusConfig.active;
  const StatusIcon = currentStatus.icon;

  const getToolAvatar = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("zoom")) return { text: "Z", bg: "bg-sky-500" };
    if (n.includes("slack")) return { text: "S", bg: "bg-emerald-600" };
    if (n.includes("aws") || n.includes("amazon")) return { text: "AWS", bg: "bg-amber-600" };
    if (n.includes("github")) return { text: "GH", bg: "bg-slate-800" };
    if (n.includes("google")) return { text: "G", bg: "bg-blue-600" };
    if (n.includes("figma")) return { text: "F", bg: "bg-purple-600" };
    if (n.includes("adobe")) return { text: "Ai", bg: "bg-rose-600" };
    if (n.includes("notion")) return { text: "N", bg: "bg-slate-900" };
    if (n.includes("clickup")) return { text: "CU", bg: "bg-violet-600" };
    if (n.includes("asana")) return { text: "AS", bg: "bg-rose-500" };
    if (n.includes("jira")) return { text: "J", bg: "bg-blue-700" };
    if (n.includes("chatgpt") || n.includes("openai")) return { text: "AI", bg: "bg-emerald-700" };
    if (n.includes("canva")) return { text: "C", bg: "bg-cyan-500" };
    if (n.includes("microsoft") || n.includes("teams")) return { text: "MS", bg: "bg-indigo-700" };
    if (n.includes("datadog")) return { text: "DD", bg: "bg-purple-800" };
    if (n.includes("postman")) return { text: "P", bg: "bg-orange-600" };
    if (n.includes("hubspot")) return { text: "HS", bg: "bg-orange-500" };
    if (n.includes("salesforce")) return { text: "SF", bg: "bg-sky-600" };
    if (n.includes("supabase")) return { text: "SB", bg: "bg-emerald-600" };
    if (n.includes("mongodb") || n.includes("atlas")) return { text: "MDB", bg: "bg-green-700" };
    if (n.includes("cloudflare")) return { text: "CF", bg: "bg-orange-500" };
    if (n.includes("cursor")) return { text: "CR", bg: "bg-slate-900" };
    if (n.includes("docker")) return { text: "DK", bg: "bg-blue-600" };
    if (n.includes("sentry")) return { text: "ST", bg: "bg-purple-900" };
    if (n.includes("miro")) return { text: "MR", bg: "bg-yellow-500" };
    if (n.includes("grammarly")) return { text: "GR", bg: "bg-emerald-600" };
    if (n.includes("framer")) return { text: "FR", bg: "bg-blue-500" };
    if (n.includes("webflow")) return { text: "WF", bg: "bg-blue-600" };
    if (n.includes("segment")) return { text: "SG", bg: "bg-emerald-700" };
    if (n.includes("amplitude")) return { text: "AM", bg: "bg-blue-700" };
    if (n.includes("gusto")) return { text: "GT", bg: "bg-red-600" };
    if (n.includes("okta")) return { text: "OK", bg: "bg-blue-900" };
    if (n.includes("loom")) return { text: "LM", bg: "bg-indigo-600" };
    if (n.includes("linear")) return { text: "L", bg: "bg-indigo-900" };
    if (n.includes("vercel")) return { text: "V", bg: "bg-black" };
    if (n.includes("mailchimp")) return { text: "MC", bg: "bg-yellow-500" };
    if (n.includes("ahrefs")) return { text: "AH", bg: "bg-blue-800" };
    if (n.includes("semrush")) return { text: "SE", bg: "bg-orange-700" };
    if (n.includes("zendesk")) return { text: "Z", bg: "bg-emerald-800" };
    if (n.includes("intercom")) return { text: "IC", bg: "bg-blue-600" };
    if (n.includes("1password") || n.includes("password")) return { text: "1P", bg: "bg-blue-900" };
    if (n.includes("rippling")) return { text: "RP", bg: "bg-amber-700" };
    if (n.includes("quickbooks")) return { text: "QB", bg: "bg-emerald-600" };
    if (n.includes("mixpanel")) return { text: "MP", bg: "bg-indigo-600" };
    if (n.includes("hotjar")) return { text: "HJ", bg: "bg-red-500" };
    if (n.includes("discord")) return { text: "DC", bg: "bg-indigo-600" };

    const parts = name.trim().split(" ");
    const initials = parts.length > 1 ? `${parts[0][0]}${parts[1][0]}`.toUpperCase() : name.slice(0, 2).toUpperCase();
    const bgColors = [
      "bg-blue-600", "bg-indigo-600", "bg-purple-600", "bg-pink-600", 
      "bg-rose-600", "bg-amber-600", "bg-emerald-600", "bg-teal-600", 
      "bg-cyan-600", "bg-sky-600", "bg-violet-700", "bg-slate-800"
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    const chosenBg = bgColors[Math.abs(hash) % bgColors.length];

    return { text: initials, bg: chosenBg };
  };

  const avatar = getToolAvatar(subscription.name);

  const handleSaveEdit = () => {
    if (onEdit) {
      onEdit({
        ...subscription,
        name: editData.name,
        category: editData.category,
        monthly_cost: Number(editData.monthly_cost),
        billing_cycle: editData.billing_cycle,
        renewal_date: editData.renewal_date,
        status: editData.status as Subscription["status"],
      });
    }
    setEditing(false);
  };

  // --- EDIT MODE ---
  if (editing) {
    return (
      <Card className="relative overflow-hidden border-blue-400 dark:border-blue-600 ring-2 ring-blue-500/20 transition-all duration-200">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-500" />
        <CardHeader className="pb-3 pt-5">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
              <Pencil className="h-3.5 w-3.5" />
              Edit Subscription
            </CardTitle>
            <button onClick={() => setEditing(false)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
              <X className="h-4 w-4" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Name</label>
            <input value={editData.name} onChange={(e) => setEditData(p => ({...p, name: e.target.value}))} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Cost ($/mo)</label>
              <input type="number" value={editData.monthly_cost} onChange={(e) => setEditData(p => ({...p, monthly_cost: Number(e.target.value)}))} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Category</label>
              <select value={editData.category} onChange={(e) => setEditData(p => ({...p, category: e.target.value}))} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none">
                <option value="Communication">Communication</option>
                <option value="Productivity">Productivity</option>
                <option value="Design">Design</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Developer Tools">Developer Tools</option>
                <option value="Marketing">Marketing</option>
                <option value="CRM & Sales">CRM & Sales</option>
                <option value="Security & HR">Security & HR</option>
                <option value="Analytics">Analytics</option>
                <option value="AI & Machine Learning">AI & Machine Learning</option>
                <option value="Finance & Accounting">Finance & Accounting</option>
                <option value="Legal & Compliance">Legal & Compliance</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Billing Cycle</label>
              <select value={editData.billing_cycle} onChange={(e) => setEditData(p => ({...p, billing_cycle: e.target.value as any}))} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none">
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Status</label>
              <select value={editData.status} onChange={(e) => setEditData(p => ({...p, status: e.target.value as any}))} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none">
                <option value="active">Active</option>
                <option value="unused">Unused</option>
                <option value="duplicate">Duplicate</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Renewal Date</label>
            <input type="date" value={editData.renewal_date} onChange={(e) => setEditData(p => ({...p, renewal_date: e.target.value}))} className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>
          <div className="flex gap-2 pt-1">
            <Button size="sm" onClick={handleSaveEdit} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs gap-1">
              <Save className="h-3 w-3" />
              Save Changes
            </Button>
            <Button size="sm" variant="outline" onClick={() => setEditing(false)} className="flex-1 text-xs dark:border-slate-700 dark:text-slate-300">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // --- VIEW MODE ---
  return (
    <Card className="relative overflow-hidden border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/60 hover:-translate-y-1 hover:border-blue-400/50 dark:hover:border-blue-500/40 transition-all duration-300 group">
      {/* Status Banner stripe */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 ${
          subscription.status === "duplicate"
            ? "bg-amber-500"
            : subscription.status === "unused"
            ? "bg-rose-500"
            : subscription.status === "cancelled"
            ? "bg-slate-400"
            : "bg-emerald-500"
        }`}
      />

      <CardHeader className="pb-3 pt-5">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div style={{ backgroundColor: getBrandColorHex(avatar.bg) }} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white font-black text-xs shadow-md border border-white/20">
              {avatar.text}
            </div>
            <div>
              <CardTitle className="text-base font-bold text-slate-900 dark:text-white">{subscription.name}</CardTitle>
              <div className="mt-0.5 flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                <Tag className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                <span>{subscription.category}</span>
              </div>
            </div>
          </div>

          <Badge variant={currentStatus.variant}>
            <StatusIcon className="h-3 w-3" />
            <span>{currentStatus.label}</span>
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Monthly Cost</span>
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">{formatCurrency(subscription.monthly_cost, currency)}</div>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Billing Cycle</span>
            <div className="text-xs font-semibold capitalize text-slate-700 dark:text-slate-300">{subscription.billing_cycle}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <Calendar className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
            <span>Renewal: <strong className="text-slate-800 dark:text-slate-200">{formatDate(subscription.renewal_date)}</strong></span>
          </div>

          <div className="flex items-center justify-end gap-1.5 text-slate-600 dark:text-slate-300">
            <Clock className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
            <span className={daysUntil <= 7 ? "font-bold text-rose-600 dark:text-rose-400" : "text-slate-700 dark:text-slate-300"}>
              {daysUntil < 0 ? "Overdue" : daysUntil === 0 ? "Today" : `${daysUntil} days left`}
            </span>
          </div>
        </div>

        {/* Subscription Tenure & Lifetime Paid Metric */}
        {(() => {
          const startDateStr = subscription.start_date || subscription.created_at || "2026-01-01";
          const daysActive = Math.max(1, Math.floor((Date.now() - new Date(startDateStr).getTime()) / (1000 * 60 * 60 * 24)));
          const monthsActive = Math.max(1, Math.ceil(daysActive / 30));
          const lifetimeSpend = Number(subscription.monthly_cost) * monthsActive;

          return (
            <div className="flex items-center justify-between rounded-lg bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-2.5 py-1.5 text-[11px]">
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                Active: <strong className="text-slate-900 dark:text-white">{daysActive} days</strong>
              </span>
              <span className="text-blue-700 dark:text-blue-300 font-extrabold">
                Lifetime Paid: {formatCurrency(lifetimeSpend)}
              </span>
            </div>
          );
        })()}

        {subscription.description && (
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 italic bg-slate-50/60 dark:bg-slate-800/40 rounded p-1.5">
            &quot;{subscription.description}&quot;
          </p>
        )}

        {/* 1-Click AI Cancellation & Refund Request Generator Button */}
        <button
          onClick={() => setShowCancelModal(true)}
          className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-rose-500/30 bg-rose-500/10 py-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-500/20 transition-colors shadow-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>1-Click AI Cancel & Refund Email</span>
        </button>

        <CancellationAssistant
          subscription={subscription}
          isOpen={showCancelModal}
          onClose={() => setShowCancelModal(false)}
        />

        <div className="pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          {subscription.invoice_url ? (
            <a
              href={subscription.invoice_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Invoice PDF</span>
            </a>
          ) : (
            <span className="text-[11px] text-slate-400 dark:text-slate-500">No invoice attached</span>
          )}

          <div className="flex items-center gap-2">
            {onEdit && (
              <button
                onClick={() => setEditing(true)}
                className="inline-flex items-center gap-1 text-xs text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors p-1"
                title="Edit subscription"
              >
                <Pencil className="h-3.5 w-3.5" />
                <span>Edit</span>
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(subscription.id)}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors p-1"
                title="Delete subscription"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Remove</span>
              </button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
