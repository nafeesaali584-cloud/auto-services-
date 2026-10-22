import React from "react";
import { Link, useParams } from "react-router-dom";
import { Check, ArrowRight, AlertTriangle, Wrench, ShieldCheck, ScanLine, BadgeCheck, Truck, Wallet, Users } from "lucide-react";
import { brands, getBrand, brandServiceGrid, brandWorkflow } from "@/data/brands";
import { testimonials } from "@/data/testimonials";
import { brandSchema, breadcrumbSchema, localBusinessSchema, faqSchema } from "@/data/schema";
import { disclaimers, waMessages, site, waLink } from "@/data/site";
import { img } from "@/data/images";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import TestimonialCard from "@/components/site/TestimonialCard";
import LeadForm from "@/components/site/LeadForm";
import FaqAccordion from "@/components/site/FaqAccordion";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, CheckList, Disclaimer, YellowButton, WhatsAppButton, Bezel } from "@/components/site/primitives";

const advantages = [
  {
    icon: ScanLine,
    title: "Dealer-Level Equipment & Diagnostics",
    text: "Manufacturer diagnostic platforms reading every module, with live data logging and component activation — not a generic code reader.",
  },
  {
    icon: Users,
    title: "Certified Brand Technicians",
    text: "Your vehicle is repaired by the technician who specialises in that platform, following factory procedures and torque values.",
  },
  {
    icon: BadgeCheck,
    title: "100% Genuine & OEM-Approved Parts",
    text: "Genuine or OEM-approved fluids and components with part numbers stated on your estimate before you approve anything.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty-Backed Repairs",
    text: "Warranty on all parts fitted, documented at handover, with your manufacturer warranty protected under UAE law.",
  },
  {
    icon: Wallet,
    title: "Transparent Fixed Pricing",
    text: "An itemised estimate with a video inspection — no surprise dealership line items and no work without written approval.",
  },
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    text: "Free pickup and delivery upon approved estimate, anywhere in Dubai — from home, office or roadside.",
  },
];

