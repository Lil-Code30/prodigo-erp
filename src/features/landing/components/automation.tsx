import {
  BellRing,
  FileText,
  HandCoins,
  Package,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "./section-title";
import Reveal from "./reveal";

type Step = {
  icon: LucideIcon;
  label: string;
  tone: string;
};

const STEPS: Step[] = [
  { icon: ShoppingCart, label: "Commande client", tone: "bg-blue-50 text-blue-600 border-blue-200" },
  { icon: Package, label: "Stock mis à jour", tone: "bg-orange-50 text-orange-600 border-orange-200" },
  { icon: FileText, label: "Facture générée", tone: "bg-green-50 text-green-600 border-green-200" },
  { icon: HandCoins, label: "Paiement suivi", tone: "bg-purple-50 text-purple-600 border-purple-200" },
  { icon: BellRing, label: "Responsable notifié", tone: "bg-gray-50 text-gray-600 border-gray-200" },
];

export default function Automation() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Automatisation"
          title="Des workflows qui tournent tout seuls."
          subtitle="Définissez vos règles une fois, et laissez Prodigo gérer les tâches répétitives. Votre équipe se concentre sur ce qui compte vraiment."
        />

        <Reveal className="mt-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 lg:flex-row">
            {STEPS.map((step, index) => (
              <div key={step.label} className="flex w-full items-center lg:w-auto lg:flex-1">
                <div
                  className={`flex flex-1 flex-col items-center gap-3 rounded-2xl border-2 px-4 py-5 text-center transition-transform duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${step.tone}`}
                >
                  <step.icon className="size-6" />
                  <span className="text-sm font-semibold">{step.label}</span>
                </div>
                {index < STEPS.length - 1 && (
                  <span
                    className="mx-1 hidden h-0.5 w-8 shrink-0 rounded-full bg-gradient-to-r from-primary/60 to-primary/30 lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-400">
          Exemple : une commande arrive → le stock, la facture, le paiement et
          les notifications se mettent à jour instantanément. Sans ressaisie.
        </p>
      </div>
    </section>
  );
}
