import React from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { contractPackages, signatureExtras } from "@/data/packages";
import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/data/schema";
import { img } from "@/data/images";
import { site, waMessages, disclaimers } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import PricingPackages from "@/components/home/PricingPackages";
import FaqAccordion from "@/components/site/FaqAccordion";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer } from "@/components/site/primitives";

const comparison = [
  { label: "3 minor services every 10,000 KM", dynamic: true, signature: true },
  { label: "2 major services every 50,000 KM", dynamic: true, signature: true },
  { label: "1 free pre-purchase inspection", dynamic: true, signature: true },
  { label: "Advanced computer scanning and report", dynamic: true, signature: true },
  { label: "Engine oil, filter and labour included", dynamic: true, signature: true },
  { label: "Free breakdown recovery and 24/7 support", dynamic: true, signature: true },
  { label: "Free pickup and delivery upon approved estimate", dynamic: true, signature: true },
  { label: "Wheel alignment and free car wash", dynamic: true, signature: true },
  { label: "30% labour and 5% spare-parts discount", dynamic: true, signature: true },
  { label: "Priority workshop slot with dedicated advisor", dynamic: false, signature: true },
  { label: "Extended gearbox and cooling inspection cycles", dynamic: false, signature: true },
  { label: "Premium full-synthetic oil upgrade", dynamic: false, signature: true },
  { label: "Annual video inspection report for resale value", dynamic: false, signature: true },
];

const faqs = [
  {
    q: "Is there an annual commitment on a service contract?",
    a: "No. Dynamic and Signature contracts cover 50,000 KM of driving with no annual commitment, so the contract follows your mileage rather than the calendar.",
  },
  {
    q: "What happens if I sell the car during the contract?",
    a: "The remaining coverage transfers with the vehicle. It is a genuine selling point in the Dubai used market, and we document the contract history so a buyer can verify it.",
  },
  {
    q: "Are major repairs included in the contract price?",
    a: "Contracts cover scheduled maintenance — minor and major services, scanning, labour, oil and filters, alignment and recovery. Major component repairs such as a gearbox rebuild are quoted separately, and contract holders receive 30% off labour and 5% off parts on that work.",
  },
  {
    q: "How are contract tiers priced?",
    a: "By cylinder count: 4, 6 and 8 cylinder. Dynamic starts at AED 2,150 and Signature at AED 4,450, with 6 and 8 cylinder tiers priced above those. Final pricing is confirmed against your vehicle model and usage pattern.",
  },
];

export default function ServiceContracts() {
  const crumb = [{ label: "Home", to: "/" }, { label: "Service Contracts" }];

  usePageMeta(
    "Car Service Contracts Dubai | Dynamic & Signature Packages from AED 2,150",
    "Dynamic and Signature service contracts from Apex Auto Services, Dubai. 50,000 KM coverage with no annual commitment — 3 minor and 2 major services, free pre-purchase inspection, free recovery, free pickup and delivery, wheel alignment and 30% off labour."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb), faqSchema(faqs)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Maintenance Contracts · Dynamic & Signature"
        title="Lock in 50,000 KM of dealer-grade servicing — with no annual commitment."
        sub="Our Dynamic and Signature contracts spread the cost of manufacturer-scheduled maintenance across 50,000 KM, with priority workshop access, free breakdown recovery, free pickup and delivery, wheel alignment and standing discounts. One price, everything scheduled, nothing skipped."
        image={img.bays}
        imageAlt="Scheduled servicing bays at Apex Auto Services, Al Quoz Industrial 4, Dubai"
        primaryCta={{ to: "/appointment", label: "Start a contract" }}
        waMessage={waMessages.inspection}
        disclaimer={`${disclaimers.pickup} ${disclaimers.inspection} ${disclaimers.diagnostic}`}
        stats={[
          { value: "50,000 KM", label: "Coverage Per Contract" },
          { value: "5", label: "Services Included" },
          { value: "30%", label: "Off Labour For Holders" },
          { value: "AED 2,150", label: "Dynamic Starting Price" },
        ]}
      />

      <PricingPackages />

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow tone="light">Dynamic vs Signature</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-balance text-2xl leading-tight text-ink sm:text-3xl">
              Choose the tier that matches how long you plan to keep the car.
            </h2>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-3xl border border-black/[0.08]">
            <div className="grid grid-cols-3 border-b border-black/[0.08] bg-stone-warm">
              <div className="px-5 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-copymuted">
                Included
              </div>
              <div className="border-l border-black/[0.08] px-5 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
                Dynamic
              </div>
              <div className="border-l border-black/[0.08] bg-gear/[0.18] px-5 py-4 font-mono text-[10px] font-bold uppercase tracking-wider text-ink">
                Signature
              </div>
            </div>
            {comparison.map((row) => (
              <div key={row.label} className="grid grid-cols-3 border-b border-black/[0.06] last:border-b-0 bg-white">
                <div className="px-5 py-4 text-[13.5px] leading-snug text-ink/80">{row.label}</div>
                <div className="flex border-l border-black/[0.06] px-5 py-4">
                  {row.dynamic ? (
                    <Check className="h-4 w-4 text-ink" strokeWidth={3} />
                  ) : (
                    <X className="h-4 w-4 text-ink/25" />
                  )}
                </div>
                <div className="flex border-l border-black/[0.06] bg-gear/[0.06] px-5 py-4">
                  <Check className="h-4 w-4 text-ink" strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <div className="rounded-2xl border border-black/[0.08] bg-stone-warm p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
                  Signature additions
                </p>
                <ul className="mt-5 space-y-3">
                  {signatureExtras.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-copymuted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" strokeWidth={3} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-black/[0.08] bg-white p-6">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
                  Why contracts work in Dubai
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-copymuted">
                  UAE vehicles need more frequent attention than European service books assume. Contracts are
                  built around the real Dubai duty cycle — heat, dust and traffic — so cooling, transmission
                  fluid, AC and suspension checks happen when they actually need to, not when a European
                  interval says they should.
                </p>
                <div className="mt-5 space-y-2">
                  <Disclaimer tone="light">{disclaimers.warrantyLaw}</Disclaimer>
                  <Disclaimer tone="light">{disclaimers.pickup}</Disclaimer>
                </div>
                <a
                  href={site.telHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-extrabold uppercase tracking-wide text-gear"
                >
                  Call {site.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {contractPackages.map((p) => (
              <div key={p.slug} className="flex items-center justify-between gap-4 rounded-2xl border border-black/[0.08] bg-white px-5 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-copymuted">{p.family}</p>
                  <p className="mt-1 font-heading text-[15px] font-bold text-ink">{p.cylinders}</p>
                </div>
                <p className="font-mono text-[14px] font-bold text-ink">AED {p.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow>Contract Questions</Eyebrow>
            <h2 className="mt-6 text-balance text-2xl leading-tight text-white sm:text-3xl">
              What the contract does — and does not — cover.
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-gear"
            >
              Visit the workshop <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <LeadForm
              source="service-contracts"
              defaultService="Annual Maintenance Contracts"
              heading="Start A Service Contract"
              eyebrow="Contract Enquiry"
              reassurance="Send your vehicle details and we will recommend the right contract tier with a written scope before you commit."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}