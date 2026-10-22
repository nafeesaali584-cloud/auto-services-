import React from "react";
import { cn } from "@/lib/utils";

// Monogram derived from the marque name: initials for multi-word brands
// (Rolls-Royce → RR), first letter for single-word brands.
const markFor = (name) => {
  const words = name.split(/[\s-]+/).filter(Boolean);
  if (words.length > 1) return words.map((w) => w[0]).join("").toUpperCase().slice(0, 3);
  return name.slice(0, 1).toUpperCase();
};

export default function BrandMark({ name, tone = "dark", className }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border font-display text-[15px] font-extrabold tracking-tight",
        tone === "dark" ? "border-white/12 bg-white/[0.05] text-white" : "border-black/10 bg-stone-soft text-ink",
        className
      )}
    >
      <span className="absolute inset-x-0 top-0 h-[3px] bg-gear" />
      {markFor(name)}
    </span>
  );
}