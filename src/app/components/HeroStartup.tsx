"use client";

import urlFor from "../../../lib/urlFor";
import Image from "next/image";

export function HeroStartup() {
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center w-full max-h-[500px] bg-[#EBA417] text-white pb-20 px-5">
      <div className="max-w-7xl flex items-center justify-center">
        <div className="space-y-10 pl-0 md:pl-10 text-center max-w-3xl my-48">
          <h4 className="text-4xl font-semibold">My Startup Projects</h4>
          <p className="text-base">
            I&#39;m a bit of a digital product junky. Over the years, I&#39;ve
            used hundreds of web and mobile apps in different industries and
            verticals. Eventually, I decided that it would be a fun challenge to
            try designing and building my own.
          </p>
        </div>
      </div>
    </div>
  );
}
