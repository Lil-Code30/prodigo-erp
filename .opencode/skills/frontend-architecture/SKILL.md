---
name: frontend-architecture
description: Maintain the Prodigo frontend architecture — feature-based folder structure, component reuse, TypeScript patterns, API integration, and state management. Use when adding new features or pages, integrating API calls, deciding where code belongs, or refactoring the codebase.
metadata:
  product: Prodigo ERP
  category: architecture
---

# Frontend Architecture

Prioritize maintainability. Follow the folder structure and conventions documented in `AGENTS.md`; they are authoritative.

## Principles

Prefer:

- Feature-based organization (`src/features/<feature>/`)
- Reusable components (`src/components/ui/`, `src/components/shared/`)
- Strong TypeScript with explicit types
- Small components with a single responsibility
- Typed API boundaries

Avoid:

- Giant monolithic components
- Duplicate UI when an existing component can be reused
- Business logic inside presentational components
- `any` unless unavoidable
- Hardcoded API responses / mock data in components

## Routing

- `src/app/` contains routing only (route groups like `(auth)`, `(dashboard)`).
- Pages are thin and delegate to feature components.
- Never create `src/app/api/` route handlers — the backend is Spring Boot.

## API layer

- Every feature owns its API calls in `src/features/<feature>/api/` (e.g. `auth-api.ts`).
- All requests go through the shared axios client `src/lib/http/client.ts` (base URL from `src/config/env.ts`, attaches the Bearer token, normalizes errors to `ApiError`).
- API functions only forward typed payloads; validate with zod schemas at the form boundary, not inside the API layer.
- Response entities / DTOs live in the feature's `types.ts`.

## Server state

- Use `@tanstack/react-query` for server state. Hooks live in `src/features/<feature>/hooks/`.
- Queries use stable `queryKey` arrays; mutations are exposed as `useXxxMutation()`.

## Client state

- Use zustand stores (with `persist`) only for genuinely global client state — e.g. the auth session (`src/features/auth/stores/auth-store.ts`).
- Do not put server state or transient UI state into a global store.

## Forms & validation

- zod schemas live in `src/features/<feature>/schemas/`.
- Map zod issues to field errors with `toFieldErrors` (see `src/features/auth/schemas/auth-schema.ts`).
- Keep form logic in feature components (e.g. `LoginForm`, `RegisterForm`), not in the page.

## Reusability

Before creating a component: search the codebase (`src/components/ui/`, `src/components/shared/`, feature components). If an equivalent exists, reuse or extend it. Do not create duplicates.
