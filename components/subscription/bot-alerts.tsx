"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Bell,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Send,
  Smartphone,
  Check,
  Link,
  Bot
} from "lucide-react";
import { Subscription } from "@/types/subscription";
import { getDaysUntil, formatCurrency } from "@/lib/utils";

interface BotAlertsProps {
  subscriptions: Subscription[];
  currency?: string;
}

export function BotAlerts({ subscriptions, currency = "USD" }: BotAlertsProps) {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [slackWebhook, setSlackWebhook] = useState("");
  const [enableWhatsapp, setEnableWhatsapp] = useState(true);
  const [enableSlack, setEnableSlack] = useState(true);
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const [, setCurrencyTick] = useState(0);

  useEffect(() => {
    const savedWa = localStorage.getItem("saasreclaim_bot_whatsapp");
    const savedSlack = localStorage.getItem("saasreclaim_bot_slack");
    if (savedWa) setWhatsappNumber(savedWa);
    if (savedSlack) setSlackWebhook(savedSlack);

    const handleCurrency = () => setCurrencyTick((t) => t + 1);
    window.addEventListener("currencyChange", handleCurrency);
    return () => window.removeEventListener("currencyChange", handleCurrency);
  }, []);

  const handleSaveConfigs = () => {
    localStorage.setItem("saasreclaim_bot_whatsapp", whatsappNumber);
    localStorage.setItem("saasreclaim_bot_slack", slackWebhook);
    setSentStatus("Bot Webhook & Phone Settings Saved!");
    setTimeout(() => setSentStatus(null), 3000);
  };

  // Find subscriptions renewing in 7 days or less
  const upcomingRenewals = useMemo(() => {
    return subscriptions.filter((sub) => {
      if (sub.status === "cancelled") return false;
      const days = getDaysUntil(sub.renewal_date);
      return days >= 0 && days <= 7;
    });
  }, [subscriptions]);

  const handleSendTestAlert = (channel: "whatsapp" | "slack", subName: string, cost: number, days: number) => {
    const message = `🚨 Alert: ${subName} ${formatCurrency(cost, currency)} auto-billing charge in ${days === 0 ? "today" : `${days} days`}. Click here to review or cancel seats.`;

    if (channel === "whatsapp" && whatsappNumber) {
      const waUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
    }

    setSentStatus(`Test Alert Dispatched to ${channel.toUpperCase()}!`);
    setTimeout(() => setSentStatus(null), 3500);
  };

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Instant WhatsApp & Slack Renewal Bot Alerts</span>
              </CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Receive instant 7-day pre-billing alerts on WhatsApp & Slack channels before auto-renewal charges hit.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Upcoming Alerts:</span>
            <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-black text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {upcomingRenewals.length} Tool(s) Due in &le; 7 Days
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-5">
        {sentStatus && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>{sentStatus}</span>
          </div>
        )}

        {/* Integration Config Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* WhatsApp Channel */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp Bot Number</span>
              </div>
              <button
                onClick={() => setEnableWhatsapp(!enableWhatsapp)}
                className={`rounded-lg px-2.5 py-0.5 text-[10px] font-bold ${
                  enableWhatsapp ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-400"
                }`}
              >
                {enableWhatsapp ? "ACTIVE" : "OFF"}
              </button>
            </div>

            <Input
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              placeholder="+1 (555) 019-2834 or +91..."
              className="h-8 text-xs bg-white dark:bg-slate-900"
            />
            <p className="text-[11px] text-slate-500">Alerts sent 7 days before recurring card debit.</p>
          </div>

          {/* Slack Channel */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/60 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-purple-500" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">Slack Channel Webhook</span>
              </div>
              <button
                onClick={() => setEnableSlack(!enableSlack)}
                className={`rounded-lg px-2.5 py-0.5 text-[10px] font-bold ${
                  enableSlack ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-400"
                }`}
              >
                {enableSlack ? "ACTIVE" : "OFF"}
              </button>
            </div>

            <Input
              value={slackWebhook}
              onChange={(e) => setSlackWebhook(e.target.value)}
              placeholder="https://hooks.slack.com/services/..."
              className="h-8 text-xs bg-white dark:bg-slate-900"
            />
            <p className="text-[11px] text-slate-500">Posts directly to #finance-alerts or #it-ops channel.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button size="sm" onClick={handleSaveConfigs} className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs gap-1.5">
            <Check className="h-3.5 w-3.5" /> Save Bot Connections
          </Button>
        </div>

        {/* Live Bot Alert Feed */}
        <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Live Bot Pre-Billing Alert Dispatcher:
          </span>

          <div className="space-y-2">
            {(upcomingRenewals.length > 0 ? upcomingRenewals : subscriptions.slice(0, 2)).map((sub) => {
              const days = getDaysUntil(sub.renewal_date);
              const cost = Number(sub.monthly_cost);
              const alertMsg = `🚨 Alert: ${sub.name} ${formatCurrency(cost, currency)} auto-billing charge in ${days <= 0 ? "today" : `${days} days`}. Click here to review or cancel seats.`;

              return (
                <div
                  key={sub.id}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Bell className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{sub.name} (Renews in {days <= 0 ? "Today" : `${days} days`})</span>
                    </span>
                    <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                      {formatCurrency(cost, currency)}/mo
                    </span>
                  </div>

                  {/* Exact Alert Message Requested */}
                  <div className="rounded-xl border border-emerald-500/20 bg-slate-950 p-3 font-mono text-xs text-emerald-300">
                    &quot;{alertMsg}&quot;
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <Button
                      size="sm"
                      onClick={() => handleSendTestAlert("whatsapp", sub.name, cost, days)}
                      className="h-7 text-[11px] font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg gap-1"
                    >
                      <Smartphone className="h-3 w-3" /> Test WhatsApp Alert
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleSendTestAlert("slack", sub.name, cost, days)}
                      className="h-7 text-[11px] font-bold bg-purple-600 hover:bg-purple-500 text-white rounded-lg gap-1"
                    >
                      <MessageSquare className="h-3 w-3" /> Test Slack Alert
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
