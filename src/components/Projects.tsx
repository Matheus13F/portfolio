import {
  ArrowTopRightOnSquareIcon,
  ChatBubbleBottomCenterIcon,
  ShareIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import urlFor from '../../lib/urlFor';

type Props = {
  projects: Project[];
};

export function Projects({ projects }: Props) {
  const arr = [1, 2, 3];
  return (
    <div className="flex relative flex-col text-left max-w-7xl px-5 justify-evenly mx-auto items-center h-fit py-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-12 content-center -mt-36">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white flex flex-col rounded-lg min-h-[19rem] drop-shadow-lg p-8 "
          >
            <div className="flex-1">
              <h3 className="text-lg font-bold text-center mb-2">
                {project.title}
              </h3>
              <p className="text-[14px]">{project.summary}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <Image
                src={urlFor(project?.image).url()}
                alt="profile"
                width={160}
                height={169}
                className="rounded-lg w-28 xs:w-36 h-28 object-cover"
              />
              {project.linkToBuild ? (
                <a
                  href={project?.linkToBuild}
                  className="flex items-center text-base font-medium gap-2 p-1 bg-slate-600/10  rounded-lg text-green-600 "
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-green-600" />
                  Produção
                </a>
              ) : (
                <a
                  href={project.linkToRepo}
                  className="flex items-center text-base font-medium gap-2 p-1 bg-slate-200 text-slate-900 rounded-lg"
                >
                  {' '}
                  <ShareIcon className="w-4 h-4 text-slate-900" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col space-y-5 items-center">
        <h3 className="font-bold text-xl text-center text-slate-800">
          Interessado em trabalhar comigo?
        </h3>
        <span className="text-center">
          Estou sempre aberto a novas ideias e oportunidades.
        </span>
        <a
          href="/contato"
          className="p-5 bg-yellow rounded-lg border border-slate-800 max-w-10 flex items-center gap-5 text-slate-800 "
        >
          <ChatBubbleBottomCenterIcon className="w-7 h-7 text-slate-800" />
          Fale comigo
        </a>
      </div>
    </div>
  );
}
