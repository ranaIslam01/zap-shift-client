import React from "react";
import logo from "../../assets/logo copy.png";
import { Link, NavLink } from "react-router";
import facebook from "../../assets/facebookpng.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedIn-png.png";
import twitter from "../../assets/twitter-logo-2 3.png";

const Footer = () => {
  const navbarItems = [
    { id: 1, name: "Services", path: "/services" },
    { id: 2, name: "Coverage", path: "/coverage" },
    { id: 3, name: "About Us", path: "/about" },
    { id: 4, name: "Pricing", path: "/pricing" },
    { id: 5, name: "Be a Rider", path: "/be-a-rider" },
  ];
  const socials = [
    {
      id: "linkedin",
      url: "https://www.linkedin.com",
      icon: linkedin,
    },
    {
      id: "x",
      url: "https://x.com",
      icon: twitter,
    },
    {
      id: "facebook",
      url: "https://www.facebook.com",
      icon: facebook,
    },
    {
      id: "youtube",
      url: "https://www.youtube.com",
      icon: youtube,
    },
  ];

  return (
    <div className="bg-main-black mx-2 sm:mx-4 md:mx-6 lg:mx-10 rounded-2xl">
      <div className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto pt-8 sm:pt-12 pb-6 sm:pb-8 gap-4 px-4 sm:px-6">
        <div className="text-primary-white flex items-center text-xl sm:text-2xl">
          <img
            className="text-primary-white h-8 sm:h-10"
            src={logo}
            alt="logo"
          />
          <h1 className="mt-4 sm:mt-6 -ml-3 sm:-ml-5 font-bold">ZapShift</h1>
        </div>
        <p className="text-primary-white text-sm sm:text-base leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="border-b border-dashed border-[#03464D] w-[85%] mx-auto"></div>

      <ul className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 mt-4 justify-center py-6 sm:py-8 px-4 sm:px-6">
        {navbarItems.map((nav) => (
          <li key={nav.id}>
            <NavLink
              to={nav.path}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary-green text-secondary-green px-3 sm:px-4 py-2 rounded-4xl font-medium text-xs sm:text-sm"
                  : "text-primary-white text-xs sm:text-sm font-medium hover:text-primary-green transition"
              }
            >
              {" "}
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="border-b border-dashed border-[#03464D] w-[85%] mx-auto"></div>

      <div className="pt-8 sm:pt-10 pb-12 sm:pb-20 list-none flex justify-center items-center gap-3 sm:gap-4 flex-wrap px-4">
        {socials.map((social) => (
          <li
            className="list-none flex justify-center items-center hover:opacity-80 transition"
            key={social.id}
          >
            <Link
              to={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 hover:bg-gray-800 rounded-lg transition"
            >
              <img
                src={social.icon}
                alt={social.url}
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Footer;
