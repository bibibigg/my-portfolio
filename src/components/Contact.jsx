import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Contact() {
  const { isDark } = useSelector((state) => state.ui);
  return (
    <footer className="py-20 flex flex-col justify-center items-center ">
      <div className="text-center font-semibold dark:text-white text-2xl m-3">
        <p>감사합니다</p>
        <p>궁금한 점이 있으시다면</p>
        <p>언제든지 연락주세요</p>
      </div>

      <div className=" text-xl p-4 rounded-xl">
        <p className="mb-2 dark:text-white">email: aerl0706@naver.com</p>
        <div className="flex justify-center">
          <a className="justify-center" href="https://github.com/bibibigg">
            {isDark ? (
              <FaGithub color="white" size={30} />
            ) : (
              <FaGithub size={30} />
            )}
          </a>
        </div>
      </div>
    </footer>
  );
}
