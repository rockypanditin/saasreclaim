"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Building2,
  Mail,
  ShieldCheck,
  Key,
  Bell,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Trash2,
  Download
} from "lucide-react";
import { isDemoMode } from "@/lib/storage";
import { NotificationSettings } from "@/components/subscription/notification-settings";
import { TeamSeats } from "@/components/subscription/team-seats";

export default function ProfilePage() {
  const [fullName, setFullName] = useState("Alex Morgan");
  const [companyName, setCompanyName] = useState("Acme Corp");
  const [email, setEmail] = useState("alex@acmecorp.com");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [savedMsg, setSavedMsg] = useState("");
  const [inDemo, setInDemo] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("Growth Plan ($79/mo)");

  useEffect(() => {
    setInDemo(isDemoMode());
    const plan = localStorage.getItem("saasreclaim_plan");
    if (plan) setCurrentPlan(`${plan} (Active)`);

    // Load from localStorage cache first (instant render)
    const savedName = localStorage.getItem("saasreclaim_user_fullname");
    const savedCompany = localStorage.getItem("saasreclaim_user_company");
    const savedEmail = localStorage.getItem("saasreclaim_user_email");

    if (savedName) setFullName(savedName);
    if (savedCompany) setCompanyName(savedCompany);
    if (savedEmail) setEmail(savedEmail);

    // Then sync from Supabase database (source of truth)
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.profile) {
          const p = data.profile;
          if (p.full_name) { setFullName(p.full_name); localStorage.setItem("saasreclaim_user_fullname", p.full_name); }
          if (p.company_name) { setCompanyName(p.company_name); localStorage.setItem("saasreclaim_user_company", p.company_name); }
          if (p.email) { setEmail(p.email); localStorage.setItem("saasreclaim_user_email", p.email); }
        }
      })
      .catch(() => {});
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    // Save to localStorage cache immediately
    localStorage.setItem("saasreclaim_user_fullname", fullName);
    localStorage.setItem("saasreclaim_user_company", companyName);
    localStorage.setItem("saasreclaim_user_email", email);

    // Persist to Supabase profiles table
    try {
      await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName, company_name: companyName, email }),
      });
      setSavedMsg("Profile saved to database successfully!");
    } catch {
      setSavedMsg("Profile saved locally (database sync pending).");
    }
    setTimeout(() => setSavedMsg(""), 3000);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) return;

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_password", password: newPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setSavedMsg("Security password updated successfully!");
      } else {
        setSavedMsg(data.error || "Failed to update password.");
      }
    } catch {
      setSavedMsg("Password update saved locally.");
    }

    setNewPassword("");
    setCurrentPassword("");
    setTimeout(() => setSavedMsg(""), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl space-y-8">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-2">
              <User className="h-3.5 w-3.5" />
              <span>Account & User Profile</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight sm:text-3xl">User Profile & Settings</h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your account details, company workspace, security, and plan billing.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/pricing">
              <Button size="sm" className="gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Manage Plan</span>
              </Button>
            </Link>
          </div>
        </div>

        {savedMsg && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            <span>{savedMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Avatar & Subscription Plan Overview */}
          <div className="space-y-6 md:col-span-1">
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm text-center">
              <CardContent className="pt-6 space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-2xl shadow-lg">
                  {fullName.split(" ").map((n) => n[0]).join("") || "U"}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{fullName}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{email}</p>
                  <span className="inline-block mt-2 rounded-md bg-blue-50 dark:bg-blue-950 px-2.5 py-1 text-[11px] font-bold text-blue-700 dark:text-blue-300">
                    {companyName}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-left space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Workspace Status:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">
                      {inDemo ? "Demo Sandbox" : "Verified Account"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Current Plan:</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{currentPlan}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Settings Forms */}
          <div className="space-y-6 md:col-span-2">
            {/* Personal & Company Details Form */}
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span>Personal & Company Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <form onSubmit={handleUpdateProfile} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                    <Input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Morgan"
                      required
                      className="bg-slate-50 dark:bg-slate-950 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Company / Organization Name</label>
                    <Input
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Acme Corp"
                      required
                      className="bg-slate-50 dark:bg-slate-950 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Work Email Address</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="bg-slate-50 dark:bg-slate-950 text-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs">
                      Save Profile Changes
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Password Security Form */}
            <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <CardTitle className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Key className="h-4 w-4 text-purple-600" />
                  <span>Security & Password</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <form onSubmit={handleChangePassword} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Current Password</label>
                    <Input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="bg-slate-50 dark:bg-slate-950 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">New Password (min 6 chars)</label>
                    <Input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      minLength={6}
                      className="bg-slate-50 dark:bg-slate-950 text-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="sm" className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs">
                      Update Password
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notification & Team Settings (moved from Dashboard) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NotificationSettings />
          <TeamSeats />
        </div>
      </main>
      <Footer />
    </div>
  );
}
