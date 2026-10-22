import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { Eyebrow } from "@/components/site/primitives";
import TestimonialCard from "@/components/site/TestimonialCard";
import Reveal from "@/components/site/Reveal";

export default function ReviewsCarousel() {
  const featured = [
    testimonials[0],
    testimonials[1],
    testimonials[3],
    testimonials[6],
    testimonials[8],
    testimonials[14],
  ];

  return (
    <section className="border-y border-white/10 bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Eyebrow>Verified Google Reviews</Eyebrow>
              <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.5rem]">
                Rated 4.9 by Dubai drivers who left the dealership behind.
              </h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-surface px-5 py-4">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gear text-gear" />
                  ))}
                </div>
                <div>
                  <p className="font-heading text-lg font-extrabold leading-none text-white">4.9 / 5</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/50">
                    Verified Google rating
                  </p>
                </div>
              </div>
              <a
                href={site.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-gear hover:text-gear-hover"
              >
                Read live reviews <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">
          {featured.map((r, i) => (
            <div key={r.name} className="w-[86%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]">
              <Reveal delay={i * 0.04} className="h-full">
                <TestimonialCard review={r} className="h-full" />
              </Reveal>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-wide text-white/40">
          Reviews shown from verified workshop clients · Drag to browse
        </p>
      </div>
    </section>
  );
}