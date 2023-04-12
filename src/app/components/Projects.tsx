"use client";

import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";

type Props = {
  experiences: Experience[];
};

export function Projects({ experiences }: Props) {
  const arr = [1, 2, 3];
  return (
    <div className="flex relative flex-col text-left max-w-7xl px-5 justify-evenly mx-auto items-center h-fit py-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-12 content-center -mt-36">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="bg-white flex flex-col rounded-lg min-h-[19rem] drop-shadow-lg"
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

      <div className="w-full flex flex-col space-y-5 items-center">
        <h3 className="font-bold text-xl">
          Interested in collaborating with me?
        </h3>
        <span>
          I’m always open to discussing product design work or partnership
          opportunities.
        </span>
        <a
          href=""
          className="p-5 bg-[#EBA417] rounded-lg hover:bg-[#EBA417]/90 transition-colors ease-in max-w-10 flex items-center gap-5"
        >
          <ChatBubbleBottomCenterIcon className="text-black w-7 h-7" />
          Start a conversation
        </a>
      </div>
    </div>
  );
}
