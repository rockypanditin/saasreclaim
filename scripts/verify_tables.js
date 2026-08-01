const TOKEN = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const PROJECT_REF = 'epctfotldcmekcokbdqf';

async function verifyTables() {
  const query = `
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public';
  `;

  const response = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  });

  const text = await response.text();
  console.log("Public Tables in Supabase DB:", text);
}

verifyTables().catch(console.error);
