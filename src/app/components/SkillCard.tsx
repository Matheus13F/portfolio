"use client";

import { motion } from "framer-motion";
import urlFor from "../../../lib/urlFor";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="relative flex">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(skill?.heroImage).url()}
        alt="profile"
        className="rounded-3xl border bg-white/90 border-gray-500 h-16 w-16 md:h-20 md:w-20 xl:w-24 xl:h-24 filter "
      />
    </div>
  );
}
