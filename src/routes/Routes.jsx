import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Home/Shared/Main/Main";
import Home from "../components/Home/Home";
import Colleges from "../components/Colleges/Colleges";
import Login from "../components/Page/Login";
import Signup from "../components/Page/SingUp";
import CollegesDetails from "../components/Colleges/CollegesDetails";
import PrivateRoute from "./PrivateRoute";
import Admission from "../components/Admission/Admission";
import CandidateForm from "../components/Admission/InputHub/InputText";
import NotFoundPage from "../components/Home/Shared/Error";
import Profile from "../components/Page/Profile/Profile";
import MyColleges from "../components/MyColleges/MyColleges";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<NotFoundPage></NotFoundPage>,
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
        },
        {
            path: "/colleges/:id",
            element: (
              <PrivateRoute>
                <CollegesDetails/>
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(
                `https://endgame-task-project-server.vercel.app/college/${params.id}`
              ),
          },
          {
            path:'/admission',
            element:<Admission/>
          },
          {
            path:'/inputFilds',
            element:<PrivateRoute><CandidateForm/></PrivateRoute>
          },
          {
            path:'/profile',
            element:<PrivateRoute><Profile/></PrivateRoute>
          },
          {
            path:'/mycollege',
            element:<PrivateRoute><MyColleges/> </PrivateRoute>,
          }
      ]
    },
  ]);