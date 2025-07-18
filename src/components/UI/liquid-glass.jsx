import React, { useEffect, useRef, useState } from "react";

const LiquidGlass = ({ width, height, isDark }) => {
  // const containerRef = useRef(null);
  // const svgRef = useRef(null);
  const canvasRef = useRef(null);
  const feImageRef = useRef(null);
  const feDisplacementMapRef = useRef(null);

  // const [mouse, setMouse] = useState({ x: 0, y: 0 });
  // const [mouseUsed, setMouseUsed] = useState(false);

  const canvasDPI = 1;
  const id = useRef(`liquid-glass-${Math.random().toString(36).substr(2, 9)}`);

  // Utility functions
  const smoothStep = (a, b, t) => {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  };

  const length = (x, y) => Math.sqrt(x * x + y * y);

  const roundedRectSDF = (x, y, width, height, radius) => {
    const qx = Math.abs(x) - width + radius;
    const qy = Math.abs(y) - height + radius;
    return (
      Math.min(Math.max(qx, qy), 0) +
      length(Math.max(qx, 0), Math.max(qy, 0)) -
      radius
    );
  };

  const texture = (x, y) => ({ type: "t", x, y });

  // Update shader effect
  const updateShader = () => {
    const canvas = canvasRef.current;
    const feImage = feImageRef.current;
    const feDisplacementMap = feDisplacementMapRef.current;

    if (!canvas || !feImage || !feDisplacementMap) return;

    const context = canvas.getContext("2d");
    const w = width * canvasDPI;
    const h = height * canvasDPI;
    const data = new Uint8ClampedArray(w * h * 4);

    let maxScale = 0;
    const rawValues = [];

    // Fragment shader logic
    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);
      const uv = { x: x / w, y: y / h };

      const ix = uv.x - 0.5;
      const iy = uv.y - 0.5;
      const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
      const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
      const scaled = smoothStep(0, 1, displacement);
      const pos = texture(ix * scaled + 0.5, iy * scaled + 0.5);

      const dx = pos.x * w - x;
      const dy = pos.y * h - y;
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawValues.push(dx, dy);
    }

    maxScale *= 0.5;

    let index = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = rawValues[index++] / maxScale + 0.5;
      const g = rawValues[index++] / maxScale + 0.5;
      data[i] = r * 255;
      data[i + 1] = g * 255;
      data[i + 2] = 0;
      data[i + 3] = 255;
    }

    context.putImageData(new ImageData(data, w, h), 0, 0);
    feImage.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "href",
      canvas.toDataURL()
    );
    feDisplacementMap.setAttribute("scale", (maxScale / canvasDPI).toString());
  };

  // Mouse event handlers
  // const handleMouseMove = (e) => {
  //   // Update mouse position for shader
  //   if (containerRef.current) {
  //     const rect = containerRef.current.getBoundingClientRect();
  //     const newMouse = {
  //       x: (e.clientX - rect.left) / rect.width,
  //       y: (e.clientY - rect.top) / rect.height,
  //     };
  //     setMouse(newMouse);

  //     if (mouseUsed) {
  //       updateShader();
  //     }
  //   }
  // };

  // Initialize canvas and update shader
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = width * canvasDPI;
      canvas.height = height * canvasDPI;
      updateShader();
    }
  }, [width, height]);

  return (
    <>
      {/* SVG Filter Definition */}
      <svg
        // ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9998,
        }}
      >
        <defs>
          <filter
            id={`${id.current}_filter`}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width={width}
            height={height}
          >
            <feImage
              ref={feImageRef}
              id={`${id.current}_map`}
              width={width}
              height={height}
            />
            <feDisplacementMap
              ref={feDisplacementMapRef}
              in="SourceGraphic"
              in2={`${id.current}_map`}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Liquid Glass Container */}
      <div
        // ref={containerRef}
        style={{
          // position: "fixed",
          // left: "50%",
          // top: "50%",
          // transform: "translate(-50%, -50%)",
          width: `${width}px`,
          height: `${height}px`,
          overflow: "hidden",
          borderRadius: "150px",
          boxShadow: isDark
            ? `
  0 4px 24px 0 rgba(0, 100, 255, 0.10),
  0 1.5px 8px 0 rgba(255,255,255,0.18),
  0 0 0 1.5px rgba(255,255,255,0.18) inset,
  0 -8px 32px 0 inset rgba(0,0,0,0.10)
`
            : `
  0 8px 32px 0 rgba(0,0,0,0.15),      /* 더 진하고 넓은 외부 그림자 */
  0 2px 12px 0 rgba(0,0,0,0.12),      /* 추가 외부 그림자 */
  0 0 0 2px rgba(255,255,255,0.18) inset,  /* 내부 밝은 라인 */
  0 -8px 32px 0 inset rgba(0,0,0,0.10)     /* 내부 깊이감 */
`,
          backdropFilter: `url(#${id.current}_filter) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      {/* "0 4px 8px rgba(0, 0, 0, 0.25), 0 -10px 25px inset rgba(0, 0, 0, 0.15)", */}
      {/* backdropFilter: `url(#${id.current}_filter) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`, */}
      {/* Hidden Canvas for Displacement Map */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </>
  );
};

export default LiquidGlass;
