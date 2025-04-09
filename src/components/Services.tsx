'use client';
import React from 'react';

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Serviços</h2>
        <p className="text-lg text-zinc-300 mb-12">
          Estes são os nossos principais serviços, confira abaixo e entre em contato!
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Criação de Sites</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sem odio, 
              pellentesque vel dui posuere, posuere commodo orci. Duis ut sapien fermentum 
              augue elementum fermentum vitae sit amet nisl. Vivamus sed lorem convallis, 
              hendrerit diam non, suscipit nisi. Donec nisl mauris, bibendum eget leo vel, 
              feugiat tincidunt neque. Donec purus diam, consequat a turpis vitae, accumsan 
              iaculis sapien. Curabitur finibus dapibus nulla ut facilisis. Fusce pretium 
              felis sed sapien tincidunt, sed auctor tortor varius. In nisl ante, bibendum 
              ac ligula id, ultrices sollicitudin odio. Nulla et purus pulvinar, tempor 
              mauris non, lobortis turpis. Phasellus dictum ultricies nunc ut convallis. 
              Praesent commodo commodo erat, eu congue ex.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Desenvolvimento de Apps</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sem odio, 
              pellentesque vel dui posuere, posuere commodo orci. Duis ut sapien fermentum 
              augue elementum fermentum vitae sit amet nisl. Vivamus sed lorem convallis, 
              hendrerit diam non, suscipit nisi. Donec nisl mauris, bibendum eget leo vel, 
              feugiat tincidunt neque. Donec purus diam, consequat a turpis vitae, accumsan 
              iaculis sapien. Curabitur finibus dapibus nulla ut facilisis. Fusce pretium 
              felis sed sapien tincidunt, sed auctor tortor varius. In nisl ante, bibendum 
              ac ligula id, ultrices sollicitudin odio. Nulla et purus pulvinar, tempor 
              mauris non, lobortis turpis. Phasellus dictum ultricies nunc ut convallis. 
              Praesent commodo commodo erat, eu congue ex.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Identidade Visual</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sem odio, 
              pellentesque vel dui posuere, posuere commodo orci. Duis ut sapien fermentum 
              augue elementum fermentum vitae sit amet nisl. Vivamus sed lorem convallis, 
              hendrerit diam non, suscipit nisi. Donec nisl mauris, bibendum eget leo vel, 
              feugiat tincidunt neque. Donec purus diam, consequat a turpis vitae, accumsan 
              iaculis sapien. Curabitur finibus dapibus nulla ut facilisis. Fusce pretium 
              felis sed sapien tincidunt, sed auctor tortor varius. In nisl ante, bibendum 
              ac ligula id, ultrices sollicitudin odio. Nulla et purus pulvinar, tempor 
              mauris non, lobortis turpis. Phasellus dictum ultricies nunc ut convallis. 
              Praesent commodo commodo erat, eu congue ex.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
