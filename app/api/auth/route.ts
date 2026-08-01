import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return NextResponse.json({
      authenticated: !!user,
      user: user || { id: "demo-user", email: "demo@saassaasreclaimor.com" },
      isDemo: !user,
    });
  } catch (error: any) {
    return NextResponse.json({
      authenticated: false,
      user: { id: "demo-user", email: "demo@saassaasreclaimor.com" },
      isDemo: true,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabase = await createClient();

    if (body.action === "update_password") {
      const { error } = await supabase.auth.updateUser({
        password: body.password,
      });

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
      }

      return NextResponse.json({ success: true, message: "Password updated successfully." });
    }

    return NextResponse.json({ success: false, error: "Unknown action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Auth action failed" }, { status: 500 });
  }
}
