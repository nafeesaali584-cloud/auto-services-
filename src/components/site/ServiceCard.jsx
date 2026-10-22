import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServiceCard({ service, index, tone = "dark" }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 lift",
        tone === "dark"
          ? "border-white/10 bg-ink-surface hover:border-gear/45"
          : "border-black/10 bg-white hover:border-gear"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-gear">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight
          className={cn(
            "h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            tone === "dark" ? "text-white/30 group-hover:text-gear" : "text-ink/25 group-hover:text-ink"
          )}
        />
      </div>

      <h3 className={cn("mt-5 text-[1.15rem] leading-snug", tone === "dark" ? "text-white" : "text-ink")}>
        {service.name}
      </h3>
      <p className={cn("mt-3 flex-1 text-[13.5px] leading-relaxed", tone === "dark" ? "text-white/60" : "text-copymuted")}>
        {service.short}
      </p>

      <div
        className={cn(
          "mt-6 flex items-center justify-between gap-4 border-t pt-4",
          tone === "dark" ? "border-white/10" : "border-black/10"
        )}
      >
        <span className="font-mono text-[12px] font-bold uppercase tracking-wider text-gear">
          {service.priceFrom > 0 ? `From AED ${service.priceFrom}` : "Contract pricing"}
        </span>
        <span className={cn("flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider", tone === "dark" ? "text-white/40" : "text-copymuted")}>
          <Clock className="h-3 w-3" />
          {service.duration.split("·")[0].trim()}
        </span>
      </div>

      {service.hub ? (
        <span className="absolute right-5 top-16 flex items-center gap-1 rounded-md border border-gear/30 bg-gear/10 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-gear">
          <Wrench className="h-3 w-3" /> Hub
        </span>
      ) : null}
    </Link>
  );
}