import Image from 'next/image';
import { LinkPeek } from './Form/LinkPeek';
import Link from 'next/link';
import { NavLink } from './Form/NavLink';
import logoImage from '../../public/logo.png';

export function Header() {
  return (
    <header className="flex justify-between max-w-7xl mx-auto items-center h-24 px-4 md:px-10">
      <div className="flex flex-row items-center">
        <a href="/">
          <Image
            src={logoImage}
            alt="profile"
            width={160}
            height={169}
            className="w-8 h-8 md:w-10 md:h-10 object-cover"
          />
        </a>
      </div>

      <div className="flex space-x-1 md:space-x-5 items-center text-gray-900 cursor-pointer text-xs md:text-sm">
        <NavLink url="#experiencia" title="Experiência" />

        <NavLink url="#projetos" title="Projetos" />
        <NavLink url="https://codepilot.com.br/newsletter" title="Newsletter" />

        <LinkPeek href="/produtos" title="E-books" />

        <LinkPeek href="https://codepilot.com.br" title="Blog" />
        <Link
          href="/contato"
          className=" rounded-lg p-2 border-2 border-yellow-500 hover:bg-yellow hover:text-white transition-colors duration-200 text-center"
        >
          Fale comigo
        </Link>
      </div>
    </header>
  );
}
