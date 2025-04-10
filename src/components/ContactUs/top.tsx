import { FaWhatsapp } from 'react-icons/fa';

const Top = () => {
  return (
    <div className="text-center text-white flex flex-col items-center gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Vamos criar seu projeto juntos?
        </h2>
        <p className="text-lg">Seu orçamento com velocidade e praticidade</p>
      </div>

      <a
        href="https://wa.me/numero" //trocar pelo número do WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-20 py-3 rounded-lg font-medium bg-gradient-to-r from-[#8E42CF] to-[#FFB800] text-black hover:opacity-90 transition"
      >
        <FaWhatsapp className="text-5xl mr-2" />
        <p className="text-md font-bold">Mande uma mensagem</p>
      </a>
    </div>
  );
}

export default Top;