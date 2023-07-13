import { Header } from "@/components/Header";
import Link from "next/link";

export default function Produtos() {
  return (
    <>
      <Header />
      <div className="h-[600px] w-full flex items-center justify-center flex-col">
        Todos os meu produtos listados aqui
        <div className="flex flex-col space-y-4">
          <Link
            href="/produtos/produtividade"
            className="text-yellow hover:underline"
          >
            Produtividade com IA
          </Link>
          <Link href="/" className="text-yellow hover:underline">
            Web site completo com chatGPT
          </Link>
          <Link href="/" className="text-yellow hover:underline">
            Frontend | Basico ao Avançado
          </Link>
        </div>
      </div>
    </>
  );
}
