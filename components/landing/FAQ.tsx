"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";

const faqs = [
  {
    q: "What types of projects does REVORA SPACES handle?",
    a: "We handle repairs, renovations, interior fit-outs, architecture-led planning, and full construction for homes, offices, and commercial spaces.",
  },
  {
    q: "Can I contact you for a small repair?",
    a: "Yes. Essential repairs and maintenance are a core service — from plumbing and electrical to carpentry and painting.",
  },
  {
    q: "Do you provide architecture and design services?",
    a: "Yes. Design and space planning are available as part of renovation and construction journeys, including 3D visualization where needed.",
  },
  {
    q: "Will I see the design before construction begins?",
    a: "Wherever design is part of scope, you approve plans and visuals before execution starts.",
  },
  {
    q: "Do you provide construction materials?",
    a: "We coordinate material sourcing with transparent brand options and procurement support.",
  },
  {
    q: "Can I purchase materials myself?",
    a: "Yes, in many cases. We can work with client-supplied materials when quality and timelines remain aligned.",
  },
  {
    q: "How is the project price calculated?",
    a: "Pricing is quotation-based after scope clarity — typically itemized with milestone-linked payments.",
  },
  {
    q: "Will I receive regular project updates?",
    a: "Yes. Progress reporting includes photo updates and milestone status through your single point of contact.",
  },
  {
    q: "How do you manage project deadlines?",
    a: "Each project runs on planned milestones with site accountability and proactive coordination of trades.",
  },
  {
    q: "Do I need to coordinate with different workers?",
    a: "No. REVORA provides one coordinator who manages trades, suppliers, and site sequence for you.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell tone="brick" id="faq">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>Common Questions & Clarity</Badge>
        <h2 className="font-display mt-4 text-3xl text-gold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Have questions about how REVORA SPACES manages property projects,
          pricing, or repairs? Find straightforward answers below.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_6px_18px_rgba(28,28,28,0.03)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="text-sm font-medium text-ink">
                  {index + 1}. {item.q}
                </span>
                <span className="text-lg text-gold">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen ? (
                <div className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
                  {item.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
