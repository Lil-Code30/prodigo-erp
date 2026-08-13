import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Reveal from "./reveal";

export default function FinalCta() {
  return (
    <section id="demo" className="scroll-mt-24 bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-20 text-center shadow-2xl sm:px-16 lg:py-24">
            <div
              className="pointer-events-none absolute -top-24 right-0 h-[320px] w-[420px] rounded-full bg-primary/25 blur-[110px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-16 h-[300px] w-[380px] rounded-full bg-navy-light/20 blur-[100px]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
              }}
            />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                Prêt à démarrer ?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Modernisez votre entreprise dès aujourd’hui.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                Rejoignez les centaines d’entreprises africaines qui gagnent du
                temps, encaissent plus vite et pilotent leur croissance avec
                Prodigo.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/register"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-13 gap-2 px-10 text-base",
                  )}
                >
                  Commencer gratuitement
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/register"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-13 border-white/20 bg-white/5 px-10 text-base text-white hover:bg-white/10 hover:text-white",
                  )}
                >
                  Créer mon compte en 2 minutes
                </Link>
              </div>

              <p className="mt-6 text-sm text-white/50">
                Sans carte bancaire • Configuration en moins de 10 minutes
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
