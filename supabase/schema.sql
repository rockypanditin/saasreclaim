-- Supabase SQL Database Setup Schema for SaaS Waste Detector

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  company_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Subscriptions Table
CREATE TABLE IF NOT EXISTS subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
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

-- 3. Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies for Profiles
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- 5. RLS Policies for Subscriptions
DROP POLICY IF EXISTS "Users can view own subscriptions" ON subscriptions;
CREATE POLICY "Users can view own subscriptions" ON subscriptions FOR SELECT USING (auth.uid() = user_id OR auth.uid() IS NULL);

DROP POLICY IF EXISTS "Users can insert own subscriptions" ON subscriptions;
CREATE POLICY "Users can insert own subscriptions" ON subscriptions FOR INSERT WITH CHECK (auth.uid() = user_id OR auth.uid() IS NULL);

DROP POLICY IF EXISTS "Users can update own subscriptions" ON subscriptions;
CREATE POLICY "Users can update own subscriptions" ON subscriptions FOR UPDATE USING (auth.uid() = user_id OR auth.uid() IS NULL);

DROP POLICY IF EXISTS "Users can delete own subscriptions" ON subscriptions;
CREATE POLICY "Users can delete own subscriptions" ON subscriptions FOR DELETE USING (auth.uid() = user_id OR auth.uid() IS NULL);

-- 6. Automatic Profile Creation Trigger on Auth Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, company_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Alex Morgan'),
    COALESCE(NEW.raw_user_meta_data->>'company_name', 'Acme Corp')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 7. Auto Trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_subscriptions_updated_at ON subscriptions;
CREATE TRIGGER update_subscriptions_updated_at 
  BEFORE UPDATE ON subscriptions 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- 8. SaaS Master Catalog Table (500+ Tools Database)
CREATE TABLE IF NOT EXISTS saas_catalog (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  icon_text TEXT NOT NULL,
  icon_bg TEXT NOT NULL,
  default_plan TEXT NOT NULL,
  plans JSONB NOT NULL DEFAULT '[]'::jsonb,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE saas_catalog ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public catalog read access" ON saas_catalog;
CREATE POLICY "Public catalog read access" ON saas_catalog FOR SELECT USING (true);

-- 9. Waste Audit Reports Database Table
CREATE TABLE IF NOT EXISTS waste_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  total_monthly_spend DECIMAL(10,2) NOT NULL,
  total_annual_spend DECIMAL(10,2) NOT NULL,
  potential_savings DECIMAL(10,2) NOT NULL,
  duplicate_count INT NOT NULL DEFAULT 0,
  unused_count INT NOT NULL DEFAULT 0,
  recommendations JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE waste_reports ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own waste reports" ON waste_reports;
CREATE POLICY "Users can view own waste reports" ON waste_reports FOR SELECT USING (auth.uid() = user_id OR auth.uid() IS NULL);
DROP POLICY IF EXISTS "Users can create own waste reports" ON waste_reports;
CREATE POLICY "Users can create own waste reports" ON waste_reports FOR INSERT WITH CHECK (auth.uid() = user_id OR auth.uid() IS NULL);

-- 10. Team Seats & Member Allocation Database Table
CREATE TABLE IF NOT EXISTS team_seats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  subscription_name TEXT NOT NULL,
  member_name TEXT NOT NULL,
  member_email TEXT NOT NULL,
  department TEXT NOT NULL DEFAULT 'General',
  role TEXT NOT NULL DEFAULT 'User',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE team_seats ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own team seats" ON team_seats;
CREATE POLICY "Users can view own team seats" ON team_seats FOR SELECT USING (auth.uid() = user_id OR auth.uid() IS NULL);
DROP POLICY IF EXISTS "Users can manage own team seats" ON team_seats;
CREATE POLICY "Users can manage own team seats" ON team_seats FOR ALL USING (auth.uid() = user_id OR auth.uid() IS NULL);


