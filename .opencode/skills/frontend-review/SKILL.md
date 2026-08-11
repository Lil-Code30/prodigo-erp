---
name: frontend-review
description: Review Prodigo frontend implementations for visual consistency, accessibility, responsiveness, maintainability, and adherence to the design system. Use when asked to review or audit existing frontend work, or before claiming a UI task complete.
metadata:
  product: Prodigo ERP
  category: quality
---

# Frontend Review

Review implementations critically. Load `prodigo-design-system` for the token reference. Do not modify code unless explicitly asked — report findings.

## Design

Check:

- Colors match design tokens (no hardcoded hex bypassing `globals.css` tokens)
- Typography scale and hierarchy
- Spacing follows the 8px system
- Radius and shadows follow the design system
- Alignment and visual hierarchy

## UX

Check every state is handled: loading, empty, error, disabled, success, confirmation.

## Accessibility

Check:

- Keyboard navigation (Tab order, focus visible, no traps)
- Labels on all inputs (not placeholder-only)
- Contrast ratios
- Semantic HTML and ARIA where appropriate
- `prefers-reduced-motion`

## Responsive

Check: desktop, tablet, mobile, and horizontal overflow. Never allow page-level horizontal scroll.

## Code

Check:

- TypeScript strictness, no gratuitous `any`
- Component size and single responsibility
- Duplication vs. reuse of existing components (`src/components/ui/`, `src/components/shared/`)
- Dead code / unused imports
- State management correctness (server state in react-query, global state in zustand only when warranted)
- API calls go through the axios client; no hardcoded responses

## Design System Compliance

Flag:

- Hardcoded colors/spacing/font sizes
- Duplicate components
- Inconsistent buttons or inputs
- Incorrect status colors
- Missing loading/empty/error states

## Final Assessment

Report:

- Critical issues (must fix)
- Important issues (should fix)
- Minor issues (nice to fix)
- Suggested improvements

For non-UI work, run `pnpm lint` and `pnpm build` before reporting a task complete.
