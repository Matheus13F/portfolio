import Image from 'next/image';
import urlFor from '../../lib/urlFor';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

interface Props {
  experience: Experience;
}

export function ExperienceCard({ experience }: Props) {
  const dateStarted = new Date(experience?.dateStarted).toLocaleDateString(
    'pt-BR',
    {
      month: 'long',
      year: 'numeric',
    }
  );

  const dateEnded = experience?.dateEnded
    ? new Date(experience?.dateEnded).toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric',
      })
    : 'Atualmente';

  return (
    <div className="bg-white flex flex-col h-full justify-around rounded-lg min-h-[19rem] p-5">
      <div className="flex items-center w-full justify-center">
        <Image
          src={urlFor(experience.companyImage).url()}
          alt="profile"
          width={160}
          height={160}
          className="w-28 h-16 md:h22 object-contain"
        />
      </div>
      <div className=" w-full">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-lg font-bold">{experience.company}</h3>
          <span className="text-[13px] flex gap-2">
            <CalendarDaysIcon className="w-5 h-5" /> {dateStarted} - {dateEnded}
          </span>
        </div>

        <p className="text-xs md:text-sm">{experience.points}</p>
      </div>
    </div>
  );
}
