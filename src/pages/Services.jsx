import React, { useState } from "react";
import { services } from "@/data/services";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import ServiceCard from "@/components/site/ServiceCard";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer } from "@/components/site/primitives";
import { img } from "@/data/images";
import { waMessages, disclaimers } from "@/data/site";

const filters = [
  { key: "all", label: "All Services" },
  { key: "mechanical", label: "Mechanical Repairs" },
  { key: "electrical", label: "Electrical, AC & Body" },
  { key: "detailing", label: "Detailing & Specialist" },
];

const hubSlugs = ["maintenance-repair", "transmission-gearbox", "car-ac-services", "scanning-diagnostics", "body-work", "car-detailing"];

export default function Services() {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? services : services.filter((s) => s.cat === filter);
  const crumb = [{ label: "Home", to: "/" }, { label: "Services" }];

  usePageMeta(
    `Car Repair Services in Dubai | ${services.length} Specialist Workshop Services`,
    "Explore all workshop services at The Gearbox Auto Services in Al Quoz, Dubai — transmission repair, engine rebuild, AC service, diagnostics, body work, detailing and service contracts. Free pickup and delivery upon approved estimate."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Service Hub · Al Quoz Industrial 4"
        title="Every workshop service your luxury car needs, in one Dubai facility."
        sub={`${services.length} specialist services across mechanical repair, transmission and gearbox work, electrical and AC systems, body and paint, detailing and long-term maintenance contracts. Dealer-level diagnostics, genuine OEM parts and transparent pricing — for around 40% less than UAE dealership prices.`}
        image={img.gearbox}
        imageAlt="Automatic transmission stripped down on the rebuild bench at The Gearbox Auto Services, Dubai"
        primaryCta={{ to: "/appointment", label: "Book Free Inspection" }}
        waMessage={waMessages.general}
        disclaimer={`${disclaimers.pickup} ${disclaimers.diagnostic}`}
      />

      <section className="bg-ink-deep">
        <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-10 lg:py-16">
          <Reveal>
            <Eyebrow>Start With A Hub</Eyebrow>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {hubSlugs.map((slug) => {
                const s = services.find((x) => x.slug === slug);
                return <ServiceCard key={slug} service={s} index={services.findIndex((x) => x.slug === slug)} />;
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div className="max-w-2xl">
                <Eyebrow tone="light">All {services.length} Services</Eyebrow>
                <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-ink sm:text-4xl lg:text-[2.5rem]">
                  Find your service. Every page lists diagnostics, inclusions and pricing.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={`rounded-full border px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  filter === f.key
                    ? "border-ink bg-ink text-gear"
                    : "border-black/12 bg-white text-ink/60 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i, 8) * 0.03}>
                <ServiceCard service={s} index={i} tone="light" className="h-full" />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 space-y-2">
            <Disclaimer tone="light">{disclaimers.diagnostic}</Disclaimer>
            <Disclaimer tone="light">{disclaimers.inspection}</Disclaimer>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:px-10 lg:py-24">
          <Reveal>
            <Eyebrow>Not Sure What You Need?</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.5rem]">
              Describe the symptom. We will diagnose it properly.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              You do not need to know the name of the fault — you need a workshop that finds it. Tell us the
              noise, the warning light or the behaviour, and we will scan, test and report before quoting a
              single part.
            </p>
            <div className="mt-8 space-y-2">
              <Disclaimer>{disclaimers.pickup}</Disclaimer>
              <Disclaimer>{disclaimers.warrantyLaw}</Disclaimer>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <LeadForm source="services-hub" heading="Describe Your Issue" eyebrow="Free Diagnosis Advice" />
          </Reveal>
        </div>
      </section>
    </>
  );
}