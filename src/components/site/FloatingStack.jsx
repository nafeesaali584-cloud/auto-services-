import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, CalendarCheck, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { site, waLink, waMessages } from "@/data/site";

export default function FloatingStack() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="pointer-events-none fixed bottom-6 right-5 z-[65] hidden flex-col items-center gap-3 lg:flex">
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Scroll back to top"
        className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-[0_12px_30px_-12px_rgba(10,14,17,0.55)] transition-all duration-500 hover:bg-stone-soft ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" strokeWidth={2.6} />
      </button>

      <a
        href={waLink(waMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Apex Auto on WhatsApp"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-wa text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.95)] transition-transform duration-300 hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>

      <a
        href={site.telHref}
        aria-label={`Call the workshop on ${site.phone}`}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink text-gear shadow-[0_12px_30px_-12px_rgba(10,14,17,0.85)] transition-transform duration-300 hover:scale-105"
      >
        <Phone className="h-5 w-5" strokeWidth={2.4} />
      </a>

      <Link
        to="/appointment"
        aria-label="Book an appointment"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-gear text-ink shadow-[0_12px_30px_-12px_rgba(255,215,0,0.95)] transition-transform duration-300 hover:scale-105"
      >
        <CalendarCheck className="h-5 w-5" strokeWidth={2.4} />
      </Link>
    </div>
  );
}