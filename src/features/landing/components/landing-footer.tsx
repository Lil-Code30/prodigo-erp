import { Globe, Mail, MessageCircle, Send, Share2 } from "lucide-react";
import LandingBrand from "./landing-brand";

const LINK_GROUPS: Record<string, string[]> = {
  Produit: ["Fonctionnalités", "Modules", "Tarifs", "Nouveautés", "Application mobile"],
  Entreprise: ["À propos", "Carrières", "Blog", "Contact", "Partenaires"],
  Ressources: ["Documentation", "Centre d'aide", "Guides", "Référence API", "Communauté"],
  Légal: ["Confidentialité", "Conditions d'utilisation", "Sécurité", "Cookies"],
};

const SOCIALS = [
  { icon: Globe, label: "Site web" },
  { icon: Send, label: "Telegram" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Share2, label: "Partager" },
];

export default function LandingFooter() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50/60 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <LandingBrand />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-500">
              L’ERP cloud moderne pensé pour les entreprises africaines.
              Pilotez toute votre activité depuis un espace de travail unique.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 transition-colors hover:border-primary/30 hover:bg-primary-light hover:text-primary"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINK_GROUPS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-gray-900">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Prodigo Technologies. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-success" />
              Tous les systèmes opérationnels
            </span>
            <a
              href="mailto:hello@prodigo.com"
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              hello@prodigo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
