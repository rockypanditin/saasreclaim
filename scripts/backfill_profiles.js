const TOKEN = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const PROJECT_REF = 'epctfotldcmekcokbdqf';

async function backfillProfiles() {
  const query = `
    INSERT INTO public.profiles (id, email, full_name, company_name)
    SELECT 
      id, 
      email, 
      COALESCE(raw_user_meta_data->>'full_name', SPLIT_PART(email, '@', 1)), 
      COALESCE(raw_user_meta_data->>'company_name', 'Acme Global')
    FROM auth.users
    ON CONFLICT (id) DO UPDATE SET
      full_name = EXCLUDED.full_name,
      company_name = EXCLUDED.company_name;
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
  console.log("Backfill Profiles Status:", response.status, text);
}

backfillProfiles().catch(console.error);
