'use client';

import React, { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

const About = () => {
  const [showMission, setShowMission] = useState(false);
  const [showMotto, setShowMotto] = useState(false);

  return (
    <section id="sobre" className="py-20 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-4xl font-bold mb-4">Sobre a Codise</h2>
          <p className="text-lg text-gray-200 mb-4">
            A Codise nasceu em 2025 da amizade e da vontade de criar.
          </p>
          <p className="text-lg text-gray-200 mb-4">
            Somos três amigos apaixonados por tecnologia, design e soluções digitais que funcionam de verdade. Unimos o melhor do visual e do código para transformar ideias em experiências únicas — com sites, apps e identidades visuais sob medida.
          </p>
          <p className="text-lg text-gray-200">
            Acreditamos que pequenas empresas merecem uma presença online tão impactante quanto seu potencial.
          </p>
        </div>

        <div className="min-h-[160px]">
          <div className="mb-6">
            <button
              className="flex items-center gap-2 text-xl font-semibold mb-2"
              onClick={() => setShowMission(!showMission)}
            >
              {showMission ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />} Missão
            </button>
            <div className={`pl-6 transition-opacity duration-300 ${showMission ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              <p className="text-gray-300">
                Nossa missão é ajudar pequenas e médias empresas a se destacarem no digital com soluções criativas, rápidas e feitas sob medida — sem complicação.
              </p>
            </div>
          </div>

          <div>
            <button
              className="flex items-center gap-2 text-xl font-semibold mb-2"
              onClick={() => setShowMotto(!showMotto)}
            >
              {showMotto ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />} Lema
            </button>
            <div className={`pl-6 transition-opacity duration-300 ${showMotto ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              <p className="text-gray-300">
                “Criamos o que você imagina. E o que você ainda nem imaginou.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
