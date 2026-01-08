import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Be_A_Rider from "../Pages/Be A Rider/Be_A_Rider";
import Errorpage from "../Pages/Errorpage/Errorpage";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Errorpage></Errorpage>,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path:"/be-a-rider",
            Component: Be_A_Rider,
         }
      ]
   }
])