'use client';

import React, { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const [showMission, setShowMission] = useState(false);
  const [showMotto, setShowMotto] = useState(false);

  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-20 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.about_title}</h2>
          <p className="text-lg text-gray-200 mb-4">{t.about_paragraph_1}</p>
          <p className="text-lg text-gray-200 mb-4">{t.about_paragraph_2}</p>
          <p className="text-lg text-gray-200">{t.about_paragraph_3}</p>
        </div>

        <div className="min-h-[160px]">
          <div className="mb-6">
            <button
              className="flex items-center gap-2 text-xl font-semibold mb-2"
              onClick={() => setShowMission(!showMission)}
            >
              {showMission ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />} {t.about_mission_title}
            </button>
            <div
              className={`pl-6 transition-opacity duration-300 ${
                showMission ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
              }`}
            >
              <p className="text-gray-300">{t.about_mission_text}</p>
            </div>
          </div>

          <div>
            <button
              className="flex items-center gap-2 text-xl font-semibold mb-2"
              onClick={() => setShowMotto(!showMotto)}
            >
              {showMotto ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />} {t.about_motto_title}
            </button>
            <div
              className={`pl-6 transition-opacity duration-300 ${
                showMotto ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
              }`}
            >
              <p className="text-gray-300">{t.about_motto_text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
