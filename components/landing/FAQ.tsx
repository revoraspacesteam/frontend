"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell tone="brick" id="faq">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>{t.faq.badge}</Badge>
        <h2 className="font-display mt-4 text-3xl text-gold sm:text-3xl">
          {t.faq.heading}
        </h2>
        <p className="mt-4 text-sm leading-relaxed tracking-widest text-muted">
          {t.faq.body}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {t.faq.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q} className="overflow-hidden  bg-white ">
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
