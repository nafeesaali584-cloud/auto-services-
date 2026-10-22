import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandLogo from "./BrandLogo";

export default function BrandCard({ brand, tone = "dark" }) {
  return (
    <Link
      to={`/brands/${brand.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-2xl border p-6 lift",
        tone === "dark"
          ? "border-white/10 bg-ink-surface hover:border-gear/45"
          : "border-black/10 bg-white hover:border-gear"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <BrandLogo slug={brand.slug} name={brand.name} tone={tone} />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-gear">
            {brand.origin}
          </span>
        </div>
        <ArrowUpRight
          className={cn(
            "h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            tone === "dark" ? "text-white/30 group-hover:text-gear" : "text-ink/25 group-hover:text-ink"
          )}
        />
      </div>

      <h3 className={cn("mt-4 text-[1.2rem] leading-snug", tone === "dark" ? "text-white" : "text-ink")}>
        {brand.name}
      </h3>

      <p className={cn("mt-3 flex-1 text-[13px] leading-relaxed", tone === "dark" ? "text-white/55" : "text-copymuted")}>
        {brand.models.slice(0, 6).join(" · ")}
        {brand.models.length > 6 ? ` +${brand.models.length - 6} more` : ""}
      </p>

      <div
        className={cn(
          "mt-5 flex items-center justify-between gap-3 border-t pt-4",
          tone === "dark" ? "border-white/10" : "border-black/10"
        )}
      >
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-gear">
          <MapPin className="h-3 w-3" /> Al Quoz · Dubai
        </span>
        <span className={cn("font-mono text-[10px] uppercase tracking-wider", tone === "dark" ? "text-white/40" : "text-copymuted")}>
          {brand.failurePoints.length} known issues
        </span>
      </div>
    </Link>
  );
}