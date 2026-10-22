import React from "react";
import { Eyebrow } from "@/components/site/primitives";
import { gallery } from "@/data/images";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";

export default function GalleryStrip() {
  return (
    <section className="bg-stone-warm bg-blueprint-light">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow tone="light">Real Mechanical Proof</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-ink sm:text-4xl lg:text-[2.5rem]">
              Inside the workshop — bays, benches, booths and rebuilds.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-copymuted">
              No renders, no borrowed imagery. This is the Al Quoz facility your car actually goes into:
              organised bays, a dedicated transmission bench, an engine rebuild area, a dust-free paint
              booth and a trim workshop.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.05}>
              <figure className="group overflow-hidden rounded-2xl border border-black/[0.08] bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    fittingType="fill"
                  />
                </div>
                <figcaption className="px-5 py-4 font-mono text-[11px] uppercase tracking-wider text-copymuted">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}