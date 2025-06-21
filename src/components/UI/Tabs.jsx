import { motion } from "framer-motion";

// import Badge from "./Badge.jsx";

function Tab({ isSelected, category, onSelect, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <li className="relative">
        <button
          className={`flex cursor-pointer items-center border-none bg-transparent px-2 py-2 text-lg font-semibold text-gray-500 shadow-none  hover:text-gray-900 dark:text-gray-400 dark:hover:text-white ${
            isSelected ? "text-gray-900 dark:text-white" : ""
          }`}
          onClick={onSelect}
        >
          {children}
          {/* <Badge key={category}></Badge> */}
        </button>
        {isSelected && (
          <motion.div
            layoutId="tabs-underline"
            className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-blue-500"
          />
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
  return (
    <menu className="mb-4 flex list-none justify-center gap-4 p-0">
      {categories.map((category) => (
        <Tab
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
