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
      <div className="h-[calc(100vh-96px)] relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden">
        <div className="flex flex-col justify-evenly mt-16 gap-5">
          <h4 className="text-base sm:text-2xl md:text-4xl text-center max-w-2xl">
            Obrigado por entrar em contato comigo.
            <span className="underline decoration-yellow/50">
              {" "}
              Como posso te ajudar hoje?.
            </span>
          </h4>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 mx-auto max-w-4xl w-full px-5 mt-5"
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
            className="text-center text-yellow underline"
            target="_blank"
          >
            Ou fale comigo pelas redes sociais
          </a>
        </div>
      </div>
    </>
  );
}
