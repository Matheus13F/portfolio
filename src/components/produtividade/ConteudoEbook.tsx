import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

function ConteudoEbook() {
  return (
    <div className="flex mx-auto w-full max-w-7xl px-10 justify-evenly flex-col md:flex-row py-5 md:py-20 gap-5 md:gap-0">
      <div className="flex flex-col space-y-5 gap-4 justify-center">
        <h1 className="text-5xl max-w-2xl font-bold text-gray-700 text-center md:text-left">
          O que você vai <span className="text-yellow">receber:</span>
        </h1>
        <ul className="space-y-5">
          <li className="flex items-center gap-5">
            <CheckIcon className="text-green-dark w-5 h-5" /> Tutorial completo
            de como utilizar o chatGPT
          </li>
          <li className="flex items-center gap-5">
            <CheckIcon className="text-green-dark w-5 h-5" /> + 100 prompts
            sobre produtividade em diversos assuntos.
          </li>
          <li className="flex items-center gap-5">
            <CheckIcon className="text-green-dark w-5 h-5" />
            Com uma didática muito simples de aprender.
          </li>
          <li className="flex items-center gap-5">
            <CheckIcon className="text-green-dark w-5 h-5" />
            Conceitos do básico ao avançado.
          </li>
          <li className="flex items-center gap-5">
            <CheckIcon className="text-green-dark w-5 h-5" />
            Explicações de fácil entendimento com ilustrações.
          </li>
          <li className="flex items-center gap-5">
            <CheckIcon className="text-green-dark w-5 h-5" />
            Tudo que você precisa pra dominar o chatGPT
          </li>{" "}
        </ul>
        <div className="w-full flex justify-center md:justify-start">
          <a
            href="https://pay.hotmart.com/G84637868O?checkoutMode=10"
            className="inline-block px-2 py-4 text-white bg-yellow w-80 rounded-md hover:opacity-90 transition-colors ease-in text-center"
            target="_blank"
          >
            Quero Começar Agora
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          className="w-[500px] h-[500px] object-contain"
          src="/mockup.png"
          width={1080}
          height={1080}
          alt="capa ebook"
        />
      </div>
    </div>
  );
}

export default ConteudoEbook;
