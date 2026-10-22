import React from "react";
import { CalendarCheck, Truck, ScanLine, Wrench, BadgeCheck } from "lucide-react";
import { Eyebrow, YellowButton, WhatsAppButton } from "@/components/site/primitives";
import { waMessages } from "@/data/site";
import Reveal from "@/components/site/Reveal";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book, Call or WhatsApp",
    text: "Book online, call our workshop, or send us a WhatsApp with your vehicle details and symptoms. A technician replies, not a call centre.",
  },
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    text: "We collect from your home or office anywhere in Dubai. Free pickup and delivery upon approved estimate — you keep working, we handle the car.",
  },
  {
    icon: ScanLine,
    title: "Scan, Video Inspection & Quote",
    text: "Advanced computerised scan across every module, a video inspection you can actually watch, and an itemised transparent quote on WhatsApp.",
  },
  {
    icon: Wrench,
    title: "Factory-Spec Repair",
    text: "Repaired by the specialist for your brand, with genuine or OEM-approved parts, correct torque values and documented procedures.",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Checked & Delivered",
    text: "Road-tested, quality-checked and returned to your doorstep with an itemised invoice and warranty on all parts fitted.",
  },
];

export default function JourneySteps() {
  return (
    <section className="border-y border-white/10 bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <Eyebrow>Five-Step Frictionless Journey</Eyebrow>
              <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.6rem]">
                How it works, from your first message to your doorstep.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <YellowButton to="/appointment">Start booking</YellowButton>
              <WhatsAppButton message={waMessages.pickup} label="Request pickup" />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-ink-surface p-6 lift">
                <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-gear">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl border border-gear/30 bg-gear/10">
                  <s.icon className="h-5 w-5 text-gear" />
                </span>
                <h3 className="mt-5 text-[1.05rem] leading-snug text-white">{s.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-white/60">{s.text}</p>
                {i < steps.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gear/40 lg:block" />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-wide text-white/45">
          Free vehicle inspection upon approval of repair estimate · AED 300 minimum diagnostic fee disclosed
          before work begins
        </p>
      </div>
    </section>
  );
}