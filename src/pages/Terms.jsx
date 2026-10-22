import React from "react";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { site, disclaimers } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer } from "@/components/site/primitives";
import { img } from "@/data/images";

const sections = [
  {
    title: "1. Estimates, approvals and authorisation",
    body: [
      "All work is carried out on the basis of a written or digital estimate supplied to you for approval. No repair work will begin until that estimate has been approved by you.",
      "Where additional faults are identified during a repair, we will stop, record the finding on video where practical, and issue a revised estimate for your approval before continuing. We do not carry out additional chargeable work without a fresh approval.",
      "Estimates are valid for 14 days from the date issued. Parts pricing is subject to supplier availability and may be revised before approval, never after.",
    ],
  },
  {
    title: "2. Diagnostic and inspection fees",
    body: [
      disclaimers.diagnostic,
      "Where you proceed with a repair based on our diagnostic findings, the diagnostic fee is credited toward the cost of that repair.",
      "Extended fault tracing on complex electrical, transmission or intermittent faults may require additional diagnostic time, which will be confirmed with you in advance.",
    ],
  },
  {
    title: "3. Free inspection, pickup and delivery conditions",
    body: [
      `Free vehicle inspection: ${disclaimers.inspection}`,
      `Free pickup and delivery: ${disclaimers.pickup}`,
      "Free recovery and collection services apply within Dubai and are subject to the repair estimate being approved. Vehicles must be accessible and legally parked at collection; any parking or municipality charges incurred at the collection location remain the customer's responsibility.",
    ],
  },
  {
    title: "4. Parts and warranty",
    body: [
      "We fit genuine manufacturer parts or OEM-approved equivalents. Your estimate states which category is being supplied, with part numbers, before work begins.",
      "Warranty is provided on all parts fitted. The warranty period and terms vary by component and supplier and are stated in writing on your invoice at handover.",
      "Workmanship on repairs carried out by Apex Auto Services is warranted alongside the parts supplied. Warranty claims must be presented to us for inspection before any third party intervenes; work carried out elsewhere on an affected system may limit our warranty responsibility.",
      "Where a customer supplies their own parts, no warranty is provided on those components and the labour warranty may be limited accordingly.",
      `Your manufacturer warranty is not affected by servicing at our workshop: ${disclaimers.warrantyLaw}`,
    ],
  },
  {
    title: "5. Turnaround, delays and storage",
    body: [
      "Turnaround times provided at booking are estimates based on the expected scope of work and parts availability. Where a delay arises — typically parts supply or the discovery of additional faults — we will notify you promptly with a revised completion estimate.",
      "We will contact you when your vehicle is ready for collection. Vehicles not collected within 7 days of notification may incur a storage charge of AED 50 per day. Vehicles not collected within 30 days may be handled in accordance with applicable UAE law.",
      "We do not release vehicles until the invoice is settled in full, unless a credit arrangement has been agreed in writing in advance.",
    ],
  },
  {
    title: "6. Payment terms",
    body: [
      "We accept cash, major debit and credit cards, and bank transfer. Payment is due on completion and prior to release of the vehicle.",
      "For major repairs and restoration projects, staged payments may be agreed against defined phases of work, documented in writing before work commences.",
      "For fleet and corporate accounts, invoicing terms are agreed per contract with the account manager.",
    ],
  },
  {
    title: "7. Vehicle care, test drives and data",
    body: [
      "Vehicles are photographed on arrival and departure and stored within our secured premises. Personal belongings should be removed before handover; we accept no responsibility for items left in the vehicle.",
      "Road testing is an integral part of diagnosis and quality control. By authorising work, you authorise us to road test the vehicle as required within applicable traffic regulations.",
      "Where relevant to diagnosis and repair, we may access vehicle electronic data including fault codes, adaptations and control module information. This data is used solely for the repair and, where you have approved it, documented in your service record.",
      "Photographs and video inspections recorded during your repair may be retained in our system to support your service history and any warranty claim.",
    ],
  },
  {
    title: "8. Compliance with UAE consumer protection law",
    body: [
      disclaimers.warrantyLaw,
      "We are committed to transparent estimates, documented procedures and fair resolution of any concern. If you are dissatisfied with any aspect of our work, please contact us directly so that we can inspect the vehicle and respond.",
    ],
  },
  {
    title: "9. Governing law and jurisdiction",
    body: [
      "These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai, and any dispute shall be subject to the exclusive jurisdiction of the courts of Dubai.",
      "These terms do not limit any statutory rights you hold as a consumer under UAE Federal Law No. 15 of 2020 on Consumer Protection.",
    ],
  },
];

