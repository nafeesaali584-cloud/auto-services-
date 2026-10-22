import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  CalendarCheck,
  MapPin,
  Wrench,
  Snowflake,
  Zap,
  Hammer,
  Sparkles,
  BatteryCharging,
  Droplets,
  Paintbrush,
  Disc3,
  Gauge,
  ShieldCheck,
  Settings2,
  Car,
  Info,
  Star,
  HelpCircle,
  FileText,
  Tag,
  BookOpen,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { serviceMenu, services } from "@/data/services";
import { brands } from "@/data/brands";
import { site, waLink, waMessages } from "@/data/site";
import BrandLogo from "./BrandLogo";

const nameOf = (slug) => services.find((s) => s.slug === slug)?.name ?? slug;

const ICONS = [
  [/ac|heater|cool|cooling|climate/i, Snowflake],
  [/batter|electric|charg|smart/i, BatteryCharging],
  [/diagnos|scan|comput|ecu|program/i, Gauge],
  [/transmission|gear|clutch|mechatron/i, Settings2],
  [/oil|fluid|flush|lubric|filter/i, Droplets],
  [/brake|suspension|align|wheel|tyre|tire|steering|abs/i, Disc3],
  [/body|accident|dent|bumper|panel|light|collision/i, Hammer],
  [/paint|coating|ppf|wrap|polish|detail|upholst|interior|rim/i, Paintbrush],
  [/engine|turbo|performance|tuning|exhaust|rebuild/i, Wrench],
  [/inspection|contract|fleet|restor|mobile|roadside/i, ShieldCheck],
  [/service|maintenance|repair/i, Wrench],
];
const iconFor = (value) => ICONS.find(([re]) => re.test(value))?.[1] ?? Wrench;

const companyLinks = [
  { label: "About Us", to: "/about", icon: Info },
  { label: "Testimonials", to: "/testimonials", icon: Star },
  { label: "Blog", to: "/blog", icon: BookOpen },
  { label: "Service Contracts", to: "/service-contracts", icon: FileText },
  { label: "Exclusive Offers", to: "/exclusive-offers", icon: Tag },
  { label: "Contact Us", to: "/contact", icon: Phone },
  { label: "FAQ", to: "/faq", icon: HelpCircle },
];

function Row({ icon: Icon, label, to, onClose }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-[14px] text-ink/75 transition-colors hover:bg-stone-soft hover:text-ink"
    >
      <Icon className="h-4 w-4 shrink-0 text-ink/35" strokeWidth={2.2} />
      {label}
    </Link>
  );
}

export default function MobileNav({ open, onClose }) {
  const [section, setSection] = useState(null);
  const toggle = (key) => setSection((s) => (s === key ? null : key));

  const trigger = (key, label, Icon) => (
    <button
      type="button"
      onClick={() => toggle(key)}
      aria-expanded={section === key}
      className="flex w-full items-center justify-between border-b border-black/[0.07] py-3.5 text-left"
    >
      <span className="flex items-center gap-3 font-heading text-[15px] font-extrabold uppercase tracking-tight text-ink">
        <Icon className="h-4 w-4 text-gear" strokeWidth={2.4} />
        {label}
      </span>
      <ChevronDown className={`h-4 w-4 text-ink/50 transition-transform duration-300 ${section === key ? "rotate-180" : ""}`} />
    </button>
  );

  return (
    <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink-deep/70 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[90%] max-w-sm overflow-y-auto bg-white transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="hazard-strip h-1.5 w-full" />
        <div className="flex items-center justify-between border-b border-black/[0.08] px-5 py-4">
          <span className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-ink">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/12 text-ink"
            aria-label="Close menu"
          >
            <span className="text-lg leading-none">×</span>
          </button>
        </div>

        <nav className="px-5 py-4">
          <Link to="/" onClick={onClose} className="block border-b border-black/[0.07] py-3.5 font-heading text-[15px] font-extrabold uppercase tracking-tight text-ink">
            Home
          </Link>

          <div>
            {trigger("services", "Services", Wrench)}
            {section === "services" ? (
              <div className="space-y-4 py-4">
                {serviceMenu.map((col) => (
                  <div key={col.col}>
                    <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/45">
                      {(() => {
                        const ColIcon = iconFor(col.col);
                        return <ColIcon className="h-3.5 w-3.5 text-gear" strokeWidth={2.4} />;
                      })()}
                      {col.col}
                    </p>
                    <div className="mt-1">
                      {col.groups.flatMap((g) => g.slugs).map((slug) => (
                        <Row key={slug} icon={iconFor(slug)} label={nameOf(slug)} to={`/services/${slug}`} onClose={onClose} />
                      ))}
                    </div>
                  </div>
                ))}
                <Link to="/services" onClick={onClose} className="inline-block px-2.5 text-[13px] font-bold text-ink underline decoration-gear decoration-2 underline-offset-4">
                  View all services
                </Link>
              </div>
            ) : null}
          </div>

          <div>
            {trigger("brands", "Brands", Car)}
            {section === "brands" ? (
              <div className="grid grid-cols-2 gap-1.5 py-4">
                {brands.map((b) => (
                  <Link
                    key={b.slug}
                    to={`/brands/${b.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-2.5 rounded-lg border border-black/[0.07] px-2.5 py-2"
                  >
                    <BrandLogo slug={b.slug} name={b.name} tone="light" className="h-8 w-8" />
                    <span className="truncate text-[13px] font-semibold text-ink">{b.name}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            {trigger("company", "Company", Info)}
            {section === "company" ? (
              <div className="py-3">
                {companyLinks.map((l) => (
                  <Row key={l.to} icon={l.icon} label={l.label} to={l.to} onClose={onClose} />
                ))}
              </div>
            ) : null}
          </div>

          <Link to="/blog" onClick={onClose} className="block border-b border-black/[0.07] py-3.5 font-heading text-[15px] font-extrabold uppercase tracking-tight text-ink">
            Blog
          </Link>
          <Link to="/contact" onClick={onClose} className="block border-b border-black/[0.07] py-3.5 font-heading text-[15px] font-extrabold uppercase tracking-tight text-ink">
            Contact
          </Link>

          <div className="mt-6 space-y-2.5">
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-wa px-5 py-3.5 text-[14px] font-bold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
            <Link to="/appointment" onClick={onClose} className="flex items-center justify-center gap-2 rounded-full bg-gear px-5 py-3.5 text-[14px] font-bold text-ink">
              <CalendarCheck className="h-4 w-4" strokeWidth={2.6} /> Book Appointment
            </Link>
            <a href={site.telHref} className="flex items-center justify-center gap-2 rounded-full border border-black/12 px-5 py-3.5 text-[14px] font-bold text-ink">
              <Phone className="h-4 w-4" strokeWidth={2.6} /> Call {site.phone}
            </a>
          </div>

          <p className="mt-6 flex items-start gap-2 pb-8 text-[12.5px] leading-relaxed text-ink/50">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gear" />
            {site.addressFull}
            <br />
            {site.hours}
          </p>
        </nav>
      </div>
    </div>
  );
}