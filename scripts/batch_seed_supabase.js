const fs = require('fs');
const path = require('path');
const { Client } = require('pg');

const schemaSql = fs.readFileSync(path.resolve('./supabase/schema.sql'), 'utf-8');
const catalogContent = fs.readFileSync(path.resolve('./lib/saas-catalog.ts'), 'utf-8');
const start = catalogContent.indexOf('[', catalogContent.indexOf('CatalogSaaSTool[] = ') + 18);
const end = catalogContent.lastIndexOf('];');
const arrayStr = catalogContent.substring(start, end + 1);
const catalogTools = JSON.parse(arrayStr);

async function runFastBatchMigration() {
  console.log("⚡ Starting Ultra-Fast Supabase Cloud Batch Migration...");

  const dbPassword = process.env.SUPABASE_DB_PASSWORD || "Rocky@wastedetect";
  
  const client = new Client({
    host: "aws-0-ap-northeast-1.pooler.supabase.com",
    port: 6543,
    user: "postgres.epctfotldcmekcokbdqf",
    password: dbPassword,
    database: "postgres",
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log("✅ Connected to Supabase Cloud Postgres pooler!");

    // 1. Execute DDL Schema Migration
    console.log("📋 Executing SQL DDL Schema Migration (creating saas_catalog, waste_reports, team_seats)...");
    await client.query(schemaSql);
    console.log("✅ Tables created in Supabase Cloud!");

    // 2. TRUNCATE old catalog data first (clean duplicates from previous runs)
    await client.query('TRUNCATE TABLE saas_catalog;');
    console.log("🧹 Cleaned old saas_catalog data (removed duplicates)!");

    // 3. Batch insert 600 SaaS Catalog Tools in chunks of 100
    console.log(`📦 Bulk inserting ${catalogTools.length} real tools into saas_catalog table...`);
    const chunkSize = 100;
    for (let i = 0; i < catalogTools.length; i += chunkSize) {
      const chunk = catalogTools.slice(i, i + chunkSize);
      
      const values = [];
      const placeholders = [];
      let paramIdx = 1;

      for (const t of chunk) {
        placeholders.push(`($${paramIdx}, $${paramIdx+1}, $${paramIdx+2}, $${paramIdx+3}, $${paramIdx+4}, $${paramIdx+5}, $${paramIdx+6}, $${paramIdx+7})`);
        values.push(
          t.id,
          t.name,
          t.category,
          t.iconText,
          t.iconBg,
          t.defaultPlan,
          JSON.stringify(t.plans),
          t.description
        );
        paramIdx += 8;
      }

      const bulkQuery = `
        INSERT INTO saas_catalog (id, name, category, icon_text, icon_bg, default_plan, plans, description)
        VALUES ${placeholders.join(', ')}
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          category = EXCLUDED.category,
          icon_text = EXCLUDED.icon_text,
          icon_bg = EXCLUDED.icon_bg,
          default_plan = EXCLUDED.default_plan,
          plans = EXCLUDED.plans,
          description = EXCLUDED.description;
      `;

      await client.query(bulkQuery, values);
      console.log(`   Pushed chunk ${i / chunkSize + 1}/${Math.ceil(catalogTools.length / chunkSize)} (${chunk.length} tools)...`);
    }

    // 3. Insert realistic sample subscriptions linking to existing profile user_id
    console.log("💳 Seeding sample active & waste subscriptions into subscriptions table...");
    const profUser = await client.query('SELECT id FROM profiles LIMIT 1;');
    const userId = profUser.rows[0] ? profUser.rows[0].id : null;

    if (userId) {
      const sampleSubs = [
        [userId, "Zoom Workplace", "Communication", 15.99, "monthly", "2026-08-15", "active", "1-on-1 team video meetings."],
        [userId, "Slack Pro", "Communication", 8.75, "monthly", "2026-08-12", "active", "Primary team chat."],
        [userId, "Google Workspace", "Productivity", 12.00, "monthly", "2026-08-20", "active", "Gmail, Drive, Docs."],
        [userId, "Figma Professional", "Design", 15.00, "monthly", "2026-08-18", "active", "Product UI/UX design."],
        [userId, "ChatGPT Team", "Productivity", 30.00, "monthly", "2026-08-05", "active", "AI writing & coding assistant."],
        [userId, "Cisco Webex", "Communication", 14.50, "monthly", "2026-08-01", "duplicate", "Unused secondary video tool."],
        [userId, "Old Analytics Suite", "Analytics", 49.00, "monthly", "2026-08-02", "unused", "Legacy analytics not logged in 60+ days."]
      ];

      for (const sub of sampleSubs) {
        await client.query(`
          INSERT INTO subscriptions (user_id, name, category, monthly_cost, billing_cycle, renewal_date, status, description)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
          ON CONFLICT DO NOTHING;
        `, sub);
      }
      console.log("✅ Sample subscriptions inserted into live Supabase subscriptions table!");
    }

    // 4. Verify live database counts
    const catRes = await client.query('SELECT COUNT(*) FROM saas_catalog;');
    const subRes = await client.query('SELECT COUNT(*) FROM subscriptions;');
    const profRes = await client.query('SELECT COUNT(*) FROM profiles;');
    const seatRes = await client.query('SELECT COUNT(*) FROM team_seats;');

    console.log("\n==========================================");
    console.log("🎉 LIVE SUPABASE CLOUD DATABASE POPULATED!");
    console.log("==========================================");
    console.log(`✅ saas_catalog rows  : ${catRes.rows[0].count}`);
    console.log(`✅ subscriptions rows : ${subRes.rows[0].count}`);
    console.log(`✅ profiles rows      : ${profRes.rows[0].count}`);
    console.log(`✅ team_seats rows     : ${seatRes.rows[0].count}`);
    console.log("==========================================\n");

  } catch (err) {
    console.error("❌ Batch Migration Error:", err);
  } finally {
    await client.end();
  }
}

runFastBatchMigration();
