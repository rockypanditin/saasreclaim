import { Subscription } from "@/types/subscription";
import { INITIAL_DEMO_SUBSCRIPTIONS } from "@/lib/subscription-utils";

const DEMO_KEY = "saasreclaim_demo_subscriptions";
const USER_KEY = "saasreclaim_user_subscriptions";
const MODE_KEY = "saasreclaim_is_demo_mode";
const PLAN_KEY = "saasreclaim_plan";
const TRIAL_START_KEY = "saasreclaim_trial_start";

export function isDemoMode(): boolean {
  if (typeof window === "undefined") return false;
  const mode = localStorage.getItem(MODE_KEY);
  return mode === "true";
}

export function setDemoMode(isDemo: boolean): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(MODE_KEY, isDemo ? "true" : "false");
  if (isDemo && !localStorage.getItem(DEMO_KEY)) {
    localStorage.setItem(DEMO_KEY, JSON.stringify(INITIAL_DEMO_SUBSCRIPTIONS));
  }
  window.dispatchEvent(new Event("storageChange"));
}

export function getStoredSubscriptions(): Subscription[] {
  if (typeof window === "undefined") return [];

  const inDemo = isDemoMode();
  if (inDemo) {
    const rawDemo = localStorage.getItem(DEMO_KEY);
    if (!rawDemo) {
      localStorage.setItem(DEMO_KEY, JSON.stringify(INITIAL_DEMO_SUBSCRIPTIONS));
      return INITIAL_DEMO_SUBSCRIPTIONS;
    }
    try {
      return JSON.parse(rawDemo);
    } catch {
      return INITIAL_DEMO_SUBSCRIPTIONS;
    }
  } else {
    const rawUser = localStorage.getItem(USER_KEY);
    if (!rawUser) {
      return [];
    }
    try {
      return JSON.parse(rawUser);
    } catch {
      return [];
    }
  }
}

export function saveStoredSubscriptions(subscriptions: Subscription[]): void {
  if (typeof window === "undefined") return;

  const inDemo = isDemoMode();
  if (inDemo) {
    localStorage.setItem(DEMO_KEY, JSON.stringify(subscriptions));
  } else {
    localStorage.setItem(USER_KEY, JSON.stringify(subscriptions));
  }
  window.dispatchEvent(new Event("storageChange"));

  // Asynchronously sync with Supabase Database API
  try {
    fetch("/api/subscriptions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscriptions }),
    }).catch(() => {});
  } catch {}
}

export function deleteStoredSubscription(id: string): void {
  if (typeof window === "undefined") return;

  const current = getStoredSubscriptions();
  const updated = current.filter((s) => s.id !== id);
  saveStoredSubscriptions(updated);

  // Asynchronously delete from Supabase Database API
  try {
    fetch(`/api/subscriptions?id=${id}`, {
      method: "DELETE",
    }).catch(() => {});
  } catch {}
}

export function clearUserWorkspace(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(USER_KEY);
  localStorage.setItem(MODE_KEY, "false");
  window.dispatchEvent(new Event("storageChange"));
}

export async function fetchLiveDatabaseSubscriptions(): Promise<Subscription[]> {
  try {
    const res = await fetch("/api/subscriptions");
    const data = await res.json();
    if (data && data.success && Array.isArray(data.subscriptions)) {
      return data.subscriptions;
    }
  } catch {}
  return [];
}

/* ════════════════════════════════════════════════════════════════ */
/* 🌟 USER PLAN & 14-DAY FREE TRIAL MANAGER                         */
/* ════════════════════════════════════════════════════════════════ */

export interface UserPlanInfo {
  planName: string;
  isTrial: boolean;
  daysRemaining: number;
  isPaid: boolean;
  maxToolsAllowed: number;
  canExportPdf: boolean;
  canUseAiParse: boolean;
}

export function getUserPlanInfo(): UserPlanInfo {
  if (typeof window === "undefined") {
    return {
      planName: "Growth Pro (14-Day Trial)",
      isTrial: true,
      daysRemaining: 14,
      isPaid: false,
      maxToolsAllowed: 9999,
      canExportPdf: true,
      canUseAiParse: true,
    };
  }

  const rawPlan = localStorage.getItem(PLAN_KEY);
  const trialStart = localStorage.getItem(TRIAL_START_KEY);

  // If no plan set yet, default to 14-Day Free Trial of Growth Pro (NO credit card needed)
  if (!rawPlan) {
    const now = Date.now();
    localStorage.setItem(PLAN_KEY, "Growth Pro (14-Day Free Trial)");
    localStorage.setItem(TRIAL_START_KEY, String(now));
    return {
      planName: "Growth Pro (14-Day Free Trial)",
      isTrial: true,
      daysRemaining: 14,
      isPaid: false,
      maxToolsAllowed: 9999,
      canExportPdf: true,
      canUseAiParse: true,
    };
  }

  if (rawPlan.includes("Trial") || trialStart) {
    const startTime = Number(trialStart) || Date.now();
    const elapsedDays = Math.floor((Date.now() - startTime) / (1000 * 60 * 60 * 24));
    const daysLeft = Math.max(0, 14 - elapsedDays);

    if (daysLeft === 0) {
      // Trial expired -> downgrade to Free Starter (5 tools max)
      return {
        planName: "Free Starter (Trial Expired)",
        isTrial: false,
        daysRemaining: 0,
        isPaid: false,
        maxToolsAllowed: 5,
        canExportPdf: false,
        canUseAiParse: false,
      };
    }

    return {
      planName: "Growth Pro (14-Day Free Trial)",
      isTrial: true,
      daysRemaining: daysLeft,
      isPaid: false,
      maxToolsAllowed: 9999,
      canExportPdf: true,
      canUseAiParse: true,
    };
  }

  if (rawPlan.includes("Growth") || rawPlan.includes("Enterprise") || rawPlan.includes("Annual") || rawPlan.includes("Monthly") || rawPlan.includes("Paid")) {
    return {
      planName: rawPlan,
      isTrial: false,
      daysRemaining: 365,
      isPaid: true,
      maxToolsAllowed: 9999,
      canExportPdf: true,
      canUseAiParse: true,
    };
  }

  // Free Starter
  return {
    planName: "Free Starter",
    isTrial: false,
    daysRemaining: 0,
    isPaid: false,
    maxToolsAllowed: 5,
    canExportPdf: false,
    canUseAiParse: false,
  };
}

export function activate14DayTrial(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PLAN_KEY, "Growth Pro (14-Day Free Trial)");
  localStorage.setItem(TRIAL_START_KEY, String(Date.now()));
  window.dispatchEvent(new Event("planChange"));
}