export default function Terms() {
  const crumb = [{ label: "Home", to: "/" }, { label: "Terms & Conditions" }];

  usePageMeta(
    "Terms & Conditions | Apex Auto Services L.L.C, Dubai",
    "Workshop terms and policies for Apex Auto Services L.L.C, Al Quoz Industrial 4, Dubai — estimates and approvals, diagnostic fees, free inspection and pickup conditions, parts and warranty, turnaround, payment, data and governing law."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Workshop Terms & Policies"
        title="Terms & Conditions"
        sub={`The basis on which ${site.legalName} carries out diagnostic, repair, bodywork, detailing and contract services at our Al Quoz Industrial 4 workshop in Dubai. Written in plain language so you know exactly what you are agreeing to.`}
        image={img.paint}
        imageAlt="Dust-free paint booth at Apex Auto Services in Al Quoz Industrial 4, Dubai"
        primaryCta={{ to: "/contact", label: "Ask a question" }}
        disclaimer={`Last updated: ${new Date().toLocaleDateString("en-AE", { month: "long", year: "numeric" })}`}
      />

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)]">
            <Reveal>
              <div className="sticky top-28">
                <Eyebrow tone="light">Contents</Eyebrow>
                <nav className="mt-6 space-y-2">
                  {sections.map((s) => (
                    <a
                      key={s.title}
                      href={`#${s.title.split(".")[0]}`}
                      className="block rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-[13px] font-semibold text-ink/75 transition-colors hover:border-gear hover:text-ink"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 rounded-2xl border border-black/[0.08] bg-stone-warm p-5">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                    Registered workshop
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-copymuted">
                    {site.legalName}
                    <br />
                    {site.street}
                    <br />
                    {site.city}, {site.country}
                    <br />
                    {site.phone} · {site.email}
                  </p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <div className="rounded-3xl border border-black/[0.08] bg-white p-8">
                  <p className="text-[14.5px] leading-relaxed text-copymuted">
                    By booking, delivering or authorising work on a vehicle at {site.legalName}, you accept the
                    terms below. If any part needs clarification before you authorise work, ask us — we would
                    rather explain it than have you sign something you are unsure about.
                  </p>
                </div>
              </Reveal>

              <div className="mt-10 space-y-10">
                {sections.map((s) => (
                  <Reveal key={s.title}>
                    <section id={s.title.split(".")[0]} className="scroll-mt-32 border-t border-black/[0.08] pt-8">
                      <h2 className="font-heading text-xl font-extrabold leading-snug tracking-tight text-ink sm:text-2xl">
                        {s.title}
                      </h2>
                      <div className="mt-5 space-y-4">
                        {s.body.map((p) => (
                          <p key={p} className="text-[14.5px] leading-[1.75] text-copymuted">
                            {p}
                          </p>
                        ))}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <div className="mt-12 rounded-3xl border border-black/[0.08] bg-stone-warm p-8">
                  <h2 className="font-heading text-xl font-extrabold text-ink">10. Contact and complaints</h2>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-copymuted">
                    For any question about these terms, an estimate or a completed repair, contact the workshop
                    directly on {site.phone} or {site.email}, or visit us at {site.street}, {site.city}. Open{" "}
                    {site.hours.toLowerCase()}. We will inspect the vehicle and respond promptly.
                  </p>
                  <div className="mt-6 space-y-2">
                    <Disclaimer tone="light">{disclaimers.diagnostic}</Disclaimer>
                    <Disclaimer tone="light">{disclaimers.pickup}</Disclaimer>
                    <Disclaimer tone="light">{disclaimers.inspection}</Disclaimer>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}