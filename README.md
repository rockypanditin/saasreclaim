# WasteDetect - SaaS Subscription & Waste Detector

WasteDetect helps businesses analyze software subscriptions, uncover duplicate seats (e.g., Zoom + Meet), detect inactive licenses, and recover 25-35% of their monthly SaaS budget.

## Features

- ⚡ **Next.js 14 App Router & TypeScript**: Fast, type-safe, and server-optimized.
- 🎨 **Tailwind CSS & Lucide Icons**: Modern aesthetics with glassmorphic dashboards and responsive cards.
- 🧠 **Smart Waste Calculator**: Automatic categorization and detection of duplicate and unused licenses.
- 📊 **Executive PDF Waste Reports**: Printable executive summary with category breakdowns.
- 🔐 **Supabase SSR & Demo Mode**: Full database setup support alongside instant offline demo capability.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Supabase Database Setup (Optional)**:
   - Create a project on [Supabase](https://supabase.com).
   - Copy the SQL contents from `supabase/schema.sql` into the Supabase SQL Editor and run it.
   - Update `.env.local` with your Supabase URL and Anon Key.
