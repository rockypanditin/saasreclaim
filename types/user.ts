export interface User {
  id: string;
  email: string;
  full_name?: string;
  company_name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  company_name: string;
  subscription_count: number;
  monthly_spend: number;
}
