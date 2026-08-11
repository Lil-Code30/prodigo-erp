<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Prodigo ERP Frontend

## Project

Prodigo is a modern multi-tenant cloud ERP for businesses (currently focused on Cameroonian / West African markets).

The frontend must feel like a premium enterprise SaaS product — professional, trustworthy, reliable, simple, scalable. Visual quality should be comparable to Stripe, Linear, Vercel, and Notion.

## Core Rule

Before implementing any UI, inspect the existing codebase and reuse existing components. Do not create duplicate components when an existing one can be reused. Do not introduce arbitrary colors, spacing, typography, border radius, or shadows — every visual decision follows the Prodigo Design System.

Load the relevant skill when a task matches it:

- Visual design / tokens → `prodigo-design-system`
- Authentication screens → `authentication-ui`
- Marketing / landing pages → `landing-page`
- ERP application screens (dashboard, tables, CRUD) → `erp-ui`
- Architecture, structure, API integration → `frontend-architecture`
- Responsive / mobile behavior → `responsive-design`
- Reviewing existing frontend work → `frontend-review`

## Technology

The stack is fixed — do not add dependencies unless they provide clear value, and inspect `package.json` before installing anything.

- Next.js 16 (App Router, `src/` directory) — **no Next.js API routes**
- React 19, TypeScript (strict)
- Tailwind CSS v4 + `tw-animate-css`
- `@base-ui/react` primitives wrapped by shadcn/ui components (`src/components/ui/`)
- `lucide-react` icons
- `zod` for validation
- `@tanstack/react-query` for server state
- `zustand` (with `persist`) for client state (auth session)
- `axios` for HTTP (single client in `src/lib/http/client.ts`)
- Package manager: `pnpm`

## Backend

The API is handled by a **Spring Boot backend** — never create `src/app/api/` route handlers.

- Base URL: `NEXT_PUBLIC_API_BASE_URL` (default `http://localhost:8080/api/1.0`, see `src/config/env.ts` and `.env.example`)
- All requests go through the axios client (`src/lib/http/client.ts`), which:
  - attaches the `Bearer` token from the zustand auth store
  - normalizes errors into a friendly `ApiError` (`src/lib/http/api-error.ts`)
  - logs out and redirects to `/login` on `401`
- Feature API layers live in `src/features/<feature>/api/` and only forward typed payloads — no business logic.

### Backend error responses

The backend returns two JSON shapes (both with `HTTP 4xx/5xx` status codes), typed in `src/lib/http/api-error.ts`:

**Generic error** (`ApiErrorResponse`) — used for business/technical failures:
`timestamp`, `status`, `error`, `message`, `path`, `errorCode`, `traceId`

**Validation error** (`ValidationErrorResponse`) — used when request fields are invalid (`HTTP 400`, extends the generic shape):
`timestamp`, `status`, `error`, `message`, `path`, `errorCode`, `traceId`, `errors` — where `errors` is an **array** of `FieldErrorResponse` objects `{ field, message }`.

`toApiError` maps these into `ApiError`:
- `message` → `ApiError.message` (always show the human-readable `message` to users)
- `errors[]` → `ApiError.fieldErrors` as `{ [field]: message }` (for field-level form errors)
- `errorCode` / `traceId` / `path` preserved for debugging
- When `message` is missing it falls back to the axios error, then to a generic French fallback (server errors get their own message)

## Folder Structure (feature-based)

```
src/
├── app/                      # routing only (route groups)
│   ├── (auth)/               # /login, /register, /forgot-password
│   ├── (dashboard)/          # /dashboard
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                   # shadcn/ui primitives (base-ui)
│   └── shared/               # cross-app components (Logo, ...)
├── config/env.ts             # typed env access
├── features/<feature>/       # colocated per feature
│   ├── api/                  # axios calls
│   ├── components/           # feature components / forms
│   ├── hooks/                # react-query hooks
│   ├── schemas/              # zod schemas + inferred input types
│   ├── stores/               # zustand stores
│   └── types.ts              # entities / DTOs
├── lib/
│   ├── http/                 # axios client + api-error
│   └── utils.ts              # cn()
└── providers/                # app providers (query-provider)
```

Rules:

- Keep `src/app/` thin — pages delegate to feature components.
- Colocate feature code under `src/features/<feature>/`; never scatter a feature's files across global `hooks/`, `stores/`, `api/` folders.
- Extract shared UI into `src/components/ui/` (primitives) or `src/components/shared/`.
- No business logic inside presentational components; no hardcoded API responses.

## Commands

- `pnpm dev` — dev server
- `pnpm lint` — ESLint
- `pnpm build` — production build (type-checks too)
- Always run `pnpm lint` and `pnpm build` before claiming a task complete.

## Design Philosophy

Enterprise software: clean layouts, strong hierarchy, generous whitespace, clear typography, subtle shadows, consistent spacing, accessible components, appropriate data density.

Avoid: excessive gradients, glassmorphism, random colors/spacing, decorative UI without purpose, generic dashboard templates, visually inconsistent pages.

## Accessibility

All UI must support keyboard navigation, visible focus states, semantic HTML, accessible labels, ARIA where appropriate, sufficient color contrast, and `prefers-reduced-motion`.

## Responsive Design

Every page must work on desktop, laptop, tablet, and mobile. Mobile is not an afterthought; never allow page-level horizontal overflow.

## Forms

Use consistent labels, input heights, error/loading/disabled/success states. Validation uses `zod` schemas in `src/features/<feature>/schemas/` with `toFieldErrors` mapping.

## Data-heavy ERP Screens

Prioritize usability: tables, filters, search, pagination, sorting, bulk actions, status badges, empty/loading/skeleton/error states, drawers, modals. Do not sacrifice usability for visual effects.

## Product Terminology

- Tenant = Company / organization workspace
- User = Individual account
- Role = Collection of permissions
- Module = ERP functional area (CRM, INVOICE, INVENTORY, SALES, ...)
- Workspace = Tenant's ERP environment
- Administrator = User managing the tenant
- Owner = Initial administrator of a newly created tenant

## Authentication & Security

- Login stores the session (user + access token) in the zustand auth store (`src/features/auth/stores/auth-store.ts`, persisted to localStorage).
- Register is a 3-step flow: user data → company data → module selection (modules come from the backend; currently placeholder).
- Never expose secrets in frontend code. Never store backend secrets in `NEXT_PUBLIC_*` variables. The backend is the source of truth for authorization — never enforce security purely in the UI.

## Multi-tenancy

The UI must assume users belong to a tenant/workspace. Tenant-specific data must never be mixed visually or logically; display the current workspace clearly.

## General Agent Behavior

Before changing code: understand the architecture, inspect relevant files, identify reusable components, load the appropriate skill, make the smallest coherent implementation, then verify with `pnpm lint` and `pnpm build`.

Do not rewrite unrelated code or replace working architecture on a whim. When uncertain, inspect the project before inventing a convention.
