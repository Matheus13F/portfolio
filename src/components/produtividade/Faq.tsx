import React from "react";
import Card from "./Card";
import FaqBox from "./FaqBox";

export default function Faq() {
  return (
    <div className="w-full max-w-7xl px-10 mx-auto flex flex-col space-y-4 py-10 gap-2">
      <h3 className="text-3xl md:text-5xl text-center md:text-left">
        Perguntas Frequentes
      </h3>
      <FaqBox
        title="Qual a forma de pagamento?"
        content="Você pode fazer o pagamento por Cartão de Crédito, Boleto, Google Pay, PayPal ou Pix."
      />

      <FaqBox
        title="Não tenho experiência com o chatGPT ou outras tecnologias. Como posso utilizar esse ebook?"
        content="O ebook foi desenvolvido para tornar seu uso fácil e acessível, adequado tanto 
        para pessoas com conhecimento em tecnologia quanto para iniciantes. 
        Ele também inclui um guia tutorial prático com exemplos ilustrados de fácil compreensão."
      />

      <FaqBox
        title="Não confio que um ebook possa fornecer informações relevantes e 
        práticas o suficiente para que eu possa aumentar minha produtividade."
        content="O conteúdo deste ebook foi desenvolvido por um desenvolvedor de software especialista no campo da
        tecnologia, levando em consideração as melhores praticas e a experiência real dos usuários. Além disso, oferecemos uma garantia de satisfação."
      />

      <FaqBox
        title="Se comprar agora tem acesso a atualizações?"
        content="Sim! O acesso é vitalício, você tera acesso ao conteúdo para sempre, e a novas atualizações sem precisar pagar mais por isso."
      />

      <FaqBox
        title="Como tenho acesso ao ebook após a compra?"
        content="Apos realizar a compra, você recebe o acesso ao ebook através do email de forma 
        imediata, por isso é importante que preencha corretamente seu email no momento da compra. Para acessar as atualizações é preciso acessar a plataforma
        da Hotmart com o email que você realizou a compra."
      />

      <FaqBox
        title="Tem algum suporte?"
        content="Sim! você tera acesso a comunidade no discord do criador do ebook onde podera falar diretamente com ele, alem de ter acesso tambem ao email de suporte para tirar duvidas."
      />
    </div>
  );
}
