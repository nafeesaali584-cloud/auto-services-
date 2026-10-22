import React from "react";
import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Logo({ tone = "dark", className }) {
  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD700] to-[#E8C200] shadow-md shadow-gear/20 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#0A0E11] fill-current">
          <path d="M12 2a1 1 0 0 1 1 1v1.07a8.05 8.05 0 0 1 1.9.79l.76-.76a1 1 0 1 1 1.41 1.41l-.76.76c.33.58.59 1.22.78 1.9H19a1 1 0 1 1 0 2h-1.07a8.05 8.05 0 0 1-.79 1.9l.76.76a1 1 0 1 1-1.41 1.41l-.76-.76a8.05 8.05 0 0 1-1.9.78V18a1 1 0 1 1-2 0v-1.07a8.05 8.05 0 0 1-1.9-.79l-.76.76a1 1 0 1 1-1.41-1.41l.76-.76a8.05 8.05 0 0 1-.78-1.9H5a1 1 0 1 1 0-2h1.07a8.05 8.05 0 0 1 .79-1.9l-.76-.76a1 1 0 1 1 1.41-1.41l.76.76c.58-.33 1.22-.59 1.9-.78V3a1 1 0 0 1 1-1zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-heading text-[17px] font-black tracking-wider text-white uppercase">
          APEX<span className="text-gear">AUTO</span>
        </span>
        <span className="mt-1 font-mono text-[9px] font-bold tracking-widest text-white/50 uppercase">
          DUBAI · LUXURY GARAGE
        </span>
      </div>
    </Link>
  );
}
