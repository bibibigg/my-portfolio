import { motion, useScroll, useTransform } from "framer-motion";

export default function MainIntro() {
  const { scrollY } = useScroll();
  const yIntro = useTransform(scrollY, [0, 100], [0, -200]);
  const opacityIntro = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );

  return (
    <>
      <motion.div
        style={{
          y: yIntro,
          opacity: opacityIntro,
        }}
        id="home"
        className=" min-h-screen flex flex-col justify-center text-center px-4 max-w-4xl  mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-800 dark:text-white"
          >
            프론트엔드 개발자
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
          >
            손병진
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-800 dark:text-white"
          >
            입니다.
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xs md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
        >
          사용자에게 좋은 경험을 주기 위해 고민하고
          <br />
          성장할 수 있는 개발자가 되기위해 노력하고 있습니다.
        </motion.p>
      </motion.div>
    </>
  );
}
