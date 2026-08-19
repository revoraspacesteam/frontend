"use client";

import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function OurStory() {
  const { t } = useLanguage();

  return (
    <div className="flex h-full w-full items-center justify-center overflow-x-clip bg-[#F6F1EB] py-8 sm:py-10">
      <div className="w-full px-4 sm:max-w-[90%] sm:px-0">
        <Badge className="max-w-full">{t.story.badge}</Badge>
        <h2 className="font-display mt-4 text-3xl text-[#D1973F] sm:text-4xl">
          {t.story.heading}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
          {t.story.intro}
        </p>

        <div className="mt-8">
          <span className="inline-block max-w-full bg-[#FFDBA3] px-3 py-2 font-display text-sm font-medium sm:px-4">
            {t.story.highlight}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {t.story.p1}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {t.story.p2}
          </p>
        </div>
      </div>
    </div>
  );
}
