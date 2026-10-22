import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Reveal({ children, delay = 0, y = 18, className, as = "div" }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
}

export function CrumbTrail({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {item.to ? (
            <Link to={item.to} className="text-white/50 transition-colors hover:text-gear">
              {item.label}
            </Link>
          ) : (
            <span className="text-gear">{item.label}</span>
          )}
          {i < items.length - 1 ? <span className="text-white/25">/</span> : null}
        </span>
      ))}
    </nav>
  );
}