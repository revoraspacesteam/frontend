"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { LANGUAGES, type Language } from "@/lib/i18n/types";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof dictionaries)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "revora-language";

function isLanguage(value: string | null): value is Language {
  return LANGUAGES.includes(value as Language);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) setLanguageState(stored);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "hi" ? "hi" : "en";
    document.documentElement.classList.toggle("lang-hi", language === "hi");
  }, [language, ready]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: dictionaries[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
