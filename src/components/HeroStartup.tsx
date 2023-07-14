export function HeroStartup() {
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center w-full max-h-[500px] bg-yellow text-white pb-20 px-5">
      <div className="max-w-7xl flex items-center justify-center">
        <div className="space-y-10 pl-0 md:pl-10 text-center max-w-3xl my-48">
          <h4 className="text-4xl font-semibold">Meus Projetos</h4>
          <p className="text-base">
            Eu estou sempre estudando alguma coisa. Ao longo dos anos eu usei
            centenas de aplicativos web e mobiles em diferentes setores. Por
            fim, decidi que seria um desafio divertido projetar e construir os
            meus próprio apps e web sites. Então aqui estão alguns dos projetos
            que eu tenho trabalhado. Você sempre pode conferir todos os meus
            projetos no meu{" "}
            <a href="https://github.com/matheus13f" className="underline">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
