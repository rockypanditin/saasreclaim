# 🔌 API Documentation
## WasteDetect — Complete API Reference

---

## 1. Base URL

```
Development: http://localhost:3000/api
Production:  https://wastedetect.app/api
```

## 2. Authentication

All API endpoints (except auth) require a valid session cookie.
The session is automatically managed by Supabase Auth.

### Headers
```
Content-Type: application/json
```

### Error Responses
```json
// 401 Unauthorized
{
  "error": "Unauthorized",
  "message": "Please log in to access this resource"
}

// 403 Forbidden
{
  "error": "Forbidden",
  "message": "You don't have permission to access this resource"
}

// 404 Not Found
{
  "error": "Not Found",
  "message": "The requested resource was not found"
}

// 500 Server Error
{
  "error": "Internal Server Error",
  "message": "Something went wrong. Please try again."
}
```

---

## 3. Authentication Endpoints

### 3.1 Sign Up
```http
POST /api/auth/signup
Content-Type: application/json

Request Body:
{
  "email": "user@example.com",
  "password": "min6chars",
  "full_name": "John Doe",
  "company_name": "Acme Inc"
}

Response: 201 Created
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "full_name": "John Doe",
    "company_name": "Acme Inc"
  },
  "session": {
    "access_token": "jwt-token",
    "expires_at": 1234567890
  }
}

Response: 400 Bad Request
{
  "error": "Email already registered"
}
```

### 3.2 Log In
```http
POST /api/auth/login
Content-Type: application/json

Request Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response: 200 OK
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "full_name": "John Doe"
  },
  "session": {
    "access_token": "jwt-token",
    "expires_at": 1234567890
  }
}

Response: 401 Unauthorized
{
  "error": "Invalid login credentials"
}
```

### 3.3 Log Out
```http
POST /api/auth/logout

Response: 200 OK
{
  "message": "Logged out successfully"
}
```

### 3.4 Get Current User
```http
GET /api/auth/me

Response: 200 OK
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "full_name": "John Doe",
    "company_name": "Acme Inc",
    "avatar_url": null
  }
}

Response: 401 Unauthorized
{
  "error": "Not authenticated"
}
```

### 3.5 Reset Password
```http
POST /api/auth/reset-password
Content-Type: application/json

Request Body:
{
  "email": "user@example.com"
}

Response: 200 OK
{
  "message": "Password reset email sent"
}
```

---

## 4. Subscription Endpoints

### 4.1 List All Subscriptions
```http
GET /api/subscriptions

Query Parameters (optional):
?status=active          // Filter by status
?category=Communication // Filter by category
?sort=monthly_cost      // Sort by field
?order=desc             // asc or desc

Response: 200 OK
{
  "subscriptions": [
    {
      "id": "uuid-1",
      "name": "Zoom Pro",
      "category": "Communication",
      "monthly_cost": 1500.00,
      "billing_cycle": "monthly",
      "renewal_date": "2026-08-15",
      "status": "active",
      "last_used": "2026-07-28",
      "description": "Team meetings",
      "created_at": "2026-07-01T10:00:00Z"
    },
    {
      "id": "uuid-2",
      "name": "Canva Pro",
      "category": "Design",
      "monthly_cost": 1200.00,
      "billing_cycle": "yearly",
      "renewal_date": "2027-01-10",
      "status": "active",
      "last_used": "2026-07-25",
      "description": "Social media graphics",
      "created_at": "2026-07-05T10:00:00Z"
    }
  ],
  "total": 15,
  "page": 1,
  "per_page": 20
}
```

### 4.2 Create Subscription
```http
POST /api/subscriptions
Content-Type: application/json

Request Body:
{
  "name": "Slack Pro",
  "category": "Communication",
  "monthly_cost": 2500.00,
  "billing_cycle": "monthly",
  "renewal_date": "2026-08-20",
  "description": "Team communication"
}

Response: 201 Created
{
  "id": "uuid-new",
  "name": "Slack Pro",
  "category": "Communication",
  "monthly_cost": 2500.00,
  "billing_cycle": "monthly",
  "renewal_date": "2026-08-20",
  "status": "active",
  "created_at": "2026-07-29T10:00:00Z"
}

Response: 400 Bad Request
{
  "error": "Validation failed",
  "details": {
    "monthly_cost": "Must be greater than 0",
    "renewal_date": "Must be a future date"
  }
}
```

