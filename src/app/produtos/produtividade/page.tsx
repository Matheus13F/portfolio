import { Metadata } from "next";
import { HeaderProductivity } from "@/components/produtividade/HeaderProductivity";
import BannerOng from "@/components/produtividade/BannerOng";
import HeroProductivity from "@/components/produtividade/HeroProductivity";
import LearningTopics from "@/components/produtividade/LearningTopics";
import ReceiptChecklist from "@/components/produtividade/ReceiptChecklist";
import Bonus from "@/components/produtividade/Bonus";
import AboutMeProductivity from "@/components/produtividade/AboutMeProductivity";
import Offer from "@/components/produtividade/Offer";
import FooterEbook from "@/components/FooterEbook";
import Faq from "@/components/produtividade/Faq";

export const metadata: Metadata = {
  title: "Produtividade com chatGPT",
  description: "Ebook para aumentar a produtividade com chatGPT ou Google Bard",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    images: ["/produtividade.png"],
    title: "Aumente a produtividade com ChatGPT",
    description:
      "Ebook para aumentar a produtividade com chatGPT ou Google Bard",
    type: "website",
    url: "https://www.matheusgoes.tech/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aumente a produtividade com ChatGPT",
    description:
      "Ebook para aumentar a produtividade com chatGPT ou Google Bard",
    creator: "@oi_mattheww",
    images: ["/produtividade.png"],
  },
};

export default function Produtividade() {
  return (
    <>
      <BannerOng />
      <header className="bg-gray-50">
        <HeaderProductivity />
      </header>
      <section id="inicio" className="w-full">
        <HeroProductivity />
      </section>
      <section id="conteudo" className="w-full border-b border-b-gray-100">
        <LearningTopics />
      </section>
      <section id="eu" className="w-full border-b border-b-gray-100">
        <AboutMeProductivity />
      </section>
      <section id="receber" className="w-full border-b border-b-gray-100">
        <ReceiptChecklist />
      </section>
      <section id="bonus" className="w-full border-b border-b-gray-100">
        <Bonus />
      </section>
      <section className="border-b border-b-gray-100">
        <Offer />
      </section>
      <section id="faq" className="w-full my-10 md:my-32">
        <Faq />
      </section>
      <FooterEbook />
    </>
  );
}
