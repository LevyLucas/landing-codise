'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowDownLong } from 'react-icons/fa6';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const handleScroll = () => {
    const section = document.getElementById('servicos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-blue-600 to-purple-700 text-white min-h-[calc(100vh-74px)] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: "url('/codise-logo_simbol-light.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center lg:text-left">
            {t.hero_title_start}{' '}
            <span className="bg-gradient-to-r from-[#FFB800] to-[#FFF1CC] bg-clip-text text-transparent">
              {t.hero_title_highlight}
            </span>
          </h1>

          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
            <p className="text-md sm:text-xl lg:text-2xl italic border-l-4 border-white pl-4 text-white/90 leading-relaxed max-w-xl text-left">
              {t.hero_description}
            </p>

            <Image
              src="/codise-cta-illustration.png"
              alt="Ilustração Codise"
              width={1024}
              height={1024}
              className="w-auto h-auto max-w-[420px] mx-auto lg:ml-12"
              priority
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer">
        <FaArrowDownLong
          onClick={handleScroll}
          className="text-[#FFBB00] text-4xl animate-bounce"
        />
      </div>
    </section>
  );
};

export default Hero;
