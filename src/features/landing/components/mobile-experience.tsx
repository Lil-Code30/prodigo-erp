import {
  Bell,
  Boxes,
  Check,
  Home,
  ReceiptText,
  ScanBarcode,
  Smartphone,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "./reveal";

const MOBILE_POINTS = [
  "Approuvez des achats depuis le terrain",
  "Consultez le stock en temps réel",
  "Scannez des code-barres avec la caméra",
  "Envoyez des factures par WhatsApp",
];

const ACTIVITIES = [
  { title: "Paiement encaissé", meta: "MTN MoMo • 25 000 FCFA", tone: "bg-success/10 text-success" },
  { title: "Commande livrée", meta: "CLI-2026-0917", tone: "bg-primary-light text-primary" },
  { title: "Rupture détectée", meta: "Sucre 1 kg", tone: "bg-error-bg text-error" },
  { title: "Facture envoyée", meta: "FAC-2026-0145", tone: "bg-navy-light text-navy" },
];

export default function MobileExperience() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[380px] w-[380px] rounded-full bg-primary/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto w-[290px]">
              <div
                className="pointer-events-none absolute inset-0 scale-150 rounded-full bg-primary/20 blur-[80px]"
                aria-hidden="true"
              />
              <div className="relative rounded-[2.75rem] border-4 border-gray-700 bg-gray-900 p-2.5 shadow-2xl">
                <div className="relative h-[590px] overflow-hidden rounded-[2.25rem] bg-gray-50">
                  <div className="absolute top-0 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

                  <div className="flex h-16 items-end justify-between border-b border-gray-100 bg-white px-5 pb-2.5">
                    <div>
                      <p className="text-[10px] text-gray-400">Bonjour,</p>
                      <p className="text-sm font-bold text-gray-900">Amadou</p>
                    </div>
                    <div className="relative">
                      <Bell className="size-5 text-gray-400" />
                      <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-primary" />
                    </div>
                  </div>

                  <div className="space-y-3 p-4">
                    <div className="rounded-2xl bg-navy p-4">
                      <p className="text-[10px] font-medium text-white/60">
                        Revenu du mois
                      </p>
                      <p className="mt-1 text-xl font-bold text-white">
                        12 450 000 FCFA
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-success">
                        <TrendingUp className="size-3" />
                        +12,5 % vs mois dernier
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-xs">
                        <p className="text-[10px] text-gray-400">Commandes</p>
                        <p className="text-lg font-bold text-gray-900">348</p>
                      </div>
                      <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-xs">
                        <p className="text-[10px] text-gray-400">Clients</p>
                        <p className="text-lg font-bold text-gray-900">1 284</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-2xl border border-gray-100 bg-white p-3 shadow-xs">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-primary-light">
                        <ScanBarcode className="size-4 text-primary" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          Scanner un produit
                        </p>
                        <p className="text-[10px] text-gray-400">
                          Mettez à jour le stock en direct
                        </p>
                      </div>
                    </div>

                    <p className="pt-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Activité récente
                    </p>
                    <div className="space-y-2">
                      {ACTIVITIES.map((activity) => (
                        <div
                          key={activity.title}
                          className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 py-2.5 shadow-xs"
                        >
                          <span
                            className={cn(
                              "flex size-8 shrink-0 items-center justify-center rounded-full",
                              activity.tone,
                            )}
                          >
                            <Wallet className="size-3.5" />
                          </span>
                          <div>
                            <p className="text-xs font-semibold text-gray-900">
                              {activity.title}
                            </p>
                            <p className="text-[10px] text-gray-400">
                              {activity.meta}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-around border-t border-gray-100 bg-white px-4">
                    {[
                      { icon: Home, active: true },
                      { icon: Boxes, active: false },
                      { icon: ReceiptText, active: false },
                      { icon: User, active: false },
                    ].map((item, index) => (
                      <span
                        key={index}
                        className={cn(
                          "flex size-9 items-center justify-center rounded-xl",
                          item.active
                            ? "bg-primary-light text-primary"
                            : "text-gray-300",
                        )}
                      >
                        <item.icon className="size-4" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
                Application mobile
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Votre entreprise dans votre poche.
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
                Sur l’entrepôt, en rendez-vous client ou à la maison : gardez
                le contrôle total de vos opérations depuis votre téléphone.
              </p>

              <ul className="mt-8 space-y-4">
                {MOBILE_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-medium text-white/90"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check className="size-3.5 text-primary" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-9 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <Smartphone className="size-5 text-primary" />
                <p className="text-sm text-white/80">
                  iOS &amp; Android — bientôt disponibles
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
