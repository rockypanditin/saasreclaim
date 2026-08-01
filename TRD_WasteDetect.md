# 🔧 TRD — Technical Requirements Document
## WasteDetect: SaaS Subscription Tracker

---

## 1. Architecture Overview

### 1.1 High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                      USER BROWSER                           │
│                  (Chrome, Safari, Firefox)                   │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTPS
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    VERCEL (Hosting)                         │
│              Next.js 14 + React + TypeScript                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Frontend   │  │    API       │  │  Server Actions  │  │
│  │  (App Router)│  │   Routes     │  │   (Server Side)  │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  SUPABASE    │ │  CLOUDFLARE  │ │   STRIPE     │
│  (Database   │ │     R2       │ │  (Payments)  │
│   + Auth)    │ │  (Storage)   │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
```

### 1.2 Tech Stack
| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| **Framework** | Next.js | 14.x | Full-stack React framework |
| **Language** | TypeScript | 5.x | Type safety |
| **Styling** | Tailwind CSS | 3.x | Utility-first CSS |
| **UI Components** | Custom + Lucide | Latest | Icons + reusable components |
| **Database** | PostgreSQL (Supabase) | 15.x | Primary data store |
| **Auth** | Supabase Auth | Latest | Email/password authentication |
| **Storage** | Cloudflare R2 | Latest | Invoice PDF storage |
| **Payments** | Stripe | Latest | Subscription billing |
| **Email** | Resend | Latest | Transactional emails |
| **Hosting** | Vercel | Latest | Edge deployment |
| **Analytics** | Vercel Analytics | Latest | Performance tracking |

---

## 2. Database Schema

### 2.1 Entity Relationship Diagram
```
┌──────────────┐       ┌──────────────────┐       ┌──────────────┐
│   profiles   │◄─────│  subscriptions   │       │    teams     │
├──────────────┤  1:M  ├──────────────────┤       ├──────────────┤
│ id (PK)      │       │ id (PK)          │       │ id (PK)      │
│ email        │       │ user_id (FK)      │       │ name         │
│ full_name    │       │ name             │       │ owner_id(FK) │
│ company_name │       │ category         │       │ created_at   │
│ avatar_url   │       │ monthly_cost     │       └──────────────┘
│ created_at   │       │ billing_cycle    │
└──────────────┘       │ renewal_date     │
                       │ status           │
                       │ last_used        │
                       │ description      │
                       │ created_at       │
                       └──────────────────┘
```

### 2.2 Table Definitions

#### Table: `profiles`
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, REFERENCES auth.users | User ID from Supabase Auth |
| email | VARCHAR(255) | NOT NULL, UNIQUE | User email |
| full_name | VARCHAR(100) | NULL | Display name |
| company_name | VARCHAR(100) | NULL | Company name |
| avatar_url | TEXT | NULL | Profile picture URL |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Account creation |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | Last update |

#### Table: `subscriptions`
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique ID |
| user_id | UUID | NOT NULL, REFERENCES auth.users, ON DELETE CASCADE | Owner |
| name | VARCHAR(100) | NOT NULL | Software name |
| category | VARCHAR(50) | NOT NULL | Category |
| monthly_cost | DECIMAL(10,2) | NOT NULL, CHECK > 0 | Monthly cost in INR |
| billing_cycle | VARCHAR(20) | NOT NULL, CHECK IN ('monthly','quarterly','yearly') | Payment frequency |
| renewal_date | DATE | NOT NULL | Next payment date |
| status | VARCHAR(20) | DEFAULT 'active', CHECK IN ('active','unused','duplicate','cancelled') | Current status |
| last_used | DATE | NULL | Last usage date |
| description | TEXT | NULL | Notes |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Created |
| updated_at | TIMESTAMPTZ | DEFAULT NOW() | Updated |

#### Table: `categories` (Reference)
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | SERIAL | PRIMARY KEY | Auto-increment |
| name | VARCHAR(50) | NOT NULL, UNIQUE | Category name |
| icon | VARCHAR(50) | NULL | Lucide icon name |

#### Table: `invoices` (Future)
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique ID |
| subscription_id | UUID | REFERENCES subscriptions | Linked subscription |
| file_url | TEXT | NOT NULL | R2 file URL |
| file_name | VARCHAR(255) | NOT NULL | Original filename |
| amount | DECIMAL(10,2) | NULL | Invoice amount |
| invoice_date | DATE | NULL | Invoice date |
| created_at | TIMESTAMPTZ | DEFAULT NOW() | Uploaded |

### 2.3 Indexes
```sql
-- For fast user-specific queries
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);

