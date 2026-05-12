# Architecture Overview

## Frontend

The frontend is built using:
- Next.js
- TypeScript
- Tailwind CSS

The application uses a component-based architecture for modularity and reusability.

---

# Application Structure

```bash
app
 ├── analytics
 ├── api
 │    └── summary
 ├── audit
 ├── components
 ├── contact
 └── supabase.ts
```

---

# Core Components

## AuditForm Component

The AuditForm component handles:
- user input collection
- AI tool selection
- spending calculations
- savings generation
- report persistence

---

## Analytics Dashboard

The analytics page visualizes:
- total AI spending
- monthly savings
- AI tool distribution
- company analytics

Charts are rendered using Recharts.

---

## API Layer

The `/api/summary` route handles:
- OpenAI API communication
- AI-generated summaries
- fallback handling

---

# Database Layer

Supabase is used as the backend database.

Stored data includes:
- company information
- AI tool usage
- monthly spending
- generated reports

---

# State Management

React hooks are used for:
- form state
- calculations
- local persistence
- API responses

---

# Local Storage

localStorage is used to persist:
- audit form data
- user-entered values

This improves user experience during refreshes.

---

# Security Decisions

- Sensitive reports are not publicly exposed
- Reports remain user-specific
- Environment variables are stored in `.env.local`

---

# Deployment Architecture

The application is deployed using:
- Vercel (frontend hosting)
- Supabase (database backend)
- OpenAI API (AI summaries)
