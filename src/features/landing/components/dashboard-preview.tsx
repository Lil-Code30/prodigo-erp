"use client";

import {
  Archive,
  BarChart3,
  Boxes,
  LayoutDashboard,
  ReceiptText,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Reveal from "./reveal";

const TABS = [
  { value: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { value: "stock", label: "Stock", icon: Boxes },
  { value: "ventes", label: "Ventes", icon: ShoppingCart },
  { value: "factures", label: "Factures", icon: ReceiptText },
  { value: "rapports", label: "Rapports", icon: BarChart3 },
];

const STOCK_ROWS = [
  { name: "Riz 25 kg", ref: "PRD-0042", stock: 124, status: "OK", tone: "success" },
  { name: "Huile 5 L", ref: "PRD-0087", stock: 38, status: "OK", tone: "success" },
  { name: "Ciment 50 kg", ref: "PRD-0103", stock: 9, status: "Stock faible", tone: "warning" },
  { name: "Sucre 1 kg", ref: "PRD-0056", stock: 0, status: "Rupture", tone: "error" },
];

const INVOICE_ROWS = [
  { number: "FAC-2026-0142", client: "Boutique Baobab", amount: "450 000 FCFA", status: "Payée", tone: "success" },
  { number: "FAC-2026-0143", client: "Kheops Distribution", amount: "1 250 000 FCFA", status: "En attente", tone: "warning" },
  { number: "FAC-2026-0144", client: "Maya Coiffure", amount: "85 000 FCFA", status: "Payée", tone: "success" },
];

const SALE_ROWS = [
  { product: "Cartons de lait", qty: 12, amount: "96 000 FCFA", status: "Livré", tone: "success" },
  { product: "Savons x 100", qty: 5, amount: "45 000 FCFA", status: "En route", tone: "warning" },
  { product: "Jus de fruit", qty: 20, amount: "60 000 FCFA", status: "Livré", tone: "success" },
];

const toneClasses: Record<string, string> = {
  success: "border-success/30 bg-success/10 text-success",
  warning: "border-warning/30 bg-warning/10 text-warning",
  error: "border-error/30 bg-error/10 text-error",
};

function MockKpis() {
  const kpis = [
    { label: "Revenus", value: "12,4 M", delta: "+12,5 %" },
    { label: "Commandes", value: "348", delta: "+8 %" },
    { label: "Clients", value: "1 284", delta: "+15" },
    { label: "Stock faible", value: "6", delta: "-3" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs"
        >
          <p className="text-xs text-gray-400">{kpi.label}</p>
          <p className="mt-1 text-lg font-bold text-gray-900">{kpi.value}</p>
          <p className="text-xs font-semibold text-success">{kpi.delta}</p>
        </div>
      ))}
    </div>
  );
}

function MockTable({
  head,
  rows,
}: {
  head: string[];
  rows: {
    cells: string[];
    badge?: { label: string; tone: string };
  }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs">
      <div className="grid grid-cols-3 gap-4 border-b border-gray-100 bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-500 sm:grid-cols-5">
        {head.map((cell) => (
          <span key={cell} className="hidden sm:block">
            {cell}
          </span>
        ))}
      </div>
      {rows.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-3 gap-4 border-b border-gray-50 px-5 py-3 text-sm last:border-0"
        >
          {row.cells.map((cell, cellIndex) => (
            <span
              key={cellIndex}
              className={
                cellIndex === 0
                  ? "font-medium text-gray-900"
                  : "text-gray-500"
              }
            >
              {cell}
            </span>
          ))}
          {row.badge && (
            <Badge
              variant="outline"
              className={cn(
                "col-span-3 w-fit justify-center sm:col-span-1",
                toneClasses[row.badge.tone],
              )}
            >
              {row.badge.label}
            </Badge>
          )}
        </div>
      ))}
    </div>
  );
}

