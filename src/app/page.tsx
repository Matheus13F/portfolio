import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HeroStartup } from "./components/HeroStartup";
import { Experience } from "./components/Experience";
import { Background } from "./components/Background";
import { fetchExepriences } from "./utils/fetchExperiences";
import { fetchPageInfo } from "./utils/fetchPageInfo";
import { fetchProjects } from "./utils/fetchProjects";
import { fetchSocials } from "./utils/fetchSocials";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
import { fetchBackground } from "./utils/fetchBackground";
import { fetchTestimonial } from "./utils/fetchTestimonial";
import project from "../../schemas/project";
import { HeaderContactMe } from "./components/HeaderContactMe";

export default async function Home() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExepriences();
  const background: Background[] = await fetchBackground();
  const socials: Social[] = await fetchSocials();
  const testimonial: Testimonial[] = await fetchTestimonial();
  const projects: Project[] = await fetchProjects();

  return (
    <div
      className="h-screen overflow-scroll z-0 
      overflow-y-scroll overflow-x-hidden scrollbar md:scrollbar-thin md:scrollbar-track-gray-400/20 md:scrollbar-thumb-yellow/80 md:scrollbar-track-gray-900 scrollbar-none"
    >
      <HeaderContactMe />

      <section>
        <Hero pageInfo={pageInfo} />
      </section>

      <section>
        <About pageInfo={pageInfo} />
      </section>

      <section className="border-b-[1px] border-gray-300 pb-10">
        <Background background={background} />
      </section>

      <section className="border-b-[1px] border-gray-300 pb-10">
        <Experience experiences={experiences} />
      </section>

      <section>
        <HeroStartup />
      </section>

      <section className="border-b-[1px] border-gray-300 pb-10">
        <Projects projects={projects} />
      </section>

      <section>
        <Testimonials testimonial={testimonial} />
      </section>

      <section>
        <Footer socials={socials} pageInfo={pageInfo} />
      </section>
    </div>
  );
}
