"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export function Background({ experiences }: Props) {
  return (
    <div className="flex relative flex-col text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center h-fit">
      <div className="w-full h-auto shadow-3xl -mt-20 z-40 px-4 bg-white rounded-sm flex flex-col md:flex-row divide-y-2 md:divide-x-[1px]">
        <ExperienceCard experience={experiences[0]} />
        <ExperienceCard experience={experiences[1]} />
        <ExperienceCard experience={experiences[2]} />
      </div>
    </div>
  );
}
