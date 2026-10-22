import React, { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { testimonials, brandReviewBrands } from "@/data/testimonials";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { img } from "@/data/images";
import { site, waMessages } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import TestimonialCard from "@/components/site/TestimonialCard";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/primitives";

export default function Testimonials() {
  const [brand, setBrand] = useState("All");
  const list = brand === "All" ? testimonials : testimonials.filter((t) => t.brand === brand);
  const crumb = [{ label: "Home", to: "/" }, { label: "Testimonials" }];

  usePageMeta(
    "Verified Customer Reviews | The Gearbox Auto Services Dubai · 4.9★ Google Rating",
    "Read verified reviews from Dubai drivers who service Mercedes-Benz, BMW, Porsche, Range Rover, Audi, Lexus and more at The Gearbox Auto Services, Al Quoz Industrial 4. Rated 4.9 on Google."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Verified Reviews · Google Business Profile"
        title="Rated 4.9 by Dubai drivers who stopped paying agency prices."
        sub="Real reviews from verified owners describing fair pricing, fast turnaround, accurate diagnosis and transparent video inspections — across German, British, Italian, American and Japanese marques."
        image={img.pickup}
        imageAlt="Luxury vehicle returned to its owner after service at The Gearbox Auto Services in Dubai"
        primaryCta={{ to: "/appointment", label: "Book with confidence" }}
        waMessage={waMessages.general}
        stats={[
          { value: "4.9★", label: "Verified Google Rating" },
          { value: "480+", label: "Google Reviews" },
          { value: "5,000+", label: "Cars Restored in 3 Years" },
          { value: `${brandReviewBrands.length}`, label: "Brands Reviewed" },
        ]}
      />

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow tone="light">Filter By Vehicle Brand</Eyebrow>
                <h2 className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-ink sm:text-3xl">
                  What owners of your marque actually said.
                </h2>
              </div>
              <a
                href={site.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-gear"
              >
                <ExternalLink className="h-4 w-4" /> Check live reviews on Google
              </a>
            </div>
          </Reveal>

          <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-2">
            {["All", ...brandReviewBrands].map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBrand(b)}
                aria-pressed={brand === b}
                className={`whitespace-nowrap rounded-full border px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  brand === b
                    ? "border-ink bg-ink text-gear"
                    : "border-black/12 bg-white text-ink/60 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((r, i) => (
              <Reveal key={`${r.name}-${i}`} delay={Math.min(i, 6) * 0.04}>
                <TestimonialCard review={r} tone="light" className="h-full" />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5 rounded-3xl border border-black/[0.08] bg-stone-warm p-7">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gear text-gear" />
                ))}
              </div>
              <p className="font-heading text-lg font-extrabold text-ink">4.9 / 5</p>
            </div>
            <p className="flex-1 text-[14px] leading-relaxed text-copymuted">
              Reviews are collected through our Google Business Profile from clients who have collected their
              vehicles from the Al Quoz workshop. We do not edit or filter them.
            </p>
            <a
              href={site.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-gear"
            >
              Open Google Maps <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>Join Them</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.4rem]">
              Get the quote that makes the dealership invoice look unnecessary.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Send your vehicle details and symptoms. You will get an honest assessment, an itemised estimate and
              the earliest available slot — with free pickup and delivery upon approved estimate.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <LeadForm source="testimonials" heading="Request A Callback" eyebrow="60-Minute Response" />
          </Reveal>
        </div>
      </section>
    </>
  );
}