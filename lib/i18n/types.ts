export const LANGUAGES = ["en", "hi", "hinglish"] as const;

export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_OPTIONS: {
  id: Language;
  label: string;
  short: string;
}[] = [
  { id: "en", label: "English", short: "EN" },
  { id: "hi", label: "हिन्दी", short: "हिं" },
  { id: "hinglish", label: "Hinglish", short: "HG" },
];
