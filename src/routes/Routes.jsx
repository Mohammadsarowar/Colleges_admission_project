import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Home/Shared/Main/Main";
import Home from "../components/Home/Home";
import Colleges from "../components/Colleges/Colleges";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <div>Something went wrong!</div>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/colleges",
          element: <Colleges/>
        }
      ]
    },
  ]);