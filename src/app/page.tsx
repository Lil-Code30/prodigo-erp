import type { Metadata } from "next";
import Landing from "@/features/landing/components/landing";

export const metadata: Metadata = {
  title: "Prodigo ERP — Toute votre entreprise, dans un seul tableau de bord",
  description:
    "Clients, stock, commandes, factures et paiements Mobile Money — l'ERP cloud pensé pour les entreprises africaines. Commencez gratuitement.",
};

export default function HomePage() {
  return <Landing />;
}