### 4.3 Get Single Subscription
```http
GET /api/subscriptions/:id

Response: 200 OK
{
  "id": "uuid-1",
  "name": "Zoom Pro",
  "category": "Communication",
  "monthly_cost": 1500.00,
  "billing_cycle": "monthly",
  "renewal_date": "2026-08-15",
  "status": "active",
  "last_used": "2026-07-28",
  "description": "Team meetings",
  "created_at": "2026-07-01T10:00:00Z",
  "updated_at": "2026-07-01T10:00:00Z"
}

Response: 404 Not Found
{
  "error": "Subscription not found"
}
```

### 4.4 Update Subscription
```http
PUT /api/subscriptions/:id
Content-Type: application/json

Request Body:
{
  "monthly_cost": 2000.00,
  "renewal_date": "2026-09-15",
  "status": "active"
}

Response: 200 OK
{
  "id": "uuid-1",
  "name": "Zoom Pro",
  "monthly_cost": 2000.00,
  "renewal_date": "2026-09-15",
  "status": "active",
  "updated_at": "2026-07-29T10:00:00Z"
}
```

### 4.5 Delete Subscription
```http
DELETE /api/subscriptions/:id

Response: 200 OK
{
  "message": "Subscription deleted successfully"
}

Response: 404 Not Found
{
  "error": "Subscription not found"
}
```

### 4.6 Get Dashboard Stats
```http
GET /api/subscriptions/stats

Response: 200 OK
{
  "total_subscriptions": 15,
  "total_monthly_spend": 45000.00,
  "total_annual_spend": 540000.00,
  "potential_savings": 12000.00,
  "duplicate_count": 2,
  "unused_count": 3,
  "unused_monthly_cost": 8000.00,
  "active_count": 10,
  "cancelled_count": 0
}
```

### 4.7 Get Waste Report
```http
GET /api/subscriptions/report

Response: 200 OK
{
  "total_monthly_spend": 45000.00,
  "total_annual_spend": 540000.00,
  "potential_savings": 12000.00,
  "duplicate_count": 2,
  "unused_count": 3,
  "unused_monthly_cost": 8000.00,
  "recommendations": [
    {
      "type": "duplicate",
      "title": "Communication: 2 tools found",
      "description": "You have Zoom Pro and Google Meet. Consider keeping only one.",
      "potential_savings": 800.00,
      "subscriptions_involved": ["Zoom Pro", "Google Meet"]
    },
    {
      "type": "unused",
      "title": "3 tools unused for 3+ months",
      "description": "Adobe XD, Figma (old), and Trello haven't been used recently.",
      "potential_savings": 5000.00,
      "subscriptions_involved": ["Adobe XD", "Figma Old", "Trello"]
    }
  ],
  "spending_by_category": [
    { "category": "Communication", "amount": 8000.00, "percentage": 18 },
    { "category": "Design", "amount": 12000.00, "percentage": 27 },
    { "category": "Development", "amount": 15000.00, "percentage": 33 },
    { "category": "Marketing", "amount": 5000.00, "percentage": 11 },
    { "category": "Other", "amount": 5000.00, "percentage": 11 }
  ]
}
```

### 4.8 Get Upcoming Renewals
```http
GET /api/subscriptions/renewals?days=7

Response: 200 OK
{
  "renewals": [
    {
      "id": "uuid-1",
      "name": "Zoom Pro",
      "renewal_date": "2026-08-05",
      "monthly_cost": 1500.00,
      "days_until": 7
    },
    {
      "id": "uuid-3",
      "name": "Slack Pro",
      "renewal_date": "2026-08-02",
      "monthly_cost": 2500.00,
      "days_until": 4
    }
  ],
  "total_upcoming": 2,
  "total_amount": 4000.00
}
```

---

## 5. Profile Endpoints

