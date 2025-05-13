'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-20 bg-gradient-to-t from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.projects_title}</h2>
        <p className="text-lg mb-10">
          {t.projects_description}
        </p>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={120}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2.9,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-white h-[200px] sm:h-[240px] rounded-lg shadow-xl text-black flex items-center justify-center text-xl font-semibold transition-transform duration-300 hover:scale-105">
                {t.project_item} {item}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
