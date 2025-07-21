import { motion, useScroll, useTransform } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
// import ImageSliderTest from "./imageSliderTest";

export default function MainIntro() {
  const { scrollY } = useScroll();
  // const yIntro = useTransform(scrollY, [0, 100], [0, -200]);
  // const YScale = useTransform(
  //   scrollY,
  //   [0, 100, 200, 300, 500, 800],
  //   [1, 1.5, 4, 10, 18, 170]
  // );
  const YScale = useTransform(scrollY, [0, 100, 200, 800], [1, 8, 60, 250]);

  const [origin, setOrigin] = useState("50% 50%");
  const nRef = useRef();
  const parentRef = useRef();

  // "엔" 기준으로 스케일을 키우기 위해 브라우저 기준으로 좌표를 구하는 부분
  useEffect(() => {
    const updateOrigin = () => {
      if (nRef.current && parentRef.current) {
        const nRect = nRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();
        //transformOrigin은 브라우저 중심이 아닌 자기 중심 기준이기에 "엔"의 중심 좌표를 부모 기준으로 변환
        let x = nRect.left + nRect.width / 2 - parentRect.left;
        let y = nRect.top + nRect.height / 2 - parentRect.top;

        // 'ㅇ'의 위치로 보정 및 화면크기별 보정값
        const isMobile = window.innerWidth < 640; // Tailwind sm 기준
        if (isMobile) {
          x = x - nRect.width * 0.24; // 모바일: 왼쪽으로 24%
          y = y + nRect.height * 0.32; // 모바일: 아래로 32%
        } else {
          x = x - nRect.width * 0.2; // 데스크탑: 왼쪽으로 20%
          y = y + nRect.height * 0.18; // 데스크탑: 아래로 18%
        }
        setOrigin(`${x}px ${y}px`);
      }
    };
    updateOrigin();
    // window.addEventListener("resize", updateOrigin);

    // return () => {
    //   window.removeEventListener("resize", updateOrigin);
    // };frontend
  }, []);

  const [searchParams] = useSearchParams();
  let title = (
    <span>
      프론트
      <span ref={nRef}>엔</span>드 개발자
    </span>
  );
  // let title = "프론트엔드 개발자";
  const role = searchParams.get("role");
  if (role === "publisher") {
    title = "웹 퍼블리셔";
  }
  if (role === "fullstack") {
    title = "성장하는 개발자";
  }

  return (
    <section className="relative min-h-[100vh] overflow-hidden" id="home">
      {/* <ImageSliderTest /> */}
      <motion.div
        ref={parentRef}
        style={{
          // y: yIntro,
          scale: YScale,
          transformOrigin: origin,
        }}
        className="fixed top-16 min-h-screen flex flex-col justify-center text-center px-4 w-full"
      >
        {/* <p>SON</p> */}
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
      </motion.div>
    </section>
  );
}
