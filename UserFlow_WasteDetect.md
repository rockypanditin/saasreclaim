# 👤 User Flow Document
## WasteDetect — Complete User Journey

---

## 1. Visitor Journey (Non-Logged In)

### 1.1 Homepage Visit
```
┌─────────────────────────────────────────────────────────────┐
│  USER ACTION                    │  SYSTEM RESPONSE           │
├─────────────────────────────────────────────────────────────┤
│  1. Opens wastedetect.app     │  → Loads landing page      │
│  2. Reads hero section        │  → Shows value prop        │
│  3. Scrolls to features       │  → Shows 3 key features    │
│  4. Scrolls to pricing        │  → Shows plans             │
│  5. Clicks "Get Started"      │  → Redirects to /signup    │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Alternative: Direct Signup
```
User clicks "Sign Up" from any page
    → Goes to /signup
    → Sees form: Name, Company, Email, Password
    → Fills form → Clicks "Create Account"
    → System validates → Creates Supabase user
    → Creates profile in database
    → Sends welcome email (Resend)
    → Redirects to /dashboard
    → Shows onboarding tooltip
```

### 1.3 Alternative: Direct Login
```
User clicks "Login" from any page
    → Goes to /login
    → Sees form: Email, Password
    → Fills form → Clicks "Login"
    → System validates with Supabase Auth
    → Creates session cookie
    → Redirects to /dashboard
    → Fetches user's subscriptions
```

---

## 2. New User Onboarding

### 2.1 First Dashboard Visit (Empty State)
```
User lands on /dashboard (first time)
    → Sees welcome message: "Welcome, [Name]!"
    → Sees empty state: "No subscriptions yet"
    → Sees CTA: "Add Your First Subscription"
    → Stats cards show: ₹0, 0 subscriptions, ₹0 savings
    → Sidebar shows: Dashboard, Subscriptions, Reports
```

### 2.2 Adding First Subscription
```
User clicks "Add Your First Subscription"
    → Form opens with fields:
      • Software Name (text input)
      • Category (dropdown)
      • Monthly Cost (number input)
      • Billing Cycle (radio: monthly/quarterly/yearly)
      • Renewal Date (date picker)
      • Notes (textarea, optional)
    → User fills form → Clicks "Add"
    → System validates inputs
    → Inserts into database
    → Returns success
    → Dashboard updates:
      • New card appears in list
      • Stats update: ₹[cost], 1 subscription
      • Progress bar shows
    → Shows toast: "Zoom Pro added successfully!"
```

### 2.3 Adding Multiple Subscriptions
```
User repeats "Add Subscription" 5-10 times
    → List grows with cards
    → Stats update automatically
    → After 3+ subscriptions in same category:
      → System detects potential duplicate
      → Shows alert: "You have 2 Communication tools"
      → Suggests: "Consider keeping only one"
```

---

## 3. Regular User Flow

### 3.1 Daily Dashboard Visit
```
User logs in → Lands on /dashboard
    → Sees updated stats:
      • Total monthly spend: ₹45,000
      • Potential savings: ₹12,000
      • Issues found: 3
    → Sees subscription cards with status badges
    → Sees recommendations panel
    → Checks renewal alerts (red badges on cards)
```

### 3.2 Viewing Recommendations
```
User sees "3 Recommendations Found" banner
    → Clicks to expand
    → Sees:
      1. "Communication: 2 tools (Zoom + Google Meet)"
         → Potential savings: ₹800/month
         → Action: "Mark as duplicate" or "Keep both"

      2. "3 tools unused for 3+ months"
         → Potential savings: ₹5,000/month
         → Action: "View unused" or "Mark for cancellation"

      3. "Adobe XD renewal in 2 days"
         → Potential savings: ₹2,000/month
         → Action: "Renew" or "Cancel"
    → User takes action → System updates status
    → Dashboard refreshes with new stats
```

### 3.3 Editing a Subscription
```
User clicks "Edit" on a subscription card
    → Modal opens with pre-filled form
    → User changes monthly cost from ₹1500 to ₹2000
    → Clicks "Save Changes"
    → System updates database
    → Card updates with new price
    → Stats recalculate
    → Toast: "Zoom Pro updated"
```

### 3.4 Deleting a Subscription
```
User clicks "Delete" on a subscription card
    → Confirmation modal: "Are you sure?"
    → User clicks "Yes, Delete"
    → System deletes from database
    → Card disappears with animation
    → Stats update
    → Toast: "Subscription deleted"
