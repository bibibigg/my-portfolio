import { motion, useScroll, useTransform } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import useDynamicTransformOrigin from "../hooks/useDynamicTransformOrigin";
import MainIntroContent from "./MainIntroContent";

export default function MainIntro() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Hooks for animation ---
  const { scrollY } = useScroll();
  const nRef = useRef();
  const parentRef = useRef();
  const YScale = useTransform(scrollY, [0, 100, 200, 800], [1, 8, 60, 250]);
  const YOpcacity = useTransform(scrollY, [0, 500, 800], [1, 1, 0]);
  const origin = useDynamicTransformOrigin(nRef, parentRef);
  // ---

  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  let title;
  if (role === "publisher") {
    title = "웹 퍼블리셔";
  } else if (role === "fullstack") {
    title = "성장하는 개발자";
  } else {
    title = (
      <span>
        프론트
        <span ref={isLargeScreen ? nRef : null}>엔</span>드 개발자
      </span>
    );
  }

  return (
    <section className="relative min-h-[100vh] overflow-hidden" id="home">
      <MainIntroContent
        isLargeScreen={isLargeScreen}
        scale={YScale}
        opacity={YOpcacity}
        origin={origin}
        parentRef={parentRef}
        title={title}
      />
    </section>
  );
}
