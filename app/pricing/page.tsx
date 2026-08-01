"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { formatCurrency } from "@/lib/utils";
import { getUserPlanInfo, activate14DayTrial } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Building2,
  ArrowRight,
  HelpCircle,
  CreditCard,
  X,
  Lock,
  UserCheck,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [activePlan, setActivePlan] = useState("Growth Pro (14-Day Free Trial)");
  const [trialNotice, setTrialNotice] = useState(false);

  useEffect(() => {
    setCurrency(localStorage.getItem("currency") || "USD");

    const updateCurrentPlan = () => {
      const planInfo = getUserPlanInfo();
      setActivePlan(planInfo.planName);
    };

    updateCurrentPlan();

    const handleCurrency = () => setCurrency(localStorage.getItem("currency") || "USD");
    const handlePlan = () => updateCurrentPlan();

    window.addEventListener("currencyChange", handleCurrency);
    window.addEventListener("planChange", handlePlan);

    // Dynamically load Razorpay SDK script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener("currencyChange", handleCurrency);
      window.removeEventListener("planChange", handlePlan);
    };
  }, []);

  /* ══ 14-DAY FREE TRIAL ACTIVATION (NO CREDIT CARD NEEDED) ══ */
  const handleStartFreeTrial = () => {
    activate14DayTrial();
    setTrialNotice(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1200);
  };

  /* ══ RAZORPAY PAID CHECKOUT ══ */
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
            localStorage.removeItem("saasreclaim_trial_start");
            setActivePlan(savedPlanTitle);
            window.dispatchEvent(new Event("planChange"));
            setTimeout(() => {
              setCheckoutSuccess(false);
              window.location.href = "/dashboard";
            }, 2000);
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
      }
    } catch {
      // Clean fallback
    }
  };

  const plans = [
    {
      id: "starter",
      name: "Starter Audit",
      icon: UserCheck,
      priceMonthly: 29,
      priceAnnual: 24,
      description: "Ideal for early-stage startups & small teams auditing SaaS for the first time.",
      features: [
        "Track up to 25 software tools",
        "AI Invoice & CSV drag-and-drop parser",
        "Automated 7-day renewal email alerts",
        "Duplicate tool & inactive seat detection",
        "Export CSV & Executive PDF reports",
      ],
      cta: "Start 14-Day Free Trial",
      isTrialBtn: true,
      popular: false,
      badge: "No Card Required",
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
      isTrialBtn: false,
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
      cta: "Upgrade to Enterprise Pro",
      isTrialBtn: false,
      popular: false,
      badge: "Enterprise Scale",
    },
  ];

  const faqs = [
    {
      q: "Do I need a credit card to start the 14-Day Free Trial?",
      a: "No credit card required! You get instant 14-day access to all Growth Pro features (594+ SaaS database, AI parsing, PDF reports) completely free.",
    },
    {
      q: "What happens after the 14-day trial ends?",
      a: "If you choose not to upgrade, your account automatically downgrades to the Free Starter plan (limited to 5 tools max). Your data is never deleted.",
    },
    {
      q: "How fast will SaaSReclaim find savings for my company?",
      a: "Most teams uncover redundant tools or unassigned seats during their very first 3-minute CSV scan, saving an average of $450-$1,000 in their first month.",
    },
    {
      q: "Can I switch or cancel my plan at any time?",
      a: "Yes, you can upgrade, downgrade, or cancel your subscription at any time with 1-click inside your billing portal with zero cancellation fees.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />

      {/* Trial Activation Banner Toast */}
      {trialNotice && (
        <div className="fixed top-20 right-5 z-50 animate-bounce-soft rounded-2xl bg-blue-600 text-white px-6 py-4 shadow-2xl flex items-center gap-3 border border-blue-400">
          <CheckCircle2 className="h-6 w-6" />
          <div>
            <h4 className="font-extrabold text-sm">14-Day Free Trial Activated!</h4>
            <p className="text-xs opacity-90">No credit card needed. Opening your dashboard...</p>
          </div>
        </div>
      )}

      {/* Payment Success Toast */}
      {checkoutSuccess && (
        <div className="fixed top-20 right-5 z-50 animate-bounce-soft rounded-2xl bg-emerald-600 text-white px-6 py-4 shadow-2xl flex items-center gap-3 border border-emerald-400">
          <CheckCircle2 className="h-6 w-6" />
          <div>
            <h4 className="font-extrabold text-sm">Payment Successful!</h4>
            <p className="text-xs opacity-90">Your plan has been upgraded! Redirecting to dashboard...</p>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>14-Day Free Trial · No Credit Card Required</span>
          </div>

          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight sm:text-5xl">
            Simple, Transparent <span className="text-blue-600 dark:text-blue-400">SaaS Reclaim</span> Pricing
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Audit your stack for free. Upgrade to automate renewal alerts, team seats, and executive PDF reports.
          </p>

          {/* Billing Cycle Selector */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-bold ${!annualBilling ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
              Monthly Billing
            </span>

            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                annualBilling ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
              }`}
              aria-label="Toggle Annual Billing"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  annualBilling ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>

            <span className={`text-xs font-bold flex items-center gap-1.5 ${annualBilling ? "text-slate-900 dark:text-white" : "text-slate-400"}`}>
              <span>Annual Billing</span>
              <span className="rounded-full bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;
            const isCurrentPlan = activePlan.toLowerCase().includes(plan.id) || activePlan.toLowerCase().includes(plan.name.toLowerCase().split(" ")[0]);

            return (
              <Card
                key={plan.id}
                className={`relative flex flex-col justify-between border transition-all duration-200 ${
                  isCurrentPlan
                    ? "border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 scale-[1.02] bg-emerald-950/10 dark:bg-emerald-950/20 ring-2 ring-emerald-500/20"
                    : plan.popular
                    ? "border-2 border-blue-600 dark:border-blue-500 shadow-xl scale-[1.01] bg-white dark:bg-slate-900"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300"
                }`}
              >
                {isCurrentPlan ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-[10px] font-black text-white uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>CURRENT ACTIVE PLAN</span>
                  </div>
                ) : plan.popular ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 text-[10px] font-extrabold text-white uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                ) : null}

                <CardHeader className="pt-8 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{plan.name}</span>
                    </CardTitle>
                    {!plan.popular && !isCurrentPlan && (
                      <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[32px]">{plan.description}</p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-900 dark:text-white">{formatCurrency(price, currency)}</span>
                      <span className="text-xs font-semibold text-slate-500">/ month</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      {annualBilling ? `Billed annually (${formatCurrency(price * 12, currency)}/yr)` : "Billed monthly"}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.isTrialBtn ? (
                    <Button
                      onClick={handleStartFreeTrial}
                      className="w-full font-extrabold py-3 text-xs rounded-xl gap-2 bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 cursor-pointer"
                    >
                      <span>{plan.cta} (No Card Needed)</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      disabled={isCurrentPlan}
                      onClick={() => !isCurrentPlan && handleCheckout(plan.name, price)}
                      className={`w-full font-bold py-3 text-xs rounded-xl gap-2 cursor-pointer ${
                        isCurrentPlan
                          ? "bg-emerald-600 text-white font-black cursor-default shadow-md opacity-100"
                          : plan.popular
                          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                          : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700"
                      }`}
                    >
                      <span>{isCurrentPlan ? "✓ Current Active Plan" : `Upgrade to ${plan.name}`}</span>
                      {!isCurrentPlan && <CreditCard className="h-4 w-4 ml-1" />}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Everything you need to know about SaaSReclaim subscription plans.</p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            {faqs.map((faq, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
