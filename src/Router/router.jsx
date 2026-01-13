import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Be_A_Rider from "../Pages/Be A Rider/Be_A_Rider";
import Errorpage from "../Pages/Errorpage/Errorpage";
import RiderForm from "../Components/Be A Rider/RiderFrom";
import Pricing from "../Pages/Pricing/Pricng";
import About from "../Pages/About/About";
import Login from "../Components/LogIn/LogIn";
import SignUP from "../Components/SignUp/SignUP";
import Coverage from "../Pages/Coverage/Coverage";

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
            path: "coverage",
            Component: Coverage,
         },
         {
            path:"/be-a-rider",
            Component: Be_A_Rider,
         },
         {
            path:"/rider-from",
            Component: RiderForm,
         },
         {
            path:'/pricing',
            Component: Pricing,
         },
         {
            path: "/about",
            Component: About,
         },
         {
            path: "/login",
            Component: Login,
         },
         {
            path: "register",
            Component: SignUP,
         }
      ]
   }
])