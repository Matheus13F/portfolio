"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import urlFor from "../../../lib/urlFor";

type Props = {
  experience: Experience;
};

export function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-2xl items-center space-y-7 flex-shrink-0 w-full md:w-[500px] px-2
       snap-center bg-[#1D2426] py-5 overflow-hidden"
    >
      <div className="">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          src={urlFor(experience?.companyImage).url()}
          alt="profile"
          className="relative w-full h-14 md:h-28 xl:h-[150px] object-center object-cover"
        />
      </div>

      <div className="px-5 w-full h-[360px] sm:h-[400px]">
        <h4 className="text-lg sm:text-3xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-lg sm:text-2xl mt-1">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2 overflow-x-scroll pb-4 scrollbar-thin scrollbar-thumb-[#EBA417]">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology?._id}
              src={urlFor(technology?.heroImage).url()}
              className="h-10 w-10"
              alt="technology logo"
              width={40}
              height={40}
            />
          ))}
        </div>

        <p className="py-5 text-gray-300">
          {new Date(experience?.dateStarted).toLocaleDateString("pt-BR", {
            month: "short",
            year: "numeric",
          })}{" "}
          ~{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Currently Working"
            : new Date(experience?.dateEnded).toLocaleDateString("pt-BR", {
                month: "short",
                year: "numeric",
              })}
        </p>

        <ul
          className="list-disc space-y-4 ml-5 text-lg max-h-40 overflow-hidden overflow-y-scroll scrollbar-thin 
          scrollbar-track-gray-500 scrollbar-thumb-[#EBA417] pr-5 pb-5"
        >
          {experience?.points.map((point, index) => (
            <li className="overflow-hidden text-sm md:text-base" key={index}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
