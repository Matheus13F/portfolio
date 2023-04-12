"use client";

import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";

type Props = {
  experiences: Experience[];
};

export function Experience({ experiences }: Props) {
  const arr = [1, 2, 3];
  return (
    <div className="flex relative flex-col text-left max-w-7xl px-5 justify-evenly mx-auto items-center h-fit py-10 space-y-10">
      <h3 className=" text-gray-800 text-lg sm:text-xl">
        My Recent Work Experience
      </h3>

      <h3 className="text-gray-500 text-sm">
        Here are a few past projects I&#39;ve worked on since 2019
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-12 content-center">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="bg-white flex flex-col rounded-lg min-h-[19rem]"
          >
            <div className=" p-8 flex-1">
              <h3 className="text-lg lg:text-xl font-bold text-center mb-4">
                {exp.company}
              </h3>
              <p className="lg:text-lg">{exp.points}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href=""
        className="p-5 bg-[#EBA417] rounded-lg hover:bg-[#EBA417]/90 transition-colors ease-in"
      >
        See more on LinkedIn
      </a>
    </div>
  );
}
