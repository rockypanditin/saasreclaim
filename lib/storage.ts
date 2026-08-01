import { Subscription } from "@/types/subscription";
import { INITIAL_DEMO_SUBSCRIPTIONS } from "@/lib/subscription-utils";

const DEMO_KEY = "saasreclaim_demo_subscriptions";
const USER_KEY = "saasreclaim_user_subscriptions";
const MODE_KEY = "saasreclaim_is_demo_mode";

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
  return getStoredSubscriptions();
}
