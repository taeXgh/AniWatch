# AniWatch — Product & Catalog Dashboard

## Overview
AniWatch is a responsive full-stack inventory dynamic management application written with **React**, **Vite**, and **TypeScript**, tightly coupled to a backend infrastructure leveraging **Supabase**. The platform features complete user authentication (Sign Up / Sign In), role routing contexts, relational dataset bindings, and full CRUD validation mechanics enabling authorized accounts to add, edit, or remove entries from a central database schema.

---

## Core Technologies
* **Frontend Setup**: [Vite](https://vitejs.dev/) + React Single Page App architecture
* **Language Runtime**: TypeScript (`strict` structural constraints)
* **Persistent Database & Auth Service**: [Supabase](https://supabase.com/) (PostgreSQL backend wrappers)
* **Styling Engine**: Standard structural CSS layout layers

---

## Feature Matrix
1. **Dynamic Authentication Blocks**: Complete email/password session handling through standard Supabase client routing components (`SignInView.tsx`, `SignUpView.tsx`).
2. **Dynamic Conditional Navigation**: Layout header views (`NavBar.tsx`) change interface elements contextualized by the active client authentication flag.
3. **Product Inventory Controls**: Standard structural form module (`ProductForm.tsx`) validating and sending input rows into production server entities.
4. **Relational Database Schemas**: Explicit SQL script setup (`supabase/schema.sql`) detailing underlying data structures, indexing, and primary constraints.

---

## Local Configuration Flow

### Environment Variable Bindings
To make database transaction calls valid, you must supply connection hooks. Create an `.env` configuration template file inside your root path directory:
```env
VITE_SUPABASE_URL=[https://your-configured-supabase-url.supabase.co](https://your-configured-supabase-url.supabase.co)
VITE_SUPABASE_ANON_KEY=your-anonymous-public-access-api-token
