'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { scrollToId } from '@/utils/scrollToId';

const FloatingContactButton = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button onClick={() => scrollToId('contato')}
        className="flex items-center bg-[#FFB800] text-black font-medium px-4 py-2 rounded-lg hover:brightness-110 transition shadow text-sm"
      >
        <Image
          src="/codise-logo_simbol-dark.png"
          alt="Logo"
          width={30}
          height={30}
        />
        <span className="mx-2 w-[140px] text-sm whitespace-nowrap overflow-hidden text-ellipsis text-center">
          {t.modal_contact}
        </span>
      </button>
    </div>
  );
};

export default FloatingContactButton;
