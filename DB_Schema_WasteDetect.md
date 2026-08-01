# 🗄️ Database Schema Document
## WasteDetect — Complete Database Reference

---

## 1. Schema Overview

```
┌──────────────────────────────────────────────────────────────┐
│                         PUBLIC SCHEMA                         │
├──────────────────────────────────────────────────────────────┤
│  profiles          │  subscriptions      │  invoices        │
│  ─────────────     │  ──────────────     │  ─────────       │
│  id (PK)           │  id (PK)            │  id (PK)         │
│  email             │  user_id (FK)       │  subscription_id │
│  full_name         │  name               │  file_url        │
│  company_name      │  category           │  file_name       │
│  avatar_url        │  monthly_cost       │  amount          │
│  created_at        │  billing_cycle      │  invoice_date    │
│  updated_at        │  renewal_date       │  created_at      │
│                    │  status             │                  │
│                    │  last_used          │                  │
│                    │  description        │                  │
│                    │  created_at         │                  │
│                    │  updated_at         │                  │
└──────────────────────────────────────────────────────────────┘
```

---

## 2. Table: profiles

### Purpose
Stores user profile information linked to Supabase Auth.

### Columns
| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| id | UUID | NO | — | References auth.users.id |
| email | VARCHAR(255) | NO | — | User's email address |
| full_name | VARCHAR(100) | YES | NULL | Display name |
| company_name | VARCHAR(100) | YES | NULL | Company/organization name |
| avatar_url | TEXT | YES | NULL | Profile picture URL |
| created_at | TIMESTAMPTZ | NO | NOW() | Account creation timestamp |
| updated_at | TIMESTAMPTZ | NO | NOW() | Last update timestamp |

### Constraints
- PRIMARY KEY (id)
- FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE
- UNIQUE (email)

### RLS Policies
```sql
-- Users can only view their own profile
CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT USING (auth.uid() = id);

-- Users can only update their own profile
CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE USING (auth.uid() = id);

-- Users can insert their own profile (on signup)
CREATE POLICY "Users can insert own profile" 
  ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
```

### Sample Data
| id | email | full_name | company_name |
|----|-------|-----------|--------------|
| uuid-1 | rajesh@acme.com | Rajesh Sharma | Acme Pvt Ltd |
| uuid-2 | priya@tech.com | Priya Patel | Tech Solutions |

---

## 3. Table: subscriptions

### Purpose
Stores all software subscriptions tracked by users.

### Columns
| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| id | UUID | NO | gen_random_uuid() | Unique identifier |
| user_id | UUID | NO | — | Owner of the subscription |
| name | VARCHAR(100) | NO | — | Software name (e.g., "Zoom Pro") |
| category | VARCHAR(50) | NO | — | Category (e.g., "Communication") |
| monthly_cost | DECIMAL(10,2) | NO | — | Monthly cost in INR |
| billing_cycle | VARCHAR(20) | NO | — | monthly/quarterly/yearly |
| renewal_date | DATE | NO | — | Next payment date |
| status | VARCHAR(20) | NO | 'active' | active/unused/duplicate/cancelled |
| last_used | DATE | YES | NULL | Last time software was used |
| description | TEXT | YES | NULL | Additional notes |
| created_at | TIMESTAMPTZ | NO | NOW() | Creation timestamp |
| updated_at | TIMESTAMPTZ | NO | NOW() | Last update timestamp |

### Constraints
- PRIMARY KEY (id)
- FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
- CHECK (monthly_cost > 0)
- CHECK (billing_cycle IN ('monthly', 'quarterly', 'yearly'))
- CHECK (status IN ('active', 'unused', 'duplicate', 'cancelled'))

### Indexes
```sql
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_renewal ON subscriptions(renewal_date);
CREATE INDEX idx_subscriptions_category ON subscriptions(category);
```

### RLS Policies
```sql
CREATE POLICY "Users can view own subscriptions" 
  ON subscriptions FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscriptions" 
  ON subscriptions FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions" 
  ON subscriptions FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own subscriptions" 
  ON subscriptions FOR DELETE USING (auth.uid() = user_id);
```

### Sample Data
| id | user_id | name | category | monthly_cost | billing_cycle | renewal_date | status |
|----|---------|------|----------|--------------|---------------|--------------|--------|
| uuid-a | uuid-1 | Zoom Pro | Communication | 1500 | monthly | 2026-08-15 | active |
| uuid-b | uuid-1 | Google Meet | Communication | 800 | monthly | 2026-08-20 | duplicate |
| uuid-c | uuid-1 | Canva Pro | Design | 1200 | yearly | 2027-01-10 | active |
| uuid-d | uuid-1 | Adobe XD | Design | 2000 | monthly | 2026-09-01 | unused |

