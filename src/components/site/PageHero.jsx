import React from "react";
import { CrumbTrail } from "./Reveal";
import { YellowButton, WhatsAppButton, StatStrip } from "./primitives";
import { Image } from "@/components/ui/image";

export default function PageHero({
  crumb = [],
  eyebrow,
  title,
  sub,
  image,
  imageAlt,
  primaryCta,
  waMessage,
  waLabel = "WhatsApp Specialist",
  stats = [],
  disclaimer,
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-ink-deep bg-blueprint">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-55" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[360px] w-[360px] rounded-full bg-gear/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-8 lg:px-10 lg:pb-20 lg:pt-10">
        {crumb.length ? (
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur">
            <CrumbTrail items={crumb} />
          </div>
        ) : null}

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            {eyebrow ? (
              <p className="flex items-center gap-3 text-[13px] font-extrabold uppercase tracking-[0.28em] text-gear">
                <span className="h-[3px] w-8 rounded-full bg-gear" />
                {eyebrow}
              </p>
            ) : null}

            <h1 className="mt-5 text-balance text-white">{title}</h1>

            {sub ? (
              <p className="mt-5 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-white/72 sm:text-[16.5px]">
                {sub}
              </p>
            ) : null}

            {primaryCta || waMessage ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primaryCta ? (
                  <YellowButton to={primaryCta.to} className="min-h-[50px]">
                    {primaryCta.label}
                  </YellowButton>
                ) : null}
                {waMessage ? <WhatsAppButton message={waMessage} label={waLabel} className="min-h-[50px]" /> : null}
              </div>
            ) : null}

            {disclaimer ? (
              <p className="mt-6 max-w-2xl text-[12.5px] uppercase leading-relaxed tracking-wide text-white/45">
                {disclaimer}
              </p>
            ) : null}
          </div>

          {image ? (
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/12">
                <div className="relative aspect-[4/3]">
                  <Image src={image} alt={imageAlt || ""} className="h-full w-full object-cover" fittingType="fill" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/75 via-transparent to-transparent" />
                </div>
              </div>
              <span className="absolute -bottom-3 -left-3 h-16 w-16 rounded-br-2xl border-b-[6px] border-l-[6px] border-gear" />
              <span className="absolute -right-3 -top-3 h-16 w-16 rounded-tl-2xl border-r-[6px] border-t-[6px] border-gear/60" />
            </div>
          ) : (
            children
          )}
        </div>

        {stats.length ? <StatStrip items={stats} className="mt-14" /> : null}
      </div>
    </section>
  );
}