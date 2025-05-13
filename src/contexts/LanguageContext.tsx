'use client';

import React, { createContext, useContext, useState } from 'react';
import pt from '@/locales/pt.json';
import en from '@/locales/en.json';

type Language = 'PT' | 'EN';

const translations = { PT: pt, EN: en };

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof pt;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('PT');

  const toggleLanguage = () => setLanguage((prev) => (prev === 'PT' ? 'EN' : 'PT'));

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
