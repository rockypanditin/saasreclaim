import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({
        profile: {
          email: "demo@saassaasreclaimor.com",
          full_name: "Alex Morgan",
          company_name: "Acme Corp",
          avatar_url: "",
          currency: "USD",
          department_budgets: { Engineering: 2000, Marketing: 1200, Design: 1500, Sales: 1000 },
          whatsapp_alerts: true,
          slack_alerts: true,
        },
      });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    return NextResponse.json({
      profile: profile || {
        email: user.email,
        full_name: user.user_metadata?.full_name || "Alex Morgan",
        company_name: user.user_metadata?.company_name || "Acme Corp",
        currency: "USD",
      },
    });
  } catch {
    return NextResponse.json({
      profile: {
        email: "demo@saassaasreclaimor.com",
        full_name: "Alex Morgan",
        company_name: "Acme Corp",
        currency: "USD",
      },
    });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("profiles").upsert({
        id: user.id,
        email: user.email,
        full_name: body.full_name,
        company_name: body.company_name,
        avatar_url: body.avatar_url,
      });
    }

    return NextResponse.json({ success: true, profile: body });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Failed to update profile" }, { status: 500 });
  }
}
