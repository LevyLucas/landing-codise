'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';
import ServicesModal from '@/components/Services/Services-Modal';

const services = [
  {
    title: 'Sites Profissionais',
    image: '/professional-sites.png',
    modalImage: '/professional-sites.png',
    description: `Criamos sites rápidos, responsivos e bonitos — pensados para valorizar o seu negócio desde o primeiro clique.
Nossa prioridade é entregar uma experiência leve, funcional e sob medida, seja para apresentar sua marca, captar clientes ou vender mais.`,
  },
  {
    title: 'Aplicações Web Sob Medida',
    image: '/apps-web.png',
    modalImage: '/modal-2.png',
    description: `Precisa de algo além de um site comum? Desenvolvemos sistemas web pensados exclusivamente para o seu fluxo de trabalho.
Dashboards, ferramentas internas, agendamentos, controle de pedidos — o que você precisar, a gente codifica.`,
  },
  {
    title: 'Identidade Visual Completa',
    image: '/identidade-visual.png',
    modalImage: '/modal-3.png',
    description: `Seu negócio precisa de cara, voz e presença. Criamos logotipos, paletas, tipografias e elementos visuais que traduzem sua marca.
De cartões de visita a posts nas redes, sua identidade visual vai se destacar com consistência e estilo.`,
  },
  {
    title: 'Presença Digital & Gestão de Conteúdo',
    image: '/gestao-presenca.png',
    modalImage: '/modal-4.png',
    description: `Seu cliente está online. E sua marca? Ajudamos você a se posicionar nas redes sociais com estratégia, identidade visual e conteúdos relevantes.
Oferecemos kits prontos para stories, posts, capas e mais — tudo adaptado à sua marca.`,
  },
  {
    title: 'Soluções SAAS Personalizadas',
    image: '/saas.png',
    modalImage: '/modal-5.png',
    description: `Precisa de uma plataforma online para atender clientes, gerenciar serviços ou oferecer algo inovador?
Criamos sistemas SAAS sob medida: soluções acessíveis de qualquer lugar, com login, painel administrativo e funcionalidades exclusivas.`,
  },
  {
    title: 'Soluções sob Demanda',
    image: '/solucoes-demanda.png',
    modalImage: '/modal-6.png',
    description: `Tem uma ideia específica ou um desafio único? A gente ama pensar fora da caixa.
Desenvolvemos projetos personalizados, combinando design e tecnologia para criar soluções que fogem do comum — tudo com o seu jeito.`,
  },
];

const Services = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Serviços</h2>
        <p className="text-lg text-zinc-300 mb-12">
          Estes são os nossos principais serviços, <strong>clique</strong> no card para saber mais!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
                  src={service.image}
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
            title={services[activeModal].title}
            image={services[activeModal].modalImage}
            description={services[activeModal].description}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
