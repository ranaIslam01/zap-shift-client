import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar.jsx/Navbar";
import Footer from "../Shared/Footer.jsx/Footer";

const MainLayout = () => {
  return (
    <div className= "flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="grow">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
