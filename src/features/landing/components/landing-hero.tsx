import Link from "next/link";
import {
  Archive,
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  HeartHandshake,
  Home,
  LayoutDashboard,
  ReceiptText,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, label: "Tableau de bord", active: true },
  { icon: Users, label: "Clients" },
  { icon: Boxes, label: "Produits" },
  { icon: Archive, label: "Stock" },
  { icon: ReceiptText, label: "Factures" },
  { icon: BarChart3, label: "Rapports" },
];

const KPIS = [
  { label: "Revenus du mois", value: "12,4 M FCFA", delta: "+12,5 %", up: true },
  { label: "Commandes", value: "348", delta: "+8 %", up: true },
  { label: "Clients", value: "1 284", delta: "+15", up: true },
  { label: "Ruptures de stock", value: "6", delta: "-3", up: false },
];

const CHART_POINTS = [28, 40, 34, 52, 48, 66, 60, 74, 70, 86, 80, 94];

export default function LandingHero() {
  const chartPath = CHART_POINTS.map(
    (value, index) => `${index === 0 ? "M" : "L"}${index * 8},${100 - value}`,
  ).join(" ");

  const areaPath = `${chartPath} L88,100 L0,100 Z`;

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-40 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,45,103,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,45,103,0.045) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-20 right-[-120px] h-[420px] w-[420px] rounded-full bg-navy-light/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-xs">
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-primary" />
                <span className="text-xs font-semibold text-gray-700">
                  Paiements Mobile Money MTN &amp; Orange
                </span>
              </span>
              <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white">
                Nouveau
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              Toute votre entreprise,{" "}
              <span className="text-primary">dans un seul tableau de bord.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-500 sm:text-xl">
              Clients, stock, commandes, factures et paiements — unifiez toutes
              vos opérations dans un ERP cloud simple, sécurisé et pensé pour
              les entreprises africaines.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-13 gap-2 px-8 text-base",
                )}
              >
                Commencer gratuitement
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#demo"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-13 bg-white px-8 text-base",
                )}
              >
                Demander une démo
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { icon: Smartphone, label: "Sans installation" },
                { icon: CheckCircle2, label: "Sécurisé" },
                { icon: TrendingUp, label: "Multi-sociétés" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600"
                >
                  <item.icon className="size-4 text-success" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:px-4" aria-hidden="true">
            <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-navy-light/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              <div className="flex h-11 items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-gray-300" />
                  <span className="size-3 rounded-full bg-gray-300" />
                  <span className="size-3 rounded-full bg-gray-300" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-gray-400 shadow-xs">
                  <span className="size-2 rounded-full bg-success" />
                  app.prodigo.com
                </div>
                <span className="w-10" />
              </div>

              <div className="flex">
                <div className="hidden w-44 shrink-0 border-r border-gray-100 p-4 sm:block">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
                      <Home className="size-3.5 text-white" />
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      Prodigo
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {SIDEBAR_ITEMS.map((item) => (
                      <span
                        key={item.label}
                        className={cn(
                          "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium",
                          item.active
                            ? "bg-primary-light text-primary"
                            : "text-gray-400",
                        )}
                      >
                        <item.icon className="size-3.5" />
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        Bonjour, Amadou
                      </p>
                      <p className="text-xs text-gray-400">
                        Voici l’activité de Prodigo Global
                      </p>
                    </div>
                    <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                      Nouvelle vente
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {KPIS.map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-xl border border-gray-100 bg-white p-3 shadow-xs"
                      >
                        <p className="text-[10px] font-medium text-gray-400">
                          {kpi.label}
                        </p>
                        <p className="mt-1 text-sm font-bold text-gray-900">
                          {kpi.value}
                        </p>
                        <span
                          className={cn(
                            "text-[10px] font-semibold",
                            kpi.up ? "text-success" : "text-error",
                          )}
                        >
                          {kpi.delta}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-xl border border-gray-100 bg-white p-3 shadow-xs">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-xs font-semibold text-gray-900">
                        Ventes sur 30 jours
                      </p>
                      <Badge variant="secondary" className="gap-1">
                        <TrendingUp className="size-3" />
                        +12,5 %
                      </Badge>
                    </div>
                    <svg
                      viewBox="0 0 96 100"
                      className="h-24 w-full"
                      preserveAspectRatio="none"
                      role="img"
                    >
                      <defs>
                        <linearGradient
                          id="heroArea"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="var(--color-primary)"
                            stopOpacity="0.22"
                          />
                          <stop
                            offset="100%"
                            stopColor="var(--color-primary)"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d={areaPath}
                        fill="url(#heroArea)"
                      />
                      <path
                        d={chartPath}
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      />
                      <circle
                        cx="88"
                        cy={100 - CHART_POINTS[CHART_POINTS.length - 1]}
                        r="2.2"
                        fill="var(--color-primary)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-24 hidden animate-float rounded-xl border border-gray-100 bg-white p-4 shadow-xl lg:block motion-reduce:animate-none">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle2 className="size-5 text-success" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Paiement reçu
                  </p>
                  <p className="text-xs text-gray-400">
                    MTN MoMo • FAC-2026-0142
                  </p>
                </div>
              </div>
              <p className="mt-2 pl-13 text-xs font-semibold text-gray-500">
                25 000 FCFA
              </p>
            </div>

            <div className="absolute -right-3 bottom-16 hidden animate-float-slow rounded-xl border border-navy bg-navy p-4 shadow-xl lg:block motion-reduce:animate-none">
              <div className="flex items-center justify-between gap-6">
                <p className="text-xs font-medium text-white/70">
                  Chiffre d’affaires
                </p>
                <TrendingUp className="size-4 text-primary" />
              </div>
              <p className="mt-1 text-lg font-bold text-white">+12,5 %</p>
              <div className="mt-2 h-1.5 w-36 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-primary" />
              </div>
            </div>

            <div className="absolute -right-6 top-6 hidden animate-float rounded-xl border border-gray-100 bg-white p-3 shadow-xl lg:block motion-reduce:animate-none">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary-light">
                  <HeartHandshake className="size-4 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Nouveau client
                  </p>
                  <p className="text-xs text-gray-400">à l’instant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
