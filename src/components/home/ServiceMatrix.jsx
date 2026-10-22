import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Wrench, Snowflake, Zap, Hammer, Sparkles, BatteryCharging, Phone } from "lucide-react";
import { getService } from "@/data/services";
import { img } from "@/data/images";
import { site, waMessages } from "@/data/site";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";

const showcase = [
  { slug: "maintenance-repair", num: "01", icon: Wrench, image: img.engine, alt: "Technician carrying out mechanical repair on a car engine in Dubai" },
  { slug: "car-ac-services", num: "02", icon: Snowflake, image: img.ac, alt: "Car air conditioning service and re-gasing in Dubai" },
  { slug: "scanning-diagnostics", num: "03", icon: Zap, image: img.diagnostics, alt: "Computerised diagnostic scan on a luxury car in Dubai" },
  { slug: "body-work", num: "04", icon: Hammer, image: img.paint, alt: "Bodywork and paint correction on a luxury car in Dubai" },
  { slug: "car-detailing", num: "05", icon: Sparkles, image: img.bays, alt: "Car detailing and polishing inside The Gearbox workshop" },
  { slug: "battery-services", num: "06", icon: BatteryCharging, image: img.gearbox, alt: "EV and battery service bay in Al Quoz, Dubai" },
];

export default function ServiceMatrix() {
  const [active, setActive] = useState(0);
  const tab = showcase[active];
  const service = getService(tab.slug);

  const name = service?.name ?? tab.slug;
  const text = service?.short ?? "";
  const checks = (service?.inclusions ?? []).slice(0, 7);

  return (
    <section className="relative border-y border-white/10 bg-ink-deep bg-blueprint">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-3xl">
              <p className="flex items-center gap-3 text-[13px] font-extrabold uppercase tracking-[0.28em] text-gear">
                <span className="h-[3px] w-8 rounded-full bg-gear" />
                What We Do
              </p>
              <h2 className="mt-5 text-balance text-white">
                Every repair handled with precision — from diagnostics to delivery.
              </h2>
            </div>

            <Link
              to="/services"
              className="flex items-center gap-2.5 rounded-full border border-white/35 px-6 py-3.5 text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:border-gear hover:text-gear"
            >
              View All Services
              <ArrowRight className="h-4 w-4 text-gear" strokeWidth={2.6} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          {/* Numbered service list */}
          <ul className="border-t border-white/12">
            {showcase.map((item, i) => {
              const activeItem = i === active;
              return (
                <li key={item.slug} className="border-b border-white/12">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={activeItem}
                    className="group flex w-full items-center gap-5 py-5 text-left"
                  >
                    <span
                      className={`text-[15px] font-extrabold tabular-nums transition-colors ${
                        activeItem ? "text-gear" : "text-white/35 group-hover:text-white/60"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        activeItem ? "border-gear bg-gear text-ink" : "border-white/15 text-white/55 group-hover:border-gear/60 group-hover:text-gear"
                      }`}
                    >
                      <item.icon className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span
                      className={`flex-1 font-heading text-[17px] font-extrabold uppercase tracking-tight transition-colors sm:text-[19px] ${
                        activeItem ? "text-white" : "text-white/60 group-hover:text-white"
                      }`}
                    >
                      {getService(item.slug)?.name ?? item.slug}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        activeItem ? "translate-x-0 text-gear opacity-100" : "-translate-x-1 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                      strokeWidth={2.6}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          {service ? (
            <Reveal>
              <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-ink-card md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
                <div className="p-7 lg:p-8">
                  <h3 className="text-xl text-white">{name}</h3>
                  <p className="mt-3.5 text-[14.5px] leading-relaxed text-white/65">{text}</p>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {checks.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gear" strokeWidth={3} />
                        <span className="text-[13.5px] leading-snug text-white/75">{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/services/${tab.slug}`}
                      className="flex items-center gap-2.5 rounded-full bg-gear px-5 py-3 text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gear-hover"
                    >
                      Book This Service
                      <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
                    </Link>
                    <span className="text-[12.5px] uppercase tracking-wide text-white/45">
                      {[service.priceFrom ? `From AED ${service.priceFrom}` : null, service.duration]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  </div>
                </div>

                <div className="relative min-h-[240px]">
                  <Image src={tab.image} alt={tab.alt} className="h-full w-full object-cover" fittingType="fill" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-card/70 via-transparent to-transparent md:bg-gradient-to-r md:from-ink-card/60" />
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>

        {/* Not sure which service strip */}
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ink-card">
          <div className="hazard-strip h-[6px] w-full" />
          <div className="flex flex-wrap items-center gap-6 p-6 lg:px-8 lg:py-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gear text-ink">
              <Wrench className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div className="min-w-[260px] flex-1">
              <p className="font-heading text-[17px] font-extrabold uppercase tracking-tight text-white">
                Not sure which service you need?
              </p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/60">
                Bring it in for a free diagnostic check — we&apos;ll tell you exactly what it needs before any work starts.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={site.telHref}
                className="flex items-center gap-2.5 rounded-full border border-white/35 px-5 py-3 text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:border-gear hover:text-gear"
              >
                <Phone className="h-4 w-4 text-gear" strokeWidth={2.6} />
                Call Now
              </a>
              <Link
                to="/appointment"
                className="flex items-center gap-2.5 rounded-full bg-gear px-5 py-3 text-[12.5px] font-extrabold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-gear-hover"
              >
                Book Free Check
                <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}