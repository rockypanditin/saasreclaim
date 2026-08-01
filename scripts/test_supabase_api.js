const fs = require('fs');

const TOKEN = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const PROJECT_REF = 'epctfotldcmekcokbdqf';

async function executeSql() {
  const sql = fs.readFileSync('./supabase/schema.sql', 'utf8');

  console.log("Executing SQL on Supabase project:", PROJECT_REF);

  const response = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: sql })
  });

  const text = await response.text();
  console.log("Response Status:", response.status);
  console.log("Response Text:", text);
}

executeSql().catch(console.error);
