# 📋 PRD — Product Requirements Document
## WasteDetect: SaaS Subscription Tracker

---

## 1. Executive Summary (Project Ka Overview)

### 1.1 Product Name
**WasteDetect** — SaaS Subscription Waste Tracker

### 1.2 Tagline
"Stop Wasting Money on Unused Software"

### 1.3 Problem Statement
Companies (especially 30-200 employees) waste **25-35%** of their software budget on:
- Duplicate tools (e.g., Zoom + Google Meet)
- Unused subscriptions (nobody logged in for 3+ months)
- Forgotten auto-renewals
- Shadow IT (employees buying tools without approval)

**Current solutions are either:**
- Too expensive ($20,000+/year — Zylo, Productiv)
- Too complex (enterprise tools with 100+ features)
- Non-existent for SMBs

### 1.4 Solution
A simple, affordable web app that:
1. Tracks all software subscriptions in one place
2. Detects duplicates and unused tools
3. Calculates potential savings
4. Generates actionable reports

### 1.5 Target Market
| Segment | Size | Monthly Budget | Pain Level |
|---------|------|----------------|------------|
| Small SaaS (30-50 emp) | 50,000+ globally | $2,000-5,000 | 🔴 High |
| Mid-size (50-200 emp) | 20,000+ globally | $5,000-20,000 | 🔴 High |
| Agencies/Freelancers | 100,000+ globally | $500-2,000 | 🟡 Medium |

### 1.6 Business Model
**Freemium SaaS:**
- **Free Plan:** 5 subscriptions, basic tracking
- **Starter:** ₹2,000/mo ($29) — Up to 20 subscriptions
- **Growth:** ₹5,000/mo ($79) — Unlimited + team access ⭐ *Primary target*
- **Pro:** ₹12,000/mo ($199) — API access + priority support

### 1.7 Revenue Projection (Conservative)
| Month | Customers | MRR (₹) | Notes |
|-------|-----------|---------|-------|
| M1-M3 | 0 | 0 | Building + Beta |
| M4 | 5 | 25,000 | First paying customers |
| M6 | 15 | 75,000 | Word of mouth starts |
| M9 | 40 | 2,00,000 | SEO kicks in |
| M12 | 80 | 4,00,000 | Profitable |
| M18 | 200 | 10,00,000 | Hiring starts |
| M24 | 400 | 20,00,000 | Scaling |

---

## 2. User Personas (Kaun Use Karega)

### 2.1 Primary: Finance Manager / CFO
**Name:** Rajesh, 38, Mumbai
**Company:** 45-employee SaaS startup
**Pain:** "Har mahine $3,000 software pe ja raha hai. Pata nahi kaunsa tool kisne liya. Excel mein track karta hoon — bakwaas hai."
**Goal:** Paisa bachana, budget control
**Willing to pay:** ₹5,000/mo if saves ₹20,000/mo

### 2.2 Secondary: IT Admin / Operations
**Name:** Priya, 32, Bangalore
**Company:** 120-employee agency
**Pain:** "Employees apne aap tools khareed lete hain. Security risk bhi hai, paisa bhi waste ho raha hai."
**Goal:** Visibility + control
**Willing to pay:** ₹5,000-12,000/mo

### 2.3 Tertiary: Startup Founder
**Name:** Arjun, 28, Delhi
**Company:** 15-employee startup
**Pain:** "Pata nahi kitne tools ke liye pay kar raha hoon. Investor ne pucha toh jawab nahi tha."
**Goal:** Clean financial records
**Willing to pay:** ₹2,000/mo

---

## 3. User Stories (User Kya Karega)

### 3.1 Authentication
- **US-001:** As a user, I want to sign up with email/password so I can create an account
- **US-002:** As a user, I want to log in so I can access my dashboard
- **US-003:** As a user, I want to reset my password so I can recover my account
- **US-004:** As a user, I want to update my profile (name, company) so my info is correct

### 3.2 Subscription Management
- **US-101:** As a user, I want to add a new software subscription so I can track it
- **US-102:** As a user, I want to edit a subscription so I can update details
- **US-103:** As a user, I want to delete a subscription so I can remove unused ones
- **US-104:** As a user, I want to view all my subscriptions in a list so I can see everything
- **US-105:** As a user, I want to filter subscriptions by category so I can organize them
- **US-106:** As a user, I want to mark a subscription as "unused" so the system tracks it

### 3.3 Waste Detection
- **US-201:** As a user, I want to see duplicate tools detected so I know what's redundant
- **US-202:** As a user, I want to see unused subscriptions highlighted so I can cancel them
- **US-203:** As a user, I want to see total monthly spend so I know my budget
- **US-204:** As a user, I want to see potential savings so I know how much I can save
- **US-205:** As a user, I want to see renewal dates so I don't miss payments

### 3.4 Reports
- **US-301:** As a user, I want to generate a waste report PDF so I can share with my team
- **US-302:** As a user, I want to see spending trends over time so I can plan budgets
- **US-303:** As a user, I want to see recommendations so I know what action to take

### 3.5 Team Features (Growth/Pro Plan)
- **US-401:** As a team admin, I want to invite team members so they can add subscriptions
- **US-402:** As a team member, I want to see company-wide subscriptions so I know what's available
- **US-403:** As a team admin, I want to set spending limits so we don't overspend

---

## 4. Feature Requirements (Kya-Kya Hona Chahiye)

