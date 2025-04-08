'use client';

import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">Codise</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#sobre" className="text-gray-800 hover:text-blue-500">Sobre</a>
          <a href="#projetos" className="text-gray-800 hover:text-blue-500">Projetos</a>
          <a href="#servicos" className="text-gray-800 hover:text-blue-500">Serviços</a>
          <a href="#contato" className="text-gray-800 hover:text-blue-500">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
