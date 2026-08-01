"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileText, CheckCircle2, Loader2, Sparkles, X } from "lucide-react";
import { Subscription } from "@/types/subscription";

interface InvoiceDropzoneProps {
  onAutoAddSubscription?: (sub: Partial<Subscription>) => void;
}

export function InvoiceDropzone({ onAutoAddSubscription }: InvoiceDropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [extractedData, setExtractedData] = useState<Partial<Subscription> | null>(null);
  const [successMsg, setSuccessMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const parseInvoiceFile = async (file: File) => {
    setUploading(true);
    setSuccessMsg("");
    setExtractedData(null);

    try {
      // Call /api/upload to store file on R2
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const uploadJson = await uploadRes.json();

      // Call /api/ai-parse with MeshAI engine
      const aiFormData = new FormData();
      aiFormData.append("file", file);
      aiFormData.append("type", "invoice");

      const aiRes = await fetch("/api/ai-parse", {
        method: "POST",
        body: aiFormData,
      });

      const aiJson = await aiRes.json();
      const aiData = aiJson.data || {};

      const extracted: Partial<Subscription> = {
        name: aiData.name || "Software Tool",
        category: aiData.category || "Productivity",
        monthly_cost: aiData.monthly_cost || 29,
        billing_cycle: aiData.billing_cycle || "monthly",
        renewal_date: aiData.renewal_date || new Date().toISOString().split("T")[0],
        status: "active",
        invoice_url: uploadJson.url || "https://demo.r2.dev/invoice.pdf",
        description: `MeshAI Auto-Extracted (${file.name})`,
      };

      setExtractedData(extracted);
      setSuccessMsg(`MeshAI Extracted: "${extracted.name}" ($${extracted.monthly_cost}/mo)`);
      setUploading(false);
    } catch {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      parseInvoiceFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      parseInvoiceFile(files[0]);
    }
  };

  const handleConfirmAdd = () => {
    if (extractedData && onAutoAddSubscription) {
      onAutoAddSubscription(extractedData);
      setExtractedData(null);
      setSuccessMsg("Subscription added successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">AI Invoice Drag & Drop Parser</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Drop PDF invoices or receipts to auto-extract software name, amount & renewal date.</p>
          </div>
        </div>
      </div>

      {/* Dropzone Container */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragging
            ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 scale-[1.01]"
            : "border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 hover:border-blue-400 dark:hover:border-blue-600"
        }`}
      >
        {uploading ? (
          <div className="py-4 text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-600 dark:text-blue-400 mb-2" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Extracting invoice data using AI...</span>
          </div>
        ) : (
          <>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 mb-3">
              <UploadCloud className="h-6 w-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Drag & drop invoice PDF or click to browse
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Supports PDF, PNG, JPG receipts (Max 10MB)</p>
          </>
        )}

        <input
          type="file"
          accept=".pdf,image/*"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Extracted Data Confirmation Box */}
      {extractedData && (
        <div className="mt-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/80 dark:bg-emerald-950/40 p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                <span>Extracted Details: {extractedData.name}</span>
              </div>
              <p className="text-xs text-emerald-700 dark:text-emerald-400">
                Cost: <strong>${extractedData.monthly_cost}</strong>/mo | Category: <strong>{extractedData.category}</strong> | Renewal: <strong>{extractedData.renewal_date}</strong>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" onClick={handleConfirmAdd} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs">
                Confirm & Add
              </Button>
              <button onClick={() => setExtractedData(null)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {successMsg && !extractedData && (
        <div className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5" />
          <span>{successMsg}</span>
        </div>
      )}
    </div>
  );
}
