import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Menu, X } from "lucide-react"; // আইকনের জন্য lucide-react ব্যবহার করা হয়েছে
import CornarIcon from "../../assets/cornar-arrow.png";
import Logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু স্টেট

  const navbarItems = [
    { id: 1, name: "Services", path: "/services" },
    { id: 2, name: "Coverage", path: "/coverage" },
    { id: 3, name: "About Us", path: "/about" },
    { id: 4, name: "Pricing", path: "/pricing" },
    { id: 5, name: "Be a Rider", path: "/be-a-rider" },
  ];

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A3D139",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "Successfully logged out.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            navigate("/");
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <nav className="relative bg-white z-50">
      <div className="flex justify-between items-center py-6 px-6 md:px-20 lg:px-30">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="h-12 md:h-16" src={Logo} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navbarItems.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-green text-secondary-green px-4 py-2 rounded-full font-medium"
                    : "text-primary-black hover:text-primary-green transition-colors"
                }
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div onClick={handleLogOut} className="flex items-center cursor-pointer">
                <button className="text-primary-black bg-primary-green px-5 rounded-2xl py-2 font-medium border border-primary-white">
                  Log Out
                </button>
                <img className="h-10" src={CornarIcon} alt="arrow" />
              </div>
            ) : (
              <>
                <Link to="/login" className="text-primary-black font-medium">
                  Sign In
                </Link>
                <Link to="/register" className="flex items-center">
                  <button className="text-primary-black bg-primary-green px-5 rounded-2xl py-2 font-medium border border-primary-white">
                    Sign Up
                  </button>
                  <img className="h-10" src={CornarIcon} alt="arrow" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-125 border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {navbarItems.map((nav) => (
            <li key={nav.id} onClick={() => setIsOpen(false)}>
              <NavLink
                to={nav.path}
                className="block text-lg font-medium text-primary-black"
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
          <hr />
          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-4 mt-2">
            {user ? (
              <button
                onClick={() => { handleLogOut(); setIsOpen(false); }}
                className="w-full text-center bg-primary-green py-3 rounded-xl font-bold"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsOpen(false)} className="text-center font-bold">
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-primary-green py-3 rounded-xl font-bold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;