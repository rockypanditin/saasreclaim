const TOKEN = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const PROJECT_REF = 'epctfotldcmekcokbdqf';

async function checkUsers() {
  const query = `
    SELECT u.id, u.email, u.created_at, p.full_name, p.company_name 
    FROM auth.users u
    LEFT JOIN public.profiles p ON u.id = p.id;
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
  console.log("Registered Users in Supabase DB:", text);
}

checkUsers().catch(console.error);
