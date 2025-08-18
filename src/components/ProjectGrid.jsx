import { motion } from "framer-motion";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/UI/uiSlice";

export default function ProjectGrid({ projects, isDark }) {
  // const [hoveredProject, setHoveredProject] = useState(null);

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
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-96 md:max-w-5xl cursor-pointer"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          whileHover={{ y: -10, scale: 1.02 }}
          // onHoverStart={() => setHoveredProject(project.id)}
          // onHoverEnd={() => setHoveredProject(null)}
          onClick={() => handleClickProject(project.id)}
          className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
        >
          {/* Background Gradient */}
          {/* <div
            className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10`}
          ></div> */}

          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0"></div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              // animate={
              //   hoveredProject === project.id ? { scale: 1.2 } : { scale: 1 }
              // }
              // transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
            >
              {project.title}
            </motion.h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Effect Border */}
          {/* <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 pointer-events-none"></div> */}
        </motion.div>
      ))}
    </motion.div>
  );
}
