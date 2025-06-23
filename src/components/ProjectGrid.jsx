import { motion } from "framer-motion";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/UI/uiSlice";
import { Icon } from "@iconify/react";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function ProjectGrid({ projects, isDark }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClickProject(id) {
    dispatch(uiActions.openModal());
    dispatch(uiActions.selectProject(id));
    // navigate(`/project/${id}`);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          whileHover={{ y: -10, scale: 1.02 }}
          onHoverStart={() => setHoveredProject(project.id)}
          onHoverEnd={() => setHoveredProject(null)}
          onClick={() => handleClickProject(project.id)}
          className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl"
        >
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          ></div>

          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Floating Action Buttons */}

            {/* github button */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl "
              >
                {isDark ? (
                  <FaGithub color="white" size={20} />
                ) : (
                  <FaGithub size={20} />
                )}
              </motion.a>

              {/* youtube button */}
              {project.demo !== "" && (
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl "
                >
                  {isDark ? (
                    <FaYoutube color="white" size={20} />
                  ) : (
                    <FaYoutube size={20} />
                  )}
                </motion.a>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600"
              animate={
                hoveredProject === project.id ? { scale: 1.2 } : { scale: 1 }
              }
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
            >
              {project.title}
            </motion.h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white  cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 pointer-events-none"></div>
        </motion.div>
      ))}
    </motion.div>
  );
}
