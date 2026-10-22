import React from "react";

const items = [
  "40% Less Than Dealership Prices",
  "Free Pickup & Delivery",
  "Warranty On All Parts",
  "Free Vehicle Inspection",
  "Transparent Video Inspections",
  "Luxury Car Specialists",
  "Al Quoz Industrial 4, Dubai",
];

export default function MarqueeTicker() {
  const row = [...items, ...items];
  return (
    <div className="marquee-row relative overflow-hidden border-y border-black/10 bg-gear py-4">
      <div className="flex w-max animate-marquee items-center">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
            <span className="px-6 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-ink">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-ink/60" />
          </span>
        ))}
      </div>
    </div>
  );
}