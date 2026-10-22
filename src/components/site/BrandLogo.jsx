import React from "react";
import { cn } from "@/lib/utils";
import BrandMark from "./BrandMark";
import BrandGlyph from "./brand-glyphs";

// Marque badge: brand-liveried tile carrying the marque's own vector mark.
const LOGOS = {
  bmw: { glyph: "bmw", bg: "#0b0e11" },
  "mercedes-benz": { glyph: "mercedes", bg: "#0b0e11" },
  audi: { glyph: "audi", bg: "#101418" },
  porsche: { glyph: "porsche", bg: "#12100c" },
  volkswagen: { glyph: "vw", bg: "#12233a" },
  mini: { glyph: "mini", bg: "#0b0e11" },
  "rolls-royce": { glyph: "rolls", bg: "#0b0e11" },
  bentley: { glyph: "bentley", bg: "#101010" },
  "aston-martin": { glyph: "aston", bg: "#0b3d2c" },
  "land-rover": { glyph: "landrover", bg: "#0b3d2c" },
  jaguar: { glyph: "jaguar", bg: "#0b0e11" },
  maserati: { glyph: "maserati", bg: "#0b1f3a" },
  ferrari: { glyph: "ferrari", bg: "#f4d21f" },
  lamborghini: { glyph: "lamborghini", bg: "#0b0e11" },
  mclaren: { glyph: "mclaren", bg: "#e8611c" },
  lotus: { glyph: "lotus", bg: "#0b3d2c" },
  toyota: { glyph: "toyota", bg: "#ffffff" },
  lexus: { glyph: "lexus", bg: "#0b0e11" },
  nissan: { glyph: "nissan", bg: "#0b0e11" },
  infiniti: { glyph: "infiniti", bg: "#0b0e11" },
  mitsubishi: { glyph: "mitsubishi", bg: "#ffffff" },
  renault: { glyph: "renault", bg: "#1b1b1b" },
  volvo: { glyph: "volvo", bg: "#0b0e11" },
  peugeot: { glyph: "peugeot", bg: "#0b3aa0" },
  ford: { glyph: "ford", bg: "#0b3d91" },
  chevrolet: { glyph: "chevrolet", bg: "#141414" },
  cadillac: { glyph: "cadillac", bg: "#0b2b52" },
  gmc: { glyph: "gmc", bg: "#8c1010" },
  jeep: { glyph: "jeep", bg: "#2f3a24" },
  dodge: { glyph: "dodge", bg: "#141414" },
  hummer: { glyph: "hummer", bg: "#1a1a1a" },
  tesla: { glyph: "tesla", bg: "#141414" },
};

export default function BrandLogo({ slug, name, tone = "dark", className }) {
  const logo = LOGOS[slug];

  if (!logo) return <BrandMark name={name} tone={tone} className={className} />;

  return (
    <span
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border p-[7px]",
        tone === "dark" ? "border-white/15" : "border-black/10",
        className
      )}
      style={{ backgroundColor: logo.bg }}
    >
      <BrandGlyph glyph={logo.glyph} name={name} />
    </span>
  );
}