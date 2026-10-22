import React from "react";
import { Gift, Check, ArrowRight } from "lucide-react";
import { offers } from "@/data/packages";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { img } from "@/data/images";
import { site, waMessages, disclaimers } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer, CheckList, YellowButton, WhatsAppButton } from "@/components/site/primitives";

export default function ExclusiveOffers() {
  const crumb = [{ label: "Home", to: "/" }, { label: "Exclusive Offers" }];

  usePageMeta(
    "Exclusive Offers Dubai | Free Inspection, Free Pickup & Delivery · The Gearbox",
    "Current offers at The Gearbox Auto Services Dubai — free vehicle inspection upon approval of repair estimate, free pickup and delivery upon approved estimate, free vehicle sanitising, free breakdown recovery, 30% labour discount for contract holders and a free summer AC performance check."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Complimentary Services & Current Offers"
        title="The things we include as standard — and the ones we add around them."
        sub="Free vehicle inspection upon approval of your repair estimate, free pickup and delivery upon approved estimate across Dubai, complimentary sanitising with every service, and free breakdown recovery. These are not seasonal gimmicks; they are how we work."
        image={img.ac}
        imageAlt="Complimentary air conditioning performance check at The Gearbox Auto Services Dubai"
        primaryCta={{ to: "/appointment", label: "Claim free inspection" }}
        waMessage={waMessages.inspection}
        disclaimer={`${disclaimers.inspection} ${disclaimers.pickup} ${disclaimers.diagnostic}`}
      />

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow tone="light">Current Offers</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-balance text-2xl leading-tight text-ink sm:text-3xl">
              Six offers available to Dubai drivers this season.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((o, i) => (
              <Reveal key={o.title} delay={Math.min(i, 6) * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:border-gear hover:shadow-[0_14px_36px_-18px_rgba(10,14,17,0.3)]">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink">
                      <Gift className="h-4 w-4 text-gear" />
                    </span>
                    <span className="rounded-md border border-gear/40 bg-gear/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
                      {o.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[1.05rem] leading-snug text-ink">{o.title}</h3>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-copymuted">{o.body}</p>
                  <p className="mt-4 border-t border-black/[0.08] pt-4 font-mono text-[10.5px] uppercase leading-relaxed tracking-wide text-copymuted">
                    {o.terms}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <Eyebrow>Always Included</Eyebrow>
              <h2 className="mt-6 text-balance text-2xl leading-tight text-white sm:text-3xl">
                What every customer receives, on every job.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/70">
                These are the baseline standards of the workshop, not a promotion. They apply whether you are in
                for a synthetic oil service or a full transmission rebuild.
              </p>
              <div className="mt-8">
                <CheckList
                  items={[
                    "Free vehicle inspection upon approval of repair estimate",
                    "Transparent video inspection sent to your WhatsApp before approval",
                    "Itemised estimate with OEM part numbers — nothing added without written approval",
                    "Warranty on all parts fitted, documented at handover",
                    "Free pickup and delivery upon approved estimate across Dubai",
                    "Complimentary car wash and vehicle sanitising on collection",
                    "Road test and quality-control sign-off before handover",
                  ]}
                />
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <YellowButton to="/appointment">Book Free Inspection</YellowButton>
                <WhatsAppButton message={waMessages.pickup} label="Ask about offers" />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <LeadForm
                source="exclusive-offers"
                defaultService="Free Vehicle Inspection"
                heading="Claim An Offer"
                eyebrow="Exclusive Offers"
                reassurance="Tell us which offer you want and your vehicle details — we will confirm eligibility and book you in."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-stone-soft">
        <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Eyebrow tone="light">Offer Conditions</Eyebrow>
              <p className="mt-5 text-[14.5px] leading-relaxed text-copymuted">
                Offers are available to customers of The Gearbox Auto Services in Dubai and are subject to the
                terms stated on each offer card. Complimentary services apply once the related repair estimate has
                been approved. A minimum diagnostic / inspection fee of AED 300 applies and is disclosed before
                any work begins. Offers cannot be combined with other promotions unless stated, and contractual
                discounts apply only to active Dynamic or Signature contract holders.
              </p>
            </div>
            <div className="rounded-2xl border border-black/[0.08] bg-white p-6">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
                Speak to us
              </p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-copymuted">
                {site.phone} · {site.email}
                <br />
                {site.street}, {site.city}
              </p>
              <a
                href={site.telHref}
                className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-ink hover:text-ink/60"
              >
                Call the workshop <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="mt-8 space-y-2">
            <Disclaimer tone="light">{disclaimers.inspection}</Disclaimer>
            <Disclaimer tone="light">{disclaimers.pickup}</Disclaimer>
            <Disclaimer tone="light">{disclaimers.diagnostic}</Disclaimer>
          </div>
        </div>
      </section>
    </>
  );
}