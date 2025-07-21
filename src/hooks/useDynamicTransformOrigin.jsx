import { useState, useEffect } from "react";

//스크롤이 변경 및 브라우저 사이즈 변경 시 '엔'의 동그라미 부분에 정확한 좌표가 틀어짐
// 임시 조치로 값을 수정하였으나 역시 브라우저 사이즈 변경 시 확대되는 좌표가 변경됨
// 확대되는 UI변경 필요
export default function useDynamicTransformOrigin(targetRef, parentRef) {
  const [origin, setOrigin] = useState("center");

  useEffect(() => {
    const updateOrigin = () => {
      if (targetRef.current && parentRef.current) {
        const target = targetRef.current;

        const xInParent = target.offsetLeft + target.offsetWidth / 2;
        const yInParent = target.offsetTop + target.offsetHeight / 2;

        const isMobile = window.innerWidth < 640;
        let x, y;
        if (isMobile) {
          x = xInParent - target.offsetWidth * 0.24;
          y = yInParent + target.offsetHeight * 0.32;
        } else {
          x = xInParent - target.offsetWidth * 0;
          y = yInParent + target.offsetHeight * 3.25;
        }

        setOrigin(`${x}px ${y}px`);
      }
    };

    const frameId = requestAnimationFrame(updateOrigin);

    window.addEventListener("resize", updateOrigin);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateOrigin);
    };
  }, [targetRef, parentRef]);

  return origin;
}
