'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-gradient-to-t from-blue-600 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Alguns dos nossos projetos</h2>
        <p className="text-lg mb-10">
          Desenvolvemos diferentes projetos que encaixam no seu objetivo.
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
          slidesPerView={3}
          spaceBetween={40}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="!pb-10"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-white h-[200px] sm:h-[240px] rounded-lg shadow-xl text-black flex items-center justify-center text-xl font-semibold transition-transform duration-300 hover:scale-105">
                Projeto {item}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
