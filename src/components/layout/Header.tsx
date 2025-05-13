'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { language, toggleLanguage, t } = useLanguage();
  const otherLanguage = language === 'PT' ? 'EN' : 'PT';

  return (
    <header className="h-[74px] sticky top-0 z-50 backdrop-blur bg-[rgba(28,28,28,0.9)]">
      <div className="max-w-7xl mx-auto px-4 h-full relative flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image src="/codise-logo_logo.svg" alt="Logo Codise" width={192} height={28} />
        </a>

        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-10">
          <a href="/" className="text-white hover:text-blue-500">{t.nav_home}</a>
          <a href="#sobre" className="text-white hover:text-blue-500">{t.nav_about}</a>
          <a href="#servicos" className="text-white hover:text-blue-500">{t.nav_services}</a>
          <a href="#contato" className="text-white hover:text-blue-500">{t.nav_contact}</a>
        </nav>

        <div className="relative w-[80px] hidden md:block">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`bg-[#FFBB00] text-black w-full px-4 py-3 font-medium text-sm flex items-center justify-between ${dropdownOpen ? 'rounded-t-lg' : 'rounded-lg'
              }`}
          >
            {language}
            {dropdownOpen ? (
              <BsFillCaretUpFill className="text-xl" />
            ) : (
              <BsFillCaretDownFill className="text-xl" />
            )}
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 top-full w-full rounded-b-lg bg-[#FFBB00] text-black text-sm font-medium overflow-hidden shadow-md z-50">
              <hr className="border-black/50 my-1 w-4/5 mx-auto" />
              <div
                className="px-3 py-2 cursor-pointer hover:opacity-80 text-center"
                onClick={() => {
                  setDropdownOpen(false);
                  toggleLanguage();
                }}
              >
                {otherLanguage}
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-[#FFBB00] p-2 rounded-lg transition-transform"
          >
            <FaBars
              size={24}
              className={`text-black transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : 'rotate-0'
                }`}
            />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1C1C1C] text-white px-6 py-6 space-y-6 border-t border-white/10">
          <a href="/" className="block text-center hover:text-blue-500 text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav_home}</a>
          <a href="#sobre" className="block text-center hover:text-blue-500 text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav_about}</a>
          <a href="#servicos" className="block text-center hover:text-blue-500 text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav_services}</a>
          <a href="#contato" className="block text-center hover:text-blue-500 text-base" onClick={() => setMobileMenuOpen(false)}>{t.nav_contact}</a>

          <hr className="border-white/20 my-2 w-4/5 mx-auto" />

          <div className="flex justify-center">
            <div className="relative w-[80px]">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`bg-[#FFBB00] text-black w-full px-4 py-2 font-medium text-sm flex items-center justify-between ${dropdownOpen ? 'rounded-t-lg' : 'rounded-lg'
                  }`}
              >
                {language}
                {dropdownOpen ? (
                  <BsFillCaretUpFill className="text-xl" />
                ) : (
                  <BsFillCaretDownFill className="text-xl" />
                )}
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full w-full rounded-b-lg bg-[#FFBB00] text-black text-sm font-medium overflow-hidden shadow-md z-50">
                  <hr className="border-black/50 my-1 w-4/5 mx-auto" />
                  <div
                    className="px-3 py-2 cursor-pointer hover:opacity-80 text-center"
                    onClick={() => {
                      setDropdownOpen(false);
                      toggleLanguage();
                    }}
                  >
                    {otherLanguage}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
