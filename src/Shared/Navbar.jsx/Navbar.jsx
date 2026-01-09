import React from "react";
import { Link, NavLink } from "react-router";
import CornarIcon from "../../assets/cornar-arrow.png";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const navbarItems = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "Coverage", path: "/coverage" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Pricing", path: "/pricing" },
  { id: 5, name: "Be a Rider", path: "/be-a-rider" }
];


  return (
    <div className="flex justify-between items-center py-6 px-30">
      <Link to ="/" className="flex items-center">
        <img className="h-16" src={Logo} alt="logo" />
      </Link>
      <ul className="md:flex hidden  items-center gap-6 mt-3">
         {
            navbarItems.map((nav) => (
               <li key={nav.id}>
                  <NavLink to={nav.path}  className={({isActive}) => isActive? " bg-primary-green text-secondary-green px-4 py-3 rounded-4xl font-medium": "text-primary-black"} > {nav.name}</NavLink>
               </li>
            ))
         }
      </ul>
      <div className="flex items-center mt-3 gap-4">
        <div>
          <Link to ="/login" className="text-primary-black cursor-pointer  px-5 rounded-2xl py-2 font-medium text-lg border border-primary-white">Sign In</Link>
        </div>
        <Link  to="/register" className="flex items-center">
          <button className="text-primary-black bg-primary-green cursor-pointer px-5 rounded-2xl py-2 font-medium text-lg border border-primary-white">Sign Up</button>
          <img className="h-12" src={CornarIcon} alt="cornar arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
