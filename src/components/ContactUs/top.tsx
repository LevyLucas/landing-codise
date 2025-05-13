'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Top = () => {
  const { t } = useLanguage();

  return (
    <div className="text-center text-white flex flex-col items-center gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.contact_title}
        </h2>
        <p className="text-lg">{t.contact_subtitle}</p>
      </div>

      <a
        href="https://wa.me/numero" //trocar pelo número do WhatsApp ou algum outro serviço de mensagem
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-[350px] py-3 rounded-lg font-medium bg-gradient-to-r from-[#8E42CF] to-[#FFB800] text-black hover:opacity-90 transition"
      >
        <FaWhatsapp className="text-5xl" />
        <p className="text-md font-bold whitespace-nowrap text-center">
          {t.contact_button}
        </p>
      </a>
    </div>
  );
};

export default Top;
