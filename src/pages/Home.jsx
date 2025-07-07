import MainIntro from "../components/MainIntro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/UI/uiSlice";
import ProjectModal from "../components/modals/ProjectModal";
import { projects as projectsData } from "../data/projects";

export default function HomePage() {
  const { isDark } = useSelector((state) => state.ui);
  const { isShowModal, selectedProject } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function handleCloseModal() {
    dispatch(uiActions.closeModal());
    dispatch(uiActions.clearSelectedProject());
  }

  const project = projectsData.find((item) => item.id === selectedProject);

  return (
    <>
      {isShowModal && (
        <ProjectModal
          project={project}
          onClose={handleCloseModal}
          isDark={isDark}
        />
      )}
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
