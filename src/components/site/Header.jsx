import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook, Twitter, Menu, ChevronDown, CalendarCheck } from "lucide-react";
import Logo from "./Logo";
import BrandLogo from "./BrandLogo";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import WhatsAppIcon from "./WhatsAppIcon";
import { site, waLink, waMessages } from "@/data/site";
import { getBrand } from "@/data/brands";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services", menu: "services" },
  { label: "Brands", to: "/brands", menu: "brands" },
  { label: "Company", to: "/about", menu: "company" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // On a brand page, show that marque's own badge so it is clear which brand is open.
  const brandMatch = location.pathname.match(/^\/brands\/([^/]+)$/);
  const activeBrand = brandMatch ? getBrand(brandMatch[1]) : null;

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50" onMouseLeave={() => setOpen(null)}>
        {/* Utility bar */}
        <div className="bg-ink-deep text-white">
          <div className="hazard-strip h-[5px] w-full" />
          <div className="mx-auto flex h-10 max-w-[1400px] items-center justify-between gap-4 px-5 lg:px-10">
            <div className="flex items-center gap-5">
              <a href={site.telHref} className="flex items-center gap-2 text-[12.5px] font-medium text-white/70 transition-colors hover:text-gear">
                <Phone className="h-3.5 w-3.5 text-gear" strokeWidth={2.4} />
                <span className="font-bold text-white">{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="hidden items-center gap-2 text-[12.5px] text-white/65 transition-colors hover:text-gear sm:flex">
                <Mail className="h-3.5 w-3.5 text-gear" strokeWidth={2.4} />
                {site.email}
              </a>
              <span className="hidden items-center gap-2 text-[12.5px] text-white/65 lg:flex">
                <Clock className="h-3.5 w-3.5 text-gear" strokeWidth={2.4} />
                {site.hoursShort}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden text-[12.5px] text-white/55 xl:block">{site.street}</span>
              <span className="hidden h-3.5 w-px bg-white/15 xl:block" />
              <div className="flex items-center gap-3.5">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 transition-colors hover:text-gear">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 transition-colors hover:text-gear">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/60 transition-colors hover:text-gear">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div
          className={`relative border-b bg-white transition-shadow duration-300 ${
            scrolled
              ? "border-black/[0.08] shadow-[0_16px_44px_-26px_rgba(10,14,17,0.5)]"
              : "border-black/[0.06]"
          }`}
        >
          <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-4 px-5 lg:h-[86px] lg:px-6 xl:px-10">
            <div className="flex shrink-0 items-center gap-3">
              <Logo tone="light" />
              {activeBrand ? (
                <div className="flex items-center gap-2.5 border-l border-black/10 pl-3">
                  <BrandLogo
                    slug={activeBrand.slug}
                    name={activeBrand.name}
                    tone="light"
                    className="h-9 w-9 rounded-lg"
                  />
                  <span className="hidden xl:block">
                    <span className="block whitespace-nowrap text-[12.5px] font-extrabold uppercase tracking-[0.06em] text-ink">
                      {activeBrand.name}
                    </span>
                    <span className="block whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.16em] text-copymuted">
                      Service Centre
                    </span>
                  </span>
                </div>
              ) : null}
            </div>

            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
              {navItems.map((item) => {
                const active = location.pathname === item.to || (item.to !== "/" && location.pathname.startsWith(item.to));
                if (!item.menu) {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={`relative rounded-md px-3.5 py-2.5 text-[14.5px] font-semibold tracking-tight transition-colors ${
                        active ? "text-ink" : "text-ink/70 hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute inset-x-3.5 -bottom-0.5 h-[3px] rounded-full bg-gear transition-opacity ${
                          active ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </Link>
                  );
                }
                return (
                  <button
                    key={item.label}
                    type="button"
                    onMouseEnter={() => setOpen(item.menu)}
                    onFocus={() => setOpen(item.menu)}
                    onClick={() => setOpen((s) => (s === item.menu ? null : item.menu))}
                    aria-expanded={open === item.menu}
                    aria-controls={`mega-${item.menu}`}
                    className={`relative flex items-center gap-1.5 rounded-md px-3.5 py-2.5 text-[14.5px] font-semibold tracking-tight transition-colors ${
                      open === item.menu || active ? "text-ink" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 text-gear transition-transform duration-300 ${open === item.menu ? "rotate-180" : ""}`} strokeWidth={2.6} />
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-[3px] rounded-full bg-gear transition-opacity ${
                        open === item.menu || active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-wa px-5 py-3 text-[13.5px] font-bold tracking-tight text-white transition-colors hover:bg-wa-hover"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <Link
                to="/appointment"
                className="flex items-center gap-2 rounded-full bg-gear px-5 py-3 text-[13.5px] font-bold tracking-tight text-ink transition-colors hover:bg-gear-hover"
              >
                <CalendarCheck className="h-4 w-4" strokeWidth={2.6} />
                Book Appointment
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/12 text-ink transition-colors hover:border-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <div id="mega-services" aria-hidden={open !== "services"}>
            <MegaMenu type={open} onNavigate={() => setOpen(null)} />
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}