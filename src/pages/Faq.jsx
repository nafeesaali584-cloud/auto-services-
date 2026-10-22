import React from "react";
import { faqCategories } from "@/data/faqs";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/data/schema";
import { img } from "@/data/images";
import { waMessages, disclaimers } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import FaqAccordion from "@/components/site/FaqAccordion";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer } from "@/components/site/primitives";

export default function Faq() {
  const crumb = [{ label: "Home", to: "/" }, { label: "FAQ" }];
  const allItems = faqCategories.flatMap((c) => c.items);

  usePageMeta(
    "Car Repair FAQ Dubai | Warranty, Pricing, Pickup & Parts · The Gearbox",
    "Answers on UAE warranty law, transparent pricing and the AED 300 diagnostic fee, free pickup and delivery across Dubai, genuine versus OEM parts, and turnaround times at The Gearbox Auto Services, Al Quoz."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb), faqSchema(allItems)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Questions & Answers"
        title="Everything Dubai drivers ask before booking a workshop."
        sub="Five categories covering UAE warranty law, how our estimates work, pickup and delivery coverage, parts authenticity, and turnaround or emergency support. If anything is unclear, message us on WhatsApp — a technician answers."
        image={img.engine}
        imageAlt="Engine components laid out on the rebuild bench at The Gearbox Auto Services, Dubai"
        primaryCta={{ to: "/appointment", label: "Book Free Inspection" }}
        waMessage={waMessages.general}
        disclaimer={`${disclaimers.diagnostic} ${disclaimers.pickup} ${disclaimers.inspection}`}
      />

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)]">
            <Reveal>
              <div className="sticky top-28">
                <Eyebrow tone="light">Categories</Eyebrow>
                <nav className="mt-6 space-y-2">
                  {faqCategories.map((c) => (
                    <a
                      key={c.id}
                      href={`#${c.id}`}
                      className="flex items-center justify-between gap-4 rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-[13.5px] font-semibold text-ink/75 transition-colors hover:border-gear hover:text-ink"
                    >
                      {c.title}
                      <span className="font-mono text-[10px] uppercase tracking-wider text-copymuted">
                        {c.items.length}
                      </span>
                    </a>
                  ))}
                </nav>

                <div className="mt-8 rounded-2xl border border-black/[0.08] bg-stone-warm p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                    Key disclosures
                  </p>
                  <div className="mt-4 space-y-2">
                    <Disclaimer tone="light">{disclaimers.diagnostic}</Disclaimer>
                    <Disclaimer tone="light">{disclaimers.pickup}</Disclaimer>
                    <Disclaimer tone="light">{disclaimers.inspection}</Disclaimer>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-14">
              {faqCategories.map((c) => (
                <Reveal key={c.id}>
                  <div id={c.id} className="scroll-mt-32">
                    <Eyebrow tone="light">{c.title}</Eyebrow>
                    <h2 className="mt-5 text-balance text-2xl leading-tight text-ink sm:text-3xl">{c.intro}</h2>
                    <div className="mt-7">
                      <FaqAccordion items={c.items} tone="light" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>Still Have A Question?</Eyebrow>
            <h2 className="mt-6 text-balance text-2xl leading-tight text-white sm:text-3xl">
              Ask a technician directly — not a call centre.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
              Send us the symptom, the warning light or the noise. We will tell you what it usually means on your
              platform and what it should cost to put right.
            </p>
            <div className="mt-8 space-y-2">
              <Disclaimer>{disclaimers.warrantyLaw}</Disclaimer>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <LeadForm
              source="faq"
              heading="Ask The Workshop"
              eyebrow="Direct Technician Reply"
              reassurance="Use this form for any question not answered above — a technician will reply personally."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}