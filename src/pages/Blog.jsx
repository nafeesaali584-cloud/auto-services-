import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { posts, blogCategories } from "@/data/blog";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { img, gallery } from "@/data/images";
import { waMessages } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/primitives";
import { Image } from "@/components/ui/image";

const dateFmt = (d) =>
  new Date(d).toLocaleDateString("en-AE", { day: "numeric", month: "short", year: "numeric" });

// Stable per-article thumbnail from the workshop gallery.
const thumbFor = (slug) => {
  const sum = [...slug].reduce((a, c) => a + c.charCodeAt(0), 0);
  return gallery[sum % gallery.length];
};

export default function Blog() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? posts : posts.filter((p) => p.category === cat);
  const [featured, ...rest] = list;
  const crumb = [{ label: "Home", to: "/" }, { label: "Blog" }];

  usePageMeta(
    "Automotive Blog Dubai | Technical Car Guides for UAE Conditions · Apex Auto",
    "Technical automotive guides for Dubai drivers — battery failure in extreme heat, AC dust damage, gearbox overheating in traffic, brake fluid moisture, ceramic coating versus PPF, and pre-purchase inspection advice."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow={`Technical Blog · ${posts.length} Guides`}
        title="Technical automotive guides written for Dubai conditions."
        sub="Not generic maintenance advice. Each guide is written around what actually fails in the UAE — 50°C ambient heat, sandstorm dust, coastal humidity and hours of stationary traffic — and what the correct repair involves."
        image={img.ac}
        imageAlt="Air conditioning service and diagnostic work being carried out at Apex Auto workshop in Dubai"
        primaryCta={{ to: "/appointment", label: "Book Free Inspection" }}
        waMessage={waMessages.general}
      />

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-wrap gap-2">
            {["All", ...blogCategories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={`rounded-full border px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  cat === c
                    ? "border-ink bg-ink text-gear"
                    : "border-black/12 bg-white text-ink/60 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {c}
                {c !== "All" ? ` · ${posts.filter((p) => p.category === c).length}` : ` · ${posts.length}`}
              </button>
            ))}
          </div>

          {featured ? (
            <Reveal>
              <Link
                to={`/blog/${featured.slug}`}
                className="group mt-10 grid overflow-hidden rounded-3xl border border-black/[0.08] bg-white lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
              >
                <div className="p-8 lg:p-10">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gear">
                    {featured.category} · Featured
                  </span>
                  <h2 className="mt-5 text-balance text-2xl leading-tight text-ink sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-copymuted">{featured.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-wider text-copymuted">
                    <span>{dateFmt(featured.date)}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-ink">
                      Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
                <div className="relative min-h-[240px] overflow-hidden bg-ink">
                  <Image
                    src={thumbFor(featured.slug).src}
                    alt={thumbFor(featured.slug).alt}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
                    fittingType="fill"
                  />
                </div>
              </Link>
            </Reveal>
          ) : null}

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i, 6) * 0.04}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-all duration-300 hover:border-gear hover:shadow-[0_14px_36px_-18px_rgba(10,14,17,0.3)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <Image
                      src={thumbFor(p.slug).src}
                      alt={thumbFor(p.slug).alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      fittingType="fill"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gear">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-[1.05rem] leading-snug text-ink">{p.title}</h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-copymuted">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-black/[0.08] pt-4 font-mono text-[10px] uppercase tracking-wider text-copymuted">
                    <span>{dateFmt(p.date)}</span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-ink">
                      Read <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>From Reading To Repair</Eyebrow>
            <h2 className="mt-6 text-balance text-2xl leading-tight text-white sm:text-3xl">
              Recognised your car in one of these guides?
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Send us the symptom and we will confirm whether it matches the pattern, what the diagnostic should
              cover and what the repair typically costs on your platform.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <LeadForm source="blog" heading="Request A Callback" eyebrow="60-Minute Response" />
          </Reveal>
        </div>
      </section>
    </>
  );
}