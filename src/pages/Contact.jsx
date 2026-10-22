import React from "react";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { site, contacts, areasServed, waLink, waMessages, disclaimers } from "@/data/site";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { img } from "@/data/images";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import LeadForm from "@/components/site/LeadForm";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer } from "@/components/site/primitives";

const cards = [
  {
    icon: Phone,
    label: "Call Us",
    lines: [site.phone, "+971 50 324 5212"],
    href: site.telHref,
    cta: "Call the workshop",
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: [site.email],
    href: `mailto:${site.email}`,
    cta: "Send an email",
  },
  {
    icon: MapPin,
    label: "Workshop",
    lines: [site.street, site.city],
    href: site.mapLink,
    cta: "Open in Google Maps",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    lines: [site.hoursShort, "WhatsApp monitored out of hours"],
    href: waLink(waMessages.general),
    cta: "Message on WhatsApp",
  },
];

const reassurance = [
  "Response within 60 minutes during workshop hours",
  "Free pickup upon approved estimate across Dubai",
  "No obligation, no hidden fees — an itemised estimate before any work",
];

export default function Contact() {
  const crumb = [{ label: "Home", to: "/" }, { label: "Contact" }];

  usePageMeta(
    "Contact Apex Auto Services | Car Workshop Al Quoz Industrial 4, Dubai",
    "Talk to the workshop directly. Call 800458 or +971 50 324 5212, WhatsApp +971 50 324 5150, or email service@apexauto.ae. Apex Auto Services, Al Quoz Industrial 4, 16 D Street, Dubai. Free pickup and delivery upon approved estimate."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Get In Touch"
        title="Talk to the workshop directly."
        sub="Call, WhatsApp or send an enquiry — a technician replies within the hour during workshop hours. Free pickup and delivery upon approved estimate across Dubai, and free vehicle inspection upon approval of your repair estimate."
        image={img.pickup}
        imageAlt="Vehicle collection for free pickup and delivery across Dubai by Apex Auto Services"
        primaryCta={{ to: "/appointment", label: "Book Appointment" }}
        waMessage={waMessages.general}
        disclaimer={`${disclaimers.diagnostic} ${disclaimers.pickup}`}
      />

      <section className="border-b border-white/10 bg-ink-deep">
        <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-10 lg:py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-surface p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gear/30 bg-gear/10">
                    <c.icon className="h-5 w-5 text-gear" />
                  </span>
                  <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gear">
                    {c.label}
                  </p>
                  <div className="mt-3 flex-1 space-y-1">
                    {c.lines.map((l) => (
                      <p key={l} className="text-[14.5px] leading-snug text-white/80">
                        {l}
                      </p>
                    ))}
                  </div>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-white/55 transition-colors hover:text-gear"
                  >
                    {c.cta} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-10 lg:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow tone="light">Workshop Location</Eyebrow>
                <h2 className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-ink sm:text-3xl">
                  Al Quoz Industrial 4, 16 D Street, Dubai.
                </h2>
              </div>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-gear"
              >
                <MapPin className="h-4 w-4" /> Get directions
              </a>
            </div>
          </Reveal>

          <div className="mt-8 overflow-hidden rounded-3xl border border-black/[0.08]">
            <iframe
              title="Apex Auto Services location — Al Quoz Industrial 4, Dubai"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full lg:h-[460px]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:px-10 lg:py-24">
          <Reveal>
            <Eyebrow>Get A Free Quote</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.6rem]">
              Tell us what is wrong, we will take it from there.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              Describe the symptom in your own words — a noise, a warning light, a smell, poor cooling. We
              will tell you what is most likely, what it should cost, and when we can take the car in.
            </p>

            <div className="mt-9 space-y-4">
              {reassurance.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gear">
                    <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3.5} />
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-white/75">{r}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gear">
                Direct lines
              </p>
              <ul className="mt-5 space-y-3">
                {contacts.map((c) => (
                  <li key={c.display} className="flex items-center justify-between gap-4 border-b border-white/[0.07] pb-3 last:border-b-0">
                    <span className="text-[13.5px] text-white/60">{c.role} · {c.name}</span>
                    <a href={c.tel} className="font-mono text-[13.5px] font-bold text-white transition-colors hover:text-gear">
                      {c.display}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-wa font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-wa-hover"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp +971 50 324 5150
              </a>
            </div>

            <div className="mt-8">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                Free pickup &amp; delivery areas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {areasServed.map((a) => (
                  <span key={a} className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white/60">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <Disclaimer>{disclaimers.pickup}</Disclaimer>
              <Disclaimer>{disclaimers.diagnostic}</Disclaimer>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <LeadForm
              source="contact"
              heading="Request A Callback"
              eyebrow="60-Minute Response"
              reassurance="Prefer to talk? Send this form and we will call you — or use the WhatsApp button for an immediate reply."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}