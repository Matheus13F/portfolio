import Image from "next/image";
import urlFor from "../../../lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

export function Hero({ pageInfo }: Props) {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center text-center relative h-auto 2xl:h-[calc(100vh-96px)]">
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
