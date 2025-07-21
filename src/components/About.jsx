import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";

export default function About() {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"],
  });
  const xFromRight = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);
  const xFromLeft = useTransform(scrollYProgress, [0.5, 0.9], ["-100%", "0%"]);
  const xFromRightOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xFromLeftOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.9, // 컴포넌트의 50%가 뷰포트에 들어오면 트리거
    triggerOnce: false,
  });

  return (
    <section ref={aboutRef} className="relative min-h-[300vh]" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        ref={inViewRef}
        className="sticky top-16 min-h-screen py-20 px-4 overflow-hidden"
      >
        <div className="max-w-4xl mx-auto relative z-5">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0 }}
            // whileInView={{ opacity: 1, x: 0 }}
            className="text-center mb-30 "
          >
            <h2 className="text-6xl md:text-8xl font-black dark:text-white  mb-4 tracking-tight">
              ABOUT / ME
            </h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              style={{ x: xFromRight, opacity: xFromRightOpacity }}
              className="bg-white dark:bg-gray-900 p-8 border-4 border-black dark:border-gray-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-gray-200 relative"
            >
              <div className="absolute -top-4 -right-4 bg-orange-500 dark:bg-orange-400 text-white dark:text-black w-12 h-12 flex items-center justify-center font-black text-xl border-4 border-black dark:border-gray-200  rotate-12">
                01
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-black dark:text-gray-200 mb-6 uppercase tracking-tight">
                나의 가치관
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
                새로운 기술을 배우고 문제를 해결하는 과정에서 큰 즐거움을 느끼며
                단순히 기능을 구현하는 것을 넘어 사용자가 더 쉽고 편리하게
                서비스를 이용할 수 있도록 고민합니다.
              </p>
            </motion.div>

            {/* Second Section */}
            <motion.div
              style={{ x: xFromLeft, opacity: xFromLeftOpacity }}
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
                학습하려 하고있으며 프로젝트를 통해 학습했던 부분을 복습하고
                직접 구현해보며 오류가 발생하는 것을 해결하면서 문제를 해결하는
                즐거움을 느끼고 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
