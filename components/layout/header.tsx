"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { getUserPlanInfo } from "@/lib/storage";
import { CURRENCY_MAP } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  ShieldAlert,
  LogOut,
  LayoutDashboard,
  ListFilter,
  FileBarChart2,
  Sparkles,
  Sun,
  Moon,
  Globe,
  Calendar,
  User,
  Menu,
  X
} from "lucide-react";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();

  const [darkMode, setDarkMode] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [activePlan, setActivePlan] = useState("Growth Plan");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Check initial dark mode preference
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Check saved currency preference & active plan
    const savedCurrency = localStorage.getItem("currency") || "USD";
    setCurrency(savedCurrency);

    const updatePlan = () => {
      const planInfo = getUserPlanInfo();
      if (planInfo.isTrial) {
        setActivePlan(`14-Day Trial (${planInfo.daysRemaining}d Left)`);
      } else {
        setActivePlan(planInfo.planName);
      }
    };

    updatePlan();
    const handlePlanChange = () => updatePlan();

    window.addEventListener("planChange", handlePlanChange);
    return () => window.removeEventListener("planChange", handlePlanChange);
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurr = e.target.value;
    setCurrency(newCurr);
    localStorage.setItem("currency", newCurr);
    window.dispatchEvent(new Event("currencyChange"));
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // Ignore
    }
    router.push("/login");
    router.refresh();
  };

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/subscriptions", label: "Subscriptions", icon: ListFilter },
    { href: "/reports", label: "Waste Reports", icon: FileBarChart2 },
    { href: "/calendar", label: "Renewal Calendar", icon: Calendar },
    { href: "/blog", label: "Guides & Blog", icon: Globe },
    { href: "/pricing", label: "Pricing & Plans", icon: Sparkles },
    { href: "/profile", label: "My Profile", icon: User },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-200">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -ml-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Link href="/dashboard" className="flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-90">
              <img
                src="/logo.png"
                alt="SaaSReclaim Logo"
                className="h-10 w-10 rounded-xl object-cover shadow-md shadow-blue-500/20 border border-blue-500/30 shrink-0"
              />
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight">SaaSReclaim</span>
                <span className="rounded-md bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider">AI</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.filter(l => l.href !== "/profile").map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20 font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Currency Switcher */}
            <div className="relative flex items-center">
              <Globe className="absolute left-2.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <select
                value={currency}
                onChange={handleCurrencyChange}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 pl-8 pr-2 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 focus:outline-none cursor-pointer"
                title="Select Currency"
              >
                {Object.entries(CURRENCY_MAP).map(([code, config]) => (
                  <option key={code} value={code}>
                    {code} ({config.symbol}) — {config.country}
                  </option>
                ))}
              </select>
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-slate-700" />}
            </button>

            {/* Active Plan Badge */}
            <Link href="/pricing" className="hidden lg:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors" title="Current Active Plan">
              <Sparkles className="h-3 w-3 text-amber-500" />
              <span>{activePlan}</span>
            </Link>

            <Link href="/profile" className="hidden xl:inline-flex">
              <Button size="sm" variant="outline" className="gap-1.5 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                <User className="h-3.5 w-3.5 text-blue-500" />
                <span>My Profile</span>
              </Button>
            </Link>

            <Link href="/pricing" className="hidden sm:inline-flex">
              <Button size="sm" className="gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Upgrade Plan</span>
              </Button>
            </Link>

            <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 px-2">
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Panel */}
          <nav className="absolute top-16 left-0 w-72 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl animate-in slide-in-from-left duration-200 rounded-br-2xl">
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <Link href="/pricing" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm gap-1.5 shadow-md">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                  <span>Upgrade Plan</span>
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="w-full gap-2 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900/50 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-sm"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
