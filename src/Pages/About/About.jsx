import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('Story');
  const [weight, setWeight] = useState('');
  const [cost, setCost] = useState(50);

  const tabs = ['Story', 'Mission', 'Success', 'Team & Others'];

  const calculateCost = () => {
    const baseFare = 50;
    const additional = weight > 1 ? (weight - 1) * 20 : 0;
    setCost(baseFare + additional);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-10 space-y-10">

      {/* 2. About Us Section with Tabs */}
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] p-8 md:p-16 shadow-sm">
        <h1 className="text-4xl font-bold text-primary-black mb-4">About Us</h1>
        <p className="text-gray-500 text-sm max-w-2xl mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>
        <div className="border-t border-gray-100 mb-10"></div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-bold transition-colors ${
                activeTab === tab ? 'text-[#606c38]' : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6 text-gray-500 leading-relaxed max-w-5xl">
          <p>
            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service 
            has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business 
            delivery, we ensure it reaches its destination — on time, every time.
          </p>
          <p>
            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
            Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service...
          </p>
          <p>
            We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
            Over the years, our commitment to real-time tracking...
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;