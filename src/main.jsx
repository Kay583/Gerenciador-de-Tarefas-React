// main.jsx
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import TaskPage from "./pages/TaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Task",
    element: <TaskPage />,
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
