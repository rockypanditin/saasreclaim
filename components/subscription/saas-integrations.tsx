"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Link2,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Plus
} from "lucide-react";
import { Subscription } from "@/types/subscription";

interface SaaSIntegration {
  id: string;
  name: string;
  category: string;
  defaultCost: number;
  iconBg: string;
  iconText: string;
  connected: boolean;
  seats: number;
  description: string;
}

const INITIAL_INTEGRATIONS: SaaSIntegration[] = [
  {
    id: "gworkspace",
    name: "Google Workspace",
    category: "Productivity",
    defaultCost: 140,
    iconBg: "bg-blue-600",
    iconText: "G",
    connected: false,
    seats: 10,
    description: "Syncs active Google SSO directory & unused Gmail/Drive seats.",
  },
  {
    id: "slack",
    name: "Slack Business",
    category: "Communication",
    defaultCost: 150,
    iconBg: "bg-emerald-600",
    iconText: "S",
    connected: false,
    seats: 10,
    description: "Detects inactive channel members and single-channel guest licenses.",
  },
  {
    id: "zoom",
    name: "Zoom Workplace",
    category: "Communication",
    defaultCost: 120,
    iconBg: "bg-sky-500",
    iconText: "Z",
    connected: false,
    seats: 6,
    description: "Identifies Pro host licenses with under 5 meetings per month.",
  },
  {
    id: "aws",
    name: "Amazon Web Services (AWS)",
    category: "Infrastructure",
    defaultCost: 450,
    iconBg: "bg-amber-600",
    iconText: "AWS",
    connected: false,
    seats: 1,
    description: "Pulls CloudWatch billing API data & idle EC2 instance charges.",
  },
  {
    id: "figma",
    name: "Figma Enterprise",
    category: "Design",
    defaultCost: 225,
    iconBg: "bg-purple-600",
    iconText: "F",
    connected: false,
    seats: 5,
    description: "Audits Editor vs Viewer seats to eliminate unneeded paid roles.",
  },
  {
    id: "adobe",
    name: "Adobe Creative Cloud",
    category: "Design",
    defaultCost: 255,
    iconBg: "bg-rose-600",
    iconText: "Ai",
    connected: false,
    seats: 3,
    description: "Tracks active Photoshop & Illustrator desktop app launch logs.",
  },
  {
    id: "github",
    name: "GitHub Enterprise",
    category: "Developer Tools",
    defaultCost: 168,
    iconBg: "bg-slate-800",
    iconText: "GH",
    connected: false,
    seats: 8,
    description: "Audits active developer committers & dormant organization seats.",
  },
];

interface SaaSIntegrationsProps {
  onAutoAddSubscription: (sub: Partial<Subscription>) => void;
}

export function SaaSIntegrations({ onAutoAddSubscription }: SaaSIntegrationsProps) {
  const [integrations, setIntegrations] = useState<SaaSIntegration[]>(INITIAL_INTEGRATIONS);
  const [syncingId, setSyncingId] = useState<string | null>(null);

  const handleToggleConnect = (item: SaaSIntegration) => {
    setSyncingId(item.id);

    setTimeout(() => {
      setSyncingId(null);
      const isConnecting = !item.connected;

      setIntegrations((prev) =>
        prev.map((i) => (i.id === item.id ? { ...i, connected: isConnecting } : i))
      );

      if (isConnecting) {
        onAutoAddSubscription({
          name: item.name,
          category: item.category,
          monthly_cost: item.defaultCost,
          billing_cycle: "monthly",
          renewal_date: new Date(Date.now() + 25 * 86400000).toISOString().split("T")[0],
          description: `Auto-linked via 1-Click Integration (${item.seats} active seats synced)`,
        });
      }
    }, 1000);
  };

  return (
    <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <Link2 className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <span>1-Click SaaS Auto-Tracker & Connectors</span>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Auto-Detect Active
                </span>
              </CardTitle>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Connect your team SaaS apps to automatically import subscriptions, seat counts, and spend.
              </p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((tool) => {
            const isSyncing = syncingId === tool.id;

            return (
              <div
                key={tool.id}
                className={`flex flex-col justify-between rounded-2xl border p-4 transition-all duration-200 ${
                  tool.connected
                    ? "border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-950/20"
                    : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 hover:border-blue-500/30"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${tool.iconBg} text-white font-black text-xs shadow-md`}>
                        {tool.iconText}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">{tool.name}</h4>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">{tool.category}</span>
                      </div>
                    </div>

                    <span className="text-xs font-black text-slate-900 dark:text-white">
                      ${tool.defaultCost}<span className="text-[10px] font-normal text-slate-400">/mo</span>
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed min-h-[32px]">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    {tool.connected ? (
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-bold">
                        <CheckCircle2 className="h-3 w-3" /> Connected ({tool.seats} seats)
                      </span>
                    ) : (
                      <span>Not Connected</span>
                    )}
                  </div>

                  <Button
                    size="sm"
                    disabled={isSyncing}
                    onClick={() => handleToggleConnect(tool)}
                    className={`h-7 px-3 text-[11px] font-bold rounded-lg gap-1.5 transition-colors ${
                      tool.connected
                        ? "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300"
                        : "bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
                    }`}
                  >
                    {isSyncing ? (
                      <>
                        <RefreshCw className="h-3 w-3 animate-spin" />
                        <span>Syncing...</span>
                      </>
                    ) : tool.connected ? (
                      <span>Connected</span>
                    ) : (
                      <>
                        <Plus className="h-3 w-3" />
                        <span>1-Click Connect</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
