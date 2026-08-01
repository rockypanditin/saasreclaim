"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import {
  ArrowRight,
  TrendingDown,
  Sparkles,
  Zap,
  Layers,
  FileCheck,
  Calculator,
  ShieldCheck,
  BarChart3,
  Users,
  Globe,
  Sun,
  Moon,
  CheckCircle2,
  Play,
  Star,
  Lock,
  Award,
  Clock,
  ArrowUpRight,
  Shield,
  Fingerprint,
  BadgeCheck,
  HelpCircle,
  ChevronDown,
  Check,
  Building2,
  UserCheck,
  CreditCard,
  X,
  RefreshCw,
  Sliders,
  DollarSign,
  AlertTriangle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let frame = 0;
          const frames = 50;
          const step = target / frames;
          const interval = setInterval(() => {
            frame++;
            setCount(Math.min(Math.round(step * frame), target));
            if (frame >= frames) clearInterval(interval);
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{prefix}{count.toLocaleString()}{suffix}</div>;
}

export default function HomePage() {
  const [empCount, setEmpCount] = useState(25);
  const [isDark, setIsDark] = useState(true);
  const [annualBilling, setAnnualBilling] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currency, setCurrency] = useState("USD");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  /* ══ DEMO MODAL STATE ══ */
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(1);
  const [scanProgress, setScanProgress] = useState(0);
  const [reclaimedSeats, setReclaimedSeats] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");

    setCurrency(localStorage.getItem("currency") || "USD");

    // Load Razorpay Checkout SDK script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, [isDark]);

  // Demo scan progress simulator
  useEffect(() => {
    if (demoModalOpen && demoStep === 1) {
      setScanProgress(0);
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 180);
      return () => clearInterval(interval);
    }
  }, [demoModalOpen, demoStep]);

  const estimatedWaste = empCount * 25;

  /* ══ REAL PRICING PLANS FROM APP/PRICING/PAGE.TSX ══ */
  const realPlans = [
    {
      id: "starter",
      name: "Starter Audit",
      icon: UserCheck,
      priceMonthly: 29,
      priceAnnual: 24,
      description: "Ideal for early-stage startups and small teams looking to clean up software spend.",
      features: [
        "Track up to 25 software tools",
        "AI Invoice & CSV drag-and-drop parser",
        "Automated 7-day renewal email alerts",
        "Duplicate tool & inactive seat detection",
        "Export CSV & Executive PDF reports",
      ],
      cta: "Start 14-Day Free Trial",
      popular: false,
      badge: "Starter",
    },
    {
      id: "growth",
      name: "Growth Plan",
      icon: Zap,
      priceMonthly: 79,
      priceAnnual: 65,
      description: "Best for growing teams (15-100 employees) needing department controls & seat sharing.",
      features: [
        "Track UNLIMITED software subscriptions",
        "Team & Department seat sharing",
        "Slack & Email webhook renewal alerts",
        "Shadow IT & unapproved tool detection",
        "Multi-currency spend analytics (USD $, EUR €, GBP £)",
        "Priority 24/7 Customer Support",
      ],
      cta: "Upgrade to Growth",
      popular: true,
      badge: "Most Popular — Save 20%",
    },
    {
      id: "enterprise",
      name: "Enterprise Pro",
      icon: Building2,
      priceMonthly: 199,
      priceAnnual: 159,
      description: "For larger organizations requiring vendor negotiations, custom API access & SSO.",
      features: [
        "Everything in Growth Plan",
        "Dedicated SaaS Procurement Manager",
        "Vendor contract negotiation playbook",
        "SSO integration (Okta / Google Workspace)",
        "Custom REST API access & webhooks",
        "SLA & Dedicated Account Manager",
      ],
      cta: "Contact Sales / Upgrade",
      popular: false,
      badge: "Enterprise",
    },
  ];

  /* ══ REAL RAZORPAY CHECKOUT HANDLER ══ */
  const handleCheckout = async (planName: string, monthlyPrice: number) => {
    setCheckoutSuccess(false);
    const finalAmountToCharge = annualBilling ? monthlyPrice * 12 : monthlyPrice;
    const billingCycleText = annualBilling ? "(Annual Plan - 12 Months)" : "(Monthly Plan)";

    try {
      const activeCurrency = localStorage.getItem("currency") || "USD";
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: `${planName.toLowerCase().replace(/\s+/g, "_")}_${annualBilling ? "annual" : "monthly"}`,
          amount: finalAmountToCharge,
          currency: activeCurrency,
        }),
      });

      const data = await res.json();

      if (data.success && data.keyId && window.Razorpay) {
        const options = {
          key: data.keyId,
          amount: data.amount,
          currency: data.currency,
          name: "SaaSReclaim Audit",
          description: `${planName} ${billingCycleText}`,
          order_id: data.orderId,
          handler: function (response: any) {
            setCheckoutSuccess(true);
            const savedPlanTitle = `${planName} ${annualBilling ? "(Annual)" : "(Monthly)"}`;
            localStorage.setItem("saasreclaim_plan", savedPlanTitle);
            window.dispatchEvent(new Event("planChange"));
            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 1500);
          },
          prefill: {
            name: localStorage.getItem("saasreclaim_user_fullname") || "Alex Morgan",
            email: localStorage.getItem("saasreclaim_user_email") || "alex@acmecorp.com",
            contact: "9876543210",
          },
          theme: {
            color: "#2563eb",
          },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        window.location.href = "/pricing";
      }
    } catch {
      window.location.href = "/pricing";
    }
  };

  const faqs = [
    {
      q: "How fast will SaaSReclaim find savings for my company?",
      a: "Most teams uncover redundant tools or unassigned seats during their very first 3-minute CSV scan, saving an average of $450-$1,000 in their first month.",
    },
    {
      q: "Do I need to connect my company bank accounts?",
      a: "No! SaaSReclaim uses zero-bank-connection manual CSV uploads or AI receipt drag-and-drop to protect your financial credentials 100%.",
    },
    {
      q: "Can I switch or cancel my plan at any time?",
      a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time with 1-click inside your billing portal. No hidden cancellation fees.",
    },
    {
      q: "Do you support multiple currencies?",
      a: "Yes! SaaSReclaim supports USD ($), EUR (€), GBP (£), INR (₹), and global currency switching across all your metrics.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden selection:bg-blue-500 selection:text-white">

      {/* ═══ Animated Mesh Background ═══ */}
      <div className="fixed inset-0 -z-10 mesh-gradient transition-colors duration-500" />

      {/* ═══ Top Announcement Banner ═══ */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-2.5 text-center text-xs font-semibold tracking-wide text-white animate-fade-in-down overflow-hidden">
        <div className="absolute inset-0 animate-shimmer" />
        <span className="relative inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 animate-spin-slow" />
          <span>SaaSReclaim v2.4 — AI-Powered SaaS Spend Audit & License Optimization</span>
          <span className="hidden sm:inline-flex items-center gap-1 font-bold text-amber-300">
            Save up to 35% <ArrowRight className="h-3 w-3" />
          </span>
        </span>
      </div>

      {/* Checkout Success Notification */}
      {checkoutSuccess && (
        <div className="fixed top-20 right-5 z-50 animate-bounce-soft rounded-2xl bg-emerald-600 text-white px-6 py-4 shadow-2xl flex items-center gap-3 border border-emerald-400">
          <CheckCircle2 className="h-6 w-6" />
          <div>
            <h4 className="font-extrabold text-sm">Payment Successful!</h4>
            <p className="text-xs opacity-90">Redirecting you to your SaaSReclaim dashboard...</p>
          </div>
        </div>
      )}

      {/* ═══ INTERACTIVE PRODUCT TOUR LIVE DEMO MODAL ═══ */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 text-white shadow-2xl overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-xs">
                  AI
                </div>
                <div>
                  <h3 className="text-sm font-extrabold tracking-tight">SaaSReclaim Live Product Demo</h3>
                  <p className="text-[10px] text-slate-400">Step {demoStep} of 3 — Interactive Audit Preview</p>
                </div>
              </div>
              <button
                onClick={() => setDemoModalOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Step Indicators Bar */}
            <div className="grid grid-cols-3 border-b border-slate-800 text-[11px] font-bold text-center">
              <button
                onClick={() => setDemoStep(1)}
                className={`py-2.5 border-b-2 transition-colors ${demoStep === 1 ? "border-blue-500 text-blue-400 bg-blue-500/10" : "border-transparent text-slate-500"}`}
              >
                1. Stack AI Scan
              </button>
              <button
                onClick={() => setDemoStep(2)}
                className={`py-2.5 border-b-2 transition-colors ${demoStep === 2 ? "border-blue-500 text-blue-400 bg-blue-500/10" : "border-transparent text-slate-500"}`}
              >
                2. Seat Reclaim
              </button>
              <button
                onClick={() => setDemoStep(3)}
                className={`py-2.5 border-b-2 transition-colors ${demoStep === 3 ? "border-blue-500 text-blue-400 bg-blue-500/10" : "border-transparent text-slate-500"}`}
              >
                3. Executive PDF
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 min-h-[300px]">
              {/* STEP 1: SCANNER */}
              {demoStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                    <span className="flex items-center gap-2">
                      <RefreshCw className={`h-4 w-4 text-blue-400 ${scanProgress < 100 ? "animate-spin" : ""}`} />
                      Scanning Company SaaS Stack...
                    </span>
                    <span className="text-blue-400 font-mono">{scanProgress}%</span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 h-full transition-all duration-300"
                      style={{ width: `${scanProgress}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Zoom Pro Enterprise</span>
                      <span className="text-[10px] text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">OVERLAP</span>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Google Meet Suite</span>
                      <span className="text-[10px] text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">OVERLAP</span>
                    </div>
                  </div>

                  {scanProgress >= 100 && (
                    <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 flex items-start gap-3 animate-fade-in">
                      <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-extrabold text-red-300">Duplicate Tool Waste Detected!</h4>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          Paying for both Zoom ($1,200/yr) and Google Meet ($960/yr) across 40 users. Consolidating saves <strong>$1,200/yr</strong> instantly.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2: RECLAIM SEATS */}
              {demoStep === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold text-white">Unused Licenses & Inactive Seats</h4>
                      <p className="text-xs text-slate-400">Seats with 60+ days zero login activity</p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => setReclaimedSeats(!reclaimedSeats)}
                      className={`text-xs font-bold ${reclaimedSeats ? "bg-emerald-600 text-white" : "bg-blue-600 hover:bg-blue-500 text-white"}`}
                    >
                      {reclaimedSeats ? "✅ Reclaimed $1,840/yr" : "One-Click Reclaim Seats"}
                    </Button>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { name: "Figma Enterprise Seats", count: "8 Inactive Seats", cost: "$480/yr", status: reclaimedSeats ? "Revoked & Reclaimed" : "Idle 74 days" },
                      { name: "Adobe Creative Cloud", count: "4 Inactive Seats", cost: "$1,360/yr", status: reclaimedSeats ? "Revoked & Reclaimed" : "Idle 92 days" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-blue-400 font-bold text-xs">
                            {item.name[0]}
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">{item.name}</h5>
                            <p className="text-[10px] text-slate-400">{item.count}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-emerald-400">{item.cost}</span>
                          <p className={`text-[10px] font-semibold ${reclaimedSeats ? "text-emerald-400" : "text-amber-400"}`}>{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: EXECUTIVE PDF REPORT */}
              {demoStep === 3 && (
                <div className="space-y-6 text-center animate-fade-in">
                  <div className="mx-auto max-w-sm rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-slate-950 p-6">
                    <Award className="h-10 w-10 text-emerald-400 mx-auto mb-2" />
                    <h4 className="text-base font-black text-white">Total Annual Waste Cut</h4>
                    <div className="text-3xl font-black text-emerald-400 my-2">$3,040 <span className="text-xs text-slate-400">/ year</span></div>
                    <p className="text-xs text-slate-300">Executive PDF report formatted and ready for board presentation.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="/dashboard" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-6 py-3 shadow-lg shadow-blue-600/30">
                        Start Your Real Audit Now <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Button>
                    </Link>
                    <Link href="/pricing" className="w-full sm:w-auto">
                      <Button size="lg" variant="outline" className="w-full border-slate-700 text-slate-300 text-xs px-6 py-3">
                        View Pricing Plans
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
              <Button
                variant="outline"
                size="sm"
                disabled={demoStep === 1}
                onClick={() => setDemoStep((prev) => Math.max(1, prev - 1))}
                className="text-xs border-slate-700 text-slate-300 disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous
              </Button>

              {demoStep < 3 ? (
                <Button
                  size="sm"
                  onClick={() => setDemoStep((prev) => Math.min(3, prev + 1))}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                >
                  Next Step <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => setDemoModalOpen(false)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                >
                  Close Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ═══ Header ═══ */}
      <header className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 animate-fade-in-down delay-100">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SaaSReclaim Logo"
            className="h-10 w-10 rounded-xl object-cover shadow-lg shadow-blue-500/20 border border-blue-200/60 dark:border-blue-500/30 transition-transform hover:scale-110 duration-300"
          />
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-extrabold tracking-tight">SaaSReclaim</span>
            <span className="rounded-md bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider">AI</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 shadow-sm"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-blue-600" />}
          </button>
          <Link href="/login" className="hidden sm:block text-sm font-semibold text-slate-500 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/dashboard">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 font-bold hover:scale-105 transition-transform duration-200">
              Launch App
            </Button>
          </Link>
        </div>
      </header>

      {/* ═══ Hero ═══ */}
      <section className="container mx-auto px-4 pt-12 pb-6 text-center sm:pt-20 sm:pb-10 relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-violet-400/8 dark:bg-violet-500/8 rounded-full blur-3xl animate-float delay-200" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-400/6 dark:bg-emerald-500/6 rounded-full blur-3xl animate-float delay-400" />

        <div className="relative z-10">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50/80 dark:bg-blue-500/10 px-5 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 backdrop-blur-md mb-8 hover:scale-105 transition-transform duration-300 cursor-default shadow-sm">
            <Zap className="h-3.5 w-3.5 text-amber-500 animate-bounce-soft" />
            <span>Trusted by 500+ global companies · Average waste cut: 25-35%</span>
          </div>

          <h1 className="animate-fade-in-up delay-100 mx-auto max-w-5xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-[1.08]">
            Reclaim Your Wasted{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              SaaS Budget
            </span>
            <br />
            <span className="text-slate-600 dark:text-slate-300">& Idle Licenses</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Companies lose thousands every month on duplicate Zoom + Meet subs, unused Adobe licenses, and forgotten auto-renewals. SaaSReclaim audits your stack and instantly surfaces cash savings.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="group w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-base font-bold shadow-xl shadow-blue-600/25 gap-2 hover:scale-105 transition-all duration-300 animate-pulse-glow">
                Start Free Audit
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setDemoModalOpen(true)}
              className="w-full sm:w-auto border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-4 text-base hover:scale-105 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <Play className="h-4 w-4 mr-2 text-blue-500 fill-blue-500" /> Watch Live Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in-up delay-500 mt-8 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-emerald-500" /> 256-bit SSL Encrypted</span>
            <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-blue-500" /> SOC 2 Type II Ready</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Razorpay Secured Checkout</span>
          </div>
        </div>
      </section>

      {/* ═══ Dashboard Mockup Preview ═══ */}
      <section className="container mx-auto px-4 py-10 animate-scale-in delay-400">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-blue-500/10 overflow-hidden hover:shadow-blue-500/20 transition-shadow duration-500">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-[10px] text-slate-400 font-mono">saasreclaim.com/dashboard</span>
            </div>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-1 rounded-full hover:bg-emerald-200 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> CLICK TO LAUNCH LIVE DEMO
            </button>
          </div>
          <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-500/5 border border-blue-200/50 dark:border-blue-500/20 p-5 text-center transition-all duration-300 hover:scale-[1.02]">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Monthly Spend</p>
              <p className="mt-2 text-3xl font-black text-slate-900 dark:text-white">$8,420</p>
              <p className="mt-1 text-xs text-slate-500">Across 42 active subscriptions</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-500/10 dark:to-orange-500/5 border border-red-200/50 dark:border-red-500/20 p-5 text-center transition-all duration-300 hover:scale-[1.02]">
              <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider">Waste Detected</p>
              <p className="mt-2 text-3xl font-black text-red-600 dark:text-red-400">$2,847</p>
              <p className="mt-1 text-xs text-slate-500">8 duplicate + 6 unused tools</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/5 border border-emerald-200/50 dark:border-emerald-500/20 p-5 text-center transition-all duration-300 hover:scale-[1.02]">
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Annual Savings</p>
              <p className="mt-2 text-3xl font-black text-emerald-600 dark:text-emerald-400">$34,164</p>
              <p className="mt-1 text-xs text-slate-500">If you reclaim today</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Infinite Scrolling SaaS Tools Marquee Ticker ═══ */}
      <section className="w-full py-10 animate-fade-in delay-500 overflow-hidden relative">
        <p className="text-center text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-6">
          Audits 594+ SaaS tools automatically
        </p>

        {/* Gradient Blur Overlay Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

        {/* Infinite Moving Marquee */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-6 sm:gap-10 shrink-0 pr-6 sm:pr-10">
            {[
              "Slack", "Zoom", "Figma", "Adobe CC", "Notion", "GitHub Enterprise",
              "Jira Software", "Salesforce CRM", "HubSpot", "Stripe", "AWS", "Shopify",
              "Perplexity AI", "ElevenLabs", "Midjourney", "Canva", "OpenAI ChatGPT",
              "Asana", "Zendesk", "Intercom", "Datadog", "Snowflake", "Linear", "Vercel",
              "Slack", "Zoom", "Figma", "Adobe CC", "Notion", "GitHub Enterprise",
              "Jira Software", "Salesforce CRM", "HubSpot", "Stripe", "AWS", "Shopify",
              "Perplexity AI", "ElevenLabs", "Midjourney", "Canva", "OpenAI ChatGPT",
              "Asana", "Zendesk", "Intercom", "Datadog", "Snowflake", "Linear", "Vercel"
            ].map((name, idx) => (
              <div
                key={`${name}-${idx}`}
                className="flex items-center gap-2 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Three Steps to <span className="text-blue-600 dark:text-blue-400">Zero Waste</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">Get from messy SaaS stack to optimized budget in under 5 minutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: Layers, color: "blue", title: "Duplicate Detection", desc: "AI scans 12 categories — Communication, Design, CRM, DevOps & more — to find overlapping tools. Standardize on one, cancel the rest.", step: "01" },
            { icon: TrendingDown, color: "amber", title: "Idle License Finder", desc: "Flags subscriptions untouched for 60+ days. Alerts you before the next billing cycle so you can revoke unused seats.", step: "02" },
            { icon: FileCheck, color: "emerald", title: "Executive Reports", desc: "One-click PDF reports with spend breakdowns, category charts, and month-on-month savings for your CFO or board.", step: "03" },
          ].map((f, i) => {
            const Icon = f.icon;
            const colors: Record<string, { bg: string; text: string; border: string }> = {
              blue:    { bg: "bg-blue-100 dark:bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "hover:border-blue-300 dark:hover:border-blue-500/40" },
              amber:   { bg: "bg-amber-100 dark:bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "hover:border-amber-300 dark:hover:border-amber-500/40" },
              emerald: { bg: "bg-emerald-100 dark:bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "hover:border-emerald-300 dark:hover:border-emerald-500/40" },
            };
            const c = colors[f.color];
            return (
              <div key={i} className={`group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 ${c.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up`} style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.text} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-5xl font-black text-slate-100 dark:text-slate-800/80 select-none">{f.step}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ Interactive Waste Calculator ═══ */}
      <section className="container mx-auto px-4 py-12 animate-scale-in">
        <div className="mx-auto max-w-3xl rounded-3xl glass-card p-6 sm:p-8 shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-5">
            <Calculator className="h-4 w-4" />
            <span>Instant Waste Calculator</span>
            <span className="ml-auto rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 text-[10px] font-bold animate-pulse">LIVE</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-left space-y-4">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Team Size: <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">{empCount}</span> employees
              </label>
              <input type="range" min="5" max="200" value={empCount} onChange={(e) => setEmpCount(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium"><span>5</span><span>50</span><span>100</span><span>200</span></div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700/60 p-6 text-center transition-all duration-300 hover:scale-[1.02]">
              <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold tracking-wider">Estimated Monthly Waste</span>
              <div className="mt-2 text-4xl font-black text-emerald-600 dark:text-emerald-400">{formatCurrency(estimatedWaste, "USD")}<span className="text-sm font-normal text-slate-400 ml-1">/ mo</span></div>
              <div className="mt-3 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Annual: <strong className="text-slate-800 dark:text-white">{formatCurrency(estimatedWaste * 12, "USD")}</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 py-14 transition-colors duration-300">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 594, suffix: "+", label: "SaaS Tools Tracked", color: "text-slate-900 dark:text-white" },
            { value: 35, suffix: "%", label: "Average Waste Found", color: "text-emerald-600 dark:text-emerald-400" },
            { value: 12, suffix: "", label: "Global Currencies", color: "text-blue-600 dark:text-blue-400" },
            { value: 500, suffix: "+", label: "Companies Audited", color: "text-violet-600 dark:text-violet-400" },
          ].map((s, i) => (
            <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`text-3xl sm:text-4xl font-black ${s.color}`}><AnimatedCounter target={s.value} suffix={s.suffix} /></div>
              <div className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Trust & Security ═══ */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">ENTERPRISE GRADE</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Built for Trust & Scale</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Security, compliance, and global reach your finance team can rely on.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: ShieldCheck, label: "SOC 2 Type II Ready", desc: "Enterprise security compliance out of the box" },
            { icon: Globe, label: "12 Global Currencies", desc: "USD, EUR, GBP, INR, AED, JPY & more" },
            { icon: Fingerprint, label: "End-to-End Encryption", desc: "AES-256 encryption for all audit data" },
            { icon: Users, label: "Team Workspaces", desc: "Multi-user roles, departments & budgets" },
            { icon: BarChart3, label: "AI Waste Analysis", desc: "ML-powered duplicate & idle detection" },
            { icon: Clock, label: "Real-Time Monitoring", desc: "Live renewal calendar & spend alerts" },
            { icon: Award, label: "Executive Reports", desc: "Board-ready PDF with savings metrics" },
            { icon: BadgeCheck, label: "GDPR Compliant", desc: "EU data privacy standards built-in" },
          ].map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group flex items-start gap-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5 hover:border-blue-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{f.label}</h4>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ 100% REAL PRICING SECTION MATCHING APP/PRICING/PAGE.TSX WITH LIVE RAZORPAY ═══ */}
      <section className="container mx-auto px-4 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-10 animate-fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">TRANSPARENT PRICING</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Pick the Plan That Fits Your Stack</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Start 14-day free trial. Instant Razorpay checkout enabled.</p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                !annualBilling
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                annualBilling
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="rounded-full bg-emerald-400 text-slate-950 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {realPlans.map((plan, i) => {
            const Icon = plan.icon;
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-50/80 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/30"
                    : "bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg hover:shadow-xl"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${plan.popular ? "bg-blue-600 text-white shadow-md shadow-blue-600/30" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {!plan.popular && (
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{plan.badge}</span>
                    )}
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">{plan.description}</p>

                  <div className="mt-6 mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900 dark:text-white">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        / mo {annualBilling ? "(billed annually)" : "(billed monthly)"}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className={`h-4 w-4 shrink-0 rounded-full p-0.5 mt-0.5 ${plan.popular ? "bg-blue-600 text-white" : "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleCheckout(plan.name, plan.priceMonthly)}
                  variant={plan.popular ? "primary" : "outline"}
                  className={`w-full py-6 font-extrabold text-xs shadow-md transition-all duration-300 hover:scale-102 cursor-pointer ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30" : ""
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="h-4 w-4 ml-1.5" />
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">CUSTOMER STORIES</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Loved by Finance Teams Worldwide</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Sarah Chen", role: "CFO, TechFlow Inc.", quote: "SaaSReclaim found $4,200/mo in duplicate tools we didn't know existed. The AI detection is shockingly accurate. ROI was instant.", avatar: "SC", color: "bg-blue-500" },
            { name: "Marcus Johnson", role: "IT Director, ScaleUp", quote: "We cut 32% of our software budget in the first audit. The renewal calendar alone saved us from 3 surprise charges.", avatar: "MJ", color: "bg-violet-500" },
            { name: "Priya Sharma", role: "VP Finance, CloudNova", quote: "The executive reports are beautiful. Our board loves the clarity on SaaS spend. We now run monthly audits automatically.", avatar: "PS", color: "bg-emerald-500" },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} text-white text-xs font-bold`}>{t.avatar}</div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FAQ ACCORDION ═══ */}
      <section className="container mx-auto px-4 py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Got Questions? We Have Answers.</h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-blue-500 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="container mx-auto px-4 py-20 text-center animate-fade-in-up">
        <div className="relative mx-auto max-w-2xl rounded-3xl border border-blue-200 dark:border-blue-500/20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-600/10 dark:to-indigo-600/10 p-10 sm:p-14 overflow-hidden">
          <div className="absolute inset-0 animate-shimmer opacity-30" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">Ready to Reclaim Your Budget?</h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">Join 500+ companies saving 25-35% on SaaS spend with SaaSReclaim AI.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-base font-bold shadow-xl shadow-blue-600/25 gap-2 hover:scale-105 transition-all duration-300">
                  Start Free Audit <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 px-8 py-4 text-base hover:scale-105 transition-all duration-300">View Pricing</Button>
              </Link>
            </div>
            <p className="mt-5 text-xs text-slate-400 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              No credit card required · Free 14-day trial available
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 text-center text-xs text-slate-500 transition-colors duration-300">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-slate-200 dark:border-slate-900 pb-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="SaaSReclaim" className="h-6 w-6 rounded-lg object-cover" />
              <span className="font-bold text-slate-700 dark:text-slate-300">SaaSReclaim</span>
            </div>
            <p className="text-slate-400 dark:text-slate-500">© 2026 SaaSReclaim Inc. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 font-semibold text-slate-500 dark:text-slate-400">
              <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-blue-600 dark:hover:text-white transition-colors">Terms</Link>
              <Link href="/blog" className="hover:text-blue-600 dark:hover:text-white transition-colors">Blog</Link>
              <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-white transition-colors">Pricing</Link>
              <Link href="/dashboard" className="hover:text-blue-600 dark:hover:text-white transition-colors">Dashboard</Link>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 dark:text-slate-600 max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> SaaSReclaim is an independent software tool. All third-party product names, logos, and trademarks belong strictly to their respective owners. Savings metrics are informative estimates.
          </p>
        </div>
      </footer>
    </div>
  );
}
