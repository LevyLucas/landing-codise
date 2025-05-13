'use client';

import { FaInstagram } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Bottom = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-10 text-white">
      <div className="flex-1 text-center">
        <p className="mb-4 text-left">{t.contact_alt_text}</p>
        <p className="mt-4 text-left">{t.contact_also_on}</p>
        <a
          href="https://instagram.com/instagram" //trocar pelo link do Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFB800] text-5xl mt-2 inline-block"
        >
          <FaInstagram />
        </a>
      </div>

      <form className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder={t.contact_form_name}
          className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500"
        />
        <input
          type="email"
          placeholder={t.contact_form_email}
          className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500"
        />
        <input
          type="tel"
          placeholder={t.contact_form_phone}
          className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="w-40 py-3 rounded-md bg-[#FFB800] text-black font-semibold hover:brightness-110 transition self-center md:self-start text-xs"
        >
          {t.contact_form_submit}
        </button>
      </form>
    </div>
  );
};

export default Bottom;
