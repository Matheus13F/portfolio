export default function FooterEbook() {
  return (
    <div className="flex flex-col text-center md:text-left justify-evenly mx-auto items-center w-full h-auto bg-green-dark text-white px-5">
      <div className="h-auto space-y-14 pb-16 flex flex-col items-center justify-center mt-28 w-full px-5">
        <p className="text-white text-2xl max-w-md text-center">
          Vivendo, Aprendendo, & Evoluindo um dia de cada vez.
        </p>

        <span className="text-white text-md text-center">
          CNPJ: 46.880.323/0001-18 <br /> Matheus Goes Tecnologia
        </span>

        <a
          href="https://linktr.ee/math_codes"
          className="p-2 border border-yellow rounded-md"
          target="_blank"
        >
          Conheça mais do meu trabalho
        </a>
        <span className="text-white text-md text-center">
          © 2023 | Todos os direitos reservados.
        </span>
      </div>
    </div>
  );
}
