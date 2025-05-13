'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#8E42CF] text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/codise-logo_logo-light.png"
            alt="Codise Logo"
            width={1024}
            height={512}
            className="w-auto h-40"
          />
        </div>

        <div className="text-center md:text-right text-md leading-6">
          <p className="font-semibold text-white">+55 1X 95000-0001</p>
          <p className="text-white/90">agencia.codise@gmail.com</p>
          <p className="text-white font-medium mt-1">{t.footer_location}</p>
        </div>
      </div>

      <div className="bg-[#7836AD] py-3">
        <div className="text-center text-xs text-white/40">
          {t.footer_rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
