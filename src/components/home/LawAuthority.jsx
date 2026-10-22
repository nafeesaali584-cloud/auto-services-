import React from "react";
import { Scale, ShieldCheck, BadgeCheck } from "lucide-react";
import { Eyebrow, YellowButton, CheckList } from "@/components/site/primitives";
import { img } from "@/data/images";
import { Image } from "@/components/ui/image";
import { disclaimers } from "@/data/site";
import Reveal from "@/components/site/Reveal";

export default function LawAuthority() {
  return (
    <section className="relative bg-stone-soft bg-blueprint-light">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow tone="light">The Dealership Alternative</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-ink sm:text-4xl lg:text-[2.6rem]">
              Your manufacturer warranty stays 100% valid — UAE law says so.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-copymuted">
              {disclaimers.warrantyLaw}
            </p>
            <p className="mt-5 text-base leading-relaxed text-copymuted">
              So the choice is not between paying agency prices and risking your warranty. It is between
              paying agency prices and getting the same dealer-level diagnostics, factory procedures and
              genuine parts for around 40% less — with a technician who will actually talk to you.
            </p>

            <div className="mt-8">
              <CheckList
                tone="light"
                items={[
                  "OEM-specification procedures with documented part numbers on every invoice",
                  "Genuine or OEM-approved parts — never an unknown substitute",
                  "Service history recorded and onboard service indicators reset",
                  "Transparent video inspection sent to your WhatsApp before work begins",
                ]}
              />
            </div>

            <div className="mt-9">
              <YellowButton to="/about">How we work</YellowButton>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="double-bezel-light">
                <div className="double-bezel-light-inner !p-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(1.5rem-0.75rem)]">
                    <Image
                      src={img.bays}
                      alt="Organised service bays with luxury vehicles on lifts inside Apex Auto workshop in Al Quoz Industrial 4, Dubai"
                      className="h-full w-full object-cover"
                      fittingType="fill"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-black/5 bg-ink px-5 py-4 shadow-xl">
                <BadgeCheck className="h-6 w-6 text-gear" />
                <div>
                  <p className="font-heading text-lg font-extrabold leading-none text-white">20+ Years</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/55">
                    Combined experience
                  </p>
                </div>
              </div>

              <div className="absolute -top-4 right-6 flex items-center gap-2 rounded-full border border-gear/40 bg-white px-4 py-2.5 shadow-lg">
                <Scale className="h-4 w-4 text-ink" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
                  Federal Law No. 15 / 2020
                </span>
              </div>

              <div className="absolute -right-4 bottom-16 hidden items-center gap-2 rounded-full bg-gear px-4 py-2.5 shadow-lg sm:flex">
                <ShieldCheck className="h-4 w-4 text-ink" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
                  Warranty protected
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}