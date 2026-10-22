import React from "react";
import { Star, BadgeCheck, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TestimonialCard({ review, tone = "dark", className }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border p-6 lift",
        tone === "dark"
          ? "border-white/10 bg-ink-surface"
          : "border-black/10 bg-white shadow-[0_2px_20px_-8px_rgba(10,14,17,0.15)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gear text-gear" />
          ))}
        </div>
        <Quote className={cn("h-5 w-5", tone === "dark" ? "text-white/15" : "text-ink/10")} />
      </div>

      <p
        className={cn(
          "mt-5 flex-1 text-[14.5px] leading-relaxed",
          tone === "dark" ? "text-white/75" : "text-copymuted"
        )}
      >
        “{review.text}”
      </p>

      <div
        className={cn(
          "mt-6 flex items-center justify-between gap-4 border-t pt-4",
          tone === "dark" ? "border-white/10" : "border-black/10"
        )}
      >
        <div>
          <p className={cn("flex items-center gap-1.5 text-sm font-bold", tone === "dark" ? "text-white" : "text-ink")}>
            {review.name}
            <BadgeCheck className="h-4 w-4 text-wa" />
          </p>
          <p className={cn("mt-0.5 font-mono text-[10px] uppercase tracking-wider", tone === "dark" ? "text-white/45" : "text-copymuted")}>
            {review.vehicle}
          </p>
        </div>
        <span className="rounded-md border border-gear/35 bg-gear/10 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-gear">
          {review.brand}
        </span>
      </div>
    </article>
  );
}