function ChartMock() {
  const points = [20, 34, 28, 44, 40, 58, 52, 66, 60, 78];
  const line = points
    .map((value, index) => `${index === 0 ? "M" : "L"}${index * 10},${100 - value}`)
    .join(" ");
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-900">
          Chiffre d’affaires annuel
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-primary" /> 2025
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-gray-300" /> 2024
          </span>
        </div>
      </div>
      <svg viewBox="0 0 100 100" className="h-40 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="previewArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 50, 75].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="100"
            y2={y}
            stroke="var(--color-gray-200)"
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path
          d={`${line} L90,100 L0,100 Z`}
          fill="url(#previewArea)"
        />
        <path
          d={line}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M0,78 L10,74 L20,80 L30,70 L40,74 L50,62 L60,68 L70,56 L80,60 L90,50"
          fill="none"
          stroke="var(--color-gray-300)"
          strokeWidth="1"
          strokeDasharray="2 2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[360px] rounded-full bg-navy-light/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            L’expérience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Un espace de travail que votre équipe va adorer.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Oubliez les logiciels d’entreprise datés et lents. Profitez d’une
            interface claire, rapide et agréable, accessible de partout.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={120}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm md:p-3">
            <div className="flex h-12 items-center gap-2 border-b border-gray-200 bg-gray-50 px-4">
              <div className="flex gap-1.5">
                <span className="size-3 rounded-full bg-gray-300" />
                <span className="size-3 rounded-full bg-gray-300" />
                <span className="size-3 rounded-full bg-gray-300" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-gray-400">
                <span className="size-2 rounded-full bg-success" />
                app.prodigo.com
              </div>
              <span className="w-10" />
            </div>

            <div className="bg-white">
              <Tabs defaultValue="dashboard">
                <TabsList
                  variant="line"
                  className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-b border-gray-100 bg-transparent px-3"
                >
                  {TABS.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="h-12 flex-1 rounded-none border-0 text-xs data-active:bg-transparent sm:flex-none sm:px-5 sm:text-sm"
                    >
                      <tab.icon className="size-4" />
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="p-4 sm:p-6">
                  <TabsContent value="dashboard" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          Tableau de bord
                        </h3>
                        <p className="text-sm text-gray-400">
                          Vue d’ensemble de votre activité
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="hidden rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500 sm:block">
                          Télécharger
                        </span>
                        <span className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white">
                          + Nouvelle vente
                        </span>
                      </div>
                    </div>
                    <MockKpis />
                    <ChartMock />
                  </TabsContent>

                  <TabsContent value="stock" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Stock</h3>
                        <p className="text-sm text-gray-400">
                          Suivi des quantités et alertes
                        </p>
                      </div>
                      <span className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500">
                        <Archive className="size-4" />
                        3 entrepôts
                      </span>
                    </div>
                    <MockTable
                      head={["Produit", "Référence", "Stock", "Statut"]}
                      rows={STOCK_ROWS.map((row) => ({
                        cells: [row.name, row.ref, String(row.stock)],
                        badge: { label: row.status, tone: row.tone },
                      }))}
                    />
                  </TabsContent>

                  <TabsContent value="ventes" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          Ventes du jour
                        </h3>
                        <p className="text-sm text-gray-400">
                          Commandes en cours de traitement
                        </p>
                      </div>
                      <Badge variant="outline" className="border-success/30 bg-success/10 text-success">
                        32 commandes
                      </Badge>
                    </div>
                    <MockTable
                      head={["Produit", "Quantité", "Montant", "Statut"]}
                      rows={SALE_ROWS.map((row) => ({
                        cells: [row.product, String(row.qty), row.amount],
                        badge: { label: row.status, tone: row.tone },
                      }))}
                    />
                  </TabsContent>

                  <TabsContent value="factures" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          Factures récentes
                        </h3>
                        <p className="text-sm text-gray-400">
                          Suivi des encaissements
                        </p>
                      </div>
                      <span className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500">
                        <Users className="size-4" />
                        Relancer en retard
                      </span>
                    </div>
                    <MockTable
                      head={["Numéro", "Client", "Montant", "Statut"]}
                      rows={INVOICE_ROWS.map((row) => ({
                        cells: [row.number, row.client, row.amount],
                        badge: { label: row.status, tone: row.tone },
                      }))}
                    />
                  </TabsContent>

                  <TabsContent value="rapports" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          Rapports & analyses
                        </h3>
                        <p className="text-sm text-gray-400">
                          Rentabilité par produit et par période
                        </p>
                      </div>
                    </div>
                    <MockKpis />
                    <ChartMock />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
