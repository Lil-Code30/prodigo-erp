import {
  Check,
  ChevronDown,
  PackageCheck,
  Phone,
  ReceiptText,
  Smartphone,
  Store,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import Reveal from "./reveal";

type Feature = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

const FEATURES: Feature[] = [
  {
    number: "01",
    icon: PackageCheck,
    title: "Stock intelligent, zéro rupture",
    description:
      "Plus jamais de « désolé, on est en rupture ». Suivez vos quantités en temps réel, fixez des seuils de réapprovisionnement et pilotez plusieurs entrepôts depuis une seule vue.",
    points: ["Multi-entrepôts", "Scan de code-barres", "Réapprovisionnement automatique"],
  },
  {
    number: "02",
    icon: ReceiptText,
    title: "Facturation et paiements automatisés",
    description:
      "Générez des factures professionnelles en un clic et encaissez par Mobile Money, virement ou espèces. Les relances et le rapprochement se font sans que vous y pensiez.",
    points: ["Paiements MTN & Orange Money", "Facturation récurrente", "Rappels automatiques"],
  },
  {
    number: "03",
    icon: Store,
    title: "Multi-sociétés, une seule plateforme",
    description:
      "Gérez vos filiales, succursales ou franchises avec un seul compte. Les écritures sont séparées, mais vos rapports se consolident automatiquement.",
    points: ["Rapports consolidés", "Transferts inter-sociétés", "Accès par rôles"],
  },
];

function InventoryMock() {
  type Tone = "success" | "warning" | "error";
  const rows: { name: string; stock: number; tone: Tone }[] = [
    { name: "Riz parfumé 25 kg", stock: 124, tone: "success" },
    { name: "Huile de palme 5 L", stock: 38, tone: "success" },
    { name: "Ciment 50 kg", stock: 9, tone: "warning" },
    { name: "Sucre 1 kg", stock: 0, tone: "error" },
  ];
  const toneMap: Record<Tone, string> = {
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error",
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-xl shadow-gray-900/5">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary-light">
            <PackageCheck className="size-4 text-primary" />
          </span>
          <p className="text-sm font-bold text-gray-900">État du stock</p>
        </div>
        <Badge variant="secondary">3 entrepôts</Badge>
      </div>
      {rows.map((row) => (
        <div
          key={row.name}
          className="flex items-center justify-between border-b border-gray-50 py-2.5 last:border-0"
        >
          <div className="flex items-center gap-3">
            <span
              className={cn("size-2 rounded-full", toneMap[row.tone])}
              aria-hidden="true"
            />
            <span className="text-sm text-gray-600">{row.name}</span>
          </div>
          <span className="text-sm font-semibold text-gray-900">
            {row.stock} u.
          </span>
        </div>
      ))}
      <div className="mt-3 rounded-lg border border-warning/30 bg-warning/10 px-3 py-2.5 text-xs font-medium text-warning">
        ⚠ 2 produits sous le seuil — bon de réappro suggéré
      </div>
    </div>
  );
}

function InvoiceMock() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl shadow-gray-900/5">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <span className="flex size-9 items-center justify-center rounded-lg bg-primary">
          <ReceiptText className="size-4 text-white" />
        </span>
        <span className="text-xs font-semibold text-gray-400">
          FAC-2026-0142
        </span>
      </div>
      <div className="py-4">
        <p className="text-xs text-gray-400">Montant dû</p>
        <p className="mt-1 text-2xl font-bold text-gray-900">450 000 FCFA</p>
        <div className="mt-3 flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-success/30 bg-success/10 text-success"
          >
            Payée le 12 août
          </Badge>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold text-gray-500">Encaissez en un clic</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-700">
            <Phone className="size-3.5 text-primary" />
            MTN MoMo
          </div>
          <div className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-gray-700">
            <Smartphone className="size-3.5 text-warning" />
            Orange Money
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-500">
        Relance automatique programmée dans 5 jours si non réglée.
      </div>
    </div>
  );
}

function MultiCompanyMock() {
  const companies = [
    { name: "Prodigo Global", role: "Société mère", active: true },
    { name: "Prodigo Retail", role: "Succursale", active: false },
    { name: "Prodigo Import", role: "Succursale", active: false },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-xl shadow-gray-900/5">
      <div className="flex items-center justify-between rounded-xl border border-gray-200 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-navy">
            <Store className="size-3.5 text-white" />
          </span>
          <div>
            <p className="text-xs font-bold text-gray-900">Prodigo Global</p>
            <p className="text-[10px] text-gray-400">Rapports consolidés</p>
          </div>
        </div>
        <ChevronDown className="size-4 text-gray-400" />
      </div>
      <div className="mt-2 space-y-1.5">
        {companies.map((company) => (
          <div
            key={company.name}
            className={cn(
              "flex items-center justify-between rounded-lg px-3 py-2",
              company.active ? "bg-primary-light" : "bg-gray-50",
            )}
          >
            <div>
              <p className="text-xs font-semibold text-gray-900">
                {company.name}
              </p>
              <p className="text-[10px] text-gray-400">{company.role}</p>
            </div>
            {company.active && (
              <Check className="size-4 text-primary" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-navy px-4 py-3">
        <p className="text-[10px] font-medium text-white/60">
          Revenu consolidé • 3 sociétés
        </p>
        <p className="mt-0.5 text-lg font-bold text-white">86,2 M FCFA</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[86%] rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}

const MOCKS = [InventoryMock, InvoiceMock, MultiCompanyMock];

export default function FeatureShowcase() {
  return (
    <section id="fonctionnalites" className="scroll-mt-24 bg-gray-50/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Fonctionnalités"
          title="Pensé pour le quotidien des entreprises africaines."
          subtitle="Des fonctions concrètes qui font gagner du temps chaque jour — sans formation longue, sans jargon inutile."
        />

        <div className="mt-20 space-y-24">
          {FEATURES.map((feature, index) => {
            const Mock = MOCKS[index];
            const reversed = index % 2 === 1;
            return (
              <div
                key={feature.number}
                className={cn(
                  "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
                )}
              >
                <Reveal className={cn(reversed && "lg:order-2")}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold tracking-widest text-gray-300">
                      {feature.number}
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary-light">
                      <feature.icon className="size-5 text-primary" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {feature.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-gray-700"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-light">
                          <Check className="size-3.5 text-primary" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={120} className={cn(reversed && "lg:order-1")}>
                  <div className="relative">
                    <div
                      className={cn(
                        "pointer-events-none absolute -inset-4 rounded-[28px] bg-navy-light/50 blur-2xl",
                        reversed && "bg-primary-light/60",
                      )}
                      aria-hidden="true"
                    />
                    <div className="relative mx-auto max-w-md">
                      <Mock />
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
