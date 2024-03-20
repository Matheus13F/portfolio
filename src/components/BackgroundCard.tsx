import {
  BookmarkIcon,
  CodeBracketIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/solid';

type Props = {
  background: Background;
};

export function BackgroundCard({ background }: Props) {
  return (
    <article className="flex flex-col space-y-5 items-center flex-shrink-0 w-full md:w-1/3 px-2 py-10">
      <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
        <div className="rounded-full bg-slate-700 p-5">
          {getIcon(background.jobTitle)}
        </div>
        <span className="text-xl font-bold">{background.jobTitle}</span>
        <p>{background.description}</p>
      </div>
      <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
        <p className="text-yellow">{background.hardSkill}</p>
        <div className="flex gap-2  items-center justify-center flex-wrap w-4/5">
          {background.hardSkillPoints.map((hardSkill) => (
            <span key={hardSkill}>{hardSkill},</span>
          ))}
        </div>
      </div>
      <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-2">
        <p className="text-yellow">{background.tools}</p>
        {background.toolsPoints.map((tools) => (
          <span key={tools}>{tools}</span>
        ))}
      </div>
    </article>
  );
}

function getIcon(type: string) {
  if (type === 'Designer')
    return <SquaresPlusIcon className="w-10 h-10 text-white" />;
  else if (type === 'Desenvolvedor Frontend')
    return <CodeBracketIcon className="w-10 h-10 text-white" />;
  else return <BookmarkIcon className="w-10 h-10 text-white" />;
}
