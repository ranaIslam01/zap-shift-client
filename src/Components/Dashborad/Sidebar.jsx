import { Menu, X } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    "Overview",
    "My Shipments",
    "Pricing",
    "Tracking",
    "Settings",
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-40 p-2 bg-primary-green rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative w-64 bg-white border-r border-gray-200 h-screen flex flex-col transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 md:p-6">
          <h2 className="text-2xl font-bold text-primary-green">ZapShift</h2>
        </div>

        <nav className="flex-1 mt-2 md:mt-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setIsOpen(false)}
              className="block px-4 md:px-6 py-2 md:py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-black transition-colors text-sm md:text-base"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="p-4 md:p-6 border-t border-gray-200">
          <button className="w-full text-red-500 font-medium py-2 hover:bg-red-50 rounded transition text-sm md:text-base">
            Log Out
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
