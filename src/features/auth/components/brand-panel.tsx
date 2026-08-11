import {
  Hexagon,
  Users,
  Package,
  ShoppingCart,
  Receipt,
  Archive,
} from "lucide-react";

const MODULES = [
  { label: "Clients", icon: Users },
  { label: "Produits", icon: Package },
  { label: "Commandes", icon: ShoppingCart },
  { label: "Factures", icon: Receipt },
  { label: "Stock", icon: Archive },
];

const NODES = [
  { x: 50, y: 14 },
  { x: 83, y: 39 },
  { x: 71, y: 79 },
  { x: 29, y: 79 },
  { x: 17, y: 39 },
];

const HIGHLIGHTS = [
  "Multi-établissements",
  "Mobile Money MTN & Orange",
  "Fiscalité locale intégrée",
];

const COPY = {
  badge: "Prodigo ERP",
  title: "Toute votre entreprise, dans un seul tableau de bord.",
  subtitle:
    "Clients, stock, commandes, factures et paiements mobile — Prodigo réunit vos modules pour que rien ne se perde entre les équipes.",
};

export default function BrandPanel() {
  return (
    <div className="brand-panel">
      <div className="brand-glow brand-glow--orange" />
      <div className="brand-glow brand-glow--navy" />

      <div className="brand-content">
        <span className="brand-badge">{COPY.badge}</span>
        <h2 className="brand-title">{COPY.title}</h2>
        <p className="brand-subtitle">{COPY.subtitle}</p>

        <div className="constellation">
          <svg viewBox="0 0 100 100" className="constellation__svg">
            {NODES.map((n, i) => (
              <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} />
            ))}
            <circle cx="50" cy="50" r="10.5" className="constellation__hub" />
            {NODES.map((n, i) => (
              <circle
                key={i}
                cx={n.x}
                cy={n.y}
                r="7.5"
                className="constellation__node"
              />
            ))}
          </svg>

          <div className="constellation__center">
            <Hexagon className="h-5 w-5" strokeWidth={2.5} />
          </div>

          {MODULES.map((m, i) => {
            const Icon = m.icon;
            const n = NODES[i];
            return (
              <div
                key={m.label}
                className="module-node"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <Icon className="h-3.5 w-3.5 text-white" />
              </div>
            );
          })}
        </div>

        <div className="brand-legend">
          {MODULES.map((m) => (
            <span key={m.label} className="brand-legend__item">
              <span className="brand-legend__dot" />
              {m.label}
            </span>
          ))}
        </div>

        <div className="brand-chips">
          {HIGHLIGHTS.map((h) => (
            <span key={h} className="brand-chip">
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
