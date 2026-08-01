"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Copy,
  CheckCircle2,
  Mail,
  ShieldAlert,
  Sparkles,
  X,
  Send,
  DollarSign
} from "lucide-react";
import { Subscription } from "@/types/subscription";

interface CancellationAssistantProps {
  subscription: Subscription;
  isOpen: boolean;
  onClose: () => void;
}

export function CancellationAssistant({ subscription, isOpen, onClose }: CancellationAssistantProps) {
  const [copied, setCopied] = useState(false);
  const [refundRequested, setRefundRequested] = useState(true);

  if (!isOpen) return null;

  const vendorName = subscription.name || "Vendor Support";
  const userEmail = typeof window !== "undefined" ? localStorage.getItem("saasreclaim_user_email") || "you@company.com" : "you@company.com";
  const companyName = typeof window !== "undefined" ? localStorage.getItem("saasreclaim_user_company") || "Acme Corp" : "Acme Corp";

  const emailSubject = `Formal Notice: Immediate Subscription Cancellation & Refund Request - ${subscription.name} [Account Ref: #${subscription.id.slice(-6)}]`;

  const emailBody = `Dear ${vendorName} Customer Support & Billing Team,

I am writing on behalf of ${companyName} to formally request the IMMEDIATE cancellation of our subscription to ${subscription.name} (Billing Ref: #${subscription.id.slice(-6)}), effective immediately.

Reason for Cancellation:
Our internal IT audit flagged this subscription as an ${subscription.status === "duplicate" ? "unintended duplicate software stack" : "unused software license"} with zero active team engagement over the past billing cycle.

Request Details:
1. Immediate Termination: Please cancel all auto-renewal charges and terminate future recurring debits effective as of today (${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}).
${refundRequested ? `2. Pro-Rated Refund Request: As the service remained unutilized during the current period ($${subscription.monthly_cost}/month rate), we request a pro-rated refund for the unexpired portion of the billing cycle to the original payment method.\n` : ""}3. Written Confirmation: Please confirm via reply email that our account has been set to non-renewing status and confirm a zero balance remaining.

Thank you for your prompt assistance in processing this account update.

Sincerely,

Account Admin
${companyName}
Registered Email: ${userEmail}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${emailSubject}\n\n${emailBody}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleMailTo = () => {
    const mailtoUrl = `mailto:support@${subscription.name.toLowerCase().replace(/[^a-z]/g, "")}.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-2xl space-y-5">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <span>1-Click AI Cancellation & Refund Request Generator</span>
              </h3>
              <p className="text-xs text-slate-400">Official legal termination draft for {subscription.name}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Settings Toggle */}
        <div className="flex items-center justify-between rounded-xl bg-slate-950/60 border border-slate-800 p-3 text-xs">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-emerald-400" />
            <span className="font-semibold text-slate-300">Include Pro-Rated Refund Demand Clause</span>
          </div>
          <button
            onClick={() => setRefundRequested(!refundRequested)}
            className={`rounded-lg px-3 py-1 text-xs font-bold transition-colors ${
              refundRequested ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-400"
            }`}
          >
            {refundRequested ? "Refund Clause ON" : "Refund Clause OFF"}
          </button>
        </div>

        {/* Email Draft Preview Box */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-400">
            <span>Generated Email Subject & Body:</span>
            <span className="text-emerald-400 font-bold">Recover ${subscription.monthly_cost}/mo Spend</span>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 space-y-3 max-h-64 overflow-y-auto leading-relaxed border-l-4 border-l-rose-500">
            <div className="text-blue-400 font-semibold border-b border-slate-800/80 pb-2">
              Subject: {emailSubject}
            </div>
            <pre className="whitespace-pre-wrap font-sans text-xs text-slate-300 leading-relaxed">
              {emailBody}
            </pre>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Button
            onClick={handleCopy}
            variant="outline"
            className="w-full sm:w-auto flex-1 gap-2 border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
          >
            {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? "Copied to Clipboard!" : "Copy Email Draft"}</span>
          </Button>

          <Button
            onClick={handleMailTo}
            className="w-full sm:w-auto flex-1 gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md"
          >
            <Send className="h-4 w-4" />
            <span>Open in Email Client (mailto:)</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
