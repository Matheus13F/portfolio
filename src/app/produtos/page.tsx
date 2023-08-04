import { Header } from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ebooks sobre tecnologia",
  description:
    "Lista de ebooks e conteudo sobre tecnologia, IA e desenvolvimento web",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    images: ["/produtividade.png"],
    title: "Matheus Goes",
    description: "Matheus Goes Desenvolvedor",
    type: "website",
    url: "https://www.matheusgoes.tech/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Goes",
    description: "Matheus Goes Desenvolvedor",
    creator: "@oi_mattheww",
    images: ["/produtividade.png"],
  },
};

export default function Produtos() {
  return (
    <>
      <Header />
      <div className="h-[600px] w-full flex items-center justify-center flex-col gap-10">
        <span className="text-sm text-center">
          Todos os meus ebooks listados aqui
        </span>
        <div className="flex flex-col space-y-4">
          <Link
            href="/produtos/produtividade"
            className="text-yellow hover:underline p-2 border border-yellow rounded-md flex items-center justify-center"
          >
            Produtividade com chatGPT
          </Link>
          <span className="text-sm text-center">Em breve</span>
          <button
            disabled
            className="text-gray-400 p-2 border border-gray-400 rounded-md flex items-center justify-center cursor-not-allowed"
          >
            Landing Page com IA
          </button>
          <button
            disabled
            className="text-gray-400 p-2 border border-gray-400 rounded-md flex items-center justify-center cursor-not-allowed"
          >
            Dev no Exterior
          </button>
          <button
            disabled
            className="text-gray-400 p-2 border border-gray-400 rounded-md flex items-center justify-center cursor-not-allowed"
          >
            Frontend | Basico ao Avançado
          </button>
        </div>
      </div>
    </>
  );
}
