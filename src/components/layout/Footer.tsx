import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Codise. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
