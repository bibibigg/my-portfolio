import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HamburgerButton({ handleListToggle, isShowList }) {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 64; // 헤더 높이 (h-16 = 64px)
      const elementPosition = section.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    handleListToggle(); // 메뉴 닫기
  }

  return (
    <div className="flex items-center justify-center translate-y-0.5">
      <button
        onClick={handleListToggle}
        className="relative flex flex-col justify-center items-center gap-0.5"
      >
        <AnimatePresence>
          <motion.span
            className="block h-0.5 w-8 bg-black dark:bg-white"
            initial={false}
            animate={{
              opacity: isShowList ? 0 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <motion.span
          initial={false}
          animate={{ rotate: isShowList ? 45 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block h-0.5 w-8 bg-black dark:bg-white my-1"
        />
        <AnimatePresence>
          <motion.span
            initial={false}
            animate={{
              opacity: isShowList ? 0 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={"block h-0.5 w-8 bg-black dark:bg-white"}
          />
        </AnimatePresence>
        <AnimatePresence>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: isShowList ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={
              "block h-0.5 w-8 bg-black dark:bg-white -rotate-45 -translate-y-3"
            }
          />
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isShowList && (
          <motion.div
            key="showList"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg z-50 min-w-[120px]"
          >
            <ul className="flex flex-col gap-2 p-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Projects
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
