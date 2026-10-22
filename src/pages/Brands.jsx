import React, { useState } from "react";
import { brands, brandOrigins, brandWorkflow } from "@/data/brands";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { img } from "@/data/images";
import { waMessages, disclaimers } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import BrandCard from "@/components/site/BrandCard";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer } from "@/components/site/primitives";

export default function Brands() {
  const [origin, setOrigin] = useState("All");
  const list = origin === "All" ? brands : brands.filter((b) => b.origin === origin);
  const crumb = [{ label: "Home", to: "/" }, { label: "Brands" }];

  usePageMeta(
    `Car Brands We Service in Dubai | ${brands.length} Luxury Marques · Apex Auto`,
    "Specialist repair for Mercedes-Benz, BMW, Audi, Porsche, Range Rover, Ferrari, Lamborghini, Toyota, Nissan and more at Apex Auto Services in Al Quoz, Dubai. Genuine parts, dealer diagnostic software and free pickup upon approved estimate."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Brand Hub · German · British · Italian · American · Japanese"
        title={`${brands.length} marques. One workshop that knows how each one fails in Dubai.`}
        sub="Every brand on this page has its own diagnostic platform, its own fluid approvals and its own known failure pattern in UAE heat. Choose your marque to see the specific problems we correct, the repair workflow we follow and indicative pricing for your platform."
        image={img.bays}
        imageAlt="Luxury vehicles from multiple marques on lifts at Apex Auto Services, Al Quoz, Dubai"
        primaryCta={{ to: "/appointment", label: "Book Brand Specialist" }}
        waMessage={waMessages.pickup}
        disclaimer={`${disclaimers.pickup} ${disclaimers.diagnostic}`}
      />

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow tone="light">Filter By Origin</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-ink sm:text-3xl">
              German precision, British engineering, Italian performance, American muscle, Japanese reliability.
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {["All", ...brandOrigins].map((o) => (
              <button
                key={o}
                type="button"
                onClick={() => setOrigin(o)}
                aria-pressed={origin === o}
                className={`rounded-full border px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  origin === o
                    ? "border-ink bg-ink text-gear"
                    : "border-black/12 bg-white text-ink/60 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {o}
                {o !== "All" ? ` · ${brands.filter((b) => b.origin === o).length}` : ` · ${brands.length}`}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((b, i) => (
              <Reveal key={b.slug} delay={Math.min(i, 8) * 0.03}>
                <BrandCard brand={b} tone="light" className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>Brand Service Workflow</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-white sm:text-3xl">
              Four steps from booking to your doorstep.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {brandWorkflow.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-surface p-6">
                  <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-gear">{s.step}</span>
                  <h3 className="mt-5 text-[1.05rem] leading-snug text-white">{s.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-deep">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>Tell Us Your Brand</Eyebrow>
            <h2 className="mt-6 text-balance text-2xl leading-tight text-white sm:text-3xl">
              Select your vehicle and a brand specialist will call you back.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              We keep brand-specific diagnostic software, fluids, torque procedures and known-failure
              knowledge for every marque we service — so your car is repaired the way its manufacturer
              intended, without the manufacturer's invoice.
            </p>
            <div className="mt-8 space-y-2">
              <Disclaimer>{disclaimers.warrantyLaw}</Disclaimer>
              <Disclaimer>{disclaimers.pickup}</Disclaimer>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <LeadForm source="brands-hub" heading="Book A Brand Specialist" eyebrow="60-Minute Response" />
          </Reveal>
        </div>
      </section>
    </>
  );
}