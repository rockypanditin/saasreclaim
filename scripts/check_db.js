const path = require('path');
const { createClient } = require(path.resolve('./node_modules/@supabase/supabase-js'));

const supabaseUrl = "https://epctfotldcmekcokbdqf.supabase.co";
const serviceRoleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwY3Rmb3RsZGNtZWtjb2tiZHFmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NTA3Mjk5OCwiZXhwIjoyMTAwNjQ4OTk4fQ.rI7owbsIh3W_XaqL5JQQ_nCMBCQKW79am3HhK7K2hB8";

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function checkAndSeed() {
  console.log("--- Supabase Cloud Connection Audit ---");

  const { data: subs, error: subErr } = await supabase.from('subscriptions').select('*');
  console.log("Subscriptions table count:", subs ? subs.length : 0, subErr ? `Error: ${subErr.message}` : "");

  const { data: profiles, error: profErr } = await supabase.from('profiles').select('*');
  console.log("Profiles table count:", profiles ? profiles.length : 0, profErr ? `Error: ${profErr.message}` : "");

  const { data: catalog, error: catErr } = await supabase.from('saas_catalog').select('*');
  console.log("saas_catalog table count:", catalog ? catalog.length : 0, catErr ? `Error: ${catErr.message}` : "");

  const { data: seats, error: seatErr } = await supabase.from('team_seats').select('*');
  console.log("team_seats table count:", seats ? seats.length : 0, seatErr ? `Error: ${seatErr.message}` : "");
}

checkAndSeed();
