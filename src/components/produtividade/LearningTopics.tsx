import React from "react";
import Card from "./Card";

export default function LearningTopics() {
  return (
    <div className="w-full max-w-7xl px-10 mx-auto flex justify-center items-center flex-col space-y-4 my-20">
      <div>
        <h2 className="text-5xl font-bold text-center text-gray-700">
          O que vou aprender nesse <span className="text-yellow">Ebook?</span>{" "}
        </h2>
      </div>
      <div>
        <span className="w-full max-w-4xl text-lg text-gray-500 text-center inline-block">
          Como obter o máximo do ChatGPT para otimizar suas tarefas, seus
          estudos ou dia a dia no trabalho. Extraia o máximo da inteligência
          artificial com prompts focados para cada tópico listado abaixo:
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Card
          icon="logica"
          title="Lógica de Programação"
          description="Extraia todo potencial do ChatGPT para aprimorar sua capacidade de resolver problemas."
        />
        <Card
          icon="query"
          title="Query Banco de Dados"
          description="Otimize seu tempo com consultas SQL performáticas criadas pela inteligência artificial."
        />
        <Card
          icon="seo"
          title="SEO"
          description="Melhore suas estratégias de otimização de mecanismos de buscas e trafego para visibilidade do seu site."
        />
        <Card
          icon="marketing"
          title="Marketing"
          description="Explore diversas táticas de marketing, de conteúdo a mídia social e promova sua marca com IA."
        />
        <Card
          icon="conteudo"
          title="Criação de Conteúdo"
          description="O ChatGPT te fornece um conteúdo personalizado com seus objetivos e produtos. Explore esse potencial."
        />
        <Card
          icon="copy"
          title="Copywriting"
          description="Domine a arte da escrita persuasiva para criar textor que cativem, influenciem e convençam, com IA."
        />
        <Card
          icon="youtube"
          title="YouTube"
          description="Explore todo um conteúdo focado em construir e expandir um canal de sucesso no YouTube com ChatGPT."
        />
        <Card
          icon="blog"
          title="Blog"
          description="Engajamento, otimização de SEO e estrategias de conteúdo, gerencia seu blog de uma forma eficaz."
        />
      </div>
    </div>
  );
}
