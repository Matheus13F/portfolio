"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../../../lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

export function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo?.name}`,
      "Guy-who-loves-coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      {/* <BackgroundCircles /> */}

      <div className="z-20 space-y-5 flex flex-col">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold scroll-px-10 text-gray-700">
          {pageInfo?.role} & Designer
        </h1>

        <span className="text-gray-800">
          I design and code beautifully simple things, and I love what I do.
        </span>

        <div className="pt-5 w-full flex flex-wrap items-center gap-4 justify-center"></div>
      </div>

      <Image
        src={urlFor(pageInfo?.backgroundImage).url()}
        alt="profile"
        width={500}
        height={500}
        className="relative w-[500px] mx-auto object-cover"
      />
    </div>
  );
}
