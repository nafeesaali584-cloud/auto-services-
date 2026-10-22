import React from "react";
import { X, Check, Building2, Wrench } from "lucide-react";
import { Eyebrow, YellowButton, Disclaimer } from "@/components/site/primitives";
import { disclaimers } from "@/data/site";
import Reveal from "@/components/site/Reveal";

const rows = [
  {
    label: "Labour & parts cost",
    agency: "High dealership mark-up on every line item, plus agency labour rates",
    gearbox: "Around 40% less than dealership prices, itemised line by line before approval",
  },
  {
    label: "Wait times",
    agency: "Booking queues measured in days or weeks, car held while you wait",
    gearbox: "Fast turnaround with direct technician communication and WhatsApp updates",
  },
  {
    label: "Diagnostic depth",
    agency: "Advanced scanning available, but you speak to a service advisor, not a technician",
    gearbox:
      "Dealer-level scanning, gearbox and engine diagnostics with transparent video inspections you can actually see",
  },
  {
    label: "Warranty retention",
    agency: "Protected — and priced accordingly",
    gearbox: "Equally protected under UAE Federal Law No. 15 of 2020 when OEM procedures and certified parts are used",
  },
  {
    label: "Customer experience",
    agency: "Faceless corporate process, estimates you cannot interrogate",
    gearbox: "Direct contact with the technician working on your car, plus itemised photos and video",
  },
  {
    label: "Pickup & delivery",
    agency: "You drive to the industrial area and back, twice",
    gearbox: "Free pickup and delivery upon approved estimate, anywhere in Dubai",
  },
];

export default function ComparisonMatrix() {
  return (
    <section className="border-y border-white/10 bg-ink-deep bg-blueprint">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <Eyebrow>Agency Dealership vs Independent</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.6rem]">
            Same diagnostics. Same procedures. Roughly 40% less.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            This is the comparison UAE drivers actually want: what the agency gives you, what an
            unauthorised back-street garage gives you, and what a dealer-grade independent workshop gives you.
          </p>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.03] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)]">
            <div className="px-6 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
              Criteria
            </div>
            <div className="flex items-center gap-2 border-t border-white/10 px-6 py-4 lg:border-l lg:border-t-0">
              <Building2 className="h-4 w-4 text-white/40" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                Official Agency Dealer
              </span>
            </div>
            <div className="flex items-center gap-2 border-t border-white/10 bg-gear/[0.06] px-6 py-4 lg:border-l lg:border-t-0">
              <Wrench className="h-4 w-4 text-gear" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gear">
                The Gearbox Auto Services
              </span>
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 border-b border-white/[0.07] last:border-b-0 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <div className="px-6 py-6">
                <p className="font-heading text-[15px] font-bold text-white">{row.label}</p>
              </div>
              <div className="flex items-start gap-3 border-t border-white/[0.07] px-6 py-6 lg:border-l lg:border-t-0">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                <p className="text-[13.5px] leading-relaxed text-white/55">{row.agency}</p>
              </div>
              <div className="flex items-start gap-3 border-t border-white/[0.07] bg-gear/[0.04] px-6 py-6 lg:border-l lg:border-t-0">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gear" strokeWidth={3} />
                <p className="text-[13.5px] leading-relaxed text-white/80">{row.gearbox}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <Disclaimer>{disclaimers.diagnostic}</Disclaimer>
          <YellowButton to="/appointment">Book Free Inspection</YellowButton>
        </div>
      </div>
    </section>
  );
}
