import Modal from "../UI/Modal";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import InfoItem from "./InfoItem";

export default function ProjectModal({ onClose, project, isDark }) {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-6">
        {/* 닫기 버튼 */}
        <button
          className="self-end text-2xl text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
        {/* 헤더 */}
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
            {project?.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-2">
            {project?.description}
          </p>
        </div>
        {/* 프로젝트 정보 */}
        <div className="flex flex-wrap justify-center gap-6 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-2">
          <div className="flex flex-col items-center w-full min-w-[90px]">
            <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              기술스택
            </span>
            <div className="flex flex-wrap gap-1 justify-center">
              {project?.tags?.map((tag, i) => (
                <span
                  key={tag + i}
                  className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <InfoItem label="참여인원" value={project?.member} />

            <InfoItem label="기간" value={project?.period} />

            {project.github && (
              <InfoItem label="github">
                <a href={project.github}>
                  {isDark ? (
                    <FaGithub color="white" size={25} />
                  ) : (
                    <FaGithub color="black" size={25} />
                  )}
                </a>
              </InfoItem>
            )}

            {project.demo && (
              <InfoItem label="시연영상">
                <a href={project.demo}>
                  {isDark ? (
                    <FaYoutube color="white" size={25} />
                  ) : (
                    <FaYoutube color="red" size={25} />
                  )}
                </a>
              </InfoItem>
            )}
          </div>
        </div>
        {/* 구분선 */}
        <div className="w-full h-0.5 min-h-0.5 bg-gray-300 dark:bg-gray-500 my-4 md:my-6 rounded-full"></div>
        {/* 본문 */}
        {project && project.item && (
          <ol className="list-decimal pl-5 space-y-6">
            {project.item.map((item, index) => (
              <li key={`project-item-${index}`} className="">
                <span className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-2 inline-block">
                  {item.title}
                </span>
                {item.content && (
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-700 dark:text-gray-200 text-base">
                    {item.content.map((text, contentIndex) => (
                      <li
                        className="whitespace-pre-line"
                        key={`project-desc-${index}-${contentIndex}`}
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </Modal>
  );
}
