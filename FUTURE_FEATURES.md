# 🚀 WasteDetect SaaS — Future Enhancements & Feature Roadmap

This document outlines planned future features and architecture upgrades for WasteDetect SaaS.

---

## 📌 Phase 2 Feature Wishlist

### 1. 🔔 Automated Email Notifications (Resend / SendGrid API)
- Send automated renewal warnings 7 days and 1 day prior to subscription auto-renewal dates.
- Send weekly SaaS spend digest emails with newly flagged waste subscriptions.

### 2. 📊 Interactive Visual Analytics & Charts (Recharts / Chart.js)
- **Spend Trend Line Chart**: Month-over-month software spend tracking.
- **Category Allocation Pie Chart**: Visual breakdown of total budget across Engineering, Marketing, Design, etc.
- **Seat Utilization Bar Chart**: Active vs idle seats per software tool.

### 3. 🌐 One-Click Live Production Deployment (Vercel / Netlify)
- Deploy Next.js App Router project to Vercel with automatic domain binding (`wastedetect.com`).
- Add custom SSL certificate and environment variable syncing (`SUPABASE_URL`, `R2_ACCOUNT_ID`, `MESHAI_API_KEY`).

### 4. 💳 Production Payment Gateway Integration (Razorpay / Stripe)
- Activate live checkout flow for Pro ($29/mo) and Enterprise ($99/mo) tiers.
- Sync subscription status directly with Supabase `profiles` table.

### 5. 🔗 Direct SaaS API Integrations (OAuth 2.0 Connectors)
- **Google Workspace API**: Scan active user accounts & inactive licenses.
- **Slack Admin API**: Detect total paid seats vs active users in workspace.
- **Zoom Admin API**: Flag unassigned Pro licenses.

### 6. 📧 Contact Us & Help Center Page
- Contact form with direct email delivery to support team.
- Searchable FAQ & documentation portal.

### 7. 🏢 Team Workspace & RBAC (Role-Based Access Control)
- Multi-user team workspace invitations (`Admin`, `Manager`, `Viewer`).
- Department-level spending permission limits.

### 8. 📱 Progressive Web App (PWA) Support
- Add Web App Manifest and Service Workers for one-click mobile & desktop installation.
- Offline cached mode support.

---

## 🛠️ Current Baseline Tech Stack
- **Framework**: Next.js 14 App Router (TypeScript)
- **Styling**: Tailwind CSS + Modern Dark Mode
- **Database**: Supabase Cloud PostgreSQL
- **File Storage**: Cloudflare R2 S3 Object Storage
- **AI Processing**: MeshAI Vision & Contract Clause Engine
