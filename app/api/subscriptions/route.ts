import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Query Supabase subscriptions table
    let query = supabase.from("subscriptions").select("*").order("created_at", { ascending: false });
    
    if (user) {
      query = query.eq("user_id", user.id);
    }

    const { data: subscriptions, error } = await query;

    if (!error && subscriptions) {
      return NextResponse.json({ success: true, subscriptions, source: "supabase_database" });
    }

    // Fallback: Query all public subscriptions in table
    const { data: allSubs } = await supabase.from("subscriptions").select("*").limit(50);
    return NextResponse.json({ success: true, subscriptions: allSubs || [], source: "supabase_database" });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || "Failed to fetch from database" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // If body contains array of subscriptions to sync
    if (Array.isArray(body.subscriptions)) {
      const dbRows = body.subscriptions.map((sub: any) => ({
        user_id: user?.id || null,
        name: sub.name,
        category: sub.category,
        monthly_cost: Number(sub.monthly_cost),
        billing_cycle: sub.billing_cycle || "monthly",
        renewal_date: sub.renewal_date,
        status: sub.status || "active",
        description: sub.description || "",
      }));

      const { data, error } = await supabase
        .from("subscriptions")
        .insert(dbRows)
        .select();

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, subscriptions: data });
    }

    // Single subscription insert
    const newSubRow = {
      user_id: user?.id || null,
      name: body.name,
      category: body.category,
      monthly_cost: Number(body.monthly_cost),
      billing_cycle: body.billing_cycle || "monthly",
      renewal_date: body.renewal_date,
      status: body.status || "active",
      description: body.description || "",
    };

    const { data, error } = await supabase
      .from("subscriptions")
      .insert(newSubRow)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, subscription: data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Failed to insert into database" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const supabase = await createClient();

    if (!body.id) {
      return NextResponse.json({ success: false, error: "Missing subscription id" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("subscriptions")
      .update({
        name: body.name,
        category: body.category,
        monthly_cost: Number(body.monthly_cost),
        billing_cycle: body.billing_cycle,
        renewal_date: body.renewal_date,
        status: body.status,
        description: body.description,
      })
      .eq("id", body.id)
      .select();

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, subscription: data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Failed to update database" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const supabase = await createClient();

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing subscription id" }, { status: 400 });
    }

    const { error } = await supabase.from("subscriptions").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Failed to delete from database" }, { status: 500 });
  }
}
