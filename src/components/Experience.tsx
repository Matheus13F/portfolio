import { ExperienceCard } from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export function Experience({ experiences }: Props) {
  return (
    <div className="flex relative flex-col text-left max-w-7xl px-5 justify-evenly mx-auto items-center h-fit py-10 space-y-10">
      <h3 className="text-gray-800 text-2xl text-left">
        Minhas experiências recentes
      </h3>

      <span className="text-gray-500 text-base text-center">
        Aqui estão alguns projetos anteriores em que trabalhei desde 2018
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-12 content-center">
        {experiences.map((exp) => (
          <ExperienceCard experience={exp} key={exp._id} />
        ))}
      </div>

      <a
        href="https://www.linkedin.com/in/matheus13f/"
        className="p-5 bg-yellow rounded-lg hover:bg-yellow/90 transition-colors ease-in text-white"
      >
        Veja mais no LinkedIn
      </a>
    </div>
  );
}
