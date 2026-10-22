import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Phone, Star, CalendarCheck } from "lucide-react";
import { img } from "@/data/images";
import { site } from "@/data/site";
import { Image } from "@/components/ui/image";

const slides = [
  {
    eyebrow: "Never Get Stranded",
    title: "24/7 Roadside Assistance in Dubai",
    text: "Free towing, jump-starts and mobile mechanic call-outs — a technician reaches you anywhere in Dubai, day or night.",
    highlights: ["Same-Day Repairs", "Free Diagnostics", "Emergency Assistance"],
    image: img.pickup,
    alt: "Recovery truck loading a car for roadside assistance in Dubai",
    primary: { label: "Book Appointment", to: "/appointment" },
    secondary: { label: `Call ${site.phone}`, href: site.telHref },
  },
  {
    eyebrow: "Stay Cool in Dubai Heat",
    title: "Full Car AC Repair & Re-Gasing",
    text: "Leak testing, gas refill by weight and compressor repair built for 50°C summers and Dubai stop-start traffic.",
    highlights: ["AC Leak Test", "Gas Refill", "Compressor Repair"],
    image: img.ac,
    alt: "Air conditioning manifold gauges connected to a car AC compressor in Dubai",
    primary: { label: "Book Free AC Check", to: "/services/car-ac-services" },
    secondary: { label: "See AC Services", to: "/services/car-ac-services" },
  },
  {
    eyebrow: "Dealer-Grade Workshop in Al Quoz",
    title: "Every Repair Handled With Precision",
    text: "Diagnostics, transmission rebuilds, engine overhaul, bodywork and paint — all under one roof, with genuine parts and a written warranty.",
    highlights: ["Certified Technicians", "Genuine Parts", "Transparent Pricing"],
    image: img.bays,
    alt: "Luxury cars on hydraulic lifts inside Apex Auto Services workshop in Al Quoz, Dubai",
    primary: { label: "Book Appointment", to: "/appointment" },
    secondary: { label: "Explore Services", to: "/services" },
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const slide = slides[index];

  const go = useCallback((next) => setIndex((next + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || reduce) return undefined;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => window.clearInterval(id);
  }, [paused, reduce]);

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/5 text-white backdrop-blur transition-colors hover:border-gear hover:bg-gear hover:text-ink";

  return (
    <section
      className="relative isolate overflow-hidden bg-ink-deep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.05, ease: [0.23, 1, 0.32, 1] }}
        >
          <Image src={slide.image} alt={slide.alt} className="h-full w-full object-cover" fittingType="fill" />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-ink-deep/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-deep via-ink-deep/85 to-ink-deep/35" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-deep to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-blueprint opacity-60" />

      <div className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="flex items-center gap-3 text-[13px] font-extrabold uppercase tracking-[0.28em] text-gear">
                <span className="h-[3px] w-8 rounded-full bg-gear" />
                {slide.eyebrow}
              </p>

              <h1 className="mt-5 text-balance text-white">{slide.title}</h1>

              <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-white/75 sm:text-[17px]">
                {slide.text}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px] font-semibold uppercase tracking-wide text-white/80">
                {slide.highlights.map((h, i) => (
                  <span key={h} className="flex items-center gap-3">
                    {i > 0 ? <span className="text-gear">|</span> : null}
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] font-bold text-gear">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-gear text-gear" />
              Google 5★ Rated
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gear" />
            <span>Trusted by 5,000+ Drivers</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {slide.primary.to ? (
              <Link
                to={slide.primary.to}
                className="flex items-center gap-2.5 rounded-full bg-gear px-6 py-3.5 text-[13.5px] font-extrabold uppercase tracking-wide text-ink transition-colors hover:bg-gear-hover"
              >
                <CalendarCheck className="h-4 w-4" strokeWidth={2.6} />
                {slide.primary.label}
              </Link>
            ) : null}
            {slide.secondary.href ? (
              <a
                href={slide.secondary.href}
                className="flex items-center gap-2.5 rounded-full border border-white/45 px-6 py-3.5 text-[13.5px] font-extrabold uppercase tracking-wide text-white transition-colors hover:border-gear hover:text-gear"
              >
                <Phone className="h-4 w-4 text-gear" strokeWidth={2.6} />
                {slide.secondary.label}
              </a>
            ) : (
              <Link
                to={slide.secondary.to}
                className="flex items-center gap-2.5 rounded-full border border-white/45 px-6 py-3.5 text-[13.5px] font-extrabold uppercase tracking-wide text-white transition-colors hover:border-gear hover:text-gear"
              >
                {slide.secondary.label}
                <ArrowRight className="h-4 w-4 text-gear" strokeWidth={2.6} />
              </Link>
            )}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between gap-6 border-t border-white/12 pt-6">
          <div className="flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-9 bg-gear" : "w-2.5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
            <span className="ml-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white/45">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide" className={arrow}>
              <ChevronLeft className="h-5 w-5" strokeWidth={2.4} />
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-label="Next slide" className={arrow}>
              <ChevronRight className="h-5 w-5" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}