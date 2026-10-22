import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";

const team = [
  {
    discipline: "Engine & Drivetrain",
    role: "Master technician",
    years: "18+ years",
    image: "https://media.base44.com/images/public/6ad60d2f5d7210a6fb76f674/52dfd033d_generated_image.png",
    alt: "Master technician specialising in engine and drivetrain repair at The Gearbox workshop in Dubai",
  },
  {
    discipline: "Electrical & Diagnostics",
    role: "Diagnostics specialist",
    years: "12+ years",
    image: "https://media.base44.com/images/public/6ad60d2f5d7210a6fb76f674/385ff02be_generated_image.png",
    alt: "Automotive electrician carrying out computerised diagnostics at The Gearbox workshop in Dubai",
  },
  {
    discipline: "Body, Paint & Trim",
    role: "Refinishing specialist",
    years: "15+ years",
    image: "https://media.base44.com/images/public/6ad60d2f5d7210a6fb76f674/4ec1bbe9a_generated_image.png",
    alt: "Bodywork and paint specialist refinishing a car panel at The Gearbox workshop in Dubai",
  },
];

export default function TeamSection() {
  return (
    <section className="relative border-y border-white/10 bg-ink bg-blueprint">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-[13px] font-extrabold uppercase tracking-[0.28em] text-gear">
                <span className="h-[3px] w-8 rounded-full bg-gear" />
                Our Team
              </p>
              <h2 className="mt-5 text-balance text-white">The people behind the wrench.</h2>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2.5 rounded-full border border-white/35 px-6 py-3.5 text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:border-gear hover:text-gear"
            >
              Meet the workshop
              <ArrowRight className="h-4 w-4 text-gear" strokeWidth={2.6} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.discipline} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    fittingType="fill"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/25 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-gear px-3 py-1.5 text-[11.5px] font-extrabold uppercase tracking-wide text-ink">
                    {t.years}
                  </span>
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="font-heading text-[19px] font-extrabold uppercase leading-tight tracking-tight text-white">
                      {t.discipline}
                    </p>
                    <p className="mt-1.5 flex items-center gap-2 text-[12.5px] uppercase tracking-wide text-white/70">
                      <BadgeCheck className="h-4 w-4 text-gear" strokeWidth={2.4} />
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
