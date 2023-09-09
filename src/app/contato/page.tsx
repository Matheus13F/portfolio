"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header";

type Inputs = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mattew.marketing@gmail.com?subject=${formData.assunto}&body=Hi, my name 
    is ${formData.nome}. ${formData.mensagem} (${formData.email})`;
  };

  return (
    <>
      <Header />
      <div className="h-auto md:h-[calc(100vh-96px)] md:flex">
        <div className="flex flex-col mt-6 md:mt-16 gap-2 md:gap-5 px-2 bg-blue mx-auto">
          <h4 className="text-base sm:text-2xl md:text-4xl text-center max-w-2xl">
            Obrigado por entrar em contato comigo.
            <span className="underline decoration-yellow/50">
              {" "}
              Como posso te ajudar hoje?.
            </span>
          </h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 px-0 md:px-5 mt-5"
          >
            <input
              {...register("nome")}
              className="contactInput"
              placeholder="Nome"
              required
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput"
              placeholder="Email"
              required
              type="email"
            />

            <input
              {...register("assunto")}
              className="contactInput"
              placeholder="Assunto"
              required
              type="text"
            />

            <textarea
              {...register("mensagem")}
              className="contactInput"
              placeholder="Mensagem"
              required
            />
            <button
              type="submit"
              className="bg-yellow py-5 px-10 rounded-md text-white font-bold text-lg"
            >
              Enviar
            </button>
          </form>
          <a
            href="https://linktr.ee/math_codes"
            className="text-center text-yellow text-sm"
            target="_blank"
          >
            Ou fale comigo pelas redes sociais
          </a>
        </div>
      </div>
    </>
  );
}
