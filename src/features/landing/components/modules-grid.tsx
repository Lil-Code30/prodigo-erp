import {
  Archive,
  ArrowRight,
  BarChart3,
  Boxes,
  Calculator,
  FileText,
  HandCoins,
  HeartHandshake,
  ShoppingCart,
  Store,
  Truck,
  UserRoundCog,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "./section-title";
import Reveal from "./reveal";

type Module = {
  icon: LucideIcon;
  name: string;
  description: string;
};

const MODULES: Module[] = [
  {
    icon: Users,
    name: "Clients",
    description: "Fiches, historique et suivis",
  },
  {
    icon: Boxes,
    name: "Produits",
    description: "Catalogue et prix multi-devises",
  },
  {
    icon: ShoppingCart,
    name: "Ventes",
    description: "Devis, commandes et avoirs",
  },
  {
    icon: Archive,
    name: "Stock",
    description: "Entrepôts et valorisation",
  },
  {
    icon: FileText,
    name: "Facturation",
    description: "Factures et relances auto",
  },
  {
    icon: HandCoins,
    name: "Paiements",
    description: "Mobile Money et rapprochement",
  },
  {
    icon: Truck,
    name: "Achats",
    description: "Fournisseurs et bons de commande",
  },
  {
    icon: Calculator,
    name: "Comptabilité",
    description: "Écritures et fiscalité locale",
  },
  {
    icon: HeartHandshake,
    name: "CRM",
    description: "Pistes et opportunités",
  },
  {
    icon: Store,
    name: "Point de vente",
    description: "Caisse et tickets rapides",
  },
  {
    icon: UserRoundCog,
    name: "Employés",
    description: "RH et permissions",
  },
  {
    icon: BarChart3,
    name: "Rapports",
    description: "Analyses et tableaux de bord",
  },
];

export default function ModulesGrid() {
  return (
    <section id="modules" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Modules"
          title="Tout ce qu'il faut pour piloter votre entreprise."
          subtitle="Modulaire par conception : commencez avec l'essentiel et ajoutez des modules au fil de votre croissance, sans friction."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MODULES.map((mod, index) => (
            <Reveal key={mod.name} delay={(index % 4) * 60}>
              <div className="group h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg hover:shadow-gray-900/5 motion-reduce:hover:translate-y-0">
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <mod.icon className="size-6" />
                  </span>
                  <ArrowRight className="size-4 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 text-base font-bold text-gray-900">
                  {mod.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{mod.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
