const Sidebar = () => {
  const menuItems = ['Overview', 'My Shipments', 'Pricing', 'Tracking', 'Settings'];
  
  return (
    <div className="w-64 bg-white border-r h-full flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#C1E05C]">ZapShift</h2>
      </div>
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <a key={item} href="#" className="block px-6 py-3 text-gray-600 hover:bg-[#f3f9de] hover:text-black transition-colors">
            {item}
          </a>
        ))}
      </nav>
      <div className="p-6 border-t">
        <button className="text-red-500 font-medium">Log Out</button>
      </div>
    </div>
  );
};
export default Sidebar;