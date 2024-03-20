export function HeroStartup() {
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center w-full h-[400px] sm:max-h-[500px] bg-yellow text-white pb-20 px-5">
      <div className="max-w-7xl flex items-center justify-center">
        <div className="space-y-10 pl-0 md:pl-10 text-center max-w-3xl my-48">
          <h4 className="text-3xl sm:text-4xl font-semibold text-slate-800">
            Meus Projetos
          </h4>
          <p className="text-xs text-slate-600 sm:text-base">
            Estou contantemente aprendendo algo novo, estudando e aplicando meus
            conhecimentos em projetos reais. Abaixo estão alguns destaques de
            projetos que desenvolvi durante minha trajetoria como desenvolvedor
            de software. Se quiser saber mais, sinta-se livre para acessar meu{' '}
            <a href="https://github.com/matheus13f" className="underline">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
