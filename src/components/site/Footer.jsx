import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { brands, getBrand } from "@/data/brands";

const nameOf = (slug) => services.find((s) => s.slug === slug)?.name ?? slug;

// Trimmed to the jobs we get asked for most, so the footer stays readable.
const footerServices = [
  "maintenance-repair",
  "transmission-gearbox",
  "car-ac-services",
  "body-work",
  "suspension-services",
  "pre-purchase-inspection",
];

const footerBrandSlugs = ["bmw", "mercedes-benz", "audi", "porsche", "land-rover", "nissan"];
const footerBrands = footerBrandSlugs.map(getBrand).filter(Boolean);

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
  { label: "X", href: "https://x.com/", Icon: Twitter },
];

const heading =
  "font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gear";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-deep bg-blueprint">
      <div className="hazard-strip h-1.5 w-full" />
      <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {site.tagline}. Dealer-level diagnostics, genuine OEM parts and factory procedures — for
              roughly 40% less than UAE dealership prices.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/70 transition-colors hover:border-gear hover:text-gear"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={heading}>Services</h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((slug) => (
                <li key={slug}>
                  <Link to={`/services/${slug}`} className="text-sm text-white/65 transition-colors hover:text-gear">
                    {nameOf(slug)}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gear">
              All services <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div>
            <h3 className={heading}>Brands</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {footerBrands.map((b) => (
                <li key={b.slug}>
                  <Link to={`/brands/${b.slug}`} className="text-sm text-white/65 transition-colors hover:text-gear">
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/brands" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-gear">
              All {brands.length} brands <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <h3 className={`${heading} mt-8`}>Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/65 transition-colors hover:text-gear">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={heading}>Get In Touch</h3>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a href={site.telHref} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-gear">
                  <Phone className="h-4 w-4 shrink-0 text-gear" />
                  <span className="font-mono font-bold text-white">{site.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-gear">
                  <Mail className="h-4 w-4 shrink-0 text-gear" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gear" />
                <span>
                  {site.street}
                  <br />
                  {site.city}, {site.country}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gear" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/45">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/terms-conditions" className="text-[12px] uppercase tracking-wide text-white/55 transition-colors hover:text-gear">
              Terms &amp; Conditions
            </Link>
            <Link to="/testimonials" className="text-[12px] uppercase tracking-wide text-white/55 transition-colors hover:text-gear">
              Testimonials
            </Link>
            <Link to="/contact" className="text-[12px] uppercase tracking-wide text-white/55 transition-colors hover:text-gear">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}