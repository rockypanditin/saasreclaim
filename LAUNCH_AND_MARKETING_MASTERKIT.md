# 🚀 WasteDetect — Launch, Database & Marketing Master Guide

Yeh **Master Guide** aapke **SaaS Waste Detector** project ko local setup karne, database activate karne, Vercel par host karne, aur Product Hunt & Social Media par launch karke **pehle 100 paying clients** pane ka complete step-by-step blueprint hai.

---

## 📌 STEP 1: Supabase Live Database Setup (5 Minutes)

Aapka database table script ready hai file: `supabase/schema.sql`.

### Setup Steps:
1. Open [https://supabase.com/dashboard](https://supabase.com/dashboard) aur apne project par login karein.
2. Left sidebar mein **SQL Editor** (⚡ icon) par click karein.
3. **New Query** (+ button) dabaayein.
4. Niche diya gaya code copy karke SQL Editor mein paste karein aur **RUN** (Ctrl + Enter) dabayein:

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
```

---

## 🌐 STEP 2: Free 1-Click Vercel Deployment (Public Live URL)

Vercel aapki website ko public internet URL (`https://wastedetect.vercel.app`) dega:

### Method A: Terminal Se Deploy Karein (Recommended)
1. Project terminal mein Command chalayein:
   ```bash
   npx vercel
   ```
2. Enter press karke default options accept karein.
3. Deployment ke baad Vercel Dashboard par jaakar **Environment Variables** add karein:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://epctfotldcmekcokbdqf.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1...`

---

## 🏆 STEP 3: Product Hunt Launch Post Copy

**Product Name:** WasteDetect — AI SaaS Waste & Duplicate License Detector  
**Tagline:** Stop Wasting 25-35% Money on Unused Software & Duplicate Tools  

### Product Hunt Description / First Maker Comment:
> 👋 Hey Product Hunt Community!
> 
> Did you know average companies burn 25-35% of their monthly budget paying for overlapping software? (e.g., Zoom + Google Meet, unassigned Adobe licenses, forgotten auto-renewals).
> 
> Enterprise solutions charge $20,000/year to fix this. We built **WasteDetect** for SMBs and startups to fix it for free!
> 
> ✨ **What WasteDetect does:**
> 1. 🔍 **Duplicate Finder:** Detects redundant tools in Communication, Design & Marketing.
> 2. ⏳ **Unused Seat Alerts:** Highlights tools untouched in 60+ days.
> 3. 📄 **AI Invoice Parser:** Drag & drop receipts to auto-extract renewal dates.
> 4. 💱 **Multi-Currency Support:** Instant USD ($), EUR (€), GBP (£), and global analytics.
> 
> Try it today 100% free with no credit card or bank login required!
> Would love your feedback and thoughts below! 👇

---

## 💼 STEP 4: LinkedIn 7-Day Content Schedule

### Post 1 (Monday — The Hook):
> Most 50-person startups are burning $650/month on software they don't even use.
>
> Examples:
> 1. Paying for Zoom Pro AND Google Workspace Meet.
> 2. 5 inactive Canva seats for ex-employees.
> 3. Forgotten $99/mo annual auto-renewals.
>
> We built a simple tool to audit your SaaS stack in under 3 minutes.
> Try WasteDetect free: [https://wastedetect.app]
> #SaaS #Finance #Startup #CostOptimization

### Post 2 (Wednesday — Build in Public):
> Why we built WasteDetect:
> Last month, an agency founder told us he discovered his team was paying for 3 separate video editing tools without knowing.
>
> That single duplicate cost him $400/year.
>
> That's why we created WasteDetect — to give founders total visibility over shadow IT.
> Audit your stack here: [https://wastedetect.app]

---

## 🐦 STEP 5: Twitter / X Launch Thread

> 🧵 1/5 Most companies are wasting 30% of their software budget. Here is a 3-minute checklist to audit your SaaS spend today 👇
>
> 2/5 Step 1: Check duplicate tools. Are you paying for Zoom + Meet? Canva + Photoshop? Pick ONE standard.
>
> 3/5 Step 2: Audit seats. Check when each team member last logged in. Revoke inactive seats 7 days before billing.
>
> 4/5 Step 3: Use an automated tool like WasteDetect to scan your subscriptions in real time.
>
> 5/5 Try WasteDetect free today: [https://wastedetect.app]

---

## 📧 STEP 6: Cold Email Outreach Template for CFOs / Founders

**Subject:** Quick question about {{Company_Name}}'s SaaS budget

> Hi {{First_Name}},
>
> Noticed {{Company_Name}} is growing fast. As teams scale, software spend usually inflates by 25-35% due to duplicate tools (e.g. Zoom + Meet) or unassigned seat licenses.
>
> We built **WasteDetect** to audit software stacks in under 3 minutes without requiring bank connections. Most 30-100 person teams uncover $450-$1,000 in instant monthly savings.
>
> Would you be open to running a free 2-minute audit for {{Company_Name}}?
>
> Best regards,  
> WasteDetect Team  
> [https://wastedetect.app]
