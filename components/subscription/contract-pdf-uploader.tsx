"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Upload,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  ShieldCheck,
  Clock,
  ArrowRight
} from "lucide-react";

interface AIContractClause {
  noticePeriodDays: number;
  noticeClause: string;
  priceEscalatorClause?: string;
  autoRenewTerm: string;
  recommendedAlertDate: string;
}

export function ContractPdfUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [contractUrl, setContractUrl] = useState<string | null>(null);
  const [scannedClause, setScannedClause] = useState<AIContractClause | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setUploading(true);
    setScannedClause(null);

    try {
      const formData = new FormData();
      formData.append("file", selected);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.url) {
        setContractUrl(data.url);
      }

      // Call AI Contract Clause Scanner API
      const aiFormData = new FormData();
      aiFormData.append("file", selected);
      aiFormData.append("type", "contract");

      const aiRes = await fetch("/api/ai-parse", {
        method: "POST",
        body: aiFormData,
      });

      const aiJson = await aiRes.json();
      if (aiJson.data) {
        setScannedClause(aiJson.data);
      }
      setUploading(false);
    } catch {
      setUploading(false);
    }
  };

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Vendor Contract PDF Storage & AI Clause Reader</span>
                <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Cloudflare R2 Storage
                </span>
              </CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Upload vendor agreements & PDF contracts. AI automatically scans cancellation notice windows and sets calendar alerts.
              </p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-5">
        {/* Upload Zone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 p-8 text-center cursor-pointer hover:border-amber-500/50 transition-all group"
        >
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
            <Upload className="h-6 w-6" />
          </div>

          <div className="mt-3 space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {uploading ? "Uploading & Scanning Contract via AI..." : file ? file.name : "Drag & Drop Vendor Contract PDF"}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Supports MSA, Order Forms, and PDF Invoices (Max 25MB)
            </p>
          </div>

          {contractUrl && (
            <span className="mt-2 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Stored in Cloudflare R2 Bucket
            </span>
          )}
        </div>

        {/* AI Scanned Clauses Result */}
        {scannedClause && (
          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 p-5 text-white space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  AI Scanned Contract Clauses & Calendar Alert
                </h4>
              </div>
              <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-200 border border-amber-500/30">
                {scannedClause.noticePeriodDays}-Day Cancellation Window
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">1. Cancellation Notice Window:</span>
                <p className="font-bold text-amber-200 leading-relaxed">{scannedClause.noticeClause}</p>
              </div>

              <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-3 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">2. Annual Price Escalator Clause:</span>
                <p className="font-bold text-rose-300 leading-relaxed">{scannedClause.priceEscalatorClause}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-amber-500/20 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>
                  Auto-set Calendar Alert Date: <strong className="text-white">{scannedClause.recommendedAlertDate}</strong>
                </span>
              </div>

              <Button size="sm" className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs gap-1.5 shrink-0">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Calendar Alert Synced</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
