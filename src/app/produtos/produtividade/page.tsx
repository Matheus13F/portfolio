import { HeaderProducts } from "@/components/produtividade/HeaderProducts";
import BannerOng from "@/components/produtividade/BannerOng";
import HeroProd from "@/components/produtividade/HeroProd";
import MotivosParaEscolher from "@/components/produtividade/MotivosParaEscolher";
import ConteudoEbook from "@/components/produtividade/ConteudoEbook";
import Garantia from "@/components/produtividade/Garantia";
import QuemSouEu from "@/components/produtividade/QuemSouEu";
import Oferta from "@/components/produtividade/Oferta";
import { Footer } from "@/components/Footer";
import { FooterEbook } from "@/components/produtividade/FooterEbook";
import Faq from "@/components/produtividade/Faq";

export default function Produtividade() {
  return (
    <>
      <BannerOng />
      <header className="bg-gray-50">
        <HeaderProducts />
      </header>
      <section id="inicio" className="w-full">
        <HeroProd />
      </section>
      <section id="conteudo" className="w-full border-b border-b-gray-100">
        <MotivosParaEscolher />
      </section>
      <section id="eu" className="w-full border-b border-b-gray-100">
        <QuemSouEu />
      </section>
      <section id="receber" className="w-full border-b border-b-gray-100">
        <ConteudoEbook />
      </section>
      <section id="bonus" className="w-full border-b border-b-gray-100">
        <Garantia />
      </section>
      <section className="border-b border-b-gray-100">
        <Oferta />
      </section>
      <section id="faq" className="w-full my-10 md:my-32">
        <Faq />
      </section>
      <FooterEbook />
    </>
  );
}
