const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

// Read schema.sql
const schemaSql = fs.readFileSync(path.resolve('./supabase/schema.sql'), 'utf-8');

// Load 500 catalog tools from lib/saas-catalog.ts
const catalogContent = fs.readFileSync(path.resolve('./lib/saas-catalog.ts'), 'utf-8');
const jsonPart = catalogContent.substring(catalogContent.indexOf('MASTER_SAAS_CATALOG: CatalogSaaSTool[] = ') + 'MASTER_SAAS_CATALOG: CatalogSaaSTool[] = '.length).trim();
const arrayStr = jsonPart.substring(0, jsonPart.lastIndexOf(';'));
const catalogTools = JSON.parse(arrayStr);

async function runLiveMigration() {
  console.log("🚀 Starting Supabase Cloud Live Migration & Seeding...");

  // Try direct Postgres host & Pooler connections
  const dbPassword = process.env.SUPABASE_DB_PASSWORD || "Rocky@wastedetect";
  
  const connectionConfigs = [
    {
      host: "aws-0-ap-northeast-1.pooler.supabase.com",
      port: 6543,
      user: "postgres.epctfotldcmekcokbdqf",
      password: dbPassword,
      database: "postgres",
      ssl: { rejectUnauthorized: false }
    },
    {
      host: "aws-0-ap-northeast-1.pooler.supabase.com",
      port: 5432,
      user: "postgres.epctfotldcmekcokbdqf",
      password: dbPassword,
      database: "postgres",
      ssl: { rejectUnauthorized: false }
    },
    {
      host: "db.epctfotldcmekcokbdqf.supabase.co",
      port: 5432,
      user: "postgres",
      password: dbPassword,
      database: "postgres",
      ssl: { rejectUnauthorized: false }
    }
  ];

  let client = null;

  for (const config of connectionConfigs) {
    try {
      console.log(`Attempting connection to ${config.host}:${config.port}...`);
      const testClient = new Client(config);
      await testClient.connect();
      client = testClient;
      console.log(`✅ Connected successfully to Supabase Postgres on ${config.host}:${config.port}!`);
      break;
    } catch (err) {
      console.log(`Connection to ${config.host}:${config.port} failed:`, err.message);
    }
  }

  if (!client) {
    console.error("❌ Failed to establish direct PG connection to Supabase.");
    process.exit(1);
  }

  try {
    // 1. Execute SQL DDL Schema Migration (creating saas_catalog, waste_reports, team_seats)
    console.log("📋 Executing SQL DDL Schema Migration (creating missing tables)...");
    await client.query(schemaSql);
    console.log("✅ Schema DDL Migration completed! Tables saas_catalog, waste_reports, team_seats created.");

    // 2. Seed 500 SaaS Catalog Tools into saas_catalog table
    console.log(`📦 Seeding ${catalogTools.length} real SaaS tools into saas_catalog table...`);
    
    let seededCount = 0;
    for (const tool of catalogTools) {
      const insertQuery = `
        INSERT INTO saas_catalog (id, name, category, icon_text, icon_bg, default_plan, plans, description)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          category = EXCLUDED.category,
          icon_text = EXCLUDED.icon_text,
          icon_bg = EXCLUDED.icon_bg,
          default_plan = EXCLUDED.default_plan,
          plans = EXCLUDED.plans,
          description = EXCLUDED.description;
      `;
      
      await client.query(insertQuery, [
        tool.id,
        tool.name,
        tool.category,
        tool.iconText,
        tool.iconBg,
        tool.defaultPlan,
        JSON.stringify(tool.plans),
        tool.description
      ]);
      seededCount++;
    }

    console.log(`🎉 Successfully seeded ${seededCount} real tools into Supabase saas_catalog table!`);

    // 3. Seed realistic sample subscriptions into subscriptions table
    console.log("💳 Seeding sample active & waste subscriptions into subscriptions table...");
    const sampleSubs = [
      ["Zoom Workplace", "Communication", 15.99, "monthly", "2026-08-15", "active", "1-on-1 team video meetings."],
      ["Slack Pro", "Communication", 8.75, "monthly", "2026-08-12", "active", "Primary team chat."],
      ["Google Workspace", "Productivity", 12.00, "monthly", "2026-08-20", "active", "Gmail, Drive, Docs."],
      ["Figma Professional", "Design", 15.00, "monthly", "2026-08-18", "active", "Product UI/UX design."],
      ["ChatGPT Team", "Productivity", 30.00, "monthly", "2026-08-05", "active", "AI writing & coding assistant."],
      ["Cisco Webex", "Communication", 14.50, "monthly", "2026-08-01", "duplicate", "Unused secondary video tool."],
      ["Old Analytics Suite", "Analytics", 49.00, "monthly", "2026-08-02", "unused", "Legacy analytics not logged in 60+ days."]
    ];

    for (const sub of sampleSubs) {
      await client.query(`
        INSERT INTO subscriptions (name, category, monthly_cost, billing_cycle, renewal_date, status, description)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT DO NOTHING;
      `, sub);
    }
    console.log("✅ Subscriptions table populated!");

    // Verify database counts
    const catRes = await client.query('SELECT COUNT(*) FROM saas_catalog;');
    const subRes = await client.query('SELECT COUNT(*) FROM subscriptions;');
    const profRes = await client.query('SELECT COUNT(*) FROM profiles;');
    const seatRes = await client.query('SELECT COUNT(*) FROM team_seats;');

    console.log("\n--- Final Live Supabase Database Counts ---");
    console.log(`saas_catalog rows: ${catRes.rows[0].count}`);
    console.log(`subscriptions rows: ${subRes.rows[0].count}`);
    console.log(`profiles rows: ${profRes.rows[0].count}`);
    console.log(`team_seats rows: ${seatRes.rows[0].count}`);
    console.log("------------------------------------------");

  } catch (err) {
    console.error("❌ Migration error:", err);
  } finally {
    await client.end();
  }
}

runLiveMigration();
