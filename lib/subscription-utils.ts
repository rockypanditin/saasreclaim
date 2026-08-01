import { Subscription, WasteReport, Recommendation } from "@/types/subscription";

// Initial Sample Subscriptions for Demo Mode
export const INITIAL_DEMO_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "demo-slack",
    user_id: "demo-user",
    name: "Slack Pro Plan",
    category: "Communication",
    monthly_cost: 140,
    billing_cycle: "monthly",
    renewal_date: new Date(Date.now() + 5 * 86400000).toISOString().split("T")[0],
    status: "active",
    description: "16 seats for internal engineering team communication.",
    last_used: new Date().toISOString().split("T")[0],
    created_at: "2026-01-15T00:00:00.000Z",
  },
  {
    id: "demo-zoom",
    user_id: "demo-user",
    name: "Zoom Workplace Pro",
    category: "Communication",
    monthly_cost: 95,
    billing_cycle: "monthly",
    renewal_date: new Date(Date.now() + 12 * 86400000).toISOString().split("T")[0],
    status: "duplicate",
    description: "Overlapping video tool — team already uses Google Meet & Slack Huddles.",
    last_used: new Date(Date.now() - 45 * 86400000).toISOString().split("T")[0],
    created_at: "2026-02-01T00:00:00.000Z",
  },
  {
    id: "demo-figma",
    user_id: "demo-user",
    name: "Figma Professional",
    category: "Design",
    monthly_cost: 60,
    billing_cycle: "monthly",
    renewal_date: new Date(Date.now() + 20 * 86400000).toISOString().split("T")[0],
    status: "active",
    description: "4 UI/UX editor seats for product design team.",
    last_used: new Date().toISOString().split("T")[0],
    created_at: "2026-01-10T00:00:00.000Z",
  },
  {
    id: "demo-adobe",
    user_id: "demo-user",
    name: "Adobe Creative Cloud",
    category: "Design",
    monthly_cost: 89.99,
    billing_cycle: "monthly",
    renewal_date: new Date(Date.now() + 4 * 86400000).toISOString().split("T")[0],
    status: "unused",
    description: "Photoshop & Illustrator seats unused for 75+ days.",
    last_used: new Date(Date.now() - 75 * 86400000).toISOString().split("T")[0],
    created_at: "2025-11-20T00:00:00.000Z",
  },
  {
    id: "demo-aws",
    user_id: "demo-user",
    name: "AWS Production Cloud",
    category: "Infrastructure",
    monthly_cost: 450,
    billing_cycle: "monthly",
    renewal_date: new Date(Date.now() + 28 * 86400000).toISOString().split("T")[0],
    status: "active",
    description: "EC2, S3 buckets, RDS PostgreSQL database, and CloudFront CDN.",
    last_used: new Date().toISOString().split("T")[0],
    created_at: "2025-08-01T00:00:00.000Z",
  },
  {
    id: "demo-chatgpt",
    user_id: "demo-user",
    name: "ChatGPT Team Plan",
    category: "Productivity",
    monthly_cost: 60,
    billing_cycle: "monthly",
    renewal_date: new Date(Date.now() + 18 * 86400000).toISOString().split("T")[0],
    status: "active",
    description: "2 seats for developer AI code generation & drafting.",
    last_used: new Date().toISOString().split("T")[0],
    created_at: "2026-02-15T00:00:00.000Z",
  },
];

// Detect Duplicate software in the same category
export function findDuplicates(subscriptions: Subscription[]): Subscription[] {
  const categoryMap = new Map<string, Subscription[]>();

  subscriptions.forEach((sub) => {
    if (sub.status === "cancelled") return;
    const cat = sub.category.toLowerCase().trim();
    if (!categoryMap.has(cat)) {
      categoryMap.set(cat, []);
    }
    categoryMap.get(cat)!.push(sub);
  });

  const duplicates: Subscription[] = [];
  categoryMap.forEach((subs) => {
    if (subs.length > 1) {
      // Sort by cost descending (keep highest cost or active, mark lower/redundant as duplicates)
      const sorted = [...subs].sort((a, b) => b.monthly_cost - a.monthly_cost);
      sorted.slice(1).forEach((sub) => {
        duplicates.push({ ...sub, status: "duplicate" });
      });
    }
  });

  return duplicates;
}

// Find tools unused for over 60 days
export function findUnused(subscriptions: Subscription[]): Subscription[] {
  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  return subscriptions.filter((sub) => {
    if (sub.status === "cancelled") return false;
    if (!sub.last_used) return true; // If never logged as used
    const lastUsedDate = new Date(sub.last_used);
    return lastUsedDate < sixtyDaysAgo;
  });
}

// Generate comprehensive waste report
export function generateWasteReport(subscriptions: Subscription[]): WasteReport {
  const activeSubs = subscriptions.filter((s) => s.status !== "cancelled");
  const totalMonthly = activeSubs.reduce((sum, s) => sum + Number(s.monthly_cost), 0);

  const duplicates = findDuplicates(subscriptions);
  const unused = findUnused(subscriptions);

  const duplicateCost = duplicates.reduce((sum, s) => sum + Number(s.monthly_cost), 0);
  const unusedCost = unused.reduce((sum, s) => sum + Number(s.monthly_cost), 0);

  // Avoid double counting if a sub is both unused and duplicate
  const duplicateIds = new Set(duplicates.map((d) => d.id));
  const unusedNotDuplicate = unused.filter((u) => !duplicateIds.has(u.id));
  const potentialSavings = duplicateCost + unusedNotDuplicate.reduce((sum, s) => sum + Number(s.monthly_cost), 0);

  const recommendations: Recommendation[] = [];

  // Group duplicate recommendations by category
  if (duplicates.length > 0) {
    const categories = Array.from(new Set(duplicates.map((d) => d.category)));
    categories.forEach((cat) => {
      const catSubs = activeSubs.filter((s) => s.category.toLowerCase() === cat.toLowerCase());
      const catDuplicates = duplicates.filter((d) => d.category.toLowerCase() === cat.toLowerCase());
      const savings = catDuplicates.reduce((sum, s) => sum + Number(s.monthly_cost), 0);
      recommendations.push({
        id: `rec-dup-${cat}`,
        type: "duplicate",
        title: `Redundant tools in ${cat}`,
        description: `You are currently paying for ${catSubs.length} overlapping tools (${catSubs.map((s) => s.name).join(", ")}). Standardizing on 1 tool can save money immediately.`,
        potential_savings: savings,
        subscriptions_involved: catSubs.map((s) => s.name),
      });
    });
  }

  // Unused recommendations
  if (unused.length > 0) {
    recommendations.push({
      id: "rec-unused-all",
      type: "unused",
      title: `${unused.length} Unused Subscriptions Detected`,
      description: `These tools haven't been accessed in 60+ days: ${unused.map((s) => s.name).join(", ")}. Consider pausing or canceling their seats.`,
      potential_savings: unusedCost,
      subscriptions_involved: unused.map((s) => s.name),
    });
  }

  return {
    total_monthly_spend: totalMonthly,
    total_annual_spend: totalMonthly * 12,
    potential_savings: potentialSavings,
    duplicate_count: duplicates.length,
    unused_count: unused.length,
    unused_monthly_cost: unusedCost,
    recommendations,
  };
}
