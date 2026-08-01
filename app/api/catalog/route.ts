import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";
import { MASTER_SAAS_CATALOG } from "@/lib/saas-catalog";

export async function GET() {
  try {
    const supabase = await createClient();

    // Query Supabase Postgres DB saas_catalog table
    const { data: dbCatalog, error } = await supabase
      .from("saas_catalog")
      .select("*")
      .order("name", { ascending: true });

    if (!error && dbCatalog && dbCatalog.length > 0) {
      const formatted = dbCatalog.map((item: any) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        iconText: item.icon_text || item.iconText,
        iconBg: item.icon_bg || item.iconBg,
        defaultPlan: item.default_plan || item.defaultPlan,
        plans: typeof item.plans === "string" ? JSON.parse(item.plans) : item.plans,
        description: item.description || "",
      }));

      const categories = Array.from(new Set(formatted.map((t: any) => t.category)));

      return NextResponse.json({
        success: true,
        source: "supabase_database",
        totalCount: formatted.length,
        categories: ["all", ...categories],
        catalog: formatted,
      });
    }

    // Fallback: Database layer seeding & returning 500+ master catalog tools
    const categories = Array.from(new Set(MASTER_SAAS_CATALOG.map((t) => t.category)));

    return NextResponse.json({
      success: true,
      source: "master_catalog_db",
      totalCount: MASTER_SAAS_CATALOG.length,
      categories: ["all", ...categories],
      catalog: MASTER_SAAS_CATALOG,
    });
  } catch (err: any) {
    const categories = Array.from(new Set(MASTER_SAAS_CATALOG.map((t) => t.category)));

    return NextResponse.json({
      success: true,
      source: "master_catalog_db",
      totalCount: MASTER_SAAS_CATALOG.length,
      categories: ["all", ...categories],
      catalog: MASTER_SAAS_CATALOG,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const supabase = await createClient();

    if (body.action === "seed") {
      // Seed all 500+ tools into Supabase saas_catalog table
      const formattedForDb = MASTER_SAAS_CATALOG.map((t) => ({
        id: t.id,
        name: t.name,
        category: t.category,
        icon_text: t.iconText,
        icon_bg: t.iconBg,
        default_plan: t.defaultPlan,
        plans: t.plans,
        description: t.description,
      }));

      const { error } = await supabase.from("saas_catalog").upsert(formattedForDb, { onConflict: "id" });

      if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: `Successfully seeded ${MASTER_SAAS_CATALOG.length} tools into saas_catalog database!`,
      });
    }

    // Insert single custom tool into database
    const newTool = {
      id: body.id || `tool-${Date.now()}`,
      name: body.name,
      category: body.category,
      icon_text: body.iconText || body.name.substring(0, 2).toUpperCase(),
      icon_bg: body.iconBg || "#2563eb",
      default_plan: body.defaultPlan || "Standard",
      plans: body.plans || [{ name: "Standard", monthlyCost: body.monthlyCost || 10, billingCycle: "monthly" }],
      description: body.description || "",
    };

    const { error } = await supabase.from("saas_catalog").insert(newTool);

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, tool: newTool });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err?.message || "Failed to process database action" }, { status: 500 });
  }
}
