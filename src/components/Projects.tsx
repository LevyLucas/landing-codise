'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-[#0077FF] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Alguns dos nossos projetos</h2>
        <p className="text-lg text-white mb-10">
          Desenvolvemos diferentes projetos que encaixam no seu objetivo.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          modules={[Pagination, Autoplay]}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-white h-[200px] sm:h-[240px] rounded-lg shadow-md p-4 text-black flex items-center justify-center text-xl font-semibold">
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
