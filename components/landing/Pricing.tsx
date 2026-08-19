"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { SectionShell } from "@/components/ui/SectionShell";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function Pricing() {
  const { t } = useLanguage();
  return (
    <SectionShell tone="brick" id="pricing" className="overflow-x-clip">
      <div className="mx-auto max-w-2xl text-center">
        <Badge className="max-w-full">{t.pricing.badge}</Badge>
        <h2 className="font-display mt-4 text-3xl text-gold sm:text-4xl">
          {t.pricing.heading}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {t.pricing.body}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {t.pricing.plans.map((plan) => (
          <article
            key={plan.title}
            className="relative flex h-full min-w-0 flex-col overflow-hidden px-5 pt-10 pb-8 sm:px-6"
          >
            <div
              className="pointer-events-none absolute inset-0 z-0"
              aria-hidden
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 380 579"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.508789 0.773438C0.976675 0.980771 1.66805 1.28558 2.5625 1.67676C4.35194 2.45936 6.95494 3.58695 10.209 4.9668C16.7168 7.7264 25.8307 11.4961 36.2559 15.5361C57.0991 23.6134 83.2121 32.7835 104.22 37.1162C130.801 42.5983 154.437 38.1244 178.675 32.4238C202.929 26.7196 227.775 19.7917 256.911 20.252C282.274 20.6526 312.999 26.8882 337.405 33.0332C349.603 36.1044 360.214 39.1504 367.774 41.4287C371.555 42.5679 374.572 43.5156 376.645 44.1777C377.68 44.5088 378.48 44.7683 379.021 44.9453C379.214 45.0086 379.374 45.061 379.5 45.1025V578.21C379.463 578.193 379.425 578.175 379.386 578.156C378.841 577.901 378.036 577.529 376.995 577.059C374.912 576.117 371.881 574.781 368.087 573.205C360.499 570.054 349.857 565.94 337.64 562.089C313.224 554.393 282.436 547.722 257.148 551.949C197.942 561.848 163.506 572.663 104.364 567.411C83.6123 565.568 57.6179 552.843 36.7578 540.526C26.34 534.375 17.2242 528.339 10.7129 523.841C7.45764 521.592 4.854 519.727 3.06445 518.426C2.16968 517.775 1.47791 517.264 1.01074 516.917C0.789346 516.752 0.618565 516.624 0.5 516.535L0.5 0.769531C0.502803 0.770773 0.50597 0.772188 0.508789 0.773438Z"
                  fill="white"
                  stroke="#FADFB5"
                />
              </svg>
            </div>
            <h3 className="relative z-10 text-xl font-semibold text-ink">
              {plan.title}
            </h3>
            <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted">
              {plan.description}
            </p>

            <div className="relative z-10 mt-5 rounded-lg border border-gold/40 bg-cream-deep/70 px-4 py-3">
              <p className="text-[11px] tracking-wide text-muted uppercase">
                {t.pricing.model}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">{plan.model}</p>
              <p className="mt-0.5 text-xs text-muted">{plan.modelNote}</p>
            </div>

            <ul className="relative z-10 mt-5 flex-1 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-soft" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="relative z-10 mt-6 inline-flex h-11 w-full items-center justify-center rounded-lg bg-charcoal text-sm font-semibold text-white transition hover:bg-charcoal-soft sm:w-auto"
            >
              {t.pricing.cta}
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
