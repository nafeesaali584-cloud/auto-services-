import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function FaqAccordion({ items, tone = "dark", className }) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`item-${i}`}
          className={cn(
            "border-b",
            tone === "dark" ? "border-white/10" : "border-black/10"
          )}
        >
          <AccordionTrigger
            className={cn(
              "py-5 text-left font-heading text-[15px] font-bold leading-snug tracking-tight hover:no-underline sm:text-base",
              tone === "dark" ? "text-white hover:text-gear" : "text-ink hover:text-ink/70"
            )}
          >
            {item.q}
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "pb-6 text-[14.5px] leading-relaxed",
              tone === "dark" ? "text-white/65" : "text-copymuted"
            )}
          >
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}