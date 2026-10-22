import React from "react";
import { Link } from "react-router-dom";
import { Phone, CalendarCheck } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { site, waLink, waMessages } from "@/data/site";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] lg:hidden">
      <div className="hazard-strip h-[3px] w-full" />
      <div className="mobile-dock-safe border-t border-white/10 bg-ink/92 px-3 pb-2 pt-2.5 backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={site.telHref}
            className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl border border-white/15 bg-white/[0.04] text-white"
          >
            <Phone className="h-4 w-4 text-gear" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Call</span>
          </a>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl bg-wa text-ink"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
          </a>
          <Link
            to="/appointment"
            className="flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl bg-gear text-ink"
          >
            <CalendarCheck className="h-4 w-4" strokeWidth={2.5} />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider">Book</span>
          </Link>
        </div>
      </div>
    </div>
  );
}