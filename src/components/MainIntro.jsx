import { motion, useScroll, useTransform } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MainIntroContent from "./MainIntroContent";

export default function MainIntro() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

  // 브라우저 사이즈 체크
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- 스크롤 애니메이션 훅 ---
  const { scrollY } = useScroll();
  const xLeft = useTransform(scrollY, [0, 700], ["0%", "210%"]);
  const xRight = useTransform(scrollY, [0, 700], ["0%", "-260%"]);
  const YOpcacity = useTransform(scrollY, [0, 500, 800], [1, 1, 0]);
  // ---

  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  let title;
  if (role === "publisher") {
    title = "웹 퍼블리셔";
  } else if (role === "fullstack") {
    title = "성장하는 개발자";
  } else {
    title = <span>프론트엔드 개발자</span>;
  }

  return (
    <section className="relative min-h-[100vh] overflow-hidden" id="home">
      <MainIntroContent
        isLargeScreen={isLargeScreen}
        // scale={YScale}
        left={xLeft}
        right={xRight}
        opacity={YOpcacity}
        // origin={origin}
        // parentRef={parentRef}
        title={title}
      />
    </section>
  );
}
