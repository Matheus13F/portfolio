import Link from 'next/link';
import { ExperienceCard } from './ExperienceCard';

type Props = {
  experiences: Experience[];
};

export function Experience({ experiences }: Props) {
  return (
    <div className="flex relative flex-col text-left max-w-7xl px-5 justify-evenly mx-auto items-center h-fit py-10 space-y-10">
      <h3 className="text-slate-900 text-2xl text-center">
        Minhas experiências recentes
      </h3>

      <span className="text-slate-600 text-base text-center">
        Aqui estão alguns projetos anteriores em que trabalhei desde 2018
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-12 content-center">
        {experiences.map((exp) => (
          <ExperienceCard experience={exp} key={exp._id} />
        ))}
      </div>

      <Link
        href="https://www.linkedin.com/in/matheus13f/"
        className="p-4 rounded-lg text-slate-800 text-center z-10 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors"
      >
        Veja mais no LinkedIn
      </Link>
    </div>
  );
}
