import { AnimatePresence, motion } from "framer-motion";
import { MdSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

export default function DarkModeButton({ isDark, handleThemeToggle }) {
  return (
    <AnimatePresence mode="wait">
      {!isDark ? (
        <motion.div
          key="sun"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          onClick={handleThemeToggle}
        >
          <MdSunny color={isDark ? "white" : "black"} size={32} />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          onClick={handleThemeToggle}
        >
          <FaRegMoon color={isDark ? "white" : "black"} size={32} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