```

---

## 4. Report Generation Flow

### 4.1 Generate Waste Report
```
User clicks "Generate Report" in sidebar
    → Goes to /reports page
    → Sees: "Generate Your Waste Report"
    → Clicks "Generate Now"
    → System:
      1. Fetches all subscriptions
      2. Runs duplicate detection
      3. Runs unused detection
      4. Calculates totals
      5. Generates recommendations
    → Shows report preview:
      • Summary: "You can save ₹15,000/month"
      • Breakdown by category
      • List of duplicates
      • List of unused tools
      • Action items
    → User clicks "Download PDF"
    → System generates PDF
    → File downloads: "waste-report-july-2026.pdf"
```

---

## 5. Account Management Flow

### 5.1 Update Profile
```
User clicks profile icon → "Settings"
    → Goes to /settings
    → Sees form:
      • Full Name
      • Company Name
      • Email (read-only)
      • Profile Picture (upload)
    → Makes changes → Clicks "Save"
    → System updates profiles table
    → Toast: "Profile updated"
```

### 5.2 Change Password
```
User clicks "Change Password" in settings
    → Sees form:
      • Current Password
      • New Password
      • Confirm New Password
    → Fills → Clicks "Update"
    → System validates with Supabase
    → Toast: "Password updated successfully"
```

### 5.3 Logout
```
User clicks profile → "Logout"
    → System calls Supabase signOut
    → Clears session cookies
    → Redirects to homepage
    → Shows: "You have been logged out"
```

---

## 6. Error Flows

### 6.1 Login Error (Wrong Password)
```
User enters wrong password
    → System: "Invalid login credentials"
    → User retries (max 5 attempts)
    → After 5 failed: "Too many attempts. Try again in 15 minutes"
    → Option: "Forgot Password?"
```

### 6.2 Session Expired
```
User clicks on dashboard after 7 days
    → System detects expired session
    → Redirects to /login
    → Shows: "Your session has expired. Please log in again."
    → User logs in → Redirects back to dashboard
```

### 6.3 Network Error
```
User adds subscription → Network fails
    → Shows: "Connection lost. Retrying..."
    → Auto-retry 3 times
    → If still fails: "Please check your internet and try again"
    → Data preserved in form (no loss)
```

---

## 7. Mobile Flow (Responsive)

### 7.1 Mobile Dashboard
```
User opens on phone
    → Header collapses to hamburger menu
    → Stats cards stack vertically
    → Subscription cards show in single column
    → "Add" button becomes floating action button (FAB)
    → Swipe left on card to delete
```

### 7.2 Mobile Form
```
User clicks "Add Subscription" on mobile
    → Full-screen modal opens
    → Keyboard-friendly inputs
    → Date picker uses native mobile picker
    → "Save" button sticky at bottom
    → Swipe down to close
```

---

## 8. Admin/Owner Flow (Future)

### 8.1 Invite Team Member
```
Growth/Pro plan user
    → Clicks "Team" in sidebar
    → Clicks "Invite Member"
    → Enters email → Clicks "Send Invite"
    → System sends invite email
    → New member clicks link → Signs up
    → Can see company-wide subscriptions
```

### 8.2 Set Spending Limits
```
Admin user
    → Goes to "Team Settings"
    → Sets monthly limit: ₹50,000
    → System alerts when 80% reached
    → Blocks new subscriptions at 100%
```

---

## 9. Complete Flow Diagram

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Homepage   │────▶│   Signup    │────▶│  Dashboard  │
│  (Visitor)  │     │  (New User) │     │  (Logged In)│
└─────────────┘     └─────────────┘     └──────┬──────┘
       │                                        │
       │         ┌──────────────────────────────┘
       │         │
       │    ┌────▼────┐    ┌──────────┐    ┌──────────┐
       │    │  Login   │    │  Reports │    │ Settings │
       │    │(Existing)│    │  (PDF)   │    │ (Profile)│
       │    └────┬─────┘    └──────────┘    └──────────┘
       │         │
       └─────────┘
       ("Already have account?")

Dashboard Actions:
├── Add Subscription ──▶ Form ──▶ Save ──▶ Dashboard (updated)
├── Edit Subscription ──▶ Modal ──▶ Save ──▶ Dashboard (updated)
├── Delete Subscription ──▶ Confirm ──▶ Delete ──▶ Dashboard (updated)
├── View Recommendations ──▶ Take Action ──▶ Dashboard (updated)
└── Generate Report ──▶ Preview ──▶ Download PDF
```

---

*Document Version: 1.0*
*Created: July 2026*
*UX Designer: WasteDetect Product Team*
