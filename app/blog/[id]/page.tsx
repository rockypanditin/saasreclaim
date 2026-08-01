import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar, User, Sparkles, CheckCircle2, Share2, BookOpen } from "lucide-react";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostDetail({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Guides & Blog</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-white text-[10px] uppercase font-bold tracking-wider">
                {post.category}
              </Badge>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-900/60">
                Potential Savings: {post.savingsEstimate}
              </span>
            </div>

            <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight sm:text-4xl leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                <User className="h-3.5 w-3.5 text-blue-600" />
                <span>{post.author} ({post.authorRole})</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Key Takeaways Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/30 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-blue-950 dark:text-blue-200 flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Key Takeaways & Action Points</span>
              </h3>
              <ul className="space-y-2">
                {post.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Main Text Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
            {post.content.split("\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold text-slate-900 dark:text-white pt-4 pb-1">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("#### ")) {
                return (
                  <h4 key={index} className="text-base font-bold text-slate-900 dark:text-white pt-3 pb-1">
                    {trimmed.replace("#### ", "")}
                  </h4>
                );
              }
              if (trimmed.startsWith("- ")) {
                return (
                  <li key={index} className="ml-4 list-disc text-xs text-slate-700 dark:text-slate-300">
                    {trimmed.replace("- ", "")}
                  </li>
                );
              }
              return (
                <p key={index} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Call to Action Box */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 p-8 text-white text-center shadow-xl space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300 mx-auto">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Ready to Audit Your Company&apos;s SaaS Spend?</h3>
            <p className="text-xs text-slate-300 max-w-lg mx-auto">
              Run SaaSReclaim on your software inventory today. Instant duplicate detection, seat auditing, and zero credit card required.
            </p>
            <Link href="/dashboard" className="inline-block">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-lg">
                Run Free Local SaaS Audit Now
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
