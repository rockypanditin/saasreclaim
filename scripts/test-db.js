const { createClient } = require("@supabase/supabase-js");
require("dotenv").config({ path: ".env.local" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  console.log("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceRoleKey);

async function testConnection() {
  console.log("Testing Supabase Database connection...");
  const { data: subData, error: subError } = await supabase.from("subscriptions").select("*").limit(1);
  if (subError) {
    console.log("Subscriptions table response:", subError.message);
  } else {
    console.log("Subscriptions table exists! Rows:", subData);
  }

  const { data: profData, error: profError } = await supabase.from("profiles").select("*").limit(1);
  if (profError) {
    console.log("Profiles table response:", profError.message);
  } else {
    console.log("Profiles table exists! Rows:", profData);
  }
}

testConnection();
