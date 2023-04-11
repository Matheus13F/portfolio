import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { fetchExepriences } from "./utils/fetchExperiences";
import { fetchPageInfo } from "./utils/fetchPageInfo";
import { fetchProjects } from "./utils/fetchProjects";
import { fetchSkills } from "./utils/fetchSkills";
import { fetchSocials } from "./utils/fetchSocials";

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
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="border-b-[1px] border-gray-300 pb-10">
        <Skills experiences={experiences} />
      </section>

      {/* <section id="projects" >
        <Projects projects={projects} />
      </section> */}

      <section id="contact">
        <ContactMe pageInfo={pageInfo} />
      </section>
    </div>
  );
}
