import Image from "next/image";
import urlFor from "../../../lib/urlFor";

type Props = {
  experiences: Experience[];
};

export function Experience({ experiences }: Props) {
  return (
    <div className="flex relative flex-col text-left max-w-7xl px-5 justify-evenly mx-auto items-center h-fit py-10 space-y-10">
      <h3 className=" text-gray-800 text-lg sm:text-xl">
        My Recent Work Experience
      </h3>

      <h3 className="text-gray-500 text-sm">
        Here are a few past projects I&#39;ve worked on since 2019
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-12 content-center">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="bg-white flex flex-col rounded-lg min-h-[19rem] p-8"
          >
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-bold text-center mb-4">
                {exp.company}
              </h3>
              <p className="text-base">{exp.points}</p>
            </div>
            <div className="flex items-center w-full justify-center">
              <Image
                src={urlFor(exp.companyImage).url()}
                alt="profile"
                width={160}
                height={160}
                className="w-28 h-24 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://www.linkedin.com/in/matheus13f/"
        className="p-5 bg-yellow rounded-lg hover:bg-yellow/90 transition-colors ease-in text-white"
      >
        See more on LinkedIn
      </a>
    </div>
  );
}
