import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./section-title";
import Reveal from "./reveal";

const FAQS = [
  {
    question: "Prodigo est-il une solution cloud ?",
    answer:
      "Oui, Prodigo est 100 % dans le cloud. Aucune installation, aucun serveur à gérer. Vous accédez à vos données de façon sécurisée depuis n'importe quel appareil connecté.",
  },
  {
    question: "Puis-je gérer plusieurs sociétés ?",
    answer:
      "Absolument. Le plan Entreprise inclut la gestion multi-sociétés : succursales, franchises ou filiales avec des données isolées mais des rapports consolidés au niveau du groupe.",
  },
  {
    question: "Faut-il des compétences techniques pour commencer ?",
    answer:
      "Non. Prodigo a été conçu pour être aussi intuitif qu'une application grand public. La plupart des entreprises créent leur compte, importent leurs produits et encaissent leur première facture en moins de 10 minutes.",
  },
  {
    question: "Comment fonctionnent les paiements Mobile Money ?",
    answer:
      "Vous activez les paiements MTN MoMo et Orange Money dans vos réglages. Vos clients paient leurs factures en ligne et les encaissements sont rapprochés automatiquement dans votre comptabilité.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Vos données sont chiffrées au repos comme en transit, sauvegardées quotidiennement et répliquées sur plusieurs sites géographiques pour garantir disponibilité et fiabilité maximales.",
  },
  {
    question: "Puis-je changer de formule plus tard ?",
    answer:
      "Oui, à tout moment. Si vous passez à un plan supérieur, les nouvelles fonctions sont disponibles instantanément. En cas de passage à un plan inférieur, le changement prend effet au début du cycle de facturation suivant.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que vous voulez savoir avant de lancer votre essai."
        />

        <Reveal className="mt-12">
          <Accordion className="rounded-2xl border border-gray-200 bg-white shadow-sm">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.question} className="px-6" value={`item-${index}`}>
                <AccordionTrigger className="text-base font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