-- For filtering by status
CREATE INDEX idx_subscriptions_status ON subscriptions(status);

-- For renewal date alerts
CREATE INDEX idx_subscriptions_renewal ON subscriptions(renewal_date);

-- For category grouping
CREATE INDEX idx_subscriptions_category ON subscriptions(category);
```

### 2.4 Row Level Security (RLS) Policies
```sql
-- Users can only see their own data
CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own subscriptions" 
  ON subscriptions FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscriptions" 
  ON subscriptions FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscriptions" 
  ON subscriptions FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own subscriptions" 
  ON subscriptions FOR DELETE USING (auth.uid() = user_id);
```

---

## 3. API Endpoints

### 3.1 Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/signup` | Create new account | No |
| POST | `/api/auth/login` | Login with credentials | No |
| POST | `/api/auth/logout` | Logout user | Yes |
| POST | `/api/auth/reset-password` | Send reset email | No |
| GET | `/api/auth/session` | Get current session | Yes |

### 3.2 Subscription Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/subscriptions` | List all user's subscriptions | Yes |
| POST | `/api/subscriptions` | Create new subscription | Yes |
| GET | `/api/subscriptions/:id` | Get single subscription | Yes |
| PUT | `/api/subscriptions/:id` | Update subscription | Yes |
| DELETE | `/api/subscriptions/:id` | Delete subscription | Yes |
| GET | `/api/subscriptions/stats` | Get dashboard stats | Yes |
| GET | `/api/subscriptions/report` | Generate waste report | Yes |

### 3.3 Upload Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/upload/invoice` | Upload invoice PDF | Yes |
| GET | `/api/upload/:id` | Get uploaded file | Yes |

### 3.4 API Request/Response Examples

#### Create Subscription
```http
POST /api/subscriptions
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "Zoom Pro",
  "category": "Communication",
  "monthly_cost": 1500,
  "billing_cycle": "monthly",
  "renewal_date": "2026-08-15",
  "description": "Team meetings"
}

Response: 201 Created
{
  "id": "uuid",
  "name": "Zoom Pro",
  "monthly_cost": 1500,
  "status": "active",
  "created_at": "2026-07-29T10:00:00Z"
}
```

#### Get Dashboard Stats
```http
GET /api/subscriptions/stats
Authorization: Bearer <token>

Response: 200 OK
{
  "total_monthly_spend": 45000,
  "total_annual_spend": 540000,
  "potential_savings": 12000,
  "duplicate_count": 2,
  "unused_count": 3,
  "subscription_count": 15
}
```

---

## 4. Component Architecture

### 4.1 Component Hierarchy
```
App (Root)
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation
│   │   └── UserMenu
│   └── Footer
├── Pages
│   ├── Home (Landing)
│   │   ├── HeroSection
│   │   ├── FeaturesSection
│   │   ├── PricingSection
│   │   └── CTASection
│   ├── Login
│   │   └── LoginForm
│   ├── Signup
│   │   └── SignupForm
│   ├── Dashboard
│   │   ├── StatsCards
│   │   ├── SubscriptionForm
│   │   ├── RecommendationsPanel
│   │   └── SubscriptionList
│   │       └── SubscriptionCard (xN)
│   ├── Subscriptions
│   │   ├── FilterBar
│   │   └── SubscriptionTable
│   └── Reports
│       └── ReportGenerator
└── Components
    ├── UI
    │   ├── Button
    │   ├── Input
    │   ├── Card
    │   ├── Modal
    │   ├── Table
    │   └── Chart
    ├── Layout
    │   ├── Header
    │   ├── Sidebar
    │   └── Footer
    └── Subscription
        ├── SubscriptionCard
        ├── SubscriptionForm
        ├── DuplicateAlert
        ├── WasteSummary
        └── CategoryBadge
```

