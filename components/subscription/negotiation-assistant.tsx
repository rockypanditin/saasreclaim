"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sparkles,
  Copy,
  Check,
  FileText,
  DollarSign,
  Building2,
  Zap,
  Mail
} from "lucide-react";

export function NegotiationAssistant() {
  const [vendorName, setVendorName] = useState("Zoom Pro");
  const [currentCost, setCurrentCost] = useState("450");
  const [seatCount, setSeatCount] = useState("25");
  const [targetDiscount, setTargetDiscount] = useState("25");
  const [copied, setCopied] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const discountAmount = (Number(currentCost) * (Number(targetDiscount) / 100)).toFixed(0);
    const newCost = (Number(currentCost) - Number(discountAmount)).toFixed(0);

    const emailTemplate = `Subject: Renewal Negotiation & Budget Review for ${vendorName} Contract

Dear ${vendorName} Account Management Team,

I hope this email finds you well.

Our finance team is currently performing our Q3 software budget audit across our ${seatCount} active user licenses. As part of our corporate procurement guidelines, we are consolidating vendor subscriptions and benchmarking market rates.

We currently spend $${currentCost}/month ($${Number(currentCost) * 12}/year) on ${vendorName}. We would love to continue our partnership with ${vendorName}; however, we have received competing proposals that offer similar functionality at lower price tiers.

To approve our contract renewal for another 12 months, we require a ${targetDiscount}% volume discount (bringing our target monthly spend to $${newCost}/month), or the inclusion of ${Math.ceil(Number(seatCount) * 0.2)} complimentary viewer/editor seats.

Please let us know if your sales management can approve this revised pricing before our upcoming renewal date.

Best regards,

[Your Name]
Head of Finance & Operations
[Company Name]`;

    setGeneratedEmail(emailTemplate);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600 text-white shadow-md">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>AI Vendor Negotiation Assistant</span>
              <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] font-extrabold text-purple-600 dark:text-purple-400 border border-purple-500/20">
                PRO Feature
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Generate proven price-cut emails to push back on vendor auto-renewals & save 20-30%.</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Software Vendor</label>
          <Input
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            placeholder="e.g. Zoom, Slack, HubSpot"
            required
            className="text-xs bg-white dark:bg-slate-900"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Current Monthly ($)</label>
          <Input
            type="number"
            value={currentCost}
            onChange={(e) => setCurrentCost(e.target.value)}
            placeholder="450"
            required
            className="text-xs bg-white dark:bg-slate-900"
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">Target Discount (%)</label>
          <select
            value={targetDiscount}
            onChange={(e) => setTargetDiscount(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none"
          >
            <option value="15">15% Discount</option>
            <option value="20">20% Discount</option>
            <option value="25">25% Discount</option>
            <option value="35">35% Discount</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button type="submit" size="sm" className="w-full gap-1.5 text-xs bg-purple-600 hover:bg-purple-500 text-white font-bold">
            <Zap className="h-3.5 w-3.5" />
            <span>Generate Email</span>
          </Button>
        </div>
      </form>

      {/* Generated Email Box */}
      {generatedEmail ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-purple-600" />
              Generated Negotiation Copy:
            </span>
            <Button onClick={handleCopy} size="sm" variant="outline" className="gap-1.5 text-xs font-bold">
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Email Draft"}</span>
            </Button>
          </div>

          <pre className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 p-4 text-xs font-mono text-slate-200 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {generatedEmail}
          </pre>
        </div>
      ) : (
        <div className="text-center py-6 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
          <p className="text-xs text-slate-500">Fill in vendor details above and click &quot;Generate Email&quot; to create a custom negotiation email.</p>
        </div>
      )}
    </div>
  );
}