export default function BrandDetail() {
  const { slug } = useParams();
  const brand = getBrand(slug);

  usePageMeta(
    brand
      ? `${brand.name} Repair & Service in Dubai | Specialist ${brand.name} Workshop · Al Quoz`
      : "Brand Not Found | The Gearbox Auto Services Dubai",
    brand
      ? `Expert ${brand.name} repair and service in Dubai. Certified ${brand.name} technicians, dealer-level diagnostic software, genuine OEM parts and free pickup upon approved estimate at The Gearbox Auto Services, Al Quoz Industrial 4, Dubai.`
      : "This brand page could not be found. Browse every marque serviced at The Gearbox Auto Services, Al Quoz Industrial 4, Dubai."
  );

  if (!brand) {
    return (
      <section className="bg-ink bg-blueprint">
        <div className="mx-auto max-w-3xl px-5 py-32 text-center lg:px-10">
          <h1 className="text-3xl text-white">Brand not found</h1>
          <p className="mt-4 text-white/70">We could not find that marque. Browse all {brands.length} brands we service.</p>
          <div className="mt-8 flex justify-center">
            <YellowButton to="/brands">All brands</YellowButton>
          </div>
        </div>
      </section>
    );
  }

  const crumb = [{ label: "Home", to: "/" }, { label: "Brands", to: "/brands" }, { label: brand.name }];
  const reviews = testimonials.filter((t) => t.brand === brand.name);
  const fallbackReviews = testimonials.slice(0, 3);
  const shownReviews = (reviews.length ? reviews : fallbackReviews).slice(0, 3);

  const priceRows = [
    { label: "Minor service", value: brand.pricing.minor },
    { label: "Major service", value: brand.pricing.major },
    { label: "AC overhaul", value: brand.pricing.ac },
    { label: "Brake pads replacement", value: brand.pricing.brakes },
  ];

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema(crumb),
          brandSchema({ name: brand.name, description: brand.intro, slug: brand.slug }),
          faqSchema(brand.faqs),
        ]}
      />

      <PageHero
        crumb={crumb}
        eyebrow={`${brand.origin} · Specialist ${brand.name} Workshop`}
        title={`Expert ${brand.name} Repair & Service Centre in Dubai`}
        sub={brand.intro}
        image={img.hero}
        imageAlt={`${brand.name} specialist repair at The Gearbox Auto Services in Al Quoz Industrial 4, Dubai`}
        primaryCta={{ to: "/appointment", label: `Book ${brand.name} Service` }}
        waMessage={waMessages.brand(brand.name)}
        waLabel="WhatsApp Specialist"
        disclaimer={`${disclaimers.pickup} ${disclaimers.diagnostic}`}
        stats={[
          { value: "20+", label: "Years Combined Experience" },
          { value: "5,000+", label: "Luxury Cars Restored" },
          { value: brand.models.length + "", label: `${brand.name} Models Covered` },
          { value: "100%", label: "Warranty On All Parts" },
        ]}
      />

      <section className="border-b border-white/10 bg-ink-deep">
        <div className="mx-auto max-w-[1400px] px-5 py-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
              Popular {brand.name} models:
            </span>
            {brand.models.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/65"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <Eyebrow tone="light">The Gearbox Difference</Eyebrow>
              <h2 className="mt-6 text-balance text-2xl leading-tight text-ink sm:text-3xl">
                {brand.name} expertise without the {brand.name} agency invoice.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-copymuted">{brand.intro}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-copymuted">{brand.whyDubai}</p>
              <div className="mt-8">
                <CheckList
                  tone="light"
                  items={[
                    "Genuine or OEM-approved parts with part numbers listed",
                    "Dealer diagnostic software for every module on your vehicle",
                    "UAE warranty protected under Federal Law No. 15 of 2020",
                    "Factory-trained technicians for this platform",
                  ]}
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((a) => (
                  <div key={a.title} className="flex h-full flex-col rounded-2xl border border-black/[0.08] bg-stone-warm p-5">
                    <a.icon className="h-5 w-5 text-ink" />
                    <h3 className="mt-4 text-[15px] leading-snug text-ink">{a.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-copymuted">{a.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>{brand.name} Service Capability</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-white sm:text-3xl">
              Twelve specialist services we carry out on {brand.name} vehicles.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brandServiceGrid.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i, 8) * 0.03}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-surface p-5 transition-colors hover:border-gear/45"
                >
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-gear">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[15px] leading-snug text-white">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-white/55">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-gear">
                    Service detail <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow tone="light">Spot The Warning Signs</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-ink sm:text-3xl">
              Known {brand.name} failure points in UAE heat.
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-copymuted">
              These are not generic faults — they are the specific failure patterns we see on {brand.name}
              vehicles in Dubai, and the reason early diagnosis saves so much money on this platform.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brand.failurePoints.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.04}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-black/[0.08] bg-white p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink">
                    <AlertTriangle className="h-4 w-4 text-gear" />
                  </span>
                  <div>
                    <p className="font-heading text-[15px] font-bold leading-snug text-ink">{f.title}</p>
                    <p className="mt-2 text-[13px] leading-relaxed text-copymuted">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-deep bg-blueprint">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <Eyebrow>{brand.name} Dealer vs Independent</Eyebrow>
              <h2 className="mt-6 text-balance text-2xl leading-tight text-white sm:text-3xl">
                Indicative {brand.name} pricing in Dubai.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/70">
                These are starting prices for {brand.name} platforms in Dubai. Final pricing is confirmed on
                your itemised estimate after diagnostic, and agency rates for the same procedures are
                typically around 40% higher.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.04]">
                  <div className="px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-white/50">
                    Procedure
                  </div>
                  <div className="border-l border-white/10 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-gear">
                    The Gearbox
                  </div>
                  <div className="border-l border-white/10 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-wider text-white/50">
                    Agency dealers
                  </div>
                </div>
                {priceRows.map((row) => (
                  <div key={row.label} className="grid grid-cols-3 border-b border-white/[0.07] last:border-b-0">
                    <div className="px-4 py-4 text-[13.5px] text-white/75">{row.label}</div>
                    <div className="border-l border-white/[0.07] bg-gear/[0.05] px-4 py-4 font-mono text-[13.5px] font-bold text-gear">
                      From AED {row.value.toLocaleString()}
                    </div>
                    <div className="border-l border-white/[0.07] px-4 py-4 text-[13px] text-white/50">
                      Around 40% higher
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <Disclaimer>{disclaimers.diagnostic}</Disclaimer>
                <Disclaimer>{disclaimers.pickup}</Disclaimer>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Bezel>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gear">
                  {brand.name} Service Workflow
                </p>
                <h3 className="mt-4 text-2xl text-white">Four steps, fully documented</h3>
                <ol className="mt-6 space-y-5">
                  {brandWorkflow.map((s) => (
                    <li key={s.step} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gear/40 font-mono text-[11px] font-bold text-gear">
                        {s.step}
                      </span>
                      <div>
                        <p className="font-heading text-[15px] font-bold text-white">{s.title}</p>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-7 flex flex-wrap gap-3">
                  <YellowButton to="/appointment">Book {brand.name} Service</YellowButton>
                  <WhatsAppButton message={waMessages.brand(brand.name)} label="WhatsApp specialist" />
                </div>
              </Bezel>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow tone="light">Real {brand.name} Repairs In Dubai</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-ink sm:text-3xl">
              Three documented case studies from our Al Quoz bays.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {brand.caseStudies.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-black/[0.08] bg-white p-6">
                  <Wrench className="h-5 w-5 text-ink" />
                  <h3 className="mt-4 text-[15px] leading-snug text-ink">{c.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-copymuted">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-8 rounded-3xl border border-black/[0.08] bg-stone-warm p-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Eyebrow tone="light">{brand.name} Contract Pricing</Eyebrow>
              <h3 className="mt-5 text-xl leading-snug text-ink">
                Dynamic and Signature service contracts available for {brand.name} platforms
              </h3>
              <p className="mt-4 text-[13.5px] leading-relaxed text-copymuted">
                Cover 50,000 KM of scheduled maintenance with no annual commitment — including minor and
                major services, advanced scanning, free recovery, wheel alignment and 30% off labour.
              </p>
              <Link
                to="/service-contracts"
                className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-ink hover:text-ink/60"
              >
                Contract details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:col-span-2">
              {[
                { label: "Dynamic 4 Cylinder", price: "AED 2,150" },
                { label: "Dynamic 6 Cylinder", price: "AED 3,570" },
                { label: "Signature 8 Cylinder", price: "AED 6,350" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl border border-black/[0.08] bg-white p-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-copymuted">{c.label}</p>
                  <p className="mt-3 font-heading text-xl font-extrabold text-ink">{c.price}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-gear">50,000 KM coverage</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {shownReviews.length ? (
        <section className="border-y border-white/10 bg-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Eyebrow>Verified Owner Reviews</Eyebrow>
                  <h2 className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-white sm:text-3xl">
                    What {brand.name} owners say after collecting their cars.
                  </h2>
                </div>
                <a
                  href={site.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-gear hover:text-gear-hover"
                >
                  Live Google reviews <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {shownReviews.map((r) => (
                <TestimonialCard key={r.name} review={r} className="h-full" />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <Reveal>
              <Eyebrow tone="light">{brand.name} FAQ</Eyebrow>
              <h2 className="mt-6 text-balance text-2xl leading-tight text-ink sm:text-3xl">
                {brand.name} servicing questions, answered.
              </h2>
              <div className="mt-8">
                <FaqAccordion items={brand.faqs} tone="light" />
              </div>

              <div className="mt-10 rounded-2xl border border-black/[0.08] bg-stone-warm p-6">
                <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
                  <Check className="h-4 w-4" /> Speak to a {brand.name} technician
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-copymuted">
                  Call {site.phone}, message us on WhatsApp, or visit the workshop at {site.street}, Dubai.
                  Open {site.hours.toLowerCase()}.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={site.telHref}
                    className="flex min-h-[48px] items-center gap-2 rounded-full bg-ink px-5 font-extrabold uppercase tracking-wide text-gear"
                  >
                    Call {site.phone}
                  </a>
                  <a
                    href={waLink(waMessages.brand(brand.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center gap-2 rounded-full bg-wa px-5 font-extrabold uppercase tracking-wide text-ink"
                  >
                    WhatsApp specialist
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <LeadForm
                source={`brand-${brand.slug}`}
                defaultBrand={brand.name}
                heading={`Book Your ${brand.name}`}
                eyebrow={`${brand.name} Specialist`}
                reassurance={`Tell us your model, year and symptoms and a ${brand.name} specialist will call you back with next steps.`}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}