import React, { useState } from 'react';
import { Outlet, Link, NavLink } from 'react-router';
import { Menu, X, LayoutDashboard, ShoppingBag, User, LogOut, Home } from 'lucide-react';
import zapshiftLogo from '../assets/logo.png';

const DashboardLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/', icon: <Home size={20} /> },
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'My Parcel', path: '/dashboard/parcel', icon: <ShoppingBag size={20} /> },
        { name: 'Profile', path: '/dashboard/profile', icon: <User size={20} /> },
    ];

    // Tailwind Classes for NavLink
    const activeClass = "bg-primary-green text-primary-black font-bold shadow-md scale-105";
    const inactiveClass = "text-secondary-black hover:bg-gray-100 hover:text-main-black transition-all duration-300";

    return (
        <div className="flex h-screen bg-[#F8FAFC]">
            
            {/* --- 1. Desktop Sidebar (Laptops & Tablets) --- */}
            <aside className="w-64 bg-white border-r border-primary-white hidden lg:flex flex-col">
                <div className="p-6">
                    <Link to="/" className="text-2xl font-extrabold text-primary-black tracking-tight">
                        <img src={zapshiftLogo} className='lg:w-34 md:w-30 h-auto' alt="logo" />
                    </Link>
                </div>
                
                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/dashboard'}
                            className={({ isActive }) => 
                                `flex items-center gap-3 px-4 py-3 rounded-xl transform transition-transform ${isActive ? activeClass : inactiveClass}`
                            }
                        >
                            {item.icon}
                            <span className="text-[15px]">{item.name}</span>
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-primary-white">
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-red-500 font-bold hover:bg-red-50 rounded-xl transition duration-300">
                        <LogOut size={20} />
                        Log Out
                    </button>
                </div>
            </aside>

            {/* --- 2. Main Body Area --- */}
            <div className="flex-1 flex flex-col overflow-hidden">
                
                {/* Header (Responsive) */}
                <header className="h-16 bg-white border-b border-primary-white flex items-center justify-between px-4 md:px-8">
                    <div className="flex items-center gap-3">
                        {/* Mobile Hamburger Button */}
                        <button 
                            className="lg:hidden text-primary-black p-2 hover:bg-gray-100 rounded-lg transition"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        
                        {/* Mobile Logo: ছোট ডিভাইসে সরাসরি হোমে যাওয়ার জন্য */}
                        <Link to="/" className="lg:hidden text-xl font-black text-primary-black">
                            Z<span className="text-secondary-green">S</span>
                        </Link>
                        
                        <h2 className="text-lg font-bold text-primary-black hidden sm:block">User Panel</h2>
                    </div>

                    {/* User Profile Info */}
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-main-black leading-tight">John Doe</p>
                            <p className="text-[10px] text-secondary-black uppercase tracking-wider">Active Member</p>
                        </div>
                        <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center font-bold text-secondary-green border-2 border-primary-white shadow-sm">
                            JD
                        </div>
                    </div>
                </header>

                {/* Page Content Holder */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* --- 3. Mobile Sidebar Overlay & Drawer --- */}
            {/* Dark Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-primary-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar Drawer */}
            <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 flex items-center justify-between border-b border-primary-white bg-gray-50/50">
                    <Link to="/" className="text-2xl font-black text-primary-black">ZapShift</Link>
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="p-2 text-secondary-black hover:bg-white rounded-full shadow-sm"
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="p-4 space-y-1 mt-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/dashboard'}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) => 
                                `flex items-center gap-4 px-4 py-4 rounded-xl transition-all ${isActive ? activeClass : inactiveClass}`
                            }
                        >
                            {item.icon}
                            <span className="font-semibold">{item.name}</span>
                        </NavLink>
                    ))}
                    
                    <div className="pt-4 mt-4 border-t border-primary-white">
                        <button className="w-full flex items-center gap-4 px-4 py-4 text-red-500 font-bold hover:bg-red-50 rounded-xl transition">
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