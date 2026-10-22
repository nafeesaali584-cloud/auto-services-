import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Handshake, Eye, Wrench } from "lucide-react";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { img, gallery } from "@/data/images";
import { site, waMessages, disclaimers, stats } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, CheckList, Disclaimer, YellowButton } from "@/components/site/primitives";
import { Image } from "@/components/ui/image";
import TeamSection from "@/components/about/TeamSection";
import StatsBanner from "@/components/site/StatsBanner";

const facility = [
  {
    title: "Al Quoz Industrial 4 Workshop",
    text: "Twelve service bays, dedicated diagnostics area, transmission bench, engine rebuild area, paint booth and trim workshop — all under one roof in Dubai.",
  },
  {
    title: "Advanced Diagnostic & Scanning Equipment",
    text: "Manufacturer-level diagnostic platforms for Mercedes, BMW, Audi, Porsche and Land Rover, plus full coverage for American, Japanese, French and Italian marques.",
  },
  {
    title: "Dedicated Engine Rebuild & Gearbox Capability",
    text: "In-house strip-down, measurement, machining coordination and controlled assembly with documented tolerances and torque values.",
  },
  {
    title: "Bodywork, Paint, Coating & Trim",
    text: "Panel repair, custom paint, ceramic coating, PPF and vinyl wrap, upholstery, rim restoration and conversion or facelift work.",
  },
];

const community = [
  { icon: Eye, title: "Ethical estimates", text: "We diagnose first and quote on evidence. Nothing is replaced on a guess, and nothing is added without your written approval." },
  { icon: Handshake, title: "Honest advice", text: "If the car does not need the repair, we say so. If there is a cheaper correct repair, we tell you that instead." },
  { icon: Wrench, title: "Transparent video inspections", text: "Every finding is filmed and sent to you — so you can see the worn part, not just read a line on an invoice." },
  { icon: Recycle, title: "Environmental responsibility", text: "Spent oils, filters, coolants and batteries are collected and recycled through licensed UAE disposal partners." },
];

export default function About() {
  const crumb = [{ label: "Home", to: "/" }, { label: "About" }];

  usePageMeta(
    "About The Gearbox Auto Services | Luxury Car Workshop in Al Quoz, Dubai",
    "The Gearbox Auto Services was founded by automotive enthusiasts with over 20 years of combined experience across Europe and the Middle East, to deliver dealership-quality luxury car repair in Dubai without the premium price tag."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Heritage & Mission"
        title="Dubai's trusted destination for luxury car maintenance, repair and restoration."
        sub="The Gearbox Auto Services was founded by passionate automotive enthusiasts with over 20 years of combined experience across Europe and the Middle East. The workshop was established to provide a dealership-quality experience without the premium price tag — same diagnostics, same procedures, same genuine parts, roughly 40% less."
        image={img.bays}
        imageAlt="Inside The Gearbox Auto Services workshop in Al Quoz Industrial 4, Dubai"
        primaryCta={{ to: "/appointment", label: "Visit the workshop" }}
        waMessage={waMessages.general}
        disclaimer={`${disclaimers.pickup} ${disclaimers.diagnostic}`}
        stats={[
          { value: "20+", label: "Years Combined Experience" },
          { value: "5,000+", label: "Luxury Cars Restored in 3 Years" },
          { value: "4.9★", label: "Verified Google Rating" },
          { value: "12", label: "Service Bays in Al Quoz" },
        ]}
      />

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <Eyebrow tone="light">Our Story</Eyebrow>
              <h2 className="mt-6 text-balance text-2xl leading-tight text-ink sm:text-3xl">
                Built by people who were tired of the same two bad options.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-copymuted">
                Every luxury car owner in Dubai faces the same choice: pay agency prices and wait in a queue, or
                hand the car to an unauthorised garage and hope the parts are real. Both options fail the
                customer. The Gearbox was created to remove that choice entirely.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-copymuted">
                We invested in the diagnostic platforms, the transmission bench, the paint booth and the tooling
                that dealer-grade work actually requires — and trained our technicians around the specific ways
                vehicles fail in UAE heat. Then we priced the work honestly, documented everything, and let the
                results speak for themselves.
              </p>
              <div className="mt-8">
                <CheckList
                  tone="light"
                  items={[
                    "Dealer-level diagnostic equipment and factory procedures",
                    "Genuine or OEM-approved parts with part numbers on every invoice",
                    "Transparent video inspections sent before work is approved",
                    "Warranty on all parts fitted, documented at handover",
                    "Free pickup and delivery upon approved estimate across Dubai",
                  ]}
                />
              </div>
              <div className="mt-8">
                <YellowButton to="/testimonials">Read client reviews</YellowButton>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {gallery.slice(0, 4).map((g) => (
                  <figure key={g.src} className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white">
                    <div className="relative aspect-[4/3]">
                      <Image src={g.src} alt={g.alt} className="h-full w-full object-cover" fittingType="fill" />
                    </div>
                    <figcaption className="px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-copymuted">
                      {g.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>Workshop Facility Tour</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-balance text-2xl leading-tight text-white sm:text-3xl">
              What is actually inside the Al Quoz facility.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {facility.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-surface p-6">
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-gear">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[1.05rem] leading-snug text-white">{f.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <Eyebrow tone="light">Master Technician Credentials</Eyebrow>
              <h2 className="mt-6 text-balance text-2xl leading-tight text-ink sm:text-3xl">
                Certified specialists across five automotive traditions.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-copymuted">
                Our technicians are certified professionals with extensive experience in luxury, American,
                German, British and Italian vehicles. That range matters in Dubai: a Porsche PDK and a Dodge
                HEMI do not fail the same way, and diagnosing them requires different platforms, fluids and
                instincts.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { title: "German platforms", text: "XENTRY, ISTA, ODIS and PIWIS diagnostics, CBS resets and long-life oil approvals." },
                  { title: "British platforms", text: "Land Rover Pathfinder diagnostics, air suspension handling, cooling crossover work." },
                  { title: "Italian platforms", text: "DCT and ISR clutch measurement, hydraulic suspension repair, carbon-ceramic brakes." },
                  { title: "American platforms", text: "AFM lifter and camshaft work, transmission shudder diagnosis, heavy-duty cooling." },
                ].map((c) => (
                  <div key={c.title} className="rounded-2xl border border-black/[0.08] bg-white p-5">
                    <p className="font-heading text-[14px] font-bold text-ink">{c.title}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-copymuted">{c.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="double-bezel-light">
                <div className="double-bezel-light-inner">
                  <Eyebrow tone="light">UAE Community Commitment</Eyebrow>
                  <h3 className="mt-5 text-xl leading-snug text-ink">
                    Ethical estimates and environmental responsibility.
                  </h3>
                  <div className="mt-7 space-y-5">
                    {community.map((c) => (
                      <div key={c.title} className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink">
                          <c.icon className="h-4 w-4 text-gear" />
                        </span>
                        <div>
                          <p className="font-heading text-[14.5px] font-bold text-ink">{c.title}</p>
                          <p className="mt-1.5 text-[13px] leading-relaxed text-copymuted">{c.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-black/[0.08] bg-white p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
                  Visit us
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-copymuted">
                  {site.street}
                  <br />
                  {site.city}, {site.country}
                  <br />
                  {site.hours}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-ink hover:text-ink/60"
                >
                  Contact &amp; directions <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-6 space-y-2">
                <Disclaimer tone="light">{disclaimers.pickup}</Disclaimer>
                <Disclaimer tone="light">{disclaimers.inspection}</Disclaimer>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TeamSection />

      <StatsBanner items={stats} />
    </>
  );
}