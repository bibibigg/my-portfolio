import { motion } from "framer-motion";

/**
 * 메인 인트로의 UI를 표시하는 프레젠테이셔널 컴포넌트.
 * 모든 상태와 로직은 부모 컴포넌트로부터 props로 전달받습니다.
 */
export default function MainIntroContent({
  isLargeScreen,
  scale,
  origin,
  parentRef,
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
          className="text-gray-800 dark:text-white"
        >
          {title}
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-orange-500"
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
    </>
  );

  if (isLargeScreen) {
    return (
      <motion.div
        ref={parentRef}
        style={{ scale: scale, transformOrigin: origin }}
        className="fixed top-16 min-h-screen flex flex-col justify-center text-center px-4 w-full"
      >
        {commonContent}
      </motion.div>
    );
  }

  return (
    <div className=" top-16 min-h-screen flex flex-col justify-center text-center px-4 w-full">
      {commonContent}
    </div>
  );
}
