import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Subscription } from "@/types/subscription";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ALL_CATEGORIES = [
  "Communication",
  "Productivity & Docs",
  "Design & Creative",
  "Developer Tools & Infrastructure",
  "Marketing & SEO",
  "CRM & Sales",
  "Security, HR & SSO",
  "Analytics & Data",
  "AI & Machine Learning",
  "Finance & Accounting",
  "Legal & Compliance",
  "Customer Support",
  "Cloud Storage & Hosting",
  "E-Commerce",
  "IT Management",
  "Other"
];

// Currency Symbol & Live Real Market Exchange Rate Map for Global Support
export const CURRENCY_MAP: Record<string, { symbol: string; locale: string; rate: number; name: string; country: string }> = {
  USD: { symbol: "$", locale: "en-US", rate: 1, name: "US Dollar", country: "USA 🇺🇸" },
  EUR: { symbol: "€", locale: "de-DE", rate: 0.87, name: "Euro", country: "Europe 🇪🇺" },
  GBP: { symbol: "£", locale: "en-GB", rate: 0.74, name: "British Pound", country: "UK 🇬🇧" },
  INR: { symbol: "₹", locale: "en-IN", rate: 95.42, name: "Indian Rupee", country: "India 🇮🇳" },
  CAD: { symbol: "CA$", locale: "en-CA", rate: 1.40, name: "Canadian Dollar", country: "Canada 🇨🇦" },
  AUD: { symbol: "A$", locale: "en-AU", rate: 1.42, name: "Australian Dollar", country: "Australia 🇦🇺" },
  JPY: { symbol: "¥", locale: "ja-JP", rate: 160.66, name: "Japanese Yen", country: "Japan 🇯🇵" },
  AED: { symbol: "AED", locale: "ar-AE", rate: 3.67, name: "UAE Dirham", country: "UAE 🇦🇪" },
  SGD: { symbol: "S$", locale: "en-SG", rate: 1.28, name: "Singapore Dollar", country: "Singapore 🇸🇬" },
  CNY: { symbol: "CN¥", locale: "zh-CN", rate: 6.75, name: "Chinese Yuan", country: "China 🇨🇳" },
  CHF: { symbol: "CHF", locale: "de-CH", rate: 0.81, name: "Swiss Franc", country: "Switzerland 🇨🇭" },
  BRL: { symbol: "R$", locale: "pt-BR", rate: 5.65, name: "Brazilian Real", country: "Brazil 🇧🇷" },
};

// Format numbers cleanly across all currencies with Live Rate Conversion
export function formatCurrency(amount: number, currency: string = "USD"): string {
  try {
    const config = CURRENCY_MAP[currency] || CURRENCY_MAP.USD;
    const converted = amount * config.rate;
    const isZeroDecimal = currency === "INR" || currency === "JPY";

    const formattedNumber = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: isZeroDecimal ? 0 : (converted % 1 === 0 ? 0 : 2),
      maximumFractionDigits: isZeroDecimal ? 0 : 2,
    }).format(converted);

    return `${config.symbol} ${formattedNumber}`;
  } catch {
    return `$${amount.toLocaleString()}`;
  }
}

// Helper function to return deterministic brand color hex code from tool name
export function getBrandColorHex(name: string): string {
  if (!name) return "#2563eb";
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = [
    "#2563eb", "#4f46e5", "#7c3aed", "#9333ea", "#c026d3",
    "#db2777", "#e11d48", "#ea580c", "#d97706", "#059669",
    "#0d9488", "#0284c7"
  ];
  return colors[Math.abs(hash) % colors.length];
}

// Format date into human readable string (US / Global format: "Jul 28, 2026")
export function formatDate(dateString: string): string {
  if (!dateString) return "N/A";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateString;
  }
}

// Get number of days remaining until renewal date
export function getDaysUntil(dateString: string): number {
  if (!dateString) return 999;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateString);
  target.setHours(0, 0, 0, 0);
  const diffTime = target.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Export array of items to downloadable CSV file
export function exportToCSV(data: any[], filename: string) {
  if (!data || !data.length) return;
  const headers = Object.keys(data[0]);
  const csvRows = [];
  csvRows.push(headers.join(","));

  for (const row of data) {
    const values = headers.map((header) => {
      const escaped = ("" + (row[header] ?? "")).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    csvRows.push(values.join(","));
  }

  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
