"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: Social[];
};

export function Footer({ socials }: Props) {
  return (
    <div className="flex flex-col text-center md:text-left justify-evenly mx-auto items-center w-full h-auto bg-[#EBA417] text-white px-5">
      <div className="w-full h-auto shadow-3xl -mt-20 z-40 px-4 bg-teal-950 flex flex-col md:flex-row divide-y-2 md:divide-x-[1px] rounded-lg">
        <article className="flex flex-col md:flex-row space-y-10 rounded-lg items-center justify-center flex-shrink-0 w-full px-2 py-10">
          <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
            <span className="text-3xl font-bold">Start a project</span>
          </div>
          <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
            <p className="text-white">
              Interested in working together? We should queue up a time to chat.
              I&#39;ll buy the coffee.
            </p>
          </div>
          <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
            <a
              href="/contact"
              className="p-5 rouinded border-2 border-[#EBA417] rounded-lg hover:bg-[#EBA417]/90 transition-colors ease-in"
            >
              Let&#39;s do this
            </a>
          </div>
        </article>
      </div>

      <div className="h-auto space-y-10 pb-10 flex flex-col items-center justify-center mt-28 w-full px-5">
        {/* <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="profile"
          width={160}
          height={169}
          className="rounded-lg w-10 h-10 object-cover"
        /> */}

        <span className="text-white text-2xl">
          Living, learning, & leveling up one day at a time.
        </span>

        <div>
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="white"
              bgColor="transparent"
            />
          ))}
        </div>

        <span className="text-white text-md">Handcrafted by me © 2023</span>
      </div>
    </div>
  );
}
