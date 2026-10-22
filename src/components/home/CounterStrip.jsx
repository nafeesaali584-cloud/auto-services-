import React from "react";
import { stats } from "@/data/site";
import Reveal from "@/components/site/Reveal";

export default function CounterStrip() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gear">
      <div className="pointer-events-none absolute inset-0 bg-blueprint-light opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-ink/15 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                <p className="font-heading text-[2.5rem] font-extrabold leading-none tracking-tight text-ink sm:text-[3rem]">
                  {s.value}
                </p>
                <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}