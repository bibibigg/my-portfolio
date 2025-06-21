import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectGrid from "./ProjectGrid";
import { useSelector } from "react-redux";

export default function Projects() {
  const { isDark } = useSelector((state) => state.ui);

  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen items-center justify-center gap-5  pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=" border-b-2 w-4xl border-gray-200 dark:border-gray-700 pb-4 mb-6"
      >
        <h1 className="text-6xl md:text-8xl font-black dark:text-white tracking-tight">
          Project
        </h1>
      </motion.div>

      <ProjectGrid isDark={isDark} projects={projects} />
    </div>
  );
}