---

## 4. Table: categories (Reference)

### Purpose
Predefined categories for subscription classification.

### Columns
| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| id | SERIAL | NO | — | Auto-increment ID |
| name | VARCHAR(50) | NO | — | Category name |
| icon | VARCHAR(50) | YES | NULL | Lucide icon identifier |

### Sample Data
| id | name | icon |
|----|------|------|
| 1 | Communication | MessageCircle |
| 2 | Design | Palette |
| 3 | Development | Code |
| 4 | Marketing | Megaphone |
| 5 | Finance | DollarSign |
| 6 | HR | Users |
| 7 | Sales | TrendingUp |
| 8 | Productivity | CheckSquare |
| 9 | Security | Shield |
| 10 | Other | Box |

---

## 5. Table: invoices (Future)

### Purpose
Stores uploaded invoice files linked to subscriptions.

### Columns
| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| id | UUID | NO | gen_random_uuid() | Unique identifier |
| subscription_id | UUID | YES | NULL | Linked subscription |
| file_url | TEXT | NO | — | Cloudflare R2 file URL |
| file_name | VARCHAR(255) | NO | — | Original filename |
| amount | DECIMAL(10,2) | YES | NULL | Invoice amount |
| invoice_date | DATE | YES | NULL | Invoice date |
| created_at | TIMESTAMPTZ | NO | NOW() | Upload timestamp |

### Constraints
- PRIMARY KEY (id)
- FOREIGN KEY (subscription_id) REFERENCES subscriptions(id) ON DELETE SET NULL

---

## 6. Complete SQL Setup

```sql
-- ============================================
-- WASTEDETECT DATABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  full_name VARCHAR(100),
  company_name VARCHAR(100),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create subscriptions table
CREATE TABLE subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  monthly_cost DECIMAL(10,2) NOT NULL CHECK (monthly_cost > 0),
  billing_cycle VARCHAR(20) NOT NULL CHECK (billing_cycle IN ('monthly', 'quarterly', 'yearly')),
  renewal_date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unused', 'duplicate', 'cancelled')),
  last_used DATE,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create categories reference table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  icon VARCHAR(50)
);

-- 5. Insert default categories
INSERT INTO categories (name, icon) VALUES
  ('Communication', 'MessageCircle'),
  ('Design', 'Palette'),
  ('Development', 'Code'),
  ('Marketing', 'Megaphone'),
  ('Finance', 'DollarSign'),
  ('HR', 'Users'),
  ('Sales', 'TrendingUp'),
  ('Productivity', 'CheckSquare'),
  ('Security', 'Shield'),
  ('Other', 'Box');

-- 6. Create indexes
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_renewal ON subscriptions(renewal_date);
CREATE INDEX idx_subscriptions_category ON subscriptions(category);

-- 7. Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- 8. Create RLS policies
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own subscriptions" ON subscriptions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own subscriptions" ON subscriptions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own subscriptions" ON subscriptions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own subscriptions" ON subscriptions FOR DELETE USING (auth.uid() = user_id);

-- 9. Auto-update updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 10. Create profile on signup trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, company_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'company_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

## 7. Common Queries

### 7.1 Get user's subscriptions with stats
```sql
SELECT 
  s.*,
  c.name as category_name,
  c.icon as category_icon
FROM subscriptions s
LEFT JOIN categories c ON s.category = c.name
WHERE s.user_id = 'user-uuid-here'
ORDER BY s.created_at DESC;
```

### 7.2 Get dashboard stats
```sql
SELECT 
  COUNT(*) as total_subscriptions,
  SUM(monthly_cost) as total_monthly_spend,
  SUM(monthly_cost) * 12 as total_annual_spend,
  COUNT(*) FILTER (WHERE status = 'duplicate') as duplicate_count,
  COUNT(*) FILTER (WHERE status = 'unused') as unused_count,
  SUM(monthly_cost) FILTER (WHERE status IN ('duplicate', 'unused')) as potential_savings
FROM subscriptions
WHERE user_id = 'user-uuid-here';
```

### 7.3 Find duplicates by category
```sql
SELECT 
  category,
  COUNT(*) as tool_count,
  STRING_AGG(name, ', ') as tools,
  SUM(monthly_cost) as total_cost
FROM subscriptions
WHERE user_id = 'user-uuid-here' AND status = 'active'
GROUP BY category
HAVING COUNT(*) > 1;
```

### 7.4 Find upcoming renewals (next 7 days)
```sql
SELECT *
FROM subscriptions
WHERE user_id = 'user-uuid-here'
  AND renewal_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '7 days'
ORDER BY renewal_date;
```

---

*Document Version: 1.0*
*Created: July 2026*
*Database: PostgreSQL 15 (Supabase)*