### 5.1 Get Profile
```http
GET /api/profile

Response: 200 OK
{
  "id": "uuid",
  "email": "user@example.com",
  "full_name": "John Doe",
  "company_name": "Acme Inc",
  "avatar_url": "https://...",
  "created_at": "2026-07-01T10:00:00Z"
}
```

### 5.2 Update Profile
```http
PUT /api/profile
Content-Type: application/json

Request Body:
{
  "full_name": "John Updated",
  "company_name": "Acme Corp",
  "avatar_url": "https://new-url.com/avatar.png"
}

Response: 200 OK
{
  "id": "uuid",
  "email": "user@example.com",
  "full_name": "John Updated",
  "company_name": "Acme Corp",
  "avatar_url": "https://new-url.com/avatar.png",
  "updated_at": "2026-07-29T10:00:00Z"
}
```

---

## 6. Upload Endpoints

### 6.1 Upload Invoice
```http
POST /api/upload/invoice
Content-Type: multipart/form-data

Request Body:
{
  "file": [binary PDF file],
  "subscription_id": "uuid-1"  // optional
}

Response: 201 Created
{
  "id": "uuid-file",
  "file_url": "https://bucket.r2.dev/invoices/uuid-file.pdf",
  "file_name": "invoice-july-2026.pdf",
  "subscription_id": "uuid-1",
  "uploaded_at": "2026-07-29T10:00:00Z"
}

Response: 400 Bad Request
{
  "error": "Invalid file type. Only PDF allowed."
}

Response: 413 Payload Too Large
{
  "error": "File too large. Max size is 10MB."
}
```

---

## 7. Webhook Endpoints (Stripe)

### 7.1 Stripe Webhook
```http
POST /api/webhooks/stripe
Content-Type: application/json
Stripe-Signature: stripe-signature

Request Body (Stripe event):
{
  "id": "evt_123",
  "type": "invoice.payment_succeeded",
  "data": {
    "object": {
      "customer": "cus_123",
      "subscription": "sub_123",
      "amount_paid": 500000  // in paise (₹5,000)
    }
  }
}

Response: 200 OK
{
  "received": true
}
```

**Events Handled:**
- `invoice.payment_succeeded` — Update subscription status
- `invoice.payment_failed` — Mark as payment failed, send email
- `customer.subscription.deleted` — Cancel subscription
- `customer.subscription.updated` — Update plan details

---

## 8. Health Check

### 8.1 System Health
```http
GET /api/health

Response: 200 OK
{
  "status": "ok",
  "timestamp": "2026-07-29T10:00:00Z",
  "version": "1.0.0",
  "services": {
    "database": "connected",
    "auth": "connected",
    "storage": "connected"
  }
}
```

---

## 9. Rate Limits

| Endpoint | Limit | Window |
|----------|-------|--------|
| Auth (login/signup) | 5 requests | 1 minute |
| All other endpoints | 100 requests | 1 minute |
| Upload | 10 requests | 1 minute |

**Headers Returned:**
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1690620000
```

---

## 10. Data Types

### Subscription
```typescript
interface Subscription {
  id: string;
  user_id: string;
  name: string;
  category: string;
  monthly_cost: number;
  billing_cycle: "monthly" | "quarterly" | "yearly";
  renewal_date: string;  // YYYY-MM-DD
  status: "active" | "unused" | "duplicate" | "cancelled";
  last_used?: string;    // YYYY-MM-DD
  description?: string;
  created_at: string;    // ISO 8601
  updated_at: string;    // ISO 8601
}
```

### WasteReport
```typescript
interface WasteReport {
  total_monthly_spend: number;
  total_annual_spend: number;
  potential_savings: number;
  duplicate_count: number;
  unused_count: number;
  unused_monthly_cost: number;
  recommendations: Recommendation[];
  spending_by_category: CategorySpend[];
}

interface Recommendation {
  type: "duplicate" | "unused" | "overpriced";
  title: string;
  description: string;
  potential_savings: number;
  subscriptions_involved: string[];
}

interface CategorySpend {
  category: string;
  amount: number;
  percentage: number;
}
```

---

*Document Version: 1.0*
*Created: July 2026*
*API Version: v1*
*Base URL: https://wastedetect.app/api*
