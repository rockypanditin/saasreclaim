"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Loader2 } from "lucide-react";
import { Subscription } from "@/types/subscription";

interface SubscriptionFormProps {
  onAddSubscription?: (sub: Partial<Subscription>) => void;
}

export function SubscriptionForm({ onAddSubscription }: SubscriptionFormProps) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const newSub: Partial<Subscription> = {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      monthly_cost: Number(formData.get("monthly_cost")),
      billing_cycle: formData.get("billing_cycle") as ("monthly" | "yearly" | "quarterly"),
      renewal_date: formData.get("renewal_date") as string,
      status: "active",
      description: formData.get("description") as string,
      last_used: new Date().toISOString().split("T")[0],
    };

    if (onAddSubscription) {
      onAddSubscription(newSub);
    }

    setLoading(false);
    setIsOpen(false);
    (e.target as HTMLFormElement).reset();
  };

  if (!isOpen) {
    return (
      <div className="flex items-center justify-between rounded-2xl border border-dashed border-blue-300 dark:border-blue-700/60 bg-blue-50/50 dark:bg-blue-950/30 p-6 text-center">
        <div className="text-left">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Track New Software Subscription</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Add tools your team uses to automatically detect duplicate seats and unused licenses.</p>
        </div>
        <Button onClick={() => setIsOpen(true)} className="gap-2 shrink-0">
          <PlusCircle className="h-4 w-4" />
          <span>Add Tool</span>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-blue-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-md transition-all">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Add New Subscription</h3>
        <Button variant="ghost" size="sm" type="button" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Software Name *</label>
          <Input name="name" placeholder="e.g. Zoom, Slack, Figma" required />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Category *</label>
          <select
            name="category"
            className="flex w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            required
          >
            <option value="">Select category</option>
            <option value="Communication">Communication</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
            <option value="Productivity">Productivity</option>
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
            <option value="Sales">Sales</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Monthly Cost ($ USD) *</label>
          <Input name="monthly_cost" type="number" min="1" placeholder="49" required />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Billing Cycle</label>
          <select
            name="billing_cycle"
            className="flex w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            required
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Renewal Date *</label>
          <Input name="renewal_date" type="date" required defaultValue={new Date().toISOString().split("T")[0]} />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-700 dark:text-slate-300">Notes / Team Owner</label>
          <Input name="description" placeholder="Used by Marketing Team" />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button variant="outline" type="button" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading} className="gap-2">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <PlusCircle className="h-4 w-4" />}
          <span>Save Subscription</span>
        </Button>
      </div>
    </form>
  );
}
