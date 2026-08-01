export interface Subscription {
  id: string;                    // Unique ID
  user_id: string;               // Owner ID
  name: string;                  // Software name (e.g., Zoom, Slack)
  category: string;              // Category (e.g., Communication, Design)
  monthly_cost: number;          // Cost per month
  billing_cycle: "monthly" | "yearly" | "quarterly";  // Payment frequency
  renewal_date: string;          // Next payment date (YYYY-MM-DD)
  status: "active" | "unused" | "duplicate" | "cancelled";  // Status
  last_used?: string;             // Last usage date
  start_date?: string;            // Subscription inception date
  seats?: number;                 // Active seats count
  description?: string;          // Extra notes
  invoice_url?: string;          // Invoice PDF URL from Cloudflare R2
  created_at: string;            // Timestamp
}

export interface WasteReport {
  total_monthly_spend: number;   // Combined monthly spend
  total_annual_spend: number;    // Combined annual spend
  potential_savings: number;     // Total reducible waste
  duplicate_count: number;       // Number of duplicate tools
  unused_count: number;          // Number of unused tools
  unused_monthly_cost: number;   // Monthly spend on unused tools
  recommendations: Recommendation[];  // Actionable advice
}

export interface Recommendation {
  id?: string;
  type: "duplicate" | "unused" | "overpriced";
  title: string;
  description: string;
  potential_savings: number;
  subscriptions_involved: string[];
}
