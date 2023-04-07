"use client";

import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";

type Props = {
  skills: Skill[];
};

export function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row 
      max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg sm:text-xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Skills that I have proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-10 md:mt-32">
        {skills?.map((skill) => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
