import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { homeFaqs } from "@/data/faqs";
import { Eyebrow } from "@/components/site/primitives";
import FaqAccordion from "@/components/site/FaqAccordion";
import Reveal from "@/components/site/Reveal";

export default function FaqSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Reveal>
            <Eyebrow tone="light">Questions Dubai Drivers Ask</Eyebrow>
            <h2 className="mt-6 text-balance text-3xl leading-[1.05] text-ink sm:text-4xl lg:text-[2.4rem]">
              Straight answers on warranty, pricing, pickup and parts.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-copymuted">
              If your question is not here, send it on WhatsApp. A technician answers — not a chatbot, and
              not a call centre reading from a script.
            </p>
            <Link
              to="/faq"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink hover:text-ink/60"
            >
              Full FAQ hub <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <FaqAccordion items={homeFaqs} tone="light" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}