import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  // Check for dummy keys or unconfigured environment variables
  const isDummy = !url || url.includes("your-project") || !key || key.includes("your-anon-key");

  if (isDummy) {
    // Return a dummy client proxy that gracefully returns null or empty arrays
    return {
      auth: {
        getUser: async () => ({ data: { user: { id: "demo-user", email: "demo@saassaasreclaimor.com" } }, error: null }),
        signInWithPassword: async () => ({ data: { user: { id: "demo-user" } }, error: null }),
        signUp: async () => ({ data: { user: { id: "demo-user" } }, error: null }),
        signOut: async () => ({ error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            order: () => Promise.resolve({ data: null, error: null }),
          }),
          order: () => Promise.resolve({ data: null, error: null }),
        }),
        insert: () => Promise.resolve({ data: null, error: null }),
        update: () => Promise.resolve({ data: null, error: null }),
        delete: () => Promise.resolve({ data: null, error: null }),
      }),
    } as any;
  }

  return createBrowserClient(url, key);
}
