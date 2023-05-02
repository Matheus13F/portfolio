import Image from "next/image";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import urlFor from "../../../lib/urlFor";
import Link from "next/link";

export default async function Links() {
  const pageInfo: PageInfo = await fetchPageInfo();

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#141416] to-[#303132] px-5 py-2 gap-5 items-center justify-center text-white text-center h-auto xs:h-screen overflow-y-scroll">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="profile"
          width={160}
          height={169}
          className="rounded-full w-20 h-20 md:w-32 md:h-32 object-cover"
        />

        <h1 className="text-xl md:text-2xl font-bold">@matheus13f</h1>
        <span className="text-lg md:text-xl">{pageInfo?.role}</span>
      </div>
      <div className="flex flex-col items-center space-y-5 p-3 gap-2 w-full text-white max-w-4xl ">
        {pageInfo?.socials?.map((social) => (
          <a
            className="bg-yellow rounded-md p-4 w-full drop-shadow-lg hover:scale-105 transition-transform duration-200 ease-out"
            href={social?.url}
            key={social._id}
          >
            {social.title}
          </a>
        ))}
      </div>
    </div>
  );
}
