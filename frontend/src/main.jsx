import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Dashboard from "./Dashboard";
import ChatPage from "./ChatPage";
import Goals from "./Goals";
import Mind from "./Mind";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/goals",
    element: <Goals />
  },
  {
    path: "/mind",
    element: <Mind />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/chat",
    element: <ChatPage />
  }
]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
