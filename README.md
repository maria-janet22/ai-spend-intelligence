# AI Spend Intelligence

AI Spend Intelligence is a modern SaaS-style web application that helps startups and engineering teams analyze AI software spending, detect overspending, and optimize tool usage.

The platform provides intelligent AI spend audits, savings analysis, analytics dashboards, downloadable reports, and AI-generated recommendations.

---

# Features

- AI Spend Audit Generator
- Savings Analysis Engine
- AI-generated Audit Summary
- Dynamic Analytics Dashboard
- Supabase Database Integration
- Downloadable Audit Reports
- Modern Responsive UI
- Form Persistence using localStorage
- Interactive Data Visualizations
- Contact & Lead Capture System

---

# Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- OpenAI API
- Recharts

---

# Installation

```bash
npm install
npm run dev
```

---

# Project Structure

```bash
app
 ├── analytics
 ├── audit
 ├── contact
 ├── components
 ├── api
 │    └── summary
 └── supabase.ts
```

---

# Key Features

## AI Audit Engine

The audit engine analyzes:
- monthly AI tool spending
- subscription plans
- savings opportunities
- optimization recommendations

The system calculates:
- total monthly spend
- potential monthly savings
- annual savings
- savings percentage

---

## AI Generated Summary

The application integrates with OpenAI API to generate personalized audit summaries based on:
- company spending
- selected tools
- optimization opportunities

Graceful fallback handling is implemented for API failures.

---

## Analytics Dashboard

Analytics visualizes:
- AI spending distribution
- savings opportunities
- company-level analytics
- spend comparison charts

---

# Deployment

The application is deployed using Vercel.

---

# Decisions

## 1. Removed Public Reports Page

Audit reports contain potentially sensitive company spending data. Reports are generated privately instead of being publicly visible.

## 2. Used Rule-Based Audit Logic

Financial calculations use deterministic rule-based logic instead of AI to ensure predictable and explainable recommendations.

## 3. Used AI Only For Summaries

AI is used specifically for generating personalized audit summaries while keeping pricing logic deterministic.

## 4. Used Supabase

Supabase was selected for its simplicity, scalability, and rapid backend integration.

## 5. Used Tailwind CSS

Tailwind enabled fast UI development and responsive modern design implementation.

---

# Future Improvements

- Shareable audit URLs
- Real PDF generation
- Email notifications
- Authentication system
- Advanced pricing intelligence
- Team collaboration features