import { motion, AnimatePresence } from "framer-motion";
import { CiCircleList } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ListButton({ isShowList, isDark, handleListToggle }) {
  return (
    <div className="relative flex items-center">
      <AnimatePresence mode="wait">
        {!isShowList ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CiCircleList
              size={32}
              onClick={handleListToggle}
              color={isDark ? "white" : "black"}
            />
          </motion.div>
        ) : (
          <motion.div
            key="close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <AiOutlineClose
              size={32}
              onClick={handleListToggle}
              color={isDark ? "white" : "black"}
            />
          </motion.div>
        )}
      </AnimatePresence>
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
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skils" className="block px-4 py-2 hover:bg-gray-100">
                  Skils
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
