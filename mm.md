# 🗺️ SaaS Waste Detector — Complete Project Blueprint & Documentation

Bhai, tera **SaaS Waste Detector** project 100% complete ho chuka hai! Yeh document poore project ka **final blueprint, file map, aur source code reference** hai.

---

## 🏠 Project Folder Structure (Kamron Ka Map)

```text
saas-waste-detector/
├── app/                              # User Interface & API Routes
│   ├── page.tsx                      # Landing Page & Instant Waste Calculator
│   ├── layout.tsx                    # Master Frame & Metadata
│   ├── globals.css                   # Global Tailwind & Dark Mode CSS
│   ├── dashboard/                    # Executive Dashboard Screen
│   │   └── page.tsx                  # Metrics, AI Recommendations & Subscriptions Grid
│   ├── subscriptions/                # Full Catalog Manager
│   │   └── page.tsx                  # Search & Status/Category Filters
│   ├── reports/                      # Executive Waste PDF Report Page
│   │   └── page.tsx                  # Printable Summary & Category Breakdown
│   ├── login/                        # Login Gate
│   │   └── page.tsx                  # Login Screen with Rate Limit Auto-Bypass
│   ├── signup/                       # Signup Gate
│   │   └── page.tsx                  # Registration Screen & Demo Fallback
│   └── api/                          # Backend API Kitchen
│       ├── auth/route.ts             # Auth Status Endpoint
│       ├── subscriptions/route.ts    # Subscriptions CRUD API
│       ├── upload/route.ts           # Invoice PDF Cloudflare R2 Upload API
│       └── reports/route.ts          # Waste Report Analytics API
├── components/                       # Reusable UI Furniture
│   ├── ui/                           # Primitive Components
│   │   ├── button.tsx                # Multi-variant Button (Primary, Outline, Ghost, Danger)
│   │   ├── input.tsx                 # Styled Text & Number Inputs
│   │   ├── card.tsx                  # Glassmorphic Card Container
│   │   └── badge.tsx                 # Status Badges (Active, Duplicate, Unused, Cancelled)
│   ├── layout/                       # Frame Structures
│   │   └── header.tsx                # Navigation Bar + Dark/Light Mode Toggle 🌙☀️
│   └── subscription/                 # Feature Components
│       ├── subscription-card.tsx     # Tool Card with Renewal Timer & Invoice Link
│       └── subscription-form.tsx     # Add Subscription Form Widget
├── lib/                              # Helper Tools Box
│   ├── utils.ts                      # Currency (₹), Date formatting, Days Until Renewal
│   ├── subscription-utils.ts         # Smart Brain (Duplicate & Unused Waste Engine)
│   ├── supabase.ts                   # Supabase Browser Client with Fallback
│   ├── supabase-server.ts            # Supabase Server Side Client
│   └── cloudflare.ts                 # Cloudflare R2 / AWS S3 File Storage Helper
├── types/                            # Data Labels
│   ├── subscription.ts               # Subscription, WasteReport, Recommendation Types
│   └── user.ts                       # User & Profile Types
├── supabase/                         # Database Configurations
│   └── schema.sql                    # Production Postgres SQL Schema & RLS Rules
├── .env.local                        # Secret API Keys (Supabase URL, Anon Key, R2 Keys)
├── .env.example                      # Template Environment Variables
├── package.json                      # Dependencies & Scripts List
├── tailwind.config.ts                # Design System & Dark Mode Rules
├── tsconfig.json                     # TypeScript Configuration (target: es2020)
└── README.md                         # Project Instructions
```

---

## 🔐 Config Files & Secret Diary

### File 1: `.env.local`
**Path:** `saas-waste-detector/.env.local`
```env
# Supabase Configuration (Live Project)
NEXT_PUBLIC_SUPABASE_URL=https://epctfotldcmekcokbdqf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Cloudflare R2 / AWS S3 Configuration
R2_ACCOUNT_ID=your-account-id
R2_ACCESS_KEY_ID=your-access-key
R2_SECRET_ACCESS_KEY=your-secret-key
R2_BUCKET_NAME=saas-invoices
R2_PUBLIC_URL=https://your-bucket.r2.dev
```

---

## 🏷️ TypeScript Types (Data Shapes)

