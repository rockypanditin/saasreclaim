"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Mail, Slack, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function NotificationSettings() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [slackAlerts, setSlackAlerts] = useState(false);
  const [slackWebhookUrl, setSlackWebhookUrl] = useState("");
  const [alertDays, setAlertDays] = useState(7);
  const [savedMsg, setSavedMsg] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      "notification_settings",
      JSON.stringify({ emailAlerts, slackAlerts, slackWebhookUrl, alertDays })
    );
    setSavedMsg("Notification alert rules saved!");
    setTimeout(() => setSavedMsg(""), 3000);
  };

  return (
    <form onSubmit={handleSave} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-5">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Bell className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Automated Renewal Notifications & Alerts</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Receive warning emails or Slack alerts before auto-billing charges occur.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Email Alerts Toggle */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/40">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Email Digest Alerts</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Send renewal warnings to your registered work email.</p>
            </div>
          </div>
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={(e) => setEmailAlerts(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
        </div>

        {/* Slack Alerts Toggle */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/40">
          <div className="flex items-start gap-3">
            <Slack className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Slack Webhook Alerts</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Post warnings into your finance/it Slack channel.</p>
            </div>
          </div>
          <input
            type="checkbox"
            checked={slackAlerts}
            onChange={(e) => setSlackAlerts(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
          />
        </div>
      </div>

      {slackAlerts && (
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">Slack Webhook URL</label>
          <Input
            value={slackWebhookUrl}
            onChange={(e) => setSlackWebhookUrl(e.target.value)}
            placeholder="https://hooks.slack.com/services/T00/B00/X00"
            className="bg-white dark:bg-slate-950 text-xs"
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Alert Lead Time:</span>
          <select
            value={alertDays}
            onChange={(e) => setAlertDays(Number(e.target.value))}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none"
          >
            <option value="3">3 Days Before</option>
            <option value="7">7 Days Before (Recommended)</option>
            <option value="14">14 Days Before</option>
            <option value="30">30 Days Before</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          {savedMsg && (
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{savedMsg}</span>
            </span>
          )}
          <Button type="submit" size="sm" className="gap-1.5 text-xs">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Save Alert Rules</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
