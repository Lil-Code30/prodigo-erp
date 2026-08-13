"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import LandingBrand from "./landing-brand";
import { useScrolled } from "../hooks/use-scrolled";

const NAV_LINKS = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Modules", href: "#modules" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

export default function LandingHeader() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-gray-200/70 bg-white/85 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[72px] lg:px-8">
        <a
          href="#accueil"
          aria-label="Prodigo — retour en haut de page"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <LandingBrand />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "text-gray-600 hover:text-gray-900",
            )}
          >
            Se connecter
          </Link>
          <Link
            href="/register"
            className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
          >
            Commencer
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-[86%] max-w-sm gap-0 bg-white p-0"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <LandingBrand />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav
              className="flex flex-col px-6 py-6"
              aria-label="Navigation mobile"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-gray-100 py-4 text-base font-medium text-gray-700 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 px-6 py-6">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Se connecter
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "gap-1.5")}
              >
                Commencer gratuitement
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
