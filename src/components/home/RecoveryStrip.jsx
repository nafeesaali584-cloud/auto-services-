import React from "react";
import { Phone, Truck, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { site, waLink, waMessages } from "@/data/site";

export default function RecoveryStrip() {
  return (
    <section className="relative overflow-hidden bg-gear">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-light opacity-35" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-5 py-12 lg:flex-row lg:items-center lg:px-10 lg:py-14">
        <div className="flex items-start gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink">
            <Truck className="h-6 w-6 text-gear" />
          </span>
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ink/70">
              <Clock className="h-3.5 w-3.5" /> 24/7 Roadside Assistance
            </p>
            <h2 className="mt-3 text-balance text-2xl leading-[1.1] text-ink sm:text-3xl lg:text-[2.1rem]">
              Broken down? Free breakdown recovery upon approved estimate.
            </h2>
            <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-ink/75">
              One tap and we dispatch recovery to bring your vehicle to our Al Quoz workshop. Free car
              breakdown recovery upon approved estimate, including flatbed transport across Dubai.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
          <a
            href={site.telHref}
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-6 font-extrabold uppercase tracking-wide text-gear transition-transform duration-300 hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" /> Call {site.phone}
          </a>
          <a
            href={waLink(waMessages.pickup)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-wa px-6 font-extrabold uppercase tracking-wide text-ink transition-transform duration-300 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp recovery
          </a>
        </div>
      </div>
    </section>
  );
}