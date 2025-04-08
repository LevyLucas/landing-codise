import React from 'react';

const Projects = () => {
  return (
    <section id="projetos" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos Recentes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Projeto {item}</h3>
              <p className="text-gray-600">Descrição breve do projeto realizado com foco em design e funcionalidade.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
