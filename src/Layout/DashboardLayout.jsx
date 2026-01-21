import React, { useEffect, useState } from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router";
import {
  Menu,
  X,
  LayoutDashboard,
  ShoppingBag,
  User,
  LogOut,
  Home,
} from "lucide-react";
import zapshiftLogo from "../assets/logo.png";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOutUser } = useAuth();
  
  // MongoDB থেকে আসা সিঙ্গেল ইউজারের ডাটা রাখার জন্য স্টেট
  const [dbUser, setDbUser] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "My Parcel",
      path: "/dashboard/parcel",
      icon: <ShoppingBag size={20} />,
    },
    { name: "Profile", path: "/dashboard/profile", icon: <User size={20} /> },
  ];

  // নির্দিষ্ট ইউজারের ডাটা ফেচ করা (ইমেইল দিয়ে)
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/users/${user.email}`)
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          if (data) {
            setDbUser(data);
          }
        })
        .catch((err) => console.error("Fetching error:", err));
    }
  }, [user?.email]);

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

  const activeClass = "bg-primary-green text-primary-black font-bold shadow-md scale-105";
  const inactiveClass = "text-secondary-black hover:bg-gray-100 hover:text-main-black transition-all duration-300";

  return (
    <div className="flex h-screen bg-[#F8FAFC]">
      {/* --- 1. Desktop Sidebar --- */}
      <aside className="w-64 bg-white border-r border-primary-white hidden lg:flex flex-col">
        <div className="p-6">
          <Link to="/" className="text-2xl font-extrabold text-primary-black tracking-tight">
            <img src={zapshiftLogo} className="lg:w-34 md:w-30 h-auto" alt="logo" />
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transform transition-transform ${
                  isActive ? activeClass : inactiveClass
                }`
              }
            >
              {item.icon}
              <span className="text-[15px]">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-primary-white">
          <button
            onClick={handleLogOut}
            className="w-full flex items-center gap-3 px-4 py-2 text-red-500 font-bold hover:bg-red-50 rounded-xl transition duration-300"
          >
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </aside>

      {/* --- 2. Main Body Area --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-primary-white flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-primary-black p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="lg:hidden text-xl font-black text-primary-black">
              Z<span className="text-secondary-green">S</span>
            </Link>
            <h2 className="text-lg font-bold text-primary-black hidden sm:block">
              {dbUser?.role === 'admin' ? 'Admin Panel' : 'User Panel'}
            </h2>
          </div>

          {/* User Profile Info Section */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-main-black leading-tight">
                {/* MongoDB-র নাম সবার আগে প্রাধান্য পাবে */}
                {dbUser?.name || user?.displayName || "Loading..."}
              </p>
              <p className="text-[10px] text-secondary-black tracking-wider">
                {user?.email}
              </p>
            </div>

            <div className="flex items-center justify-center">
              {/* ছবি লজিক: dbUser.image (Cloudinary) > Firebase image > Default Avatar */}
              {dbUser?.image || user?.photoURL ? (
                <img
                  className="h-12 w-12 rounded-full object-cover border-2 border-primary-green shadow-sm"
                  src={dbUser?.image || user?.photoURL}
                  alt="User Profile"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co/7p0y9A8/default-avatar.png";
                  }}
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                  <span className="text-gray-500 text-xs font-bold uppercase">
                    {dbUser?.name ? dbUser.name.charAt(0) : (user?.displayName ? user.displayName.charAt(0) : "U")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet context={[dbUser]} />
          </div>
        </main>
      </div>

      {/* --- 3. Mobile Sidebar Drawer --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-primary-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-primary-white">
          <Link to="/" className="text-2xl font-black text-primary-black">ZapShift</Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-1 mt-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-4 rounded-xl ${isActive ? activeClass : inactiveClass}`
              }
            >
              {item.icon}
              <span className="font-semibold">{item.name}</span>
            </NavLink>
          ))}
          <div className="pt-4 mt-4 border-t border-primary-white">
            <button onClick={handleLogOut} className="w-full flex items-center gap-4 px-4 py-4 text-red-500 font-bold hover:bg-red-50 rounded-xl transition">
              <LogOut size={20} />
              Log Out
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardLayout;