import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    lazy: () =>
      import("./pages/About/About").then((c) => ({
        Component: c.default,
      })),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
