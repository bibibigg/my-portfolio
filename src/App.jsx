import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      // {
      //   element: <HomePage />,
      //   path: "/project/:id",
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
