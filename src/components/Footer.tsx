import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Codise. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
