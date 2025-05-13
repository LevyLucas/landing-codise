'use client';

import React from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  onClose: () => void;
  title: string;
  description: string;
  image: string;
}

const ServicesModal: React.FC<Props> = ({ onClose, title, description, image }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-[#1A1A1A] text-white max-w-5xl w-full rounded-2xl overflow-hidden p-8 relative border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-purple-600 text-[#1A1A1A] rounded-full p-1 hover:bg-purple-700"
        >
          <IoClose size={15} />
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-left">{title}</h2>
              <p className="text-gray-300 whitespace-pre-line text-md leading-relaxed text-left">
                {description}
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="#contato"
                className="flex items-center bg-[#FFB800] text-black font-medium px-4 py-2 rounded-lg hover:brightness-110 transition shadow text-sm w-fit"
              >
                <Image
                  src="/codise-logo_simbol-dark.png"
                  alt="Logo"
                  width={30}
                  height={30}
                />
                <span className="text-left mx-2">{t.modal_contact}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;
