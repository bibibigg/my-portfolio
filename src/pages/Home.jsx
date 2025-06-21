import MainIntro from "../components/MainIntro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <section id="home">
        <MainIntro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
