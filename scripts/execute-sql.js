const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: ".env.local" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const projectRef = url.replace("https://", "").split(".")[0];

const sqlFilePath = path.join(__dirname, "../supabase/schema.sql");
const sqlContent = fs.readFileSync(sqlFilePath, "utf8");

async function executeSql() {
  console.log(`Connecting to project ${projectRef}...`);
  try {
    const res = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/sql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify({ query: sqlContent }),
    });

    const text = await res.text();
    console.log("Response Status:", res.status);
    console.log("Response Body:", text);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

executeSql();
