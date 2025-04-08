import React from 'react';

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">O que fazemos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Sites Responsivos</h3>
            <p className="text-gray-600">Criação de websites modernos adaptáveis a todos os dispositivos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Landing Pages</h3>
            <p className="text-gray-600">Desenvolvemos páginas otimizadas para conversão.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Sistemas Web</h3>
            <p className="text-gray-600">Soluções completas e personalizadas para empresas e startups.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
