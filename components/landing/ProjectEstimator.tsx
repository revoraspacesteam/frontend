"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function ProjectEstimator() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#1E252B] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
        <div>
          <Badge className="!bg-charcoal-soft !text-white/80 normal-case tracking-normal">
            {t.estimator.badge}
          </Badge>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl">
            {t.estimator.heading}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            {t.estimator.body}
          </p>

          <ul className="mt-8 space-y-3">
            {t.estimator.benefits.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3  bg-charcoal-soft px-4 py-3 text-sm"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold-soft/20 text-gold-soft">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-h-[220px] flex-col items-start justify-center border border-white/10 bg-charcoal-soft p-6 sm:min-h-[280px] sm:p-8">
          <p className="text-sm leading-relaxed text-white/70">
            {t.estimator.ctaNote}
          </p>
          <Link
            href="/calculator"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-gold-soft px-6 py-3 text-center text-sm font-semibold text-charcoal transition hover:brightness-105 sm:w-auto"
          >
            {t.estimator.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