### 4.2 State Management
| State Type | Solution | Use Case |
|------------|----------|----------|
| Server State | React Server Components + Supabase | Data fetching |
| Client State | React useState/useReducer | Form inputs, UI toggles |
| Global State | React Context | Auth state, theme |
| URL State | Next.js useSearchParams | Filters, pagination |

---

## 5. Authentication Flow

### 5.1 Signup Flow
```
User fills form → Client validates → Supabase Auth signup
    → Create profile in DB → Send welcome email
    → Redirect to dashboard
```

### 5.2 Login Flow
```
User enters credentials → Supabase Auth verify
    → Create session cookie → Redirect to dashboard
    → Fetch user subscriptions
```

### 5.3 Session Management
- JWT tokens stored in HTTP-only cookies
- Session expires after 7 days of inactivity
- Refresh token rotation enabled
- Logout clears all cookies

---

## 6. Data Flow

### 6.1 Adding a Subscription
```
User fills form → Client validation → POST /api/subscriptions
    → Server validates → Insert into Supabase
    → Return new subscription → Update UI
    → Re-calculate stats → Show updated dashboard
```

### 6.2 Generating Waste Report
```
User clicks "Generate Report" → GET /api/subscriptions/report
    → Server fetches all subscriptions → Run analysis
    → Find duplicates by category → Find unused (3+ months)
    → Calculate savings → Return recommendations
    → Client renders report → Offer PDF download
```

---

## 7. Security Requirements

### 7.1 Authentication
- Email/password with minimum 6 characters
- Email verification required (optional for MVP)
- Rate limiting: 5 login attempts per minute per IP
- Session timeout: 7 days

### 7.2 Authorization
- Row Level Security on all tables
- Users can only access their own data
- API routes validate session before processing

### 7.3 Data Protection
- All API calls over HTTPS
- Passwords hashed by Supabase (bcrypt)
- No sensitive data in URL parameters
- Environment variables for secrets

### 7.4 Input Validation
- Server-side validation on all inputs
- SQL injection prevention (parameterized queries)
- XSS prevention (React auto-escapes)
- File upload: PDF only, max 10MB

---

## 8. Performance Requirements

### 8.1 Page Load Times
| Page | Target | Max |
|------|--------|-----|
| Homepage | < 1s | < 2s |
| Login/Signup | < 1s | < 2s |
| Dashboard | < 1.5s | < 3s |
| Subscription List | < 1s | < 2s |

### 8.2 Database Queries
- All queries must use indexes
- Max 100 subscriptions fetched at once (pagination)
- Dashboard stats: single aggregated query

### 8.3 Caching Strategy
- Static pages: ISR (Incremental Static Regeneration)
- API responses: 60-second cache for public data
- User data: No cache (real-time)

---

## 9. Deployment Architecture

### 9.1 Environments
| Environment | URL | Purpose |
|-------------|-----|---------|
| Development | localhost:3000 | Local development |
| Staging | staging.wastedetect.vercel.app | Testing before production |
| Production | wastedetect.app | Live users |

### 9.2 Deployment Pipeline
```
Code Push → GitHub → Vercel Build → Run Tests → Deploy
    ↓
Supabase Migrations → Apply schema changes
    ↓
Smoke Tests → Verify critical paths
    ↓
Production Live
```

### 9.3 Environment Variables
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# Cloudflare R2
R2_ACCOUNT_ID=xxx
R2_ACCESS_KEY_ID=xxx
R2_SECRET_ACCESS_KEY=xxx
R2_BUCKET_NAME=saas-invoices
R2_PUBLIC_URL=https://xxx.r2.dev

# Stripe
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Resend Email
RESEND_API_KEY=re_xxx

