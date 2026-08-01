"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { setDemoMode } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert, ArrowRight, CheckCircle } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forgotMode, setForgotMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Real user login mode
    setDemoMode(false);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.toLowerCase().includes("rate limit")) {
          setError("Rate limit reached. Please wait 60 seconds before trying again, or use 'Direct Demo Access'.");
        } else {
          setError(error.message);
        }
      } else {
        localStorage.setItem("saasreclaim_user_email", email);
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Unable to authenticate. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoBypass = () => {
    setDemoMode(true);
    router.push("/dashboard");
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError("Please enter your email address."); return; }
    setLoading(true);
    setError("");
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/login`,
      });
      if (error) {
        setError(error.message);
      } else {
        setResetSent(true);
      }
    } catch {
      setError("Unable to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <h2 className="text-2xl font-extrabold text-white">Welcome Back</h2>
          <p className="mt-2 text-xs text-slate-400">Log in to audit your team&apos;s software spend</p>
        </div>

        {forgotMode ? (
          <form onSubmit={handleForgotPassword} className="mt-6 space-y-5">
            {error && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-400">
                {error}
              </div>
            )}

            {resetSent ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center space-y-2">
                <CheckCircle className="h-8 w-8 text-emerald-400 mx-auto" />
                <p className="text-sm font-bold text-emerald-400">Password Reset Email Sent!</p>
                <p className="text-xs text-slate-400">Check your inbox at <strong className="text-white">{email}</strong> for the reset link.</p>
              </div>
            ) : (
              <>
                <p className="text-xs text-slate-400">Enter your email address and we&apos;ll send you a password reset link.</p>
                <div>
                  <label className="block text-xs font-semibold text-slate-300">Email address</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="mt-1 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5">
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
              </>
            )}

            <button
              type="button"
              onClick={() => { setForgotMode(false); setResetSent(false); setError(""); }}
              className="w-full text-xs text-blue-400 hover:underline font-semibold"
            >
              ← Back to Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="mt-6 space-y-5">
            {error && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-400">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-300">Email address</label>
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
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-300">Password</label>
                <button
                  type="button"
                  onClick={() => { setForgotMode(true); setError(""); }}
                  className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="mt-1 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5">
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            <div className="pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={handleDemoBypass}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-dashed border-blue-500/40 bg-blue-500/10 py-2.5 text-xs font-semibold text-blue-400 hover:bg-blue-500/20 transition-colors"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Instant Demo Mode Access (No Auth Required)</span>
              </button>
            </div>
          </form>
        )}

        <p className="text-center text-xs text-slate-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
