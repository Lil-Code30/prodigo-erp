"use client";

import Reveal from "./reveal";
import { useCountUp } from "../hooks/use-count-up";

type Stat = {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 99.9, decimals: 1, suffix: "%", label: "de disponibilité du cloud" },
  { value: 500, suffix: "+", label: "entreprises en croissance" },
  { value: 10, suffix: "M+", label: "de factures traitées" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "de satisfaction client" },
];

function StatItem({ stat }: { stat: Stat }) {
  const { ref, formatted } = useCountUp(stat.value, 1600, stat.decimals ?? 0);

  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
      <span
        ref={ref}
        className="text-4xl font-bold tracking-tight text-gray-900 tabular-nums sm:text-5xl"
      >
        {formatted}
        {stat.suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-gray-500">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-gray-100 bg-gray-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <StatItem stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
