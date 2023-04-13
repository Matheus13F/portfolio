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
      overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow/80"
    >
      <Header pageInfo={pageInfo} />

      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="border-b-[1px] border-gray-300 pb-10">
        <Background background={background} />
      </section>

      <section id="skills" className="border-b-[1px] border-gray-300 pb-10">
        <Experience experiences={experiences} />
      </section>

      <section id="projects">
        <HeroStartup />
      </section>

      <section id="skills" className="border-b-[1px] border-gray-300 pb-10">
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
