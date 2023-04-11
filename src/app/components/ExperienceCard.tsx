"use client";

import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import {
  BookmarkIcon,
  CodeBracketIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";

type Props = {
  experience: Experience;
};

export function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col space-y-10 rounded-lg items-center flex-shrink-0 w-full md:w-1/3 px-2 py-10">
      <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
        <div className="rounded-full bg-[#eba417] p-5">
          {getIcon("designer")}
        </div>
        <span className="text-xl font-bold">Designer</span>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
      </div>
      <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
        <p className="text-[#EBA417]">Things I enjoy designing:</p>
        <span>UX, UI, Web, Apps, Logos</span>
      </div>
      <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
        <p className="text-[#EBA417]">Design Tools:</p>
        <span>Figma</span>
      </div>
    </article>
  );
}

function getIcon(type: string) {
  if (type === "designer") return <SquaresPlusIcon className="w-10 h-10" />;
  else if (type === "software engineer")
    return <CodeBracketIcon className="w-10 h-10" />;
  else return <BookmarkIcon className="w-10 h-10" />;
}
