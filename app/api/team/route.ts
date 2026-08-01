import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { data: seats, error } = await supabase
      .from("team_seats")
      .select("*")
      .eq("user_id", user?.id || "demo-user")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ success: true, seats: [] });
    }

    return NextResponse.json({ success: true, seats: seats || [] });
  } catch {
    return NextResponse.json({ success: true, seats: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const newSeat = {
      user_id: user?.id || "demo-user",
      subscription_name: body.subscriptionName || body.subscription_name,
      member_name: body.memberName || body.member_name,
      member_email: body.memberEmail || body.member_email,
      department: body.department || "General",
      role: body.role || "User",
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("team_seats")
      .insert(newSeat)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, seat: data || newSeat });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Failed to add team seat" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const supabase = await createClient();

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing seat id" }, { status: 400 });
    }

    await supabase.from("team_seats").delete().eq("id", id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Failed to delete seat" }, { status: 500 });
  }
}
