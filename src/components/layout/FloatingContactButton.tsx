'use client';

import React from 'react';
import Image from 'next/image';

const FloatingContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="#contato"
        className="flex items-center bg-[#FFB800] text-black font-medium px-4 py-2 rounded-lg hover:brightness-110 transition shadow text-sm"
      >
        <Image
          src="/codise-logo_simbol-dark.png"
          alt="Logo"
          width={30}
          height={30}
        />
        <span className="text-left mx-2">Entrar em contato!</span>
      </a>
    </div>
  );
};

export default FloatingContactButton;
