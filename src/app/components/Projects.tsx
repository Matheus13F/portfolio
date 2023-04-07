"use client";

import { motion } from "framer-motion";
import urlFor from "../../../lib/urlFor";
import Image from "next/image";

type Props = {
  projects: Project[];
};

export function Projects({ projects }: Props) {
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
      className="flex flex-col relative h-screen overflow-hidden text-left md:text-center md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg sm:text-xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
       scrollbar-track-gray-400/20 scrollbar-thumb-[#EBA417]/80 mt-16"
      >
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="profile"
              className="relative h-44 w-72  md:w-[400px] md:h-[250px] xl:w-[600px] xl:h-[300px] object-center object-cover"
            />

            <div className="space-y-10 px-0 md:px-10 mas-w-6xl w-full">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#EBA417]/50">
                  Case Study {index + 1} of {projects?.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-2 my-2">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology?._id}
                    src={urlFor(technology?.heroImage).url()}
                    className="h-8 w-8 rounded-md"
                    alt="technology logo"
                    width={40}
                    height={40}
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left w-full max-h-32 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#EBA417] pl-2">
                {project?.summary}
              </p>

              <div className="w-full flex justify-center md:justify-start items-center md:items-start gap-6">
                <a
                  href={project?.linkToBuild}
                  className="text-left decoration-white underline"
                >
                  See it in production.
                </a>

                <a
                  href={project?.linkToBuild}
                  className="text-left decoration-white underline"
                >
                  Link to repo.
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#EBA417]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
