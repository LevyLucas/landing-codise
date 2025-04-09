'use client';

import React from 'react';
import Image from 'next/image';

const Header = () => {
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
        </nav>

        <button className="bg-[#FFBB00] text-black px-2 py-2 rounded-lg font-medium flex items-center gap-1">
          PT <i className="bi bi-caret-down-fill"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
