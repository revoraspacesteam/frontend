"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { HighlightLabel } from "../ui/HighlightLabel";

const COLS = 48;
const ROWS = 28;

function BrickWall() {
  return (
    <div className="flex h-full items-center justify-center">
      {Array.from({ length: COLS }, (_, col) => (
        <div key={col} className={col === 0 ? undefined : "-ml-[0.5px]"}>
          {Array.from({ length: ROWS }, (_, row) => (
            <div
              key={row}
              className={`h-[40px] w-[90px] shrink-0 border border-[#f6e0be97] ${
                row > 0 ? "-mt-[0.5px]" : ""
              } ${row % 2 === 1 ? "-ml-[35px]" : ""}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function TrustedPartner() {
  const { t } = useLanguage();
  return (
    <div className="relative isolate mt-[6%] w-full overflow-x-clip sm:mt-[8%] lg:mt-[10%]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <BrickWall />
      </div>
      <div className="relative z-10 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <HighlightLabel className="max-w-full">
            {t.partner.badge}
          </HighlightLabel>

          <h2 className="font-display mt-4 text-3xl text-gold">
            {t.partner.heading}
          </h2>
          <p className="mt-4 max-w-5xl text-sm leading-relaxed text-muted sm:text-base">
            {t.partner.body}
          </p>
        </div>

        <div className="mt-8 w-full px-4 sm:px-6 lg:px-10">
          <h3 className="text-start text-lg font-semibold tracking-wide text-ink sm:text-xl">
            {t.partner.journey}
          </h3>

          <ol className="mt-8 mb-10 space-y-3 sm:mt-12">
            {t.partner.steps.map((step, index) => {
              const shift = Math.min(index * 4, 30);
              const position = {
                "--step-shift": `${shift}%`,
                "--step-shift-mobile": `${Math.min(index * 2, 10)}%`,
              } as CSSProperties;

              return (
                <li
                  key={step.n}
                  className="max-w-4xl -mt-3 ml-(--step-shift-mobile) min-w-0 sm:ml-(--step-shift)"
                  style={position}
                >
                  <div className="h-2 max-w-6xl border border-[#f6e0be97] bg-white" />
                  <div className="flex w-[99.5%] min-w-0">
                    <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center border border-[#f6e0be97] bg-white p-2">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-charcoal text-xs font-semibold text-white">
                        {step.n}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 border border-[#f6e0be97] bg-white p-2">
                      <div className="flex w-full min-w-0 items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-ink">
                            {step.title}
                          </div>
                          <div className="text-sm font-normal text-muted">
                            {step.text}
                          </div>
                        </div>
                        <svg
                          viewBox="0 0 24 24"
                          className="hidden h-5 w-5 shrink-0 stroke-gold stroke-[1.6] sm:block"
                          fill="none"
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
