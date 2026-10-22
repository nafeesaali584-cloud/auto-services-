import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { brands, brandOrigins } from "@/data/brands";
import BrandLogo from "@/components/site/BrandLogo";
import { Eyebrow } from "@/components/site/primitives";
import Reveal from "@/components/site/Reveal";

export default function BrandShowcase() {
  const [origin, setOrigin] = useState("All");
  const list = origin === "All" ? brands : brands.filter((b) => b.origin === origin);

  return (
    <section className="bg-white bg-blueprint-light">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Eyebrow tone="light">Multi-Brand Fleet &amp; Luxury Support</Eyebrow>
              <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-ink sm:text-4xl lg:text-[2.5rem]">
                {brands.length} marques, one workshop, brand-specific procedures.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-copymuted">
                German, British, Italian, American and Japanese platforms each fail differently in Dubai
                heat. We keep the brand-specific diagnostic platforms, fluids, approvals and known-failure
                knowledge for every marque we service.
              </p>
            </div>
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:text-ink/60"
            >
              Brand hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
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
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((b) => (
            <Link
              key={b.slug}
              to={`/brands/${b.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-black/[0.08] bg-white px-5 py-4 transition-all duration-300 hover:border-gear hover:shadow-[0_14px_36px_-18px_rgba(10,14,17,0.35)]"
            >
              <div className="flex items-center gap-3.5">
                <BrandLogo slug={b.slug} name={b.name} tone="light" />
                <div>
                  <p className="font-heading text-[15px] font-bold text-ink">{b.name}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-copymuted">
                    {b.origin} · {b.models.length} models
                  </p>
                </div>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink/40 transition-colors group-hover:border-gear group-hover:bg-gear group-hover:text-ink">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
