"use client";

import { Badge } from "@/components/ui/Badge";
import { R2Image } from "@/components/ui/R2Image";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { assets } from "@/lib/assets";

export function MissionVision() {
  const { t } = useLanguage();

  return (
    <div className="w-full overflow-x-clip">
      <div className="flex w-full items-center justify-center border border-[#392608] bg-[#E1DBD1] px-4 py-8 sm:px-10 sm:py-10 lg:px-0 lg:pl-20">
        <R2Image
          name={assets.book}
          alt={t.values.alt}
          className="h-auto w-full max-w-full object-contain sm:w-[65%] sm:max-w-none"
        />
      </div>
      <div className="mt-10 px-4 sm:mt-14 sm:px-6 lg:px-10">
        <div className="mb-6 flex justify-center">
          <Badge className="max-w-full">{t.values.badge}</Badge>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.values.items.map((value) => (
            <article
              key={value.title}
              className="min-w-0 border border-line bg-[#F6F1EA] p-5"
            >
              <h3 className="text-base font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
