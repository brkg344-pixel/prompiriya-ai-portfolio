"use client";

import React, { createContext, useContext, useState } from "react";
import { DATA } from "@/data/portfolio-data";

export type Locale = "th" | "en";

interface LanguageContextValue {
  lang: Locale;
  setLang: (lang: Locale) => void;
  reducedMotion: boolean;
  setReducedMotion: React.Dispatch<React.SetStateAction<boolean>>;
  dict: typeof DATA.th;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Locale>("th");
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        reducedMotion,
        setReducedMotion,
        dict: DATA[lang],
      }}
    >
      <div className={reducedMotion ? "reduce-motion" : ""}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
