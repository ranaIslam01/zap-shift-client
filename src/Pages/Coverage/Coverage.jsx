import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import MapComponent from '../../Components/MapComponent/MapComponent';

const Coverage = () => {
  const [serviceCenters, setServiceCenters] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // সার্চের জন্য স্টেট

  useEffect(() => {
    fetch('serviceCenter.json')
      .then(res => res.json())
      .then(data => setServiceCenters(data));
  }, []);

  // সার্চ অনুযায়ী ফিল্টার করা ডাটা
  const filteredCenters = serviceCenters.filter(center =>
    center.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-10 flex justify-center items-start">
      <div className="bg-white rounded-4xl shadow-sm w-full max-w-7xl border border-gray-100 p-6 md:p-16">
        
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-black mb-8 leading-tight">
            We are available in 64 districts
          </h2>
          
          {/* Responsive Search Bar Container */}
          <div className="w-full max-w-md">
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative grow">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // টাইপ করলে স্টেট আপডেট হবে
                  className="block w-full pl-12 pr-4 py-4 bg-[#F3F5F7] border-none rounded-full focus:ring-2 focus:ring-[#C1E066] outline-none text-gray-700"
                  placeholder="Search by district (e.g. Dhaka)"
                />
                {/* Desktop Search Button */}
                <button className="hidden sm:block absolute right-2 top-1.5 bottom-1.5 px-6 bg-[#C1E066] hover:bg-[#b0d152] text-[#0D3B3F] font-bold rounded-full transition-all">
                  Search
                </button>
              </div>

              {/* Mobile Search Button */}
              <button className="sm:hidden w-full py-4 bg-[#C1E066] text-[#0D3B3F] font-bold rounded-full shadow-md active:scale-95 transition-transform">
                Search
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-100 my-10" />

        {/* Map Section */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#0D3B3F]">
            We deliver almost all over Bangladesh
          </h3>
          
          {/* ফিল্টার করা লিস্ট ম্যাপে পাঠানো হচ্ছে */}
          <MapComponent serviceCenters={filteredCenters} />
        </div>

      </div>
    </div>
  );
};

export default Coverage;