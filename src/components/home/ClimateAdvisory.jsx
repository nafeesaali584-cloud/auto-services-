import React, { useState } from "react";
import { Check, AlertTriangle, ThermometerSun } from "lucide-react";
import { Eyebrow, YellowButton, WhatsAppButton } from "@/components/site/primitives";
import { waMessages } from "@/data/site";
import Reveal from "@/components/site/Reveal";

const threats = [
  {
    title: "AC compressors locking at 50°C",
    text: "A compressor runs at maximum displacement for months. Blocked condensers and dust-loaded evaporators raise head pressure until it seizes.",
  },
  {
    title: "Transmission fluid boiling in traffic",
    text: "Stop-and-go Sheikh Zayed Road traffic keeps the torque converter slipping, turning your gearbox into a heater with no way to shed the heat.",
  },
  {
    title: "Dust choking air filters and AC evaporators",
    text: "Fine desert dust loads filter media and coats evaporator cores, cutting airflow and cooling performance system-wide.",
  },
  {
    title: "Suspension bushings melting and drying",
    text: "Engine bay and underbody heat dries rubber bushings, engine mounts and air suspension seals until they crack and leak.",
  },
  {
    title: "Battery cells drying out prematurely",
    text: "Under-bonnet temperatures above 70°C boil electrolyte and dry cells — which is why UAE batteries often fail in half their European life.",
  },
];

const checklist = [
  "Battery conductance tested and alternator output verified",
  "Cooling system pressure tested; coolant strength checked",
  "AC vent temperature and refrigerant pressures measured",
  "Engine oil and filter within UAE interval",
  "Transmission fluid condition and level verified",
  "Brake pads, discs and fluid moisture measured",
  "Tyres inspected for UV sidewall cracking at correct pressures",
  "Air suspension ride height and compressor cycle checked",
];

export default function ClimateAdvisory() {
  const [checked, setChecked] = useState([]);
  const toggle = (item) =>
    setChecked((c) => (c.includes(item) ? c.filter((i) => i !== item) : [...c, item]));

  const progress = Math.round((checked.length / checklist.length) * 100);

  return (
    <section className="relative overflow-hidden bg-stone-warm">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <Reveal>
            <Eyebrow tone="light">UAE Severe Climate Advisory</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-ink sm:text-4xl lg:text-[2.5rem]">
              Why Dubai destroys cars that are perfectly healthy in Europe.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-copymuted">
              Your vehicle was validated in moderate temperatures on smooth, dust-free roads. Dubai gives
              it 50°C ambient heat, sandstorm-grade dust, coastal humidity and hours of stationary traffic.
              Every service interval and every inspection priority changes as a result.
            </p>

            <div className="mt-8 space-y-4">
              {threats.map((t) => (
                <div key={t.title} className="flex items-start gap-4 rounded-2xl border border-black/[0.07] bg-white p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink">
                    <AlertTriangle className="h-4 w-4 text-gear" />
                  </span>
                  <div>
                    <p className="font-heading text-[15px] font-bold text-ink">{t.title}</p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-copymuted">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <YellowButton to="/appointment">Book Summer Readiness Check</YellowButton>
              <WhatsAppButton message={waMessages.inspection} label="Ask a technician" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="sticky top-28 rounded-3xl border border-black/[0.08] bg-ink p-7 lg:p-8">
              <div className="flex items-center gap-3">
                <ThermometerSun className="h-5 w-5 text-gear" />
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gear">
                  Summer Readiness Checklist
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gear transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
                <span className="font-mono text-[11px] font-bold text-white/60">
                  {checked.length}/{checklist.length}
                </span>
              </div>

              <ul className="mt-6 space-y-1">
                {checklist.map((item) => {
                  const on = checked.includes(item);
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => toggle(item)}
                        aria-pressed={on}
                        className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                          on ? "bg-gear/10" : "hover:bg-white/[0.04]"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                            on ? "border-gear bg-gear" : "border-white/25"
                          }`}
                        >
                          {on ? <Check className="h-3 w-3 text-ink" strokeWidth={3.5} /> : null}
                        </span>
                        <span className={`text-[13.5px] leading-snug ${on ? "text-white" : "text-white/65"}`}>
                          {item}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 border-t border-white/10 pt-5 text-[13px] leading-relaxed text-white/55">
                {progress === 100
                  ? "Your car is summer-ready on paper. Book the inspection and we will verify it with measurements."
                  : "Tick what you know has been done. Anything unchecked is where Dubai heat will find you first."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
