import showPetImage from "../assets/showPet.png";
import carrotThunderImage from "../assets/CarrotThunder.png";
import myPortfolioImage from "../assets/my-portfolio.png";
import SnartPlateImage from "../assets/SmartPlate.png";

export const projects = [
  {
    id: 1,
    title: "Show Pet",
    description:
      "반려동물 사진을 등록하여 다른 사용자와 소통할 수 있는 웹 프로젝트",
    tags: ["HTML", "CSS", "Javascript", "Java", "Springboot", "NaverCloud"],
    member: "6명",
    period: "2023.09.13 ~ 2023.09.27",
    image: showPetImage,
    github: "https://github.com/ncp7-team2/show_pet",
    demo: "https://www.youtube.com/watch?v=HI4yAG8Wv0U",
    color: "from-blue-500 to-purple-600",
    item: [
      {
        title: "담당 기능",
        content: [
          "게시글 검색기능 구현",
          "로그인 페이지, 메인페이지, 마이페이지 구현",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "CarroThunder",
    description: "개인 거래 및 채팅 플랫폼 제작 프로젝트",
    tags: ["React", "Java", "Springboot", "Docker", "Jenkins", "NaverCloud"],
    member: "6명",
    period: "2023.09.28 ~ 2023.10.25",
    image: carrotThunderImage,
    github: "https://github.com/NC7-CarroThunder",
    demo: "https://www.youtube.com/watch?v=ulEcE30L-uc",
    color: "from-green-500 to-teal-600",
    item: [
      {
        title: "담당 기능",
        content: [
          "Jenkins를 이용한 CI/CD 구축",
          "파파고API를 이용한 언어감지 및 채팅 번역",
          "이미지 슬라이더 구현",
          "전체 게시글 출력 페이지 구현",
          "게시글 상세 조회 페이지 구현",
        ],
      },
    ],
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
    member: "개인",
    period: "2025.5.14 ~ 2023.06.07",
    image: SnartPlateImage,
    github: "https://github.com/bibibigg/SmartPlate",
    demo: "",
    color: "from-orange-500 to-red-600",
    item: [
      {
        title: "Redux Toolkit을 통한 전역 상태 관리",
        content: [
          "모달 상태, 다크모드 상태 등 전역적으로 관리할 상태를 중앙 집중식으로 관리",
          "Redux Toolkit의 간소화된 문법으로 보일러플레이트 코드 최소화",
        ],
      },
      {
        title: "React Query를 통한 서버 상태 관리",
        content: [
          "음식 데이터베이스 조회, 칼로리 계산 등 서버 데이터 효율적 관리",
          "자동 캐싱, 백그라운드 업데이트, 오류 처리 기능 제공",
          "로딩 상태 및 에러 상태 자동 관리로 사용자 경험 향상",
        ],
      },
      {
        title: "React Router를 통한 라우팅 처리",
        content: [
          "SPA(Single Page Application) 구조로 빠른 페이지 전환",
          "신체정보 입력, 홈페이지, 식사기록 페이지 간 부드러운 네비게이션",
        ],
      },
      {
        title: "Tailwind CSS를 통한 스타일링 및 다크모드 적용",
        content: [
          "유틸리티 우선 CSS 프레임워크로 빠른 스타일링",
          "다크모드/라이트모드 토글 기능으로 사용자 선호도 반영",
        ],
      },
      {
        title: "Framer Motion을 통한 애니메이션",
        content: ["페이지 전환, 컴포넌트 등장/사라짐 효과"],
      },
    ],
  },
  {
    id: 4,
    title: "my-portfolio",
    description: "나의 포트폴리오 사이트",
    tags: [
      "React",
      "Redux",
      "React-Router",
      "Tailwind CSS",
      "Framer-motion",
      "vite",
      "vercel",
    ],
    member: "개인",
    period: "2025.6.21 ~ ",
    image: myPortfolioImage,
    github: "https://github.com/bibibigg/my-portfolio",
    demo: "",
    color: "from-pink-500 to-violet-600",
    item: [
      {
        title: "stacking context 문제 해결",
        content: [
          "skills에서 아이콘을 hover시 설명 텍스트가 다른 요소에 가려지는 문제를 발견하고 부모 요소에 스택 문맥이 이미 형성되어 있어 자식 요소는 부모요소보다 높게 올 수 없기에 hover시 부모요소의 z-index를 높임으로써 텍스트가 보이도록 함",
        ],
      },
      {
        title: "vercel을 이용한 배포",
        content: [
          "Vercel과 GitHub 연동을 통해 자동화된 CI/CD 배포 파이프라인 구축 및 운영",
        ],
      },
      {
        title: "Framer Motion을 통한 애니메이션",
        content: [
          "스크롤 위치에 따라 요소가 자연스럽게 나타나는 애니메이션 효과 구현",
          "layoutId를 활용해 탭 전환 시 언더라인이 부드럽게 이동하는 애니메이션 적용",
        ],
      },
    ],
  },
];
