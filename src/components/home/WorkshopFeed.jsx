import React from "react";
import { CircleDot } from "lucide-react";
import { Eyebrow } from "@/components/site/primitives";
import Reveal from "@/components/site/Reveal";

const liveJobs = [
  {
    status: "On the bench",
    vehicle: "Mercedes-Benz GLE 450",
    job: "AIRMATIC compressor and rear air strut replacement, ride height recalibration",
  },
  {
    status: "In diagnostics",
    vehicle: "BMW X5 40i",
    job: "ZF 8HP mechatronic sleeve diagnosis and live shift-pressure logging",
  },
  {
    status: "Rebuild bay",
    vehicle: "Porsche Cayenne S",
    job: "Coolant pipe replacement with updated component, system pressure tested",
  },
  {
    status: "In the booth",
    vehicle: "Range Rover Sport",
    job: "Panel repair, computerised colour match and dust-free booth refinishing",
  },
  {
    status: "AC bay",
    vehicle: "Lexus LX 570",
    job: "Nitrogen leak testing, evaporator replacement and refrigerant recharge by weight",
  },
  {
    status: "Quality control",
    vehicle: "Audi Q7",
    job: "DSG mechatronic repair complete, adaptation relearn and road test verification",
  },
];

export default function WorkshopFeed() {
  return (
    <section className="border-y border-white/10 bg-ink-deep bg-blueprint">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Live Workshop Activity</Eyebrow>
              <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-white sm:text-4xl lg:text-[2.4rem]">
                What is on our bays right now.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                A snapshot of current jobs across the facility — the same board our service advisors work
                from. It is also why booking ahead matters: bays fill quickly, especially in summer.
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-wa/40 bg-wa/10 px-4 py-2.5">
              <CircleDot className="h-3.5 w-3.5 animate-pulse text-wa" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-wa">
                Workshop open · {liveJobs.length} jobs in progress
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {liveJobs.map((job, i) => (
            <Reveal key={job.vehicle} delay={i * 0.04}>
              <div className="flex items-start gap-5 rounded-2xl border border-white/10 bg-ink-surface p-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gear/30 bg-gear/10 font-mono text-[10px] font-bold text-gear">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-heading text-[15px] font-bold text-white">{job.vehicle}</p>
                    <span className="rounded-md border border-white/12 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/55">
                      {job.status}
                    </span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">{job.job}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}