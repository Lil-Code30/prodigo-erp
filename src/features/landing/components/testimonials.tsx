import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";
import Reveal from "./reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  tone: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Avant Prodigo, on gérait 4 entrepôts avec Excel. C'était un cauchemar. Aujourd'hui tout est automatisé et nos ruptures de stock sont passées à zéro.",
    name: "Sarah Mensah",
    role: "Directrice des opérations, LogisTech",
    initials: "SM",
    tone: "bg-navy text-white",
  },
  {
    quote:
      "Le multi-sociétés répond exactement à notre besoin : je consulte les rapports consolidés de nos 3 marques depuis un seul tableau de bord.",
    name: "David Osei",
    role: "CFO, Groupe Retail",
    initials: "DO",
    tone: "bg-primary text-white",
  },
  {
    quote:
      "La facturation prenait des jours. On génère maintenant nos factures instantanément depuis les commandes, et le suivi des paiements a transformé notre trésorerie.",
    name: "Amina Diallo",
    role: "Fondatrice, Agence Créa",
    initials: "AD",
    tone: "bg-success text-white",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Témoignages"
          title="Adoré par les dirigeants d'entreprise."
          subtitle="Ne nous croyez pas sur parole. Voici ce que les opérateurs disent de leur passage à Prodigo."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg hover:shadow-gray-900/5">
                <div className="mb-5 flex items-center justify-between">
                  <Quote className="size-8 text-primary" aria-hidden="true" />
                  <div
                    className="flex gap-0.5"
                    role="img"
                    aria-label="5 étoiles sur 5"
                  >
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star
                        key={star}
                        className="size-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-1 leading-relaxed text-gray-700">
                  « {testimonial.quote} »
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <Avatar className="size-11">
                    <AvatarFallback
                      className={cn("text-sm font-bold", testimonial.tone)}
                    >
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
