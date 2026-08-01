import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { INITIAL_DEMO_SUBSCRIPTIONS, generateWasteReport } from "@/lib/subscription-utils";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    let subs = INITIAL_DEMO_SUBSCRIPTIONS;

    if (user) {
      const { data: userSubs } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id);

      if (userSubs && userSubs.length > 0) {
        subs = userSubs;
      }
    }

    const report = generateWasteReport(subs);

    return NextResponse.json({
      success: true,
      report,
      totalCount: subs.length,
      generatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to generate report" },
      { status: 500 }
    );
  }
}
