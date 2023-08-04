import Image from "next/image";
import React from "react";

export default function HeroProductivity() {
  return (
    <div className="flex mx-auto w-full flex-col md:flex-row max-w-7xl px-10 justify-evenly py-4 md:py-20 items-center">
      <div className="flex flex-col space-y-2 gap-3">
        <span className="text-gray-300 text-base md:text-lg text-center md:text-left">
          Otimize seu tempo com IA
        </span>
        <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl max-w-lg lg:max-w-2xl text-gray-700 text-center md:text-left">
          Aumente sua produtividade de uma forma simples com{" "}
          <span className="text-yellow font-bold">ChatGPT</span>
        </h1>
        <p className="text-sm md:text-xl max-w-3xl inline-block text-gray-500 text-center md:text-left">
          +100 prompts para chatGPT com foco em <br /> otimização e performance
          | Do básico ao avançado
        </p>
        <div className="w-full flex justify-center md:justify-start">
          <a
            href="#conteudo"
            className="inline-block px-2 py-4 text-white bg-yellow w-80 rounded-md hover:opacity-90 transition-colors ease-in text-center "
            target="_blank"
          >
            Quero Aprender
          </a>
        </div>
      </div>
      <div>
        <Image
          className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] object-cover"
          src="/produtividade.png"
          width={1080}
          height={1080}
          alt="capa ebook"
        />
      </div>
    </div>
  );
}