### 4.1 MVP Features (Phase 1 — Launch)
| Feature | Priority | Description |
|---------|----------|-------------|
| Email Auth | P0 | Signup/Login/Logout with Supabase Auth |
| Add Subscription | P0 | Form to add name, cost, category, renewal date |
| Subscription List | P0 | Grid view of all subscriptions with status |
| Dashboard Stats | P0 | Total spend, potential savings, issue count |
| Duplicate Detection | P0 | Auto-detect by category (e.g., 2 communication tools) |
| Unused Detection | P0 | Manual mark + 3-month rule |
| Basic Reports | P0 | Simple text recommendations |
| Profile Management | P1 | Update name, company, avatar |

### 4.2 Phase 2 Features (Month 3-6)
| Feature | Priority | Description |
|---------|----------|-------------|
| Invoice Upload | P1 | Upload PDF/CSV of invoices to auto-extract data |
| Email Forward | P1 | Forward receipts to receipts@wastedetect.com |
| Spending Charts | P1 | Pie chart by category, bar chart over time |
| Renewal Alerts | P1 | Email 7 days before renewal date |
| Team Invites | P2 | Multi-user access for Growth plan |
| Export CSV | P2 | Download subscription list as CSV |

### 4.3 Phase 3 Features (Month 6-12)
| Feature | Priority | Description |
|---------|----------|-------------|
| AI Recommendations | P2 | "Switch from Zoom to Google Meet — save ₹5,000/mo" |
| Vendor Database | P2 | Pre-loaded pricing for 500+ SaaS tools |
| Negotiation Tips | P3 | "You're paying ₹10,000 for Slack — average is ₹7,000" |
| SSO Integration | P3 | Google Workspace / Microsoft 365 login |
| API Access | P3 | For Pro plan customers |

---

## 5. Non-Functional Requirements

### 5.1 Performance
- Page load time: < 2 seconds
- Dashboard load: < 1 second (after first load)
- Supports 1000+ subscriptions per user

### 5.2 Security
- All data encrypted at rest (Supabase default)
- HTTPS only
- Row Level Security — user can only see their own data
- No bank account access (manual upload only)

### 5.3 Scalability
- Should handle 10,000 users in Year 1
- Database: Supabase free tier → paid tier as needed
- Hosting: Vercel (auto-scales)

### 5.4 Accessibility
- Works on mobile (responsive design)
- Works on Chrome, Safari, Firefox
- Simple language (no jargon)

---

## 6. Success Metrics (Kaise Pata Chalega Ki Chal Raha Hai)

| Metric | Target M3 | Target M6 | Target M12 |
|--------|-----------|-----------|------------|
| Signups | 100 | 500 | 2,000 |
| Paying Customers | 5 | 20 | 80 |
| MRR | ₹25,000 | ₹1,00,000 | ₹4,00,000 |
| Churn Rate | < 10% | < 8% | < 5% |
| NPS Score | — | > 30 | > 50 |
| Avg. Subscriptions/User | 10 | 15 | 20 |

---

## 7. Risks & Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Users don't trust financial data upload | High | High | No bank connect; manual entry + email forward only |
| Low initial traction | Medium | High | Validate before building; free beta first |
| Competitors copy features | Medium | Medium | Focus on SMB simplicity; build community |
| Data accuracy issues | Medium | Medium | Allow manual override; clear disclaimers |
| Supabase limits reached | Low | Medium | Upgrade plan; migrate if needed |

---

## 8. Competitive Analysis

| Competitor | Price | Target | Our Advantage |
|------------|-------|--------|---------------|
| Zylo | $20K+/yr | Enterprise | Too expensive for SMBs |
| Cledara | $5K+/yr | Mid-market | Complex; requires bank connect |
| Productiv | $15K+/yr | Enterprise | Overkill for small teams |
| Torii | $10K+/yr | Mid-market | Limited SMB features |
| **WasteDetect** | **₹2K-12K/mo** | **SMB 30-200** | **Simple, affordable, no bank connect** |

---

## 9. Go-to-Market Strategy

### 9.1 Launch Channels
1. **Product Hunt** — Free launch, target #1 of the day
2. **Reddit** — r/SaaS, r/startups, r/smallbusiness
3. **LinkedIn** — Daily posts, DM outreach to founders
4. **IndieHackers** — Build in public journey
5. **Twitter/X** — Short tips on SaaS waste

### 9.2 Growth Channels
1. **SEO** — Blog: "How to reduce SaaS spend", "SaaS waste statistics"
2. **Content** — Free tools: "SaaS Spend Calculator"
3. **Referrals** — "Refer a friend, get 1 month free"
4. **Partnerships** — CPA firms, business consultants
5. **Affiliates** — 20% commission for referrals

### 9.3 Pricing Strategy
- **Free:** Hook users, show value
- **Starter:** Low barrier to entry
- **Growth:** ⭐ Main revenue driver (70% of customers)
- **Pro:** Enterprise-like features for bigger SMBs

---

## 10. Future Roadmap

### Year 1
- Q1: MVP Launch, first 50 customers
- Q2: Invoice upload, email forwarding
- Q3: Team features, spending charts
- Q4: AI recommendations, 200+ customers

### Year 2
- Integration marketplace (Slack, Jira, etc.)
- Mobile app (PWA)
- International expansion (EU, APAC)
- 1,000+ paying customers

### Year 3
- AI-powered negotiation assistant
- Vendor marketplace (discounted SaaS deals)
- Enterprise tier (500+ employees)
- Potential acquisition target

---

*Document Version: 1.0*
*Created: July 2026*
*Owner: WasteDetect Team*
