import { motion } from "framer-motion";

export default function MainIntroContent({
  isLargeScreen,
  left,
  right,
  // scale,
  opacity,
  // origin,
  // parentRef,
  title,
}) {
  const commonContent = (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="text-[42px] md:text-7xl font-bold mb-6"
      >
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={isLargeScreen ? { x: left } : { x: 0 }}
          className="inline-block text-gray-800 dark:text-white"
        >
          {title}
        </motion.span>
        <br />
        <motion.span
          style={isLargeScreen ? { x: right } : { x: 0 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block"
        >
          <p className="dark:text-white text-gray-800">
            <span className="text-yellow-500 dark:text-yellow-300">손병진</span>{" "}
            입니다
          </p>
        </motion.span>
      </motion.h1>
      {/* <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-xs md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
      >
        사용자에게 좋은 경험을 주기 위해 고민하고
        <br />
        성장할 수 있는 개발자가 되기위해 노력하고 있습니다.
      </motion.p> */}
    </>
  );

  if (isLargeScreen) {
    return (
      <motion.div
        // ref={parentRef}
        style={{ opacity: opacity }}
        className="fixed overflow-hidden max-w-[1980px] left-0 right-0 mx-auto top-16 min-h-screen flex flex-col justify-center text-center px-4"
      >
        {commonContent}
      </motion.div>
    );
  }

  return (
    <div className=" top-16 min-h-screen flex flex-col justify-center text-center px-4">
      {commonContent}
    </div>
  );
}
