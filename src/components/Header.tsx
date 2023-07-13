import Image from "next/image";
import { LinkPeek } from "./LinkPeek";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between max-w-7xl mx-auto items-center h-24 px-10">
      <div className="flex flex-row items-center">
        <a href="/">
          <Image
            src="/logo.png"
            alt="profile"
            width={160}
            height={169}
            className="w-8 h-8 md:w-10 md:h-10 object-cover"
          />
        </a>
      </div>

      <div className="flex space-x-5 items-center text-gray-900 cursor-pointer">
        <LinkPeek href="/produtos" title="E-books" />
        <LinkPeek href="https://codepeek.com.br" title="Meu Blog" />
        <Link
          href="/contact"
          className=" rounded-lg text-sm p-2 border-2 border-yellow hover:bg-yellow hover:text-white transition-colors duration-200"
        >
          Fale comigo
        </Link>
      </div>
    </header>
  );
}
