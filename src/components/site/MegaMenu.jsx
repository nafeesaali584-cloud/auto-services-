import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
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
  Phone,
  BookOpen,
  Users,
} from "lucide-react";
import { serviceMenu, services } from "@/data/services";
import { brands } from "@/data/brands";
import { site } from "@/data/site";
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

const companyColumns = [
  {
    title: "Company",
    icon: Info,
    links: [
      { label: "About Us", to: "/about", icon: Info },
      { label: "Testimonials", to: "/testimonials", icon: Star },
      { label: "Service Contracts", to: "/service-contracts", icon: FileText },
      { label: "Exclusive Offers", to: "/exclusive-offers", icon: Tag },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    links: [
      { label: "Blog & Technical Guides", to: "/blog", icon: BookOpen },
      { label: "FAQ", to: "/faq", icon: HelpCircle },
      { label: "Contact Us", to: "/contact", icon: Phone },
      { label: "Book an Appointment", to: "/appointment", icon: Users },
    ],
  },
];

// Dark panels: white labels against a black grid keep every service name legible.
function PanelShell({ children }) {
  return (
    <div className="absolute left-0 right-0 top-full border-b border-gear/25 bg-ink-deep bg-blueprint shadow-[0_42px_80px_-30px_rgba(0,0,0,0.85)]">
      <div className="mx-auto max-w-[1400px] px-5 py-8 lg:px-10 lg:py-9">{children}</div>
    </div>
  );
}

function ColumnHead({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 bg-white/[0.06] text-gear">
        <Icon className="h-4 w-4" strokeWidth={2.3} />
      </span>
      <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-gear">{title}</p>
    </div>
  );
}

function ItemRow({ icon: Icon, label, to, onNavigate }) {
  return (
    <li>
      <Link
        to={to}
        onClick={onNavigate}
        className="group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13.5px] text-white/75 transition-colors hover:bg-white/[0.07] hover:text-white"
      >
        <Icon className="h-4 w-4 shrink-0 text-white/40 transition-colors group-hover:text-gear" strokeWidth={2.2} />
        <span className="leading-snug">{label}</span>
      </Link>
    </li>
  );
}

export default function MegaMenu({ type, onNavigate }) {
  if (!type) return null;

  if (type === "services") {
    return (
      <PanelShell>
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceMenu.map((col) => {
            const ColIcon = iconFor(col.col);
            return (
              <div key={col.col} className="lg:border-l lg:border-white/10 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
                <ColumnHead icon={ColIcon} title={col.col} />

                <div className="mt-4 space-y-4">
                  {col.groups.map((group) => (
                    <div key={group.title}>
                      <p className="px-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/40">
                        {group.title}
                      </p>
                      <ul className="mt-1">
                        {group.slugs.map((slug) => (
                          <ItemRow key={slug} icon={iconFor(slug)} label={nameOf(slug)} to={`/services/${slug}`} onNavigate={onNavigate} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-[12.5px] text-white/50">
            {services.length} specialist services · {site.street}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/services" onClick={onNavigate} className="inline-flex items-center gap-2 text-[13px] font-bold text-white transition-colors hover:text-gear">
              View all services <ArrowRight className="h-4 w-4 text-gear" strokeWidth={2.6} />
            </Link>
            <Link to="/appointment" onClick={onNavigate} className="inline-flex items-center gap-2 text-[13px] font-bold text-white transition-colors hover:text-gear">
              Book appointment <ArrowUpRight className="h-4 w-4 text-gear" strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </PanelShell>
    );
  }

  if (type === "brands") {
    return (
      <PanelShell>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ColumnHead icon={Car} title="Brands We Service" />
          <p className="text-[12.5px] text-white/50">{brands.length} marques · German · British · Italian · American · Japanese</p>
        </div>

        <div className="mt-5 grid max-h-[330px] grid-cols-2 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((b) => (
            <Link
              key={b.slug}
              to={`/brands/${b.slug}`}
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-xl border border-white/10 px-3 py-2.5 transition-colors hover:border-gear hover:bg-white/[0.06]"
            >
              <BrandLogo slug={b.slug} name={b.name} tone="dark" className="h-9 w-9" />
              <span className="min-w-0">
                <span className="block truncate text-[13.5px] font-semibold text-white">{b.name}</span>
                <span className="block truncate text-[11px] uppercase tracking-wider text-white/40">{b.origin}</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-[12.5px] text-white/50">Don&apos;t see your brand? We service almost every marque on UAE roads.</p>
          <Link to="/brands" onClick={onNavigate} className="inline-flex items-center gap-2 text-[13px] font-bold text-white transition-colors hover:text-gear">
            View all brands <ArrowRight className="h-4 w-4 text-gear" strokeWidth={2.6} />
          </Link>
        </div>
      </PanelShell>
    );
  }

  return (
    <PanelShell>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.05fr)]">
        {companyColumns.map((col) => (
          <div key={col.title} className="lg:border-l lg:border-white/10 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
            <ColumnHead icon={col.icon} title={col.title} />
            <ul className="mt-4">
              {col.links.map((l) => (
                <ItemRow key={l.to} icon={l.icon} label={l.label} to={l.to} onNavigate={onNavigate} />
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
          <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-gear">Toll Free Booking</p>
          <a href={site.telHref} className="mt-2 block font-heading text-2xl font-extrabold text-white hover:text-gear">
            {site.phone}
          </a>
          <p className="mt-3 text-[13px] leading-relaxed text-white/60">
            {site.addressFull}
            <br />
            {site.hours}
          </p>
          <p className="mt-4 text-[12px] font-semibold uppercase tracking-wide text-gear">
            Free pickup &amp; delivery upon approved estimate
          </p>
        </div>
      </div>
    </PanelShell>
  );
}