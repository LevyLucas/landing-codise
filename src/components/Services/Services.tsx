'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import ServicesModal from '@/components/Services/Services-Modal';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="servicos" className="py-20 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">{t.services_title}</h2>
        <p className="text-lg text-zinc-300 mb-12">
          {t.services_description}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {t.services.map((service, index: number) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300"
              onClick={() => setActiveModal(index)}
            >
              <div className="h-[60px] flex items-end justify-center mb-2">
                <h3 className="text-center text-white text-2xl font-semibold leading-tight">
                  {service.title}
                </h3>
              </div>

              <div className="relative h-[280px] rounded-lg overflow-hidden">
                <Image
                  src={`/modal-${index + 1}.png`}
                  alt={service.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <div
                    className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0077FF]"
                    style={{ backdropFilter: 'saturate(180%) blur(5px)' }}
                  >
                    <FiPlus size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeModal !== null && (
          <ServicesModal
            onClose={() => setActiveModal(null)}
            title={t.services[activeModal].title}
            description={t.services[activeModal].description}
            image={`/modal-${activeModal + 1}.png`}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
