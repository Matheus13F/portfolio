"use client";

import { motion } from "framer-motion";
import urlFor from "../../../lib/urlFor";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

export function About({ pageInfo }: Props) {
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center w-full max-h-[600px] bg-[#EBA417] text-white">
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile"
        width={160}
        height={169}
        className=" hidden md:inline-block rounded-lg w-20 h-32 md:h-72 md:w-64 object-cover"
      />
      <div className="space-y-10 px-0 md:px-10 text-center max-w-3xl my-48">
        <h4 className="text-4xl font-semibold">
          Hi, I&#39;m{" "}
          <span className="underline decoration-[#383838]">Matheus</span> , Nice
          to meet you.
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </div>
  );
}
