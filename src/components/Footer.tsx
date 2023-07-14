import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import urlFor from "../../lib/urlFor";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

export function Footer({ socials, pageInfo }: Props) {
  return (
    <div className="flex flex-col text-center md:text-left justify-evenly mx-auto items-center w-full h-auto bg-yellow text-white px-5">
      <div className="w-full md:w-4/5 h-auto shadow-3xl -mt-20 z-40 px-4 bg-green-dark flex flex-col md:flex-row divide-y-2 md:divide-x-[1px] rounded-lg">
        <article className="flex flex-col md:flex-row space-y-10 rounded-lg items-center justify-center flex-shrink-0 w-full px-2 py-6">
          <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
            <span className="text-3xl font-bold">Comece um projeto</span>
          </div>
          <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
            <p className="text-white">
              Interessado em trabalhar comigo? Vamos conversar. Eu pago o café.
            </p>
          </div>
          <div className="w-full h-auto py-5 flex flex-col items-center text-center space-y-5">
            <a
              href="/contato"
              className="p-5 rouinded border-2 border-yellow rounded-lg hover:bg-yellow/90 transition-colors ease-in flex gap-5"
            >
              <RocketLaunchIcon className="h-7 w-7 text-white" />
              Vamos começar
            </a>
          </div>
        </article>
      </div>

      <div className="h-auto space-y-14 pb-16 flex flex-col items-center justify-center mt-28 w-full px-5">
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="profile"
          width={160}
          height={169}
          className="rounded-lg w-20 h-20 object-cover"
        />
        <span className="text-white text-2xl max-w-md text-center">
          Vivendo, Aprendendo, & Evoluindo um dia de cada vez.
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

        <span className="text-white text-md">
          Feito a mão por eu mesmo © 2023
        </span>
      </div>
    </div>
  );
}