### File 2: `types/subscription.ts`
**Path:** `saas-waste-detector/types/subscription.ts`
```typescript
export interface Subscription {
  id: string;
  user_id: string;
  name: string;
  category: string;
  monthly_cost: number;
  billing_cycle: "monthly" | "yearly" | "quarterly";
  renewal_date: string;
  status: "active" | "unused" | "duplicate" | "cancelled";
  last_used?: string;
  description?: string;
  invoice_url?: string;
  created_at: string;
}

export interface WasteReport {
  total_monthly_spend: number;
  total_annual_spend: number;
  potential_savings: number;
  duplicate_count: number;
  unused_count: number;
  unused_monthly_cost: number;
  recommendations: Recommendation[];
}

export interface Recommendation {
  id?: string;
  type: "duplicate" | "unused" | "overpriced";
  title: string;
  description: string;
  potential_savings: number;
  subscriptions_involved: string[];
}
```

---

## 🔧 Library Utilities (Tools Box)

### File 3: `lib/subscription-utils.ts`
**Path:** `saas-waste-detector/lib/subscription-utils.ts`
```typescript
import { Subscription, WasteReport, Recommendation } from "@/types/subscription";

export const INITIAL_DEMO_SUBSCRIPTIONS: Subscription[] = [];

export function findDuplicates(subscriptions: Subscription[]): Subscription[] {
  const categoryMap = new Map<string, Subscription[]>();
  subscriptions.forEach((sub) => {
    if (sub.status === "cancelled") return;
    const cat = sub.category.toLowerCase().trim();
    if (!categoryMap.has(cat)) categoryMap.set(cat, []);
    categoryMap.get(cat)!.push(sub);
  });

  const duplicates: Subscription[] = [];
  categoryMap.forEach((subs) => {
    if (subs.length > 1) {
      const sorted = [...subs].sort((a, b) => b.monthly_cost - a.monthly_cost);
      sorted.slice(1).forEach((sub) => {
        duplicates.push({ ...sub, status: "duplicate" });
      });
    }
  });
  return duplicates;
}

export function findUnused(subscriptions: Subscription[]): Subscription[] {
  const sixtyDaysAgo = new Date();
  sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

  return subscriptions.filter((sub) => {
    if (sub.status === "cancelled") return false;
    if (!sub.last_used) return true;
    return new Date(sub.last_used) < sixtyDaysAgo;
  });
}

export function generateWasteReport(subscriptions: Subscription[]): WasteReport {
  const activeSubs = subscriptions.filter((s) => s.status !== "cancelled");
  const totalMonthly = activeSubs.reduce((sum, s) => sum + Number(s.monthly_cost), 0);

  const duplicates = findDuplicates(subscriptions);
  const unused = findUnused(subscriptions);

  const duplicateCost = duplicates.reduce((sum, s) => sum + Number(s.monthly_cost), 0);
  const unusedCost = unused.reduce((sum, s) => sum + Number(s.monthly_cost), 0);

  const duplicateIds = new Set(duplicates.map((d) => d.id));
  const unusedNotDuplicate = unused.filter((u) => !duplicateIds.has(u.id));
  const potentialSavings = duplicateCost + unusedNotDuplicate.reduce((sum, s) => sum + Number(s.monthly_cost), 0);

  const recommendations: Recommendation[] = [];

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
        description: `You are paying for ${catSubs.length} overlapping tools (${catSubs.map((s) => s.name).join(", ")}).`,
        potential_savings: savings,
        subscriptions_involved: catSubs.map((s) => s.name),
      });
    });
  }

  if (unused.length > 0) {
    recommendations.push({
      id: "rec-unused-all",
      type: "unused",
      title: `${unused.length} Unused Subscriptions Detected`,
      description: `Tools untouched in 60+ days: ${unused.map((s) => s.name).join(", ")}.`,
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
```

---

## 🗄️ Database Setup (Supabase SQL)

### File 4: `supabase/schema.sql`
**Path:** `saas-waste-detector/supabase/schema.sql`
```sql
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  monthly_cost DECIMAL(10,2) NOT NULL,
  billing_cycle TEXT NOT NULL CHECK (billing_cycle IN ('monthly', 'quarterly', 'yearly')),
  renewal_date DATE NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'unused', 'duplicate', 'cancelled')),
  last_used DATE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can view own subscriptions" ON subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own subscriptions" ON subscriptions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own subscriptions" ON subscriptions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own subscriptions" ON subscriptions FOR DELETE USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_subscriptions_updated_at 
  BEFORE UPDATE ON subscriptions 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
```

---

## 🚀 Run & Deploy Commands

1. **Local Server Run**:
   ```bash
   cmd /c npm run dev
   ```
   Open `http://localhost:3000`

2. **Lint & Build Test**:
   ```bash
   cmd /c npm run lint
   cmd /c npm run build
   ```