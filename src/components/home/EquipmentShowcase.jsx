import React from "react";
import { ScanLine, Cpu, Cog, Gauge, Wrench, MonitorSmartphone } from "lucide-react";
import { Eyebrow, YellowButton } from "@/components/site/primitives";
import { img } from "@/data/images";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";

const equipment = [
  {
    icon: ScanLine,
    title: "Advanced Computerized Scanning",
    text: "Manufacturer-level diagnostic platforms — XENTRY, ISTA, ODIS, PIWIS and Pathfinder — reading every module, not just the engine.",
  },
  {
    icon: Cpu,
    title: "ECU Programming & Coding",
    text: "Module coding, adaptation, battery registration and software updates carried out to manufacturer specification.",
  },
  {
    icon: Cog,
    title: "Gearbox Diagnostics & Rebuild Bench",
    text: "Transmission bench for strip-down, measurement and rebuild of ZF, Mercedes, Aisin, GM and Dodge units in-house.",
  },
  {
    icon: Gauge,
    title: "Engine Diagnostics & Rebuild Tooling",
    text: "Compression and leak-down testing, machining coordination, torque-calibrated assembly and measured tolerances.",
  },
  {
    icon: Wrench,
    title: "Specialist Repair Tools",
    text: "Brand-specific torque wrenches, spring compressors, air suspension handling and alignment equipment.",
  },
  {
    icon: MonitorSmartphone,
    title: "Transparent Video Inspections",
    text: "Every finding filmed and sent to your WhatsApp with an itemised estimate, so you approve work on evidence.",
  },
];

export default function EquipmentShowcase() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            <div>
              <Eyebrow tone="light">Dealer-Grade Hardware</Eyebrow>
              <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-ink sm:text-4xl lg:text-[2.5rem]">
                The equipment decides the diagnosis. Ours is dealership-grade.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-copymuted">
                A fault code read on a generic tool tells you what the car noticed, not what failed. Our
                diagnostic platforms read every module, log live data, activate components and let us trace
                faults to the actual component before a single part is ordered.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <YellowButton to="/services/scanning-diagnostics">How diagnostics work</YellowButton>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Reveal>
            <div className="double-bezel-light h-full">
              <div className="double-bezel-light-inner relative h-full !p-2">
                <div className="relative h-full min-h-[320px] overflow-hidden rounded-[calc(1.5rem-0.75rem)]">
                  <Image
                    src={img.diagnostics}
                    alt="Professional automotive diagnostic scanner reading a luxury car's ECU in Dubai"
                    className="h-full w-full object-cover"
                    fittingType="fill"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {equipment.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-black/[0.08] bg-stone-warm p-5">
                  <e.icon className="h-5 w-5 text-ink" />
                  <h3 className="mt-4 text-[15px] leading-snug text-ink">{e.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-copymuted">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}