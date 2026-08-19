"use client";

import { LANGUAGE_OPTIONS, type Language } from "@/lib/i18n/types";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { borderClasses } from "@/lib/colors";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">{t.header.language}</span>
      <select
        value={language}
        aria-label={t.header.language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className={`cursor-pointer bg-transparent text-sm font-medium text-ink outline-none transition hover:text-gold ${
          compact
            ? `h-9 border px-2 ${borderClasses.light}`
            : "h-auto border-none py-0"
        }`}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
