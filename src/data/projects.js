import carrotThunderImage from "../assets/CarrotThunder.png";
import myPortfolioImage from "../assets/my-portfolio.png";
import SnartPlateImage from "../assets/SmartPlate.png";
import chatting from "../assets/chatting.PNG";

export const projects = [
  {
    id: 4,
    title: "AiChat",
    description:
      "AI툴을 적극 활용한 채팅방 구현 및 GeminiAPI를 사용한 AI와의 대화",
    tags: [
      "toyProject",
      "Cousor",
      "Mysql",
      "GeminiAPI",
      "Node.js",
      "socket.io",
      "React",
      "TypeScript",
      "React-Router",
      "Tailwind CSS",
      "vite",
    ],
    member: "개인",
    period: "2025.7.15",
    image: chatting,
    github: "https://github.com/bibibigg/aichat",
    demo: "",
    color: "from-pink-500 to-violet-600",
    item: [
      {
        title: "실시간 AI 채팅 기능",
        content: [
          "구현된 채팅기능에 GeminiAPI를 사용하여 모든 채팅방에 AI유저가 상주하여 혼자 있더라도 채팅을 할 수 있도록 구현\n 모델은 gemini-2.5-flash 모델을 사용하였으며 간단한 대화에 최적화 하기위해 사고 기능을 비활성화하여 빠른 반응을 보이며 토큰 사용량 절감",
        ],
      },
      {
        title: "Cursor를 이용한 풀스택 구현",
        content: [
          "Cursor를 적극 이용하여 DB설계와 백엔드, 프론트엔드의 기능구현을 진행하여 매우 짧은 기간 내 기능을 구현",
        ],
      },
    ],
  },
  {
    id: 1,
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
  {
    id: 2,
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
    id: 3,
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
        title: "이미지 슬라이더 구현",
        content: [
          "translateX 속성을 이용하여 이미지가 좌 우로 움직이는 효과를 적용",
        ],
      },
      {
        title: "파파고API를 이용한 언어감지 및 채팅 번역, 채팅 UI구현",
        content: [
          "번역기능은 파파고 API의 언어감지와 번역 기능을 이용, 번역 진행 시 언어감지를 통해 메세지 언어와 번역할 언어가 같을 시 번역을 진행하지 않으며 다를경우 번역 진행",
          "상대방과 나의 채팅을 구분할 수 있게 로그인 정보를 이용하여 나의 메세지와 상대 메세지 위치, 색상등을 구분",
        ],
      },
      {
        title: "Jenkins를 이용한 CI/CD 구축",
        content: [
          "깃허브 웹 훅을 이용하여 젠킨스 서버에서 성공적으로 빌드가 완료될 시 젠킨스 내 스크립트 설정을 통해 도커 이미지를 개발서버로 전송한 뒤 개발서버에서 도커 이미지를 실행하여 코드 변경 사항이 자동으로 배포되도록 CI/CD 파이프라인을 구축",
        ],
      },
      {
        title: "전체 게시글 출력 페이지 구현",
        content: [
          "전체 상품을 grid형식으로 출력, 상품이 거래중인지 거래완료인지에 따라 태그를 다르게 표기, 필터버튼을 통해 특정 카테고리에 대한 상품만 출력 가능",
        ],
      },
      {
        title: "게시글 상세 조회 페이지 구현",
        content: [
          "상품의 상세 정보를 표기하였으며 로그인 상태에 따라 구매버튼등의 상호작용을 다르게 동작하도록 구현, 자신이 올린 게시글은 수정할 수 있도록 수정하기 버튼 구현",
        ],
      },
    ],
  },

  // {
  //   id: 4,
  //   title: "Show Pet",
  //   description:
  //     "반려동물 사진을 등록하여 다른 사용자와 소통할 수 있는 웹 프로젝트",
  //   tags: ["HTML", "CSS", "Javascript", "Java", "Springboot", "NaverCloud"],
  //   member: "6명",
  //   period: "2023.09.13 ~ 2023.09.27",
  //   image: showPetImage,
  //   github: "https://github.com/ncp7-team2/show_pet",
  //   demo: "https://www.youtube.com/watch?v=HI4yAG8Wv0U",
  //   color: "from-blue-500 to-purple-600",
  //   item: [
  //     {
  //       title: "담당 기능",
  //       content: [
  //         "게시글 검색기능 구현",
  //         "로그인 페이지, 메인페이지, 마이페이지 구현",
  //       ],
  //     },
  //   ],
  // },
];
