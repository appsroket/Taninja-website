"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "Do I pay anything to talk with you?",
    a: "No. Your first consultation is free, with no obligation. You'll walk away with a clearer picture of your options whether we work together or not.",
  },
  {
    q: "I'm a first-time buyer and don't know where to start. Is that okay?",
    a: "That's exactly where I love to start. I'll walk you through budgeting, pre-approval, New Jersey first-time buyer programs, and every step to closing — in plain English.",
  },
  {
    q: "Why work with a newer agent instead of a big team?",
    a: "Because you get my full attention. You won't be handed off to an assistant — you work directly with me, and I'm backed by the systems, training, and reach of RE/MAX Real Estate Group.",
  },
  {
    q: "How much is my home worth?",
    a: "Online estimates can be off by tens of thousands. I'll prepare a free home value review based on recent nearby sales so you can decide your next step with real numbers.",
  },
  {
    q: "Can you help me rent, not just buy?",
    a: "Yes. I help renters find homes and apartments across New Jersey that fit their budget and commute, and I'll guide you through applications and lease terms.",
  },
  {
    q: "I'm moving from New York City. Can you help?",
    a: "Absolutely. I'll help you compare New Jersey towns by commute, taxes, schools, and lifestyle so the move feels like an upgrade, not a gamble.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title mt-4">Good questions to ask before you call.</h2>
        </Reveal>

        <div className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="font-display text-xl md:text-2xl">{f.q}</span>
                  <svg
                    className={`h-6 w-6 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-6 leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
