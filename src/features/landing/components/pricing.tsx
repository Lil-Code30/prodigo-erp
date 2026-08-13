"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import Reveal from "./reveal";

type Plan = {
  name: string;
  description: string;
  monthly: string;
  yearly: string;
  cta: string;
  href: string;
  highlight?: boolean;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Découverte",
    description: "Pour les petites structures qui veulent quitter les tableurs.",
    monthly: "0 FCFA",
    yearly: "0 FCFA",
    cta: "Commencer gratuitement",
    href: "/register",
    features: [
      "1 utilisateur",
      "CRM & ventes de base",
      "Stock essentiel",
      "Facturation simple",
      "Support par e-mail",
    ],
  },
  {
    name: "Professionnel",
    description: "Pour les entreprises en croissance qui veulent automatiser.",
    monthly: "25 000 FCFA",
    yearly: "20 000 FCFA",
    cta: "Essayer 14 jours gratuitement",
    href: "/register",
    highlight: true,
    features: [
      "Jusqu'à 10 utilisateurs",
      "Tout le plan Découverte",
      "Comptabilité & rapprochement",
      "Paiements Mobile Money",
      "Multi-entrepôts",
      "Support prioritaire",
    ],
  },
  {
    name: "Entreprise",
    description: "Pour les opérations complexes et multi-sociétés.",
    monthly: "Sur mesure",
    yearly: "Sur mesure",
    cta: "Contacter l'équipe",
    href: "#demo",
    features: [
      "Utilisateurs illimités",
      "Multi-sociétés",
      "Workflows personnalisés",
      "Accès API",
      "Gestionnaire de compte dédié",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="tarifs" className="scroll-mt-24 bg-gray-50/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Tarifs"
          title="Des prix simples et transparents."
          subtitle="Commencez gratuitement, passez au niveau supérieur quand vous en avez besoin. Sans frais cachés, sans engagement."
        />

        <Reveal className="mt-10 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm font-medium",
              !yearly ? "text-gray-900" : "text-gray-400",
            )}
          >
            Mensuel
          </span>
          <button
            role="switch"
            aria-checked={yearly}
            aria-label="Basculer entre facturation mensuelle et annuelle"
            onClick={() => setYearly((value) => !value)}
            className={cn(
              "relative h-7 w-13 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              yearly ? "border-primary bg-primary" : "border-gray-300 bg-gray-200",
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 left-0.5 size-5.5 rounded-full bg-white shadow transition-transform",
                yearly && "translate-x-6",
              )}
            />
          </button>
          <span
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              yearly ? "text-gray-900" : "text-gray-400",
            )}
          >
            Annuel
            <Badge variant="secondary" className="bg-primary-light text-primary">
              -20 %
            </Badge>
          </span>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl items-start gap-8 md:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-8",
                  plan.highlight
                    ? "border-navy bg-navy shadow-xl"
                    : "border-gray-200 bg-white shadow-sm",
                )}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="gap-1 px-3 py-1">
                      <Sparkles className="size-3" />
                      Le plus populaire
                    </Badge>
                  </span>
                )}

                <h3
                  className={cn(
                    "text-xl font-bold",
                    plan.highlight ? "text-white" : "text-gray-900",
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm min-h-10",
                    plan.highlight ? "text-white/70" : "text-gray-500",
                  )}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-3xl font-extrabold tracking-tight",
                      plan.highlight ? "text-white" : "text-gray-900",
                    )}
                  >
                    {yearly ? plan.yearly : plan.monthly}
                  </span>
                  {plan.name === "Professionnel" && (
                    <span
                      className={cn(
                        "text-sm font-medium",
                        plan.highlight ? "text-white/60" : "text-gray-400",
                      )}
                    >
                      /mois
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-1 text-xs",
                    plan.highlight ? "text-white/50" : "text-gray-400",
                  )}
                >
                  {yearly && plan.name === "Professionnel"
                    ? "facturé annuellement"
                    : "sans engagement"}
                </p>

                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({
                      variant: plan.highlight ? "default" : "outline",
                    }),
                    "mt-7 w-full gap-1.5",
                    !plan.highlight && "border-gray-300",
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="size-4" />
                </Link>

                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-3 text-sm font-medium",
                        plan.highlight ? "text-white/90" : "text-gray-700",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                          plan.highlight ? "bg-white/10" : "bg-primary-light",
                        )}
                      >
                        <Check
                          className={cn(
                            "size-3",
                            plan.highlight ? "text-primary" : "text-primary",
                          )}
                        />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          Besoin d’un devis personnalisé pour votre groupe ?{" "}
          <a href="#demo" className="font-semibold text-primary hover:underline">
            Parlons-en
          </a>
          .
        </p>
      </div>
    </section>
  );
}
