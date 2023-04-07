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
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return (
    <div
      className="h-screen snap-y snap-mandatory overflow-scroll z-0 
      overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#EBA417]/80"
    >
      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe pageInfo={pageInfo} />
      </section>
    </div>
  );
}
