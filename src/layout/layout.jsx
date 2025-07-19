import { Outlet } from "react-router-dom";
// gradient 스티일 = bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 ,다크모드 적용 시 trasition효과 적용안됨됨

import MainNavigation from "../components/MainNavitaion";
// export default function Layout() {
//   return (
//     <div className="min-h-screen bg-white dark:bg-[#242424]">
//       <MainNavigation />
//       <main className="flex-1 pt-16  dark:text-white">
//         <Outlet />
//       </main>
//     </div>
//   );
// }
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavigation />
      <main className="flex-1 flex flex-col  items-center bg-white dark:bg-[#242424]  transition-all duration-300 ease-in-out justify-center px-4">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
