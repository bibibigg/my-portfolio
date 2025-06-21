export const skillsData = [
  {
    category: "프론트엔드",
    skills: "Javascript",
    icon: "logos:javascript",
    description: "동적 웹 개발을 위한 핵심 언어",
  },
  {
    category: "프론트엔드",
    skills: "React",
    icon: "logos:react",
    description: "사용자 인터페이스 구축을 위한 프레임워크",
  },
  {
    category: "프론트엔드",
    skills: "HTML",
    icon: "logos:html-5",
    description: "웹 페이지의 구조를 설계하는 마크업 언어",
  },
  {
    category: "프론트엔드",
    skills: "CSS",
    icon: "logos:css-3",
    description: "웹 페이지의 스타일과 레이아웃을 담당",
  },
  {
    category: "라이브러리",
    skills: "Redux",
    icon: "logos:redux",
    description: "전역 상태 관리",
  },
  {
    category: "라이브러리",
    skills: "Tanstack-Query",
    icon: "logos:react-query-icon",
    description: "서버 상태 관리 및 캐싱 처리",
  },
  {
    category: "라이브러리",
    skills: "React-router",
    icon: "logos:react-router",
    description: "SPA(단일 페이지 애플리케이션) 라우팅 라이브러리",
  },
  {
    category: "라이브러리",
    skills: "Tailwind",
    icon: "logos:tailwindcss-icon",
    description: "유틸리티 기반의 CSS 프레임워크",
  },
  {
    category: "라이브러리",
    skills: "framer-motion",
    icon: "logos:framer",
    description: "React를 위한 애니메이션 라이브러리",
  },
  {
    category: "환경 및 배포",
    skills: "vite",
    icon: "devicon:vitejs",
    description: "빠르고 간편한 프론트엔드 개발 환경 및 번들러",
  },
  {
    category: "환경 및 배포",
    skills: "github",
    icon: "devicon:github",
    description: "코드 버전 관리 및 협업을 위한 플랫폼",
  },
  {
    category: "백엔드",
    skills: "Java",
    icon: "devicon:java",
    description: "객체지향 프로그래밍 언어로, 백엔드 서버 개발에 활용",
  },
];

// 카테고리 목록 추출
export const categories = [...new Set(skillsData.map((item) => item.category))];
