'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowDownLong } from 'react-icons/fa6';

const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById('servicos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-purple-700 text-white min-h-[calc(100vh-74px)] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/codise-logo_simbol-light.png')] opacity-[0.025] bg-repeat bg-[length:250px_250px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-center lg:text-left">
            Aprimore seu negócio com um{' '}
            <span className="bg-gradient-to-r from-[#FFB800] to-[#FFF1CC] bg-clip-text text-transparent">
              site profissional
            </span>
          </h1>

          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8">
            <p className="text-md sm:text-xl lg:text-2xl italic border-l-4 border-white pl-4 text-white/90 leading-relaxed max-w-xl text-left">
              Um estúdio criativo que transforma suas ideias em <br />
              soluções digitais personalizadas para pequenas e <br />
              médias empresas.
            </p>

            <Image
              src="/codise-cta-illustration.png"
              alt="Ilustração Codise"
              width={420}
              height={420}
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
