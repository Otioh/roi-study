import React, { useContext } from "react";

import { RouterProvider, createHashRouter } from "react-router-dom";
import Welcome from "./Outer/Welcome";
import Login from "./Outer/Login";
import GlobalContext from "../Components/Context/Api";
import Dashboard from "./Inner/Dashboard";
import Payments from "./Inner/Payments";
import Exercise from "./Inner/Exercise";
import Certificates from "./Inner/Certificates";
import Activities from "./Inner/Activities";
import Profile from "./Inner/Profile";
import Settings from "./Inner/Settings";



import Programmes from "./Outer/Programmes";
import NotFound from "./Outer/NotFound";
import Register from "./Outer/Register";


function AppHolder({ setDisplay }) {
  const { isLogin } = useContext(GlobalContext);

  const outerRouter = createHashRouter([
    { path: "/", element: <Welcome /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Register /> },
    { path: "/register", element: <Register /> },
    { path: "/index", element: <Welcome /> },
    { path: "/home", element: <Welcome /> },
    { path: "/signup", element: <Login /> },
    { path: "/courses", element: <Programmes /> },
    { path: "/*", element: <NotFound /> },
  ]);

   const innerRouter = createHashRouter([
     { path: "/", element: <Dashboard /> },
     { path: "/*", element: <NotFound /> },
     { path: "/refresh", element: <Welcome /> },
     { path: "/login", element: <Dashboard /> },
     { path: "/register", element: <Dashboard /> },
     { path: "/dashboard", element: <Dashboard /> },
     { path: "/programmes", element: <Programmes /> },

     { path: "/payments", element: <Payments /> },
     { path: "/exercise", element: <Exercise /> },
     { path: "/certificates", element: <Certificates /> },
     { path: "/profile", element: <Profile /> },
     { path: "/settings", element: <Settings /> },
     { path: "/activities", element: <Activities /> },
   ]);

  return (
    <div>
      <RouterProvider router={isLogin?innerRouter:outerRouter} />
    </div>
  );
}

export default AppHolder;
