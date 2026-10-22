import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { contractInclusions, contractPackages } from "@/data/packages";
import { Eyebrow, Disclaimer } from "@/components/site/primitives";
import Reveal from "@/components/site/Reveal";

export default function PricingPackages({ showInclusions = true, heading, sub }) {
  return (
    <section className="bg-ink-deep bg-blueprint">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Service Contracts &amp; Fixed Pricing</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.5rem]">
              {heading || "Dynamic and Signature contracts — 50,000 KM of cover, no annual commitment."}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              {sub ||
                "Both contract tiers include scheduled minor and major servicing, advanced scanning, wheel alignment, free recovery and 30% off labour. Choose Dynamic for dealer-grade essentials or Signature for extended specialist inspections and priority workshop slots."}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contractPackages.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 lift ${
                  p.best ? "border-gear bg-gear/[0.07]" : "border-white/10 bg-ink-surface"
                }`}
              >
                {p.best ? (
                  <span className="mb-5 inline-flex w-fit rounded-full bg-gear px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
                    Most popular
                  </span>
                ) : null}
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gear">
                  {p.family}
                </p>
                <h3 className="mt-3 text-2xl text-white">{p.cylinders}</h3>
                <p className="mt-4 font-heading text-4xl font-extrabold text-gear">
                  AED {p.price.toLocaleString()}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-white/50">
                  Starting price · 50,000 KM coverage
                </p>
                <p className="mt-5 flex-1 text-[13.5px] leading-relaxed text-white/65">{p.summary}</p>
                <Link
                  to="/service-contracts"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-gear hover:text-gear-hover"
                >
                  Contract details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {showInclusions ? (
          <Reveal delay={0.15}>
            <div className="mt-14 grid gap-8 rounded-3xl border border-white/10 bg-ink-surface p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-10">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gear">
                  Every contract includes
                </p>
                <h3 className="mt-4 text-2xl text-white">
                  One price, everything scheduled, nothing skipped.
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/65">
                  Contracts are structured around the real Dubai duty cycle rather than a European service
                  book, so the items that UAE heat destroys are serviced when they actually need it.
                </p>
                <div className="mt-7 space-y-2">
                  <Disclaimer>Free pickup and delivery upon approved estimate.</Disclaimer>
                  <Disclaimer>Warranty on all parts. No annual commitment.</Disclaimer>
                </div>
              </div>
              <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {contractInclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gear">
                      <Check className="h-3 w-3 text-ink" strokeWidth={3.5} />
                    </span>
                    <span className="text-[13.5px] leading-relaxed text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}