const fs = require('fs');
const path = require('path');

// Read .env.local natively
let TOKEN = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const PROJECT_REF = 'epctfotldcmekcokbdqf';

try {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/SUPABASE_ACCESS_TOKEN=(.+)/);
    if (match && match[1]) {
      TOKEN = match[1].trim();
    }
  }
} catch (e) {
  // Fallback to default token
}

async function runQuery(sqlQuery) {
  console.log(`Executing SQL Query on Supabase project (${PROJECT_REF})...`);
  try {
    const response = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: sqlQuery })
    });

    const data = await response.text();
    console.log("Status:", response.status);
    console.log("Result:", data);
    return data;
  } catch (error) {
    console.error("Error executing SQL:", error);
  }
}

module.exports = { runQuery };

if (require.main === module) {
  const query = process.argv[2] || "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';";
  runQuery(query);
}
