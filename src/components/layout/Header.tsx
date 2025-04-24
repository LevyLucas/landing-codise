'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<'PT' | 'EN'>('PT');

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectLanguage = (lang: 'PT' | 'EN') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const otherLanguage = language === 'PT' ? 'EN' : 'PT';

  return (
    <header className="h-[74px] sticky top-0 z-50 backdrop-blur bg-[rgba(28,28,28,0.9)]">
      <div className="max-w-7xl mx-auto px-4 h-full relative flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/codise-logo_logo.svg" alt="Logo Codise" width={192} height={28} />
        </div>

        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-10">
          <a href="#inicio" className="text-white hover:text-blue-500">Início</a>
          <a href="#sobre" className="text-white hover:text-blue-500">Sobre nós</a>
          <a href="#servicos" className="text-white hover:text-blue-500">Serviços</a>
          <a href="#contato" className="text-white hover:text-blue-500">Contato</a>
        </nav>

        <div className="relative w-[80px]">
          <button
            onClick={toggleDropdown}
            className={`bg-[#FFBB00] text-black w-full px-4 py-3 font-medium text-sm flex items-center justify-between ${
              isOpen ? 'rounded-t-lg' : 'rounded-lg'
            }`}
          >
            {language}
            {isOpen ? (
              <BsFillCaretUpFill className="text-xl" />
            ) : (
              <BsFillCaretDownFill className="text-xl" />
            )}
          </button>

          {isOpen && (
            <div className="absolute left-0 top-full w-full rounded-b-lg bg-[#FFBB00] text-black text-sm font-medium overflow-hidden shadow-md">
              <hr className="border-black/50 my-1 w-4/5 mx-auto" />
              <div
                className="px-3 py-2 cursor-pointer hover:opacity-80 text-center"
                onClick={() => selectLanguage(otherLanguage)}
              >
                {otherLanguage}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
