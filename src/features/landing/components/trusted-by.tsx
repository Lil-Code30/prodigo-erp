import { Hexagon } from "lucide-react";

const COMPANIES = [
  "LogisTech",
  "Nova Retail",
  "Sahara Traders",
  "AfriTextile",
  "Golden Foods",
  "Cotonou Motors",
  "Green Pharmacy",
  "Urban Coffee",
];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center gap-14 pr-14">
      {COMPANIES.map((company) => (
        <span
          key={company}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-gray-400"
        >
          <Hexagon className="size-4 text-gray-300" strokeWidth={2} />
          {company}
        </span>
      ))}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section
      className="border-y border-gray-100 bg-gray-50/60 py-12"
      aria-label="Entreprises clientes"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-semibold tracking-widest text-gray-400 uppercase">
          Ils pilotent leur croissance avec Prodigo
        </p>
        <div
          className="hide-scrollbar relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee motion-reduce:animate-none">
            <MarqueeRow />
            <MarqueeRow />
          </div>
        </div>
      </div>
    </section>
  );
}
