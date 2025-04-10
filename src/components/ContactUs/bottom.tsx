import { FaInstagram } from 'react-icons/fa';

const Bottom = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between gap-10 text-white">
      <div className="flex-1 text-center">
        <p className="mb-4 text-left">
          Ou entre em contato conosco para receber mais informações. Estaremos à disposição para apresentar a melhor solução para o seu negócio.
        </p>
        <p className="mt-4 text-left">Também estamos disponíveis em:</p>
        <a
          href="https://instagram.com/instagram" //trocar pelo link do Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFB800] text-5xl mt-2 inline-block"
        >
          <FaInstagram />
        </a>
      </div>

      <form className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Meu nome e sobrenome"
          className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="px-4 py-3 rounded-md bg-white text-black placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="w-40 py-3 rounded-md bg-[#FFB800] text-black font-semibold hover:brightness-110 transition self-start text-xs"
        >
          Entrar em contato
        </button>
      </form>
    </div>
  );
};

export default Bottom;
