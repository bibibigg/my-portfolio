import React, { useState, useEffect } from "react";

export default function useResponsiveGlassSize() {
  const [size, setSize] = useState({ width: 110, height: 50 });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        // Tailwind sm: 640px
        setSize({ width: 88, height: 44 });
      } else {
        setSize({ width: 110, height: 50 });
      }
    }
    handleResize(); // 초기값 설정
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
