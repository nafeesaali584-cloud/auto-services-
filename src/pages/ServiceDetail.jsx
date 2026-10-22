import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Clock, Wallet, Wrench, AlertTriangle } from "lucide-react";
import { services, getService } from "@/data/services";
import { brands } from "@/data/brands";
import { serviceSchema, breadcrumbSchema, localBusinessSchema, faqSchema } from "@/data/schema";
import { disclaimers, waMessages } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import ServiceCard from "@/components/site/ServiceCard";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, CheckList, Disclaimer, YellowButton, WhatsAppButton } from "@/components/site/primitives";
import { img } from "@/data/images";

const imagesByCat = {
  mechanical: img.engine,
  electrical: img.ac,
  detailing: img.paint,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  usePageMeta(
    service
      ? `${service.name} in Dubai | ${service.h1.split("—")[0].trim()} · Apex Auto Al Quoz`
      : "Service Not Found | Apex Auto Services Dubai",
    service
      ? `${service.short} Dealer-level diagnostics, genuine OEM parts and transparent pricing from AED ${service.priceFrom} at Apex Auto Services, Al Quoz Industrial 4, Dubai. Free pickup and delivery upon approved estimate.`
      : "This service page could not be found. Browse all workshop services at Apex Auto Services, Al Quoz Industrial 4, Dubai."
  );

  if (!service) {
    return (
      <section className="bg-ink bg-blueprint">
        <div className="mx-auto max-w-3xl px-5 py-32 text-center lg:px-10">
          <h1 className="text-3xl text-white">Service not found</h1>
          <p className="mt-4 text-white/70">
            We could not find that service page. Browse all {services.length} workshop services instead.
          </p>
          <div className="mt-8 flex justify-center">
            <YellowButton to="/services">All services</YellowButton>
          </div>
        </div>
      </section>
    );
  }

  const crumb = [{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.name }];
  const related = services
    .filter((s) => s.cat === service.cat && s.slug !== service.slug)
    .slice(0, 4);

  const faqs = [
    {
      q: `How much does ${service.name.toLowerCase()} cost in Dubai?`,
      a: `${service.priceFrom > 0 ? `Indicative pricing starts from AED ${service.priceFrom}. ` : "Pricing is quoted per contract. "}${service.labour}. ${service.parts}. A minimum diagnostic / inspection fee of AED 300 applies and is disclosed before any work begins.`,
    },
    {
      q: `How long does ${service.name.toLowerCase()} take?`,
      a: `${service.duration}. We confirm the expected completion time when we book you in and send WhatsApp updates at each stage of the work.`,
    },
    {
      q: `Will this work at Apex Auto void my manufacturer warranty?`,
      a: "No. Under UAE Federal Consumer Protection Law No. 15 of 2020, servicing at an authorised independent workshop does not void your manufacturer warranty provided OEM guidelines and certified parts are used — which we document on every invoice.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema(crumb),
          serviceSchema({
            name: service.name,
            description: service.short,
            slug: service.slug,
            price: service.priceFrom,
          }),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        crumb={crumb}
        eyebrow={`${service.cat === "mechanical" ? "Mechanical Repairs" : service.cat === "electrical" ? "Electrical, AC & Body" : "Detailing & Specialist"} · Dubai`}
        title={service.h1}
        sub={service.intro}
        image={imagesByCat[service.cat] || img.bays}
        imageAlt={`${service.name} at Apex Auto Services, Al Quoz Industrial 4, Dubai`}
        primaryCta={{ to: "/appointment", label: `Book ${service.name}` }}
        waMessage={waMessages.service(service.name)}
        disclaimer={`${service.priceFrom > 0 ? `Indicative pricing from AED ${service.priceFrom}. ` : ""}${disclaimers.pickup}`}
      />

      <section className="border-b border-white/10 bg-ink-deep">
        <div className="mx-auto max-w-[1400px] px-5 py-10 lg:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Wallet, label: "Starting price", value: service.priceFrom > 0 ? `AED ${service.priceFrom}` : "Contract" },
              { icon: Clock, label: "Typical turnaround", value: service.duration },
              { icon: Wrench, label: "Labour", value: service.labour },
              { icon: AlertTriangle, label: "Parts", value: service.parts },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-ink-surface p-5">
                <item.icon className="h-4 w-4 text-gear" />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-white/45">{item.label}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/80">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Why It Fails In The UAE</Eyebrow>
              <h2 className="mt-6 text-balance text-2xl leading-tight text-white sm:text-3xl">
                The Dubai climate finds this component first.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/70">{service.climate}</p>

              <div className="mt-8 rounded-2xl border border-gear/30 bg-gear/[0.06] p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gear">
                  How it differs by brand
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/75">{service.brandsNote}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {brands.slice(0, 12).map((b) => (
                    <Link
                      key={b.slug}
                      to={`/brands/${b.slug}`}
                      className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/60 transition-colors hover:border-gear hover:text-gear"
                    >
                      {b.name}
                    </Link>
                  ))}
                  <Link
                    to="/brands"
                    className="rounded-full border border-gear/40 bg-gear/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-gear"
                  >
                    All {brands.length} brands
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="double-bezel rivets">
                <div className="double-bezel-inner">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gear">
                    Diagnostic Protocol
                  </p>
                  <h3 className="mt-4 text-2xl text-white">How we test before we repair</h3>
                  <ol className="mt-6 space-y-4">
                    {service.protocol.map((step, i) => (
                      <li key={step} className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gear/40 font-mono text-[11px] font-bold text-gear">
                          {i + 1}
                        </span>
                        <span className="text-[14px] leading-relaxed text-white/70">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <YellowButton to="/appointment">Book this service</YellowButton>
                    <WhatsAppButton message={waMessages.service(service.name)} label="Ask a technician" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <Reveal>
              <Eyebrow tone="light">What Is Included</Eyebrow>
              <h2 className="mt-6 text-balance text-2xl leading-tight text-ink sm:text-3xl">
                Itemised inclusions — nothing vague, nothing added later.
              </h2>
              <div className="mt-8">
                <CheckList tone="light" items={service.inclusions} />
              </div>
              <div className="mt-8 space-y-2">
                <Disclaimer tone="light">{disclaimers.diagnostic}</Disclaimer>
                <Disclaimer tone="light">{disclaimers.inspection}</Disclaimer>
                <Disclaimer tone="light">{disclaimers.pickup}</Disclaimer>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <LeadForm
                source={`service-${service.slug}`}
                defaultService={service.name}
                heading={`Get a ${service.name} Quote`}
                eyebrow="Direct Workshop Quote"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink-deep">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>Frequently Asked</Eyebrow>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-white/10 bg-ink-surface p-6">
                  <p className="font-heading text-[15px] font-bold leading-snug text-white">{f.q}</p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/65">{f.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow tone="light">Related Services</Eyebrow>
                <h2 className="mt-6 text-2xl leading-tight text-ink sm:text-3xl">
                  Often carried out alongside this work
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:text-ink/60"
              >
                All {services.length} services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} tone="light" className="h-full" />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border border-black/[0.08] bg-stone-warm p-6">
            <Check className="h-5 w-5 text-ink" />
            <p className="flex-1 text-[14px] leading-relaxed text-copymuted">
              Not sure which service you need? Send us the symptoms on WhatsApp and a technician will tell
              you what is most likely and what it should cost.
            </p>
            <WhatsAppButton message={waMessages.service(service.name)} label="Ask now" />
          </div>
        </div>
      </section>
    </>
  );
}