import React from "react";
import { Clock, BadgeCheck, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { localBusinessSchema, breadcrumbSchema } from "@/data/schema";
import { img } from "@/data/images";
import { site, waLink, waMessages, disclaimers } from "@/data/site";
import JsonLd from "@/components/site/JsonLd";
import PageHero from "@/components/site/PageHero";
import BookingFunnel from "@/components/site/BookingFunnel";
import Reveal, { usePageMeta } from "@/components/site/Reveal";
import { Eyebrow, Disclaimer } from "@/components/site/primitives";

const specialists = [
  {
    role: "Senior Diagnostics Technician",
    text: "Manufacturer-level fault tracing across every module — electrical, body, driveline and infotainment — with live data logged and explained.",
  },
  {
    role: "Transmission & Gearbox Specialist",
    text: "ZF, Mercedes 7G and 9G-Tronic, DSG, DCT, CVT and automatic rebuilds on our own transmission bench with measured tolerances.",
  },
  {
    role: "Engine Rebuild & Performance Specialist",
    text: "Overhauls from strip-down to machining coordination and controlled assembly, plus tuning and calibration for UAE conditions.",
  },
  {
    role: "Bodywork, Paint & Ceramic Coating Specialist",
    text: "Panel repair, computerised colour matching, dust-free booth refinishing, PPF, wraps and ceramic coating with UV protection.",
  },
  {
    role: "Electrical & Hybrid Systems Technician",
    text: "Module coding, battery registration, hybrid system testing and electrical fault diagnosis on complex modern platforms.",
  },
];

export default function Appointment() {
  const crumb = [{ label: "Home", to: "/" }, { label: "Appointment" }];

  usePageMeta(
    "Book A Car Service Appointment in Dubai | Free Pickup & Delivery · The Gearbox",
    "Book your car service online at The Gearbox Auto Services, Al Quoz Industrial 4, Dubai. Four-step booking, free pickup and delivery upon approved estimate across Dubai, free vehicle inspection upon approval of repair estimate, warranty on all parts."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), breadcrumbSchema(crumb)]} />

      <PageHero
        crumb={crumb}
        eyebrow="Online Booking · Al Quoz Industrial 4"
        title="Book an appointment — free pickup & delivery upon approved estimate across Dubai."
        sub="Four short steps: your vehicle, the service you need, your preferred slot, and whether we collect the car or you drop it off. A service advisor confirms within 60 minutes during workshop hours, and you receive an itemised estimate on WhatsApp before any work begins."
        image={img.diagnostics}
        imageAlt="Technician booking a diagnostic appointment at The Gearbox Auto Services, Dubai"
        waMessage={waMessages.booking}
        waLabel="WhatsApp your booking"
        disclaimer={`${disclaimers.pickup} ${disclaimers.inspection} ${disclaimers.diagnostic}`}
      />

      <section className="border-y border-white/10 bg-ink bg-blueprint">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <Reveal>
              <Eyebrow>Booking Engine</Eyebrow>
              <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.4rem]">
                Two minutes now saves you a day in the industrial area.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                Choose free pickup and we collect the car from your home or office anywhere in Dubai, keep you
                updated on WhatsApp, and return it once the quality check and road test are complete.
              </p>

              <div className="mt-9 flex items-center gap-3 rounded-2xl border border-gear/35 bg-gear/[0.07] p-5">
                <Clock className="h-5 w-5 shrink-0 text-gear" />
                <div>
                  <p className="font-heading text-[15px] font-bold text-white">60-Minute Response SLA</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/65">
                    Every booking request receives a confirmation call or WhatsApp from a service advisor within
                    60 minutes during workshop hours.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gear">
                  <BadgeCheck className="h-4 w-4" /> Prefer to talk?
                </p>
                <p className="text-[13.5px] leading-relaxed text-white/65">
                  Call {site.phone} for the toll-free booking line, or message us on WhatsApp with your vehicle
                  details and we will handle the booking by message.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={site.telHref}
                    className="flex min-h-[48px] items-center gap-2 rounded-full border border-white/20 px-5 font-extrabold uppercase tracking-wide text-white transition-colors hover:border-gear hover:text-gear"
                  >
                    <Phone className="h-4 w-4" /> Call {site.phone}
                  </a>
                  <a
                    href={waLink(waMessages.booking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center gap-2 rounded-full bg-wa px-5 font-extrabold uppercase tracking-wide text-ink"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <Disclaimer>{disclaimers.warrantyLaw}</Disclaimer>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <BookingFunnel />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white bg-blueprint-light">
        <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <Eyebrow tone="light">The People Behind The Wrench</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-balance text-2xl leading-tight text-ink sm:text-3xl">
              Specialists, not generalists — each with a defined discipline.
            </h2>
            <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-copymuted">
              Your vehicle is assigned to the technician who specialises in the system being repaired, and you
              deal with that technician directly. It is why the diagnosis is right the first time.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialists.map((s, i) => (
              <Reveal key={s.role} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-black/[0.08] bg-stone-warm p-6">
                  <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-copymuted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[15px] leading-snug text-ink">{s.role}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-copymuted">{s.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-gear bg-gear/[0.12] p-6">
                <p className="font-heading text-2xl font-extrabold leading-tight text-ink">20+ Years</p>
                <p className="mt-2 text-[13px] leading-relaxed text-ink/70">
                  Combined automotive experience across Europe and the Middle East — luxury, American, German,
                  British and Italian vehicles.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}