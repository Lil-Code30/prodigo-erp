import {
  FileText,
  HandCoins,
  HeartHandshake,
  LineChart,
  Package,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import Reveal from "./reveal";

type Step = {
  icon: LucideIcon;
  module: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: HeartHandshake,
    module: "CRM",
    title: "Un devis devient un client",
    description: "Le devis accepté bascule automatiquement en commande.",
  },
  {
    icon: ShoppingCart,
    module: "Ventes",
    title: "La commande est créée",
    description: "Chaque ligne de commande est enregistrée instantanément.",
  },
  {
    icon: Package,
    module: "Stock",
    title: "Le stock est réservé",
    description: "Les quantités se mettent à jour dans tous les entrepôts.",
  },
  {
    icon: FileText,
    module: "Facturation",
    title: "La facture est générée",
    description: "Aucune ressaisie : le document part au bon moment.",
  },
  {
    icon: HandCoins,
    module: "Paiements",
    title: "Le paiement est encaissé",
    description: "Mobile Money, virement ou espèces — tout est rapproché.",
  },
  {
    icon: LineChart,
    module: "Comptabilité",
    title: "Les rapports se mettent à jour",
    description: "Trésorerie et analyses reflètent l'activité en temps réel.",
  },
];

export default function HowItWorks() {
  return (
    <section className="overflow-hidden bg-gray-50/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="La solution"
          title="Un flux de travail connecté de bout en bout."
          subtitle="Quand tous vos modules parlent la même langue, une seule action met tout à jour. Votre équipe arrête de ressaisir, elle se concentre sur l'essentiel."
        />

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div
            className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary/30 via-gray-200 to-primary/30 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={step.title} delay={index * 60}>
                  <div
                    className={cn(
                      "relative flex flex-col gap-6 pl-16 md:w-1/2 md:pl-0",
                      isLeft
                        ? "md:mr-auto md:pr-14 md:text-right"
                        : "md:ml-auto md:pl-14",
                    )}
                  >
                    <div
                      className={cn(
                        "absolute top-1 left-6 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-gray-50 bg-white shadow-sm md:top-0",
                        isLeft
                          ? "md:left-auto md:right-0 md:translate-x-1/2"
                          : "md:left-0 md:-translate-x-1/2",
                      )}
                      aria-hidden="true"
                    >
                      <step.icon className="size-5 text-primary" />
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-gray-900/5">
                      <p
                        className={cn(
                          "text-xs font-bold tracking-widest text-primary uppercase",
                          isLeft && "md:text-right",
                        )}
                      >
                        {step.module}
                      </p>
                      <h3 className="mt-2 text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