# App
NEXT_PUBLIC_APP_URL=https://wastedetect.app
```

---

## 10. Monitoring & Logging

### 10.1 Error Tracking
- Vercel Analytics (built-in)
- Console logging for development
- User-facing error messages (no stack traces)

### 10.2 Key Metrics to Track
| Metric | Tool | Alert Threshold |
|--------|------|-----------------|
| Page load time | Vercel Analytics | > 3s |
| API error rate | Vercel Logs | > 5% |
| Database latency | Supabase Dashboard | > 500ms |
| Auth failures | Supabase Auth | > 10/min |
| Uptime | Vercel | < 99.9% |

### 10.3 Health Checks
```
GET /api/health
Response: { "status": "ok", "timestamp": "2026-07-29T10:00:00Z" }
```

---

## 11. Third-Party Integrations

### 11.1 Supabase
| Feature | Usage | Cost |
|---------|-------|------|
| Database | Primary data store | Free tier |
| Auth | User authentication | Free tier |
| Realtime | Future: live updates | Free tier |
| Storage | Future: small files | Free tier |

### 11.2 Cloudflare R2
| Feature | Usage | Cost |
|---------|-------|------|
| File Storage | Invoice PDFs | 10GB free, then $0.015/GB |
| CDN | Fast global delivery | Included |

### 11.3 Stripe
| Feature | Usage | Cost |
|---------|-------|------|
| Payments | Subscription billing | 2.9% + ₹3 per transaction |
| Invoicing | Automated invoices | Included |
| Webhooks | Payment events | Included |

### 11.4 Resend
| Feature | Usage | Cost |
|---------|-------|------|
| Transactional | Welcome, alerts | 3,000 emails/month free |

---

## 12. File Structure
```
saas-waste-detector/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── login/
│   │   └── page.tsx              # Login page
│   ├── signup/
│   │   └── page.tsx              # Signup page
│   ├── dashboard/
│   │   └── page.tsx              # Main dashboard
│   ├── subscriptions/
│   │   └── page.tsx              # Subscription list
│   ├── reports/
│   │   └── page.tsx              # Reports page
│   └── api/                      # API routes
│       ├── auth/
│       │   └── [...nextauth]/    # Auth handlers
│       ├── subscriptions/
│       │   └── route.ts          # CRUD operations
│       └── upload/
│           └── route.ts          # File upload
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── modal.tsx
│   │   └── table.tsx
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   └── subscription/             # Domain-specific
│       ├── subscription-card.tsx
│       ├── subscription-form.tsx
│       ├── duplicate-alert.tsx
│       └── waste-summary.tsx
├── lib/                          # Utilities
│   ├── supabase.ts               # Browser client
│   ├── supabase-server.ts        # Server client
│   ├── utils.ts                  # Helpers
│   ├── subscription-utils.ts     # Business logic
│   └── cloudflare.ts             # R2 client
├── types/                        # TypeScript types
│   ├── subscription.ts
│   └── user.ts
├── public/                       # Static assets
│   ├── logo.png
│   └── images/
├── supabase/
│   └── schema.sql                # Database schema
├── .env.local                    # Environment variables
├── .env.example                  # Template
├── next.config.js                # Next.js config
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

---

## 13. Testing Strategy

### 13.1 Testing Levels
| Level | Tool | Coverage Target |
|-------|------|-----------------|
| Unit | Jest | 70% of utilities |
| Integration | React Testing Library | Critical user flows |
| E2E | Playwright | Core journeys |

### 13.2 Critical Test Cases
1. User can sign up and log in
2. User can add, edit, delete subscriptions
3. Dashboard shows correct totals
4. Duplicate detection works correctly
5. RLS prevents cross-user data access
6. PDF report generates successfully

---

## 14. Scalability Plan

### 14.1 Current Capacity (Free Tier)
- Users: 50,000 (Supabase free)
- Storage: 500MB (Supabase) + 10GB (R2)
- Bandwidth: 100GB/month (Vercel)

### 14.2 Scaling Triggers
| Metric | Current | Scale At | Action |
|--------|---------|----------|--------|
| Users | 0 | 10,000 | Upgrade Supabase |
| DB Size | 0MB | 400MB | Upgrade Supabase |
| Storage | 0GB | 8GB | Upgrade R2 |
| Traffic | 0 | 90GB/month | Upgrade Vercel Pro |

### 14.3 Future Architecture
```
Current: Single Vercel + Supabase
Future:
  - Vercel Pro (team features)
  - Supabase Pro (backups, branching)
  - Redis (caching layer)
  - CDN (Cloudflare Pro)
```

---

*Document Version: 1.0*
*Created: July 2026*
*Tech Lead: WasteDetect Engineering*
