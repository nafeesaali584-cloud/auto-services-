import React from "react";
import { cn } from "@/lib/utils";

export default function StatsBanner({ items = [], className }) {
  if (!items.length) return null;

  return (
    <section className={cn("bg-gear", className)}>
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid divide-y divide-ink/15 py-8 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:py-10">
          {items.map((s, i) => (
            <div key={s.label} className={cn("px-0 py-5 sm:px-6 lg:py-0", i === 0 && "lg:pl-0")}>
              <p className="font-heading text-[38px] font-extrabold leading-none tracking-tight text-ink sm:text-[44px]">
                {s.value}
              </p>
              <p className="mt-2.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-ink/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}