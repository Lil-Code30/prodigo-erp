---
name: landing-page
description: Design and build the Prodigo ERP marketing / landing experience with premium SaaS aesthetics, conversion-focused layouts, product showcases, and consistent branding. Use when working on marketing pages, the root route, or public-facing content.
metadata:
  product: Prodigo ERP
  category: marketing
---

# Prodigo Landing Page

Always load and follow `prodigo-design-system`.

The landing page must feel like a premium SaaS company. Inspiration: Stripe, Linear, Vercel, Framer, Notion.

## Primary Goal

Convert visitors into sign-ups / demo requests.

## Story Arc

Hero → problem → solution → modules → product showcase → features → trust → pricing → FAQ → CTA.

## Hero

- Headline: value-driven, e.g. "Toute votre entreprise, dans un seul tableau de bord."
- Primary CTA: "Commencer" / "Créer mon compte" → `/register`
- Secondary CTA: "Demander une démo"
- Use product UI as the primary visual — never generic stock imagery.

## Product Visuals

Use believable product screenshots consistent with the real app: dashboard, inventory, invoices, CRM, sales, analytics. No mock data that looks hand-faked.

## Motion

Subtle animations: floating product windows, animated charts, count-up numbers, scroll reveals. 150–250ms. Respect `prefers-reduced-motion`. Do not overanimate.

## Conversion

One primary CTA per viewport, always visually obvious. Keep CTA wording consistent across the page.

## Navigation & Footer

Clean top navigation (features, pricing, FAQ, "Se connecter"). Footer with links, product highlights, and legal placeholders.

## Structure

The root route is `src/app/page.tsx`. Keep marketing content in feature/components colocated for the landing experience; follow the design system tokens for all colors, spacing, and type.
