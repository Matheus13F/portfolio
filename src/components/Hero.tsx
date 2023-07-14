import Image from "next/image";
import urlFor from "../../lib/urlFor";

type Props = {
  pageInfo: PageInfo;
};

export function Hero({ pageInfo }: Props) {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center text-center relative h-[calc(100vh-96px)]">
      <div className="z-20 space-y-10 flex flex-col justify-evenly sm:justify-normal overflow-hidden mt-20 md:mt-32 px-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold scroll-px-10 text-gray-700">
          {pageInfo?.role}
        </h1>

        <div className="w-full p-2 flex justify-center">
          <p className="text-gray-800 max-w-2xl w-full text-center">
            Eu escrevo códigos, desenvolvo coisas simples e bonitas, compartilho
            meu conhecimento e amo o que eu faço.
          </p>
        </div>

        <Image
          src={urlFor(pageInfo?.avatar).url()}
          alt="profile"
          width={500}
          height={500}
          className="relative rounded-full bg-yellow w-40 mx-auto object-cover mb-0 sm:mb-56 md:mb-52"
        />
        <Image
          src={urlFor(pageInfo?.backgroundImage).url()}
          alt="profile"
          width={500}
          height={500}
          className="hidden sm:inline-block w-[600px] mx-auto object-cover"
        />
      </div>
    </div>
  );
}
