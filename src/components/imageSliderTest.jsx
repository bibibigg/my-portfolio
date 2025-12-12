import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import showPetImage from "../assets/showPet.png";
import carrotThunderImage from "../assets/CarrotThunder.png";
import myPortfolioImage from "../assets/my-portfolio.png";
import SnartPlateImage from "../assets/SmartPlate.png";

const imageData = [
  {
    src: showPetImage,
    title: "쇼펫",
    desc: "SHOWPET",
    color: "bg-gray-600",
  },
  {
    src: carrotThunderImage,
    title: "캐롯썬더",
    desc: "CARROT THUNDER",
    color: "bg-green-500",
  },
  {
    src: myPortfolioImage,
    title: "포트폴리오",
    desc: "MY PORTFOLIO",
    color: "bg-red-500",
  },
  {
    src: SnartPlateImage,
    title: "스마트플레이트",
    desc: "SMART PLATE",
    color: "bg-yellow-500",
  },
];

export default function ImageSliderTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [x, setX] = useState(0);

  // 화면 크기에 따라 보여질 이미지 개수 계산
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleItems(1); // 모바일: 1개
      } else if (width < 1024) {
        setVisibleItems(2); // 태블릿: 2개
      } else {
        setVisibleItems(3); // 데스크톱: 3개
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  // 현재 보여줄 이미지 추출, 렌더링할 이미지는 보여질 이미지보다 많이
  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < visibleItems + 1; i++) {
      const index = (currentIndex + i) % imageData.length;
      result.push(imageData[index]);
    }
    return result;
  };
  const visibleImages = getVisibleImages();

  // 동적 너비 클래스 계산
  const getImageWidthClass = () => {
    switch (visibleItems) {
      case 1:
        return "w-full";
      case 2:
        return "w-1/2";
      case 3:
        return "w-1/3";
      default:
        return "w-1/3";
    }
  };

  // 슬라이드 이동 계산
  // const getTranslateX = () => {
  //   const itemWidth = 100 / visibleItems;
  //   return -currentIndex * itemWidth;
  // };

  function getTranslateX(direction) {
    const itemWidth = 100 / visibleItems;
    return direction * itemWidth;
  }

  // 슬라이드 애니메이션 효과를 적용하기 위해
  // 슬라이드 이동 시 transrateX를 주었다가 다시 0으로 돌아오게하는 로직이 필요 상태 혹은 useEffect를 사용해야할듯

  function handleNext() {
    setX(getTranslateX(-1));
    setTimeout(() => {
      // currentIndex를 +1 해서 DOM을 교체
      setCurrentIndex((prev) => (prev + 1) % imageData.length);
      // x를 0으로 순간 초기화 (transition 없이)
      setX(0);
    }, 500);
    // setCurrentIndex((prev) => (prev + 1) % imageData.length);
  }

  function handlePrev() {
    setX(getTranslateX(1));
    setTimeout(() => {
      // currentIndex를 -1 해서 DOM을 교체
      setCurrentIndex(
        (prev) => (prev - 1 + imageData.length) % imageData.length
      );
      // x를 0으로 순간 초기화 (transition 없이)
      setX(0);
    }, 500);
  }

  return (
    <div className="relative w-full max-w-4xl  mx-auto bg-black p-6 rounded-lg">
      <div className="relative overflow-hidden">
        {/* 슬라이더 컨테이너 */}
        <motion.div
          animate={{ x: `${x}%` }}
          transition={{ duration: x === 0 ? 0 : 0.5 }}
          className="flex gap-4"
          // animate={{ x: `${getTranslateX()}%` }}
        >
          {visibleImages.map((image, index) => (
            <div
              key={`${image.id}-${currentIndex}-${index}`}
              className={`flex-shrink-0 ${getImageWidthClass()}`}
            >
              <div
                className={`${image.color} rounded-lg overflow-hidden relative h-80`}
              >
                {/* 이미지 컨테이너 */}
                <div className="h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">{image.title}</div>
                    <div className="text-sm opacity-80">{image.subtitle}</div>
                  </div>
                </div>

                {/* 이벤트 정보 */}
                {/* <div className="absolute top-4 right-4 text-yellow-300 text-sm">
                  25.9.20 - 21
                  <br />
                  창원시 정조동공원
                </div> */}

                {/* 로고 */}
                {/* <div className="absolute bottom-4 left-4">
                  <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">
                    GYEONGGI INMUJE
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 이전 버튼 */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
        >
          <GoChevronLeft size={24} />
        </button>

        {/* 다음 버튼 */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
        >
          <GoChevronRight size={24} />
        </button>
      </div>

      {/* 인디케이터 */}
      <div className="flex justify-center mt-4 gap-2">
        {imageData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* 현재 상태 표시 */}
      <div className="text-center mt-4 text-white">
        <p>현재 인덱스: {currentIndex}</p>
        <p>화면 크기별 표시 개수: {visibleItems}개</p>
        <p>
          표시 중인 이미지: {visibleImages.map((img) => img.title).join(", ")}
        </p>
      </div>
    </div>
  );
}
