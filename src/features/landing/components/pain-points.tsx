import {
  AlarmClock,
  FileWarning,
  PackageOpen,
  UsersRound,
} from "lucide-react";
import SectionTitle from "./section-title";
import Reveal from "./reveal";

const PAINS = [
  {
    icon: PackageOpen,
    title: "Stock invisible",
    description:
      "Des tableurs qui se contredisent, des ruptures qui tombent mal et des marchandises qui dorment en entrepôt.",
    tone: "text-error bg-error-bg",
  },
  {
    icon: AlarmClock,
    title: "Paiements en retard",
    description:
      "Factures envoyées à la main, relances oubliées et trésorerie qui subit les retards de règlement.",
    tone: "text-warning bg-warning/10",
  },
  {
    icon: FileWarning,
    title: "Saisies manuelles",
    description:
      "La même information retapée dans trois outils différents, avec son lot d'erreurs et de doublons.",
    tone: "text-primary bg-primary-light",
  },
  {
    icon: UsersRound,
    title: "Équipes déconnectées",
    description:
      "Les ventes ignorent ce que le stock contient, la compta ignore ce que les ventes ont conclu.",
    tone: "text-navy bg-navy-light",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Le problème"
          title="Gérer une entreprise ne devrait pas être un casse-tête."
          subtitle="Vous avez dépassé les tableurs et les outils dispersés. Il est temps de passer à un système qui travaille pour vous — pas contre vous."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAINS.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 80}>
              <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-900/5 motion-reduce:hover:translate-y-0">
                <span
                  className={`flex size-12 items-center justify-center rounded-xl ${pain.tone}`}
                >
                  <pain.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {pain.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {pain.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
