import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transformamos ideias em soluções digitais</h1>
        <p className="text-lg md:text-xl mb-8">Desenvolvemos experiências incríveis através da tecnologia.</p>
        <a href="#servicos" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Conheça nossos serviços</a>
      </div>
    </section>
  );
};

export default Hero;
