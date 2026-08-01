import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  const isDummy = !url || url.includes("your-project") || !key || key.includes("your-anon-key");

  if (isDummy) {
    return {
      auth: {
        getUser: async () => ({ data: { user: { id: "demo-user", email: "demo@saassaasreclaimor.com" } }, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            order: () => Promise.resolve({ data: null, error: null }),
          }),
          order: () => Promise.resolve({ data: null, error: null }),
        }),
      }),
    } as any;
  }

  const cookieStore = cookies();

  return createServerClient(url, key, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // Ignore error when called from server component
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options });
        } catch (error) {
          // Ignore error when called from server component
        }
      },
    },
  });
}
