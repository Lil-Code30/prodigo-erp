---
name: authentication-ui
description: Design and implement Prodigo ERP authentication experiences — login, the 3-step create-account flow, forgot password, session handling, and auth layouts. Use when working on pages/forms under src/app/(auth)/ or the auth feature.
metadata:
  product: Prodigo ERP
  category: authentication
---

# Prodigo Authentication UI

Always load and follow `prodigo-design-system`.

The UI copy is French. Authentication should feel like a premium SaaS experience: clean, focused, and trustworthy.

## Layout

- Desktop: form panel (~40%) + brand panel (~60%). The brand panel is navy with the constellation graphic (see `src/features/auth/components/brand-panel.tsx`).
- The shared shell lives in `src/app/(auth)/layout.tsx` (shell, form panel, card, Logo, BrandPanel). Pages render only the form component.
- Mobile: brand panel hidden, full-width form.

## Routes

- `/login` → `LoginForm`
- `/register` → `RegisterForm`
- `/forgot-password` → `ForgotPasswordForm`

## Login

Fields: identifier (email or username), password, "Se souvenir de moi", link to forgot-password. Primary action "Se connecter".

On success: call `useAuthStore.getState().setSession({ user, accessToken })`, show a success alert, then redirect to `/dashboard`.

## Register — 3-step flow

The user is creating an entire workspace, so the flow is deliberately structured.

### Step 1 — User data

firstName, lastName, username, email, password, confirmPassword. Validate with `personalInfoSchema` (password min 8, passwords must match — superRefine sets the error on `confirmPassword`). Show a live password strength meter.

### Step 2 — Company data

companyName (auto-slugifies `companySlug`), companySlug (live workspace preview), country (ISO code select, e.g. `CM`). Validate with `companyInfoSchema`.

### Step 3 — Module selection

Modules come from the backend (`authApi.fetchModules()` → `useModulesQuery()`; currently a placeholder list). Multi-select cards with icons, checkboxes, loading/error/retry states. At least one module required.

Submit → `authApi.register()` posts the full payload to `POST /auth/register`:

```
companyName, companySlug, country, username, email, password,
firstName, lastName, selectedModules[{ moduleId, moduleName, moduleKey }]
```

`confirmPassword` is validation-only and must never be sent. On success show the confirmation screen with a link back to `/login`.

## API

- `src/features/auth/api/auth-api.ts` — login, register, forgotPassword, fetchModules
- `src/features/auth/hooks/use-auth.ts` — `useLoginMutation`, `useRegisterMutation`, `useForgotPasswordMutation`, `useModulesQuery`
- `src/features/auth/schemas/auth-schema.ts` — zod schemas + `toFieldErrors`
- `src/features/auth/stores/auth-store.ts` — zustand session (persisted)

## Forgot password

Email field + submit → success state ("Vérifiez votre boîte mail"). No account enumeration: the success message is the same whether or not the account exists.

## States

Every form must implement: default, focused, loading, success, error, disabled. Errors come from `ApiError.message` — human-readable, never raw HTTP codes.

## Security UI

Never display access tokens, refresh tokens, JWT contents, or password values. Never enforce authorization purely in the UI — the backend is the source of truth. 401 handling is centralized in the axios client (`src/lib/http/client.ts`).
