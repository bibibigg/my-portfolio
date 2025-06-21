import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen  py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-30 "
        >
          <h2 className="text-6xl md:text-8xl font-black dark:text-white  mb-4 tracking-tight">
            ABOUT / ME
          </h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -1 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 p-8 border-4 border-black dark:border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-200 relative"
          >
            <div className="absolute -top-4 -right-4 bg-orange-500 dark:bg-orange-400 text-white dark:text-black w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-black dark:border-gray-200  rotate-12">
              01
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-black dark:text-gray-200 mb-6 uppercase tracking-tight">
              개발을 시작하며
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
              직관적으로 다가오는 프론트엔드에 관심이 생기게 되어 사용자에게
              좋은 경험을 주기 위해 프론트엔드를 공부하며 고민하고 있습니다.
            </p>
          </motion.div>

          {/* Second Section */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 1 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.4 },
            }}
            whileHover={{ rotate: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
            className="bg-black dark:bg-gray-900 text-white dark:text-gray-100  p-8 border-4 border-white dark:border-gray-200 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] dark:shadow-gray-200 relative ml-auto max-w-3xl"
          >
            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-200 text-black dark:text-gray-900 w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-black dark:border-gray-700 -rotate-12">
              02
            </div>
            <h1 className="text-4xl md:text-5xl font-black dark:text-gray-200 mb-6 uppercase tracking-tight">
              꾸준한 성장
            </h1>
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              어제의 나와 비교하여 더 나은 사람이 될 수 있도록 조금이라도
              학습하려 하고있으며 프로젝트를 통해 학습했던 부분을 복습하고 직접
              구현해보며 오류가 발생하는 것을 해결하면서 문제를 해결하는
              즐거움을 느끼고 있습니다.
            </p>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="text-black font-black text-2xl md:text-4xl transform -rotate-1 opacity-60">
            KEEP GROWING / KEEP LEARNING
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
