import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Pages/Authentication/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayouts,
    children: [
      {
        path: '/login',
        Component: Login
      }
    ]
  }
]);