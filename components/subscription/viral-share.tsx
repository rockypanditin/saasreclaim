"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Share2,
  Check,
  Copy,
  Twitter,
  Linkedin,
  Sparkles,
  TrendingDown,
  ShieldCheck
} from "lucide-react";

interface ViralShareProps {
  monthlySavings?: number;
  toolsAudited?: number;
}

export function ViralShare({ monthlySavings = 650, toolsAudited = 14 }: ViralShareProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `🚀 Just audited our company SaaS stack using SaaSReclaim! Found ${toolsAudited} active tools and recovered $${monthlySavings}/month in duplicate software seats. Audit your stack for free: https://saasreclaim.app #SaaS #CostOptimization #Startup`;

  const shareUrl = "https://saasreclaim.app";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  const shareLinkedin = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
            <Share2 className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Viral SaaS Savings Health Card</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Growth Hook
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Share your audit results on LinkedIn & X/Twitter to inspire other founders and earn free Pro credits.</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-900">
          <TrendingDown className="h-4 w-4" />
          <span>Audited: ${monthlySavings}/mo Waste Saved</span>
        </div>
      </div>

      {/* Share Badge Preview */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 p-4 text-white space-y-3 shadow-inner">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1 font-semibold text-blue-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            SaaSReclaim Audit Badge
          </span>
          <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">Verified Audit</span>
        </div>
        <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed font-mono">
          &quot;{shareText}&quot;
        </p>
      </div>

      {/* Social Share Buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <Button onClick={handleCopy} size="sm" variant="outline" className="gap-1.5 text-xs font-bold">
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? "Copied Share Copy!" : "Copy Share Text"}</span>
        </Button>

        <Button onClick={shareTwitter} size="sm" className="gap-1.5 text-xs font-bold bg-sky-500 hover:bg-sky-400 text-white">
          <Twitter className="h-3.5 w-3.5 fill-current" />
          <span>Share on Twitter / X</span>
        </Button>

        <Button onClick={shareLinkedin} size="sm" className="gap-1.5 text-xs font-bold bg-blue-700 hover:bg-blue-600 text-white">
          <Linkedin className="h-3.5 w-3.5 fill-current" />
          <span>Share on LinkedIn</span>
        </Button>
      </div>
    </div>
  );
}
