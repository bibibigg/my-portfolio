export default function InfoItem({ label, value, children }) {
  return (
    <div className="flex flex-col items-center min-w-[90px]">
      <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
        {label}
      </span>
      {value && (
        <div className="text-base font-semibold text-gray-800 dark:text-white">
          {value}
        </div>
      )}
      {children}
    </div>
  );
}
{
  /* projectModal.jsx에서 프로젝트 정보에서 반복적인 코드를 줄이기 위한 컴포넌트 */
}
