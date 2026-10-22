import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, tone = "dark", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em]",
        tone === "dark"
          ? "border border-white/12 bg-white/5 text-gear"
          : "border border-black/10 bg-black/[0.03] text-ink/70",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gear" />
      {children}
    </span>
  );
}

export function SectionHead({ eyebrow, title, sub, tone = "dark", align = "left", className }) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-5 text-3xl leading-[1.05] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/70" : "text-copymuted"
          )}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

export function YellowButton({ to, href, children, className, icon: Icon = ArrowRight, ...rest }) {
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn-nested-icon">
        <Icon className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </>
  );
  const cls = cn(
    "btn-nested bg-gear text-ink hover:bg-gear-hover text-sm font-extrabold uppercase tracking-wide",
    className
  );
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <button type="button" className={cls} {...rest}>{inner}</button>;
}

export function WhatsAppButton({ message, label = "WhatsApp", className, compact = false }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-nested bg-wa text-ink hover:bg-wa-hover text-sm font-extrabold uppercase tracking-wide",
        compact && "px-4 py-2.5 text-xs",
        className
      )}
    >
      <span className="flex items-center gap-2">
        <WhatsAppIcon className="h-4 w-4" />
        {label}
      </span>
      {!compact ? (
        <span className="btn-nested-icon">
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </span>
      ) : null}
    </a>
  );
}

export function CallButton({ className, label = `Call ${site.phone}` }) {
  return (
    <a
      href={site.telHref}
      className={cn(
        "btn-nested border border-white/15 text-white hover:border-gear hover:text-gear text-sm font-extrabold uppercase tracking-wide",
        className
      )}
    >
      <span className="flex items-center gap-2">
        <Phone className="h-4 w-4" strokeWidth={2.5} />
        {label}
      </span>
      <span className="btn-nested-icon bg-white/10">
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </a>
  );
}

export function GhostLink({ to, children, tone = "dark", className }) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors",
        tone === "dark" ? "text-white/80 hover:text-gear" : "text-ink/75 hover:text-ink",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function Bezel({ children, className, rivets = true }) {
  return (
    <div className={cn("double-bezel", rivets && "rivets", className)}>
      <div className="double-bezel-inner">{children}</div>
    </div>
  );
}

export function BezelLight({ children, className }) {
  return (
    <div className={cn("double-bezel-light", className)}>
      <div className="double-bezel-light-inner">{children}</div>
    </div>
  );
}

export function CheckList({ items, tone = "dark", className, columns = 1 }) {
  return (
    <ul
      className={cn(
        "gap-x-8 gap-y-3",
        columns === 2 ? "grid sm:grid-cols-2" : "space-y-3",
        className
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              tone === "dark" ? "bg-gear text-ink" : "bg-ink text-gear"
            )}
          >
            <Check className="h-3 w-3" strokeWidth={3.5} />
          </span>
          <span
            className={cn(
              "text-sm leading-relaxed",
              tone === "dark" ? "text-white/75" : "text-copymuted"
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function HazardBar({ className, thin = false }) {
  return <div className={cn(thin ? "hazard-strip-thin" : "hazard-strip", "h-[6px] w-full", className)} />;
}

export function StatStrip({ items, tone = "dark", className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border lg:grid-cols-4",
        tone === "dark" ? "border-white/10 bg-white/10" : "border-black/10 bg-black/10",
        className
      )}
    >
      {items.map((s) => (
        <div
          key={s.label}
          className={cn("px-5 py-6", tone === "dark" ? "bg-ink-surface" : "bg-white")}
        >
          <div className={cn("font-mono text-2xl font-bold sm:text-3xl", tone === "dark" ? "text-gear" : "text-ink")}>
            {s.value}
          </div>
          <div className={cn("mt-1.5 text-xs uppercase tracking-wider", tone === "dark" ? "text-white/60" : "text-copymuted")}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function MonoTag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-gear/35 bg-gear/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-gear",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Disclaimer({ children, tone = "dark", className }) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] leading-relaxed uppercase tracking-wide",
        tone === "dark" ? "text-white/45" : "text-copymuted",
        className
      )}
    >
      {children}
    </p>
  );
}