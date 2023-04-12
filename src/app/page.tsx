import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HeroStartup } from "./components/HeroStartup";
import { Experience } from "./components/Experience";
import { Background } from "./components/Background";
import { fetchExepriences } from "./utils/fetchExperiences";
import { fetchPageInfo } from "./utils/fetchPageInfo";
import { fetchProjects } from "./utils/fetchProjects";
import { fetchSkills } from "./utils/fetchSkills";
import { fetchSocials } from "./utils/fetchSocials";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";

export default async function Home() {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExepriences();
  const skills: Skill[] = await fetchSkills();
  // const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return (
    <div
      className="h-screen overflow-scroll z-0 
      overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#EBA417]/80"
    >
      <Header socials={socials} />

      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="border-b-[1px] border-gray-300 pb-10">
        <Background experiences={experiences} />
      </section>

      <section id="skills" className="border-b-[1px] border-gray-300 pb-10">
        <Experience experiences={experiences} />
      </section>

      <section id="projects">
        <HeroStartup />
      </section>

      <section id="skills" className="border-b-[1px] border-gray-300 pb-10">
        <Projects experiences={experiences} />
      </section>

      <section>
        <Testimonials experiences={experiences} />
      </section>

      <section>
        <Footer socials={socials} />
      </section>
    </div>
  );
}
