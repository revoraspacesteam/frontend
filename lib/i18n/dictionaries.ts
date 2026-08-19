import { en } from "@/lib/i18n/en";
import { hi } from "@/lib/i18n/hi";
import { hinglish } from "@/lib/i18n/hinglish";
import type { Language } from "@/lib/i18n/types";

export const dictionaries = {
  en,
  hi,
  hinglish,
} as const satisfies Record<Language, typeof en>;
