import { BackgroundCard } from "./BackgroundCard";

type Props = {
  background: Background[];
};

export function Background({ background }: Props) {
  return (
    <div className="flex relative flex-col text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center h-fit">
      <div className="w-full h-auto shadow-3xl -mt-20 z-40 bg-white flex flex-col md:flex-row divide-y-2 md:divide-x-[1px] divide-gray-300/80">
        {background.map((item) => (
          <BackgroundCard key={item._id} background={item} />
        ))}
      </div>
    </div>
  );
}
