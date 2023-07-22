import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Home/Shared/Main/Main";
import Home from "../components/Home/Home";
import Colleges from "../components/Colleges/Colleges";
import Login from "../components/Page/Login";
import Signup from "../components/Page/SingUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement: <div>Something went wrong!</div>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/colleges",
          element: <Colleges/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
        }
      ]
    },
  ]);