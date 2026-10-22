import React from "react";
import { Check, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { Eyebrow } from "@/components/site/primitives";
import LeadForm from "@/components/site/LeadForm";
import Reveal from "@/components/site/Reveal";
import { site, waLink, waMessages } from "@/data/site";

const bullets = [
  "Response within 60 minutes during workshop hours",
  "Free pickup upon approved estimate, anywhere in Dubai",
  "Free inspection upon approval of repair estimate, with transparent video inspection",
];

export default function FinalConversion() {
  return (
    <section className="relative overflow-hidden bg-ink bg-blueprint">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <Reveal>
            <Eyebrow>Get a Free Quote</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.6rem]">
              Tell us what is wrong. We will take it from there.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Send your vehicle details and symptoms. A technician will call you back with an honest
              assessment, an indication of cost, and the earliest slot at our Al Quoz workshop — no
              obligation and no hidden fees.
            </p>

            <div className="mt-9 space-y-4">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gear">
                    <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3.5} />
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-white/75">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.telHref}
                className="flex min-h-[48px] items-center gap-2 rounded-full border border-white/20 px-5 font-extrabold uppercase tracking-wide text-white transition-colors hover:border-gear hover:text-gear"
              >
                <Phone className="h-4 w-4 text-gear" /> Call {site.phone}
              </a>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center gap-2 rounded-full bg-wa px-5 font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-wa-hover"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                Al Quoz Industrial 4 · Dubai
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                {site.street}, {site.city}
                <br />
                {site.hours}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <LeadForm
              source="homepage"
              heading="Request A Callback"
              eyebrow="60-Minute Response"
              reassurance="Complete the form and a technician calls you back with next steps and pricing guidance."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}