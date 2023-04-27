import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

interface Props {
  experience: Experience;
}

export function ExperienceCard({ experience }: Props) {
  const dateStarted = new Date(experience?.dateStarted).toLocaleDateString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );

  const dateEnded = experience?.dateEnded
    ? new Date(experience?.dateEnded).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : "Currently working here";

  return (
    <div className="bg-white flex flex-col rounded-lg min-h-[19rem] p-5">
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-lg font-bold text-center">
            {experience.company}
          </h3>
          <span className="text-[13px] flex gap-2">
            <CalendarDaysIcon className="w-5 h-5" /> {dateStarted} - {dateEnded}
          </span>
        </div>

        <p className="text-[14px]">{experience.points}</p>
      </div>

      <div className="flex items-center w-full justify-center">
        <Image
          src={urlFor(experience.companyImage).url()}
          alt="profile"
          width={160}
          height={160}
          className="w-28 h-24 object-contain"
        />
      </div>
    </div>
  );
}
