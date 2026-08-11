---
name: prodigo-design-system
description: Apply the Prodigo ERP visual design system — colors, typography, spacing, radius, shadows, components, states, and interaction patterns. Use when building or styling any UI for the Prodigo frontend, or whenever choosing colors, spacing, type, shadows, buttons, inputs, tables, or badges.
metadata:
  product: Prodigo ERP
  category: frontend-design
---

# Prodigo Design System

You are implementing UI for Prodigo ERP.

Every visual decision must follow this design system.

Do not invent alternative visual styles without explicit user approval.

**Source of truth:** the design tokens live in `src/app/globals.css` (`:root` and `@theme inline`). If a value here conflicts with the CSS, the CSS wins. Prefer Tailwind utility classes backed by tokens (`bg-primary`, `text-gray-500`, ...) over hardcoded hex values.

## Brand

Prodigo is a professional enterprise ERP. Brand personality: professional, modern, trustworthy, premium, efficient, minimal, enterprise. The UI should feel confident rather than flashy.

## Color Tokens

### Primary (orange) — `#E66A1F`

- Hover `#D85E17`, pressed `#B94E12`, light surface `#FFF3EA`
- Use for: primary actions, active states, important highlights, progress, selected states, brand elements, focus ring
- Do not use orange everywhere.

### Navy — `#1E2D67`

- Hover `#253779`, light `#EDF2FF`
- Use for: sidebar, brand sections, dark navigation, the auth visual panel, high-level brand surfaces

### Neutrals

Use the gray scale: gray-50 `#F9FAFB`, gray-100 `#F3F4F6`, gray-200 `#E5E7EB`, gray-300 `#D1D5DB`, gray-400 `#9CA3AF`, gray-500 `#6B7280`, gray-600 `#4B5563`, gray-700 `#374151`, gray-800 `#1F2937`, gray-900 `#111827`.

### Semantic

- Success `#16A34A` — paid, active, in stock, completed
- Warning `#F59E0B` — pending, low stock, expiring
- Error `#EF4444` — failed, overdue, out of stock, destructive
- Danger/error background `#FEF2F2`
- Never use red as a general accent.

## Typography

- Primary font: Inter (`--font-sans`, loaded via `next/font` in `src/app/layout.tsx`)
- Weights: 400, 500, 600, 700
- Scale: display 40px, page title 32–40px, section title 24–32px, card title 18–20px, body 14–16px, caption 12–14px
- Use strong hierarchy. Never use type merely for decoration.

## Spacing

8px spacing system. Allowed base values: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96. Avoid arbitrary values unless technically necessary.

## Radius

- Small 8px, inputs 10px, buttons 10px, cards 12px, large cards/modals 16px
- Avoid excessive pill-shaped UI. Pills are for status, tags, and compact filters only.

## Borders

Default `1px solid #E5E7EB`. Prefer borders over heavy shadows.

## Shadows

Subtle only. Card `0 2px 8px rgba(15,23,42,0.05)`, hover `0 8px 20px rgba(15,23,42,0.08)`, modal `0 20px 60px rgba(15,23,42,0.15)`.

## Components

### Buttons

- Primary: orange background, white text — create, save, submit, continue, confirm
- Secondary/outline: white background, gray border, gray text
- Ghost: transparent, for secondary actions
- Danger: semantic red only, never as a general accent

### Inputs

- Default height 44px, border gray-200, radius 10px, orange focus ring
- Every input needs a label, the input, optional description, error, disabled, and focus states. Never rely on placeholder text alone as the label.

### Cards

- White surface, 12px radius, 1px border, subtle shadow, typical padding 24px
- Cards group meaningful information; do not wrap every element in a card.

### Tables

- Information-dense and readable. Header gray-50, row height 52–60px, hover gray-50, selected primary-light, actions right-aligned
- Support sorting, filtering, pagination, empty/loading/error states, and bulk actions where appropriate.

### Status badges

Use semantic colors consistently: Active→success, Pending→warning, Failed→error, Draft→neutral, Paid→success, Overdue→error, Low Stock→warning, Out of Stock→error.

### Navigation

- Sidebar 280px desktop, 72px collapsed, active item with orange accent
- Clearly communicate current location, available modules, workspace, and user account.

### Icons

Lucide icons. Default 20px, small 16px, large 24px. Icons support text rather than replace important text.

## States

Every data screen needs: loading (skeletons preferred, spinners for buttons), empty states (icon + title + short explanation + primary action), and error states (clear, actionable, human-readable — never raw "500 Internal Server Error").

## Motion

Subtle, 150–250ms, with easing. Hover: small translate or shadow change. Page entrance: fade + translate. Modal: fade + scale. Respect `prefers-reduced-motion`.

## Responsive Rules

Desktop: full layouts and side navigation. Tablet: reduce spacing/density. Mobile: stack content, collapse navigation, use drawers. Tables become horizontally scrollable or mobile-friendly cards. Never allow page-level horizontal overflow.

## Design Quality Checklist

Before finishing UI, verify: alignment, spacing, typography, contrast, responsive behavior, hover/focus/loading/empty/error/disabled states. The interface should feel intentionally designed — do not settle for default browser appearance.
