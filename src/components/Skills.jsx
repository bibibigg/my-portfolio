import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import CategoryTabs from "./UI/Tabs";
import { skillsData, categories } from "../data/skills";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleCategoryClick(category) {
    setSelectedCategory((prev) => (prev === category ? "all" : category));
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-5">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-left mb-12 w-full max-w-6xl"
      >
        <div className="border-b-2 border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <h1 className="text-6xl md:text-8xl font-black dark:text-white tracking-tight break-words">
            Skills
          </h1>
        </div>

        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
          아래의 기술을 사용할 수 있습니다.
        </h2>
      </motion.div>
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryClick}
      />
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className=" grid grid-cols-4 gap-x-3 gap-y-4  text-lg mx-auto"
        >
          {skillsData.map((item) => (
            <motion.div
              key={item.skills}
              className={
                "group flex flex-col w-12 h-12 justify-center items-center  rounded-2xl shadow-md bg-white dark:bg-gray-100"
              }
              animate={{
                filter:
                  selectedCategory !== "all" &&
                  item.category !== selectedCategory
                    ? "blur(4px)"
                    : "blur(0px)",
                opacity:
                  selectedCategory !== "all" &&
                  item.category !== selectedCategory
                    ? 0.5
                    : 1,
                // zIndex: 1,
              }}
              whileHover={{
                zIndex: 50, // hover 시 z-index를 animate로 제어
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon icon={item.icon} width="40" />
              {(selectedCategory === item.category ||
                selectedCategory === "all") && (
                <span className="absolute pointer-events-none -bottom-10  w-max rounded-md  bg-gray-900 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
                  {item.skills}
                </span>
              )}
              {/* <span className="mt-2 text-sm">{item.skils}</span> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
