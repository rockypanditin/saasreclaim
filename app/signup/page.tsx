"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { setDemoMode, clearUserWorkspace } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert, CheckCircle } from "lucide-react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Set real user account mode
    setDemoMode(false);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company_name: companyName,
          },
        },
      });

      if (signUpError) {
        if (signUpError.message.toLowerCase().includes("rate limit")) {
          setError("Supabase email rate limit reached. Please wait 60 seconds before trying again, or click 'Direct Demo Mode Access' below.");
        } else {
          setError(signUpError.message);
        }
      } else {
        localStorage.setItem("saasreclaim_user_email", email);
        localStorage.setItem("saasreclaim_user_fullname", fullName);
        localStorage.setItem("saasreclaim_user_company", companyName);
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Unable to connect to authentication server. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoAccess = () => {
    setDemoMode(true);
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4 text-slate-100">
      <div className="w-full max-w-md space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-xl">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SaaSReclaim</span>
          </Link>
          <h2 className="text-2xl font-extrabold text-white">Create Account</h2>
          <p className="mt-2 text-xs text-slate-400">Start auditing subscriptions and saving money</p>
        </div>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          {error && (
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-400">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300">Full Name</label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Alex Morgan"
              required
              className="mt-1 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300">Company Name</label>
            <Input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Acme Corp"
              required
              className="mt-1 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300">Work Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="mt-1 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 6 characters"
              required
              minLength={6}
              className="mt-1 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5">
            {loading ? "Creating..." : "Create Account & Start Audit"}
          </Button>

          <button
            type="button"
            onClick={handleDemoAccess}
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-blue-500/40 bg-blue-500/10 py-2.5 text-xs font-semibold text-blue-400 hover:bg-blue-500/20 transition-colors"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Direct Demo Mode Access</span>
          </button>
        </form>

        <p className="text-center text-xs text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
