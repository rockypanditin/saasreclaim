import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "SaaS Spend Blog & Guides - SaaSReclaim",
  description: "Learn how to eliminate SaaS waste, consolidate duplicate tools, and reduce software spending by 25-35%.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-12">
        {/* Blog Header Banner */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <BookOpen className="h-3.5 w-3.5" />
            <span>SaaSReclaim Knowledge Hub</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight sm:text-4xl">
            SaaS Cost Optimization & Audit Guides
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Proven strategies for CFOs, IT leaders, and startup founders to stop software budget waste.
          </p>
        </div>

        {/* Featured Guide Banner */}
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 p-8 text-white shadow-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge className="bg-emerald-500 text-white text-[10px] uppercase font-bold tracking-wider">
              Featured Checklist 2026
            </Badge>
            <h2 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">
              The 2026 SaaS Budget Optimization Blueprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Download our free spreadsheet template and checklist used by 200+ finance teams to recover $500-$3,000/month.
            </p>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-xs font-bold shadow-lg transition-all shrink-0"
          >
            <span>Run Free Waste Audit</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((art) => (
            <Card key={art.id} className="border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-200 hover:shadow-lg bg-white dark:bg-slate-900 flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="rounded-md bg-blue-50 dark:bg-blue-950 px-2.5 py-1 text-[10px] font-bold text-blue-700 dark:text-blue-300">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>{art.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${art.id}`}>
                  <CardTitle className="text-lg font-bold text-slate-900 dark:text-white leading-snug hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {art.title}
                  </CardTitle>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {art.savingsEstimate}
                  </span>
                  <Link href={`/blog/${art.id}`} className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    <span>Read Full Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
