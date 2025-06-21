import showPetImage from "../assets/showPet.png";
import carrotThunderImage from "../assets/CarrotThunder.png";
import myPortfolioImage from "../assets/my-portfolio.png";
import SnartPlateImage from "../assets/SmartPlate.png";

export const projects = [
  {
    id: 1,
    title: "Show Pet",
    description:
      "반려동물 사진을 등록하여 다른 사용자와 소통할 수 있는 웹 서비스",
    tags: ["hTML", "CSS", "Javascript", "Java", "Springboot", "NaverCloud"],
    image: showPetImage,
    github: "https://github.com/ncp7-team2/show_pet",
    demo: "https://www.youtube.com/watch?v=HI4yAG8Wv0U",
    color: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "CarroThunder",
    description: "중고 거래 플랫폼",
    tags: ["React", "Java", "Springboot", "Docker", "Jenkins", "NaverCloud"],
    image: carrotThunderImage,
    github: "https://github.com/NC7-CarroThunder",
    demo: "https://www.youtube.com/watch?v=ulEcE30L-uc",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 3,
    title: "SmartPlate",
    description:
      "사용자의 신체 정보와 식사 정보를 기반으로 식사 칼로리를 관리하는 웹 어플리케이션",
    tags: [
      "React",
      "Redux",
      "Tanstack-Query",
      "React-Router",
      "Tailwind CSS",
      "Framer-motion",
      "vite",
    ],
    image: SnartPlateImage,
    github: "https://github.com/bibibigg/SmartPlate",
    demo: "",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "my-portfolio",
    description: "나의 포트폴리오 사이트",
    tags: ["React", "Redux", "React-Router", "Tailwind CSS", "Framer-motion"],
    image: myPortfolioImage,
    github: "",
    demo: "",
    color: "from-pink-500 to-violet-600",
  },
];
