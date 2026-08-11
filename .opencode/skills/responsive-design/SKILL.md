---
name: responsive-design
description: Ensure Prodigo ERP interfaces work elegantly across desktop, tablet, and mobile — layouts, navigation, tables, forms, and touch interactions. Use when building any page, when checking breakpoints, or when a screen might overflow on small viewports.
metadata:
  product: Prodigo ERP
  category: responsive
---

# Responsive Design

Prodigo must work on desktop, laptop, tablet, and mobile. Mobile is not an afterthought.

## Breakpoints

Use Tailwind's default breakpoints. Mobile-first: build the mobile layout first, then enhance up.

- Mobile: < 640px — single column
- Tablet: 640–1024px — two columns, reduced density
- Desktop: ≥ 1024px — full layout, side navigation

## Layout

- Desktop: sidebar (280px) + content
- Tablet: narrower sidebar, reduced padding, fewer columns
- Mobile: collapsed navigation, drawer, stacked forms, single column

## Tables

On mobile, tables become horizontally scrollable within their container or transform into card lists. Never let the table force page-level horizontal overflow.

## Forms

Stack fields on mobile; multi-column grids collapse to one column. Inputs and buttons stay full width on small screens.

## Navigation

- Desktop: persistent sidebar
- Mobile: drawer triggered by a visible menu button

## Touch

Minimum comfortable touch target: 44px. Do not create tiny clickable controls.

## Verification

Check every new page at mobile, tablet, and desktop widths. Do not assume responsive behavior from Tailwind classes alone — scroll the full page, check the nav, check tables and long content.
