import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/UI/uiSlice";
import { useMotionValueEvent, useScroll } from "framer-motion";
import HamburgerButton from "./UI/HamburgetButton";
import DarkModeButton from "./UI/DarkModeButton";

export default function MainNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  // const yHeader = useTransform(scrollY, [0, 50], [1, 0]);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  const isDark = useSelector((state) => state.ui.isDark);
  const { isShowList } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  // 초기 렌더링 시 다크모드 상태 세팅
  useEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    if (isDark) {
      document.documentElement.classList.add("dark");
      dispatch(uiActions.setInitialTheme(true));
    }
  }, [dispatch]);

  // isDark상태 변경 시 로컬스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  function handleThemeToggle() {
    document.documentElement.classList.toggle("dark");
    dispatch(uiActions.toggleTheme());
  }

  function handleListToggle() {
    dispatch(uiActions.toggleShowList());
  }
  // bg-[#00BCD4]
  return (
    <>
      <header
        className={`fixed w-full h-16 flex items-center p-4 z-50 ${
          isScrolled
            ? "backdrop-blur-md bg-white/60 dark:bg-gray-900/70 shadow-lg border-b border-gray-200/20"
            : "bg-transparent"
        }`}
      >
        <nav className="flex w-full justify-between gap-4 lg:px-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-yellow-500 dark:text-yellow-300 mb-1">
              Son Byeongjin
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <HamburgerButton
              handleListToggle={handleListToggle}
              isShowList={isShowList}
            />
            <DarkModeButton
              handleThemeToggle={handleThemeToggle}
              isDark={isDark}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
