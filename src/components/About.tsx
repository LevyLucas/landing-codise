import React from 'react';
import Image from 'next/image';

const team = [
  {
    name: 'Artur Oliveira',
    role: 'Digital Design',
    description:
      'Dá vida às ideias com identidade visual única e foco nos detalhes. Cuida da parte de identidade visual, edição e animação.',
    image: '/artur.jpeg',
  },
  {
    name: 'Carlos Landerdahl Neto',
    role: 'Web Developer',
    description:
      'Mestre por trás da criação de sites e aplicativos que são bonitos, funcionais e feitos sob medida.',
    image: '/carlos.jpeg',
  },
  {
    name: 'Lucas Xavier',
    role: 'Full Stack Developer',
    description:
      'Especialista em IA, front-end e back-end, garante soluções inteligentes e uma base sólida para nossos projetos.',
    image: '/levy.png',
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-4xl font-bold mb-4">Que tal um pouquinho sobre nós?</h2>
          <p className="text-lg text-gray-200">
            <strong className="text-white">A Codise nasceu em 2025 da amizade e da vontade de criar.</strong><br />
            Somos três parceiros apaixonados por tecnologia, design e soluções simples que funcionam de verdade. <br />
            Juntos, unimos o melhor do visual e do código pra ajudar empresas a entrarem (ou se destacarem) no mundo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 text-black rounded-xl p-6 flex flex-col items-center text-center shadow-md"
            >
              <Image
                src={member.image}
                alt={`Foto de ${member.name}`}
                width={96}
                height={96}
                className="rounded-md object-cover w-24 h-24 mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-700 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="text-left max-w-4xl">
          <p className="text-gray-300 text-lg">
            A Codise é pequena, mas com entrega grande. Nosso foco é ajudar pequenos e médios negócios a terem presença online com sites rápidos, bonitos e sob medida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
