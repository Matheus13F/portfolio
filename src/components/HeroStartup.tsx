export function HeroStartup() {
  return (
    <div className="flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-auto items-center w-full max-h-[500px] bg-yellow text-white pb-20 px-5">
      <div className="max-w-7xl flex items-center justify-center">
        <div className="space-y-10 pl-0 md:pl-10 text-center max-w-3xl my-48">
          <h4 className="text-4xl font-semibold">My Startup Projects</h4>
          <p className="text-base">
            I&#39;m a bit of learning junky. Over the years I&#39;ve used
            hundreds of web and mobile apps across different industries and
            verticals. Ultimately, I decided it would be a fun challenge to try
            to design and build my own. So here are some of the projects
            I&#39;ve been working on. You can always check all my projects on my{" "}
            <a href="https://github.com/matheus13f" className="underline">
              Github here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
