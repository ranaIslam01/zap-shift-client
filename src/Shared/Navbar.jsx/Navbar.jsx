import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Menu, X } from "lucide-react";
import CornarIcon from "../../assets/cornar-arrow.png";
import Logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navbarItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Coverage", path: "/coverage" },
    // { id: 3, name: "About Us", path: "/about" },
    // { id: 4, name: "Pricing", path: "/pricing" },
    { id: 5, name: "Be a Rider", path: "/be-a-rider" },
    { id: 6, name: "Send Parcel", path: "/sendpercelform" },
    { id: 7, name: "Dashboard", path: "/dashboard" },
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
    <nav className="relative bg-white z-50 shadow-sm">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-30">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            src={Logo}
            alt="logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-2 xl:gap-6">
          {navbarItems.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-green text-secondary-green px-3 xl:px-4 py-2 rounded-full font-medium text-sm xl:text-base transition-all"
                    : "text-primary-black hover:text-secondary-green transition-colors text-sm xl:text-base font-medium"
                }
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop & Tablet Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {user ? (
              <div
                onClick={handleLogOut}
                className="flex items-center cursor-pointer hover:opacity-80 transition"
              >
                <button className="text-primary-black bg-primary-green px-3 lg:px-5 py-2 rounded-xl lg:rounded-2xl font-medium text-sm lg:text-base border border-primary-white hover:bg-opacity-90 transition">
                  Log Out
                </button>
                <img
                  className="h-8 lg:h-10 hidden lg:block"
                  src={CornarIcon}
                  alt="arrow"
                />
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-primary-black font-medium text-sm lg:text-base hover:text-secondary-green transition"
                >
                  Sign In
                </Link>
                <Link to="/register" className="flex items-center">
                  <button className="text-primary-black bg-primary-green px-3 lg:px-5 py-2 rounded-xl lg:rounded-2xl font-medium text-sm lg:text-base border border-primary-white hover:bg-opacity-90 transition">
                    Sign Up
                  </button>
                  <img
                    className="h-8 lg:h-10 hidden lg:block"
                    src={CornarIcon}
                    alt="arrow"
                  />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-black hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-2 sm:p-6 sm:gap-4">
          {navbarItems.map((nav) => (
            <li key={nav.id} onClick={() => setIsOpen(false)}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "block text-base sm:text-lg font-bold text-primary-black bg-primary-green px-4 py-2 rounded-lg"
                    : "block text-base sm:text-lg font-medium text-primary-black hover:bg-gray-100 px-4 py-2 rounded-lg transition"
                }
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
          <hr className="my-2 sm:my-4" />
          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 mt-2 sm:mt-4">
            {user ? (
              <button
                onClick={() => {
                  handleLogOut();
                  setIsOpen(false);
                }}
                className="w-full text-center bg-primary-green py-3 rounded-xl font-bold text-base sm:text-lg hover:bg-opacity-90 transition"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center font-bold text-base sm:text-lg text-primary-black hover:bg-gray-100 py-2 rounded-lg transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-primary-green py-3 rounded-xl font-bold text-base sm:text-lg hover:bg-opacity-90 transition"
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
