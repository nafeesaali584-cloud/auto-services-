import React from "react";
import { Sparkles } from "lucide-react";

export default function ConceptBanner() {
  return (
    <aside
      aria-label="Concept notice"
      className="relative z-[60] border-b border-gear/20 bg-[#0A0E11] px-3 py-2 text-white shadow-sm"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-center text-center">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11.5px] font-medium leading-relaxed text-white/90 sm:text-[13px]">
          <span className="inline-flex items-center gap-1 rounded-full border border-gear/30 bg-gear/15 px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wider text-gear sm:text-[10px]">
            <Sparkles className="h-3 w-3" />
            Concept Demo
          </span>
          <span>Live Garage Website Concept by</span>
          <a
            href="https://nafeesaali.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gear underline decoration-gear/60 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
          >
            Nafeesa Ali Studio
          </a>
          <span className="hidden text-white/40 sm:inline">—</span>
          <span className="text-white/80">
            We customise this system with your workshop&apos;s branding &amp; services in 5–7 days.
          </span>
        </p>
      </div>
    </aside>
  );
}
