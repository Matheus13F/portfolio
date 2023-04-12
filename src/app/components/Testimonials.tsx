"use client";

import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import Image from "next/image";

type Props = {
  experiences: Experience[];
};

export function Testimonials({ experiences }: Props) {
  const arr = [1, 2, 3];
  return (
    <div className="flex relative flex-col text-left max-w-7xl px-5 justify-evenly mx-auto items-center h-fit py-10 space-y-10">
      <h3 className=" text-gray-800 font-bold text-2xl">Testimonials</h3>

      <h3 className="text-gray-800 text-lg">
        People I&#39;ve worked with have said some nice things...
      </h3>

      <div className="flex flex-col space-y-14 items-center justify-center pb-36 pt-10">
        <Image
          src="https://media.licdn.com/dms/image/D4D03AQFxD8LR6YyIXQ/profile-displayphoto-shrink_200_200/0/1671712349928?e=1686787200&v=beta&t=9Q0h0VuweJoLNkSRCU0D0xm6O2V5MbnSLE1mWYZzsZg"
          alt="profile"
          width={160}
          height={169}
          className="rounded-full w-20 h-20 object-cover"
        />

        <p className="max-w-2xl">
          &#34; Matheus is one of the most talented developers I&#39;ve ever had
          the pleasure to meet, he has a lot of knowledge in the field and is
          always involved with the local community &#34;
        </p>

        <div className="flex flex-col space-y-3 text-center">
          <span className="font-bold text-lg">Lucas Franson</span>
          <span className="text-gray-700">Developer Analyst at Ambev Tech</span>
        </div>
      </div>
    </div>
  );
}
