import { useState, useEffect } from "react";

// 특정 요소의 좌표값을 구하기 위한 커스텀 훅으로 해당 요소의 참조값과 부모 요소의 참조값이 필요
export default function useDynamicTransformOrigin(targetRef, parentRef) {
  const [origin, setOrigin] = useState("center");

  useEffect(() => {
    const updateOrigin = () => {
      if (targetRef.current && parentRef.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        // 부모 요소를 기준으로 대상 요소의 중심 좌표 계산
        let x = targetRect.left + targetRect.width / 2 - parentRect.left;
        let y = targetRect.top + targetRect.height / 2 - parentRect.top;

        // 화면 크기에 따른 보정값 적용 (예: 'ㅇ' 위치 보정) 필요없을 시 해당 부분 주석처리
        const isMobile = window.innerWidth < 640; // Tailwind's 'sm' breakpoint
        if (isMobile) {
          x -= targetRect.width * 0.24;
          y += targetRect.height * 0.32;
        } else {
          x -= targetRect.width * 0.2;
          y += targetRect.height * 0.18;
        }
        setOrigin(`${x}px ${y}px`);
      }
    };

    updateOrigin();
    // window.addEventListener("resize", updateOrigin);

    // return () => {
    //   window.removeEventListener("resize", updateOrigin);
    // };
  }, [targetRef, parentRef]);

  return origin;
}
