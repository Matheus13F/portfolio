import React from "react";
import Card from "./Card";

export default function Garantia() {
  return (
    <div className="w-full max-w-7xl px-10 mx-auto flex justify-center items-center flex-col space-y-4 my-5 md:my-20 py-10 gap-10">
      <h3 className="text-5xl text-center md:text-left">4 Bônus Exclusivos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Card
          icon="time"
          title="7 dias de garantia"
          description="Se por algum motivo você não gostar do material, você pode pedir reembolso sem taxas ou perguntas."
        />
        <Card
          icon="star"
          title="Acesso vitalício"
          description="Acesso total ao conteúdo e para sempre. Tudo atravez da plataforma da Hotmart ou por e-mail."
        />
        <Card
          icon="community"
          title="Comunidade"
          description="Fale diretamente comigo pelo servidor do discord para qualquer duvida que você tenha para utilizar o material."
        />
        <Card
          icon="check"
          title="Atualizações"
          description="Você tera acesso a novos conteúdos e modulos que serão adicionado futuramente sem pagar mais por isso."
        />
      </div>
    </div>
  );
}
