import Image from "next/image";
import { LinkPeek } from "../LinkPeek";

export function HeaderProducts() {
  return (
    <div className="flex justify-between max-w-7xl mx-auto items-center h-24 px-10">
      <div className="flex flex-row items-center">
        <Image
          src="/logo.png"
          alt="profile"
          width={160}
          height={169}
          className="w-8 h-8 md:w-10 md:h-10 object-cover"
        />
      </div>

      <div className="flex space-x-2 md:space-x-5 items-center text-gray-900 cursor-pointer">
        <LinkPeek href="#inicio" title="Inicio" />
        <LinkPeek href="#conteudo" title="Tecnologias" responsive />
        <LinkPeek href="#eu" title="Quem sou" responsive />
        <LinkPeek href="#receber" title="Conteúdo" responsive />
        <LinkPeek href="#bonus" title="Bônus" />
        <LinkPeek href="#faq" title="FAQ" />
      </div>
    </div>
  );
}
