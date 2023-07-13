import Image from "next/image";
import { FaLinkedin, FaInstagram, FaGithub, FaLink } from "react-icons/fa";

function QuemSouEu() {
  return (
    <div className="flex mx-auto w-full max-w-7xl px-10 justify-evenly py-20 gap-5 bg-white my-20 rounded-md">
      <div className="flex flex-col space-y-5 gap-4 pr-6">
        <span className="text-center md:text-left">
          Quem escreveu este ebook?
        </span>
        <h1 className="text-5xl font-bold text-gray-700 text-center md:text-left">
          Matheus Goes
        </h1>
        <p className="inline-block max-w-4xl text-lg text-center md:text-left">
          Desenvolvedor de software e criador do ebook{" "}
          <span className="text-yellow">
            &quot;Aumente sua Produtividade com chatGPT&quot;.
          </span>{" "}
          Passei por toda dificuldade para entender como uma IA generativa
          funciona, e me dediquei para escrever esse ebook com todas as dicas
          necessarias possiveis para que qualquer pessoa possa dominar o uso do
          chatGPT nos seus estudos e no seu trabalho.
        </p>
        <div className="flex gap-5 w-full justify-center md:justify-start">
          <a
            href="https://instagram.com/math_codes"
            className="p-2 border border-yellow rounded-md hover:border-green-dark transition-colors ease-in"
            target="_blank"
          >
            <FaInstagram size={35} />
          </a>
          <a
            href="https://linkedin.com/in/matheus13f"
            className="p-2 border border-yellow rounded-md hover:border-green-dark transition-colors ease-in"
            target="_blank"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://github.com/matheus13f"
            className="p-2 border border-yellow rounded-md hover:border-green-dark transition-colors ease-in"
            target="_blank"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="https://linktr.ee/math_codes"
            className="p-2 border border-yellow rounded-md hover:border-green-dark transition-colors ease-in"
            target="_blank"
          >
            <FaLink size={35} />
          </a>
        </div>
      </div>
      <div className="hidden md:flex">
        <Image
          className="w-[500px] h-[500px] object-cover flex-1 rounded-xl"
          src="/minimum.png"
          width={1080}
          height={1080}
          alt="Matheus Goes"
        />
      </div>
    </div>
  );
}

export default QuemSouEu;
