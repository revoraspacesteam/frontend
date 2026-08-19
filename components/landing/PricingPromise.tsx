"use client";

import { SectionShell } from "@/components/ui/SectionShell";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function PricingPromise() {
  const { t } = useLanguage();

  return (
    <SectionShell tone="plain" contentClassName="!py-12 sm:!py-14">
      <div className="border border-line bg-white px-6 py-10 shadow-[0_12px_32px_rgba(28,28,28,0.04)] sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            {t.promise.heading}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.promise.body}</p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.promise.items.map((item) => (
            <div
              key={item}
              className=" border border-[#FADFB5] px-3 flex items-center justify-center bg-[#FBF9F5] py-3 text-center text-sm text-ink"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
