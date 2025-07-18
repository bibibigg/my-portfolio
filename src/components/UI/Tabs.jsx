import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import LiquidGlass from "./liquid-glass";
import useResponsiveGlassSize from "../../hooks/useResponsiveGlassSize";

// import Badge from "./Badge.jsx";

function Tab({ isDark, isSelected, category, onSelect, children }) {
  const glassSize = useResponsiveGlassSize();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <li className="relative">
        <button
          className={`flex cursor-pointer  items-center justify-center border-none px-2 py-2 text-sm sm:text-lg sm:w-28 min-w-20 font-semibold text-gray-500 shadow-none  hover:text-gray-900 dark:text-gray-400 dark:hover:text-white ${
            isSelected ? "text-gray-900 dark:text-white" : ""
          }`}
          onClick={onSelect}
        >
          {children}
          {/* <Badge key={category}></Badge> */}
        </button>
        {isSelected && (
          <>
            <motion.div
              layoutId="liquid-galss"
              className="absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <LiquidGlass
                isDark={isDark}
                width={glassSize.width}
                height={glassSize.height}
              />
            </motion.div>
            {/* <motion.div
              layoutId="tabs-underline"
              className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-blue-500"
            ></motion.div> */}
          </>
        )}
      </li>
    </motion.div>
  );
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const isDark = useSelector((state) => state.ui.isDark);
  return (
    <menu className="mb-4 flex list-none justify-center gap-4 p-0">
      {categories.map((category) => (
        <Tab
          isDark={isDark}
          key={category}
          isSelected={selectedCategory === category}
          onSelect={() => onSelectCategory(category)}
        >
          {category}
        </Tab>
      ))}
    </menu>
  );
}
