import React from "react";

const MyProfile = () => {
  return (
    <div className="max-w-2xl w-full bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-primary-black">
        User Profile
      </h2>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
        <div className="w-20 sm:w-24 h-20 sm:h-24 shrink-0 bg-primary-green rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold text-secondary-green">
          JD
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary-black">
            John Doe
          </h3>
          <p className="text-secondary-black text-sm sm:text-base">
            john.doe@example.com
          </p>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4 md:space-y-5">
        <div>
          <label className="block text-xs sm:text-sm font-medium text-secondary-black mb-1.5 md:mb-2">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-secondary-black mb-1.5 md:mb-2">
            Email Address
          </label>
          <input
            type="email"
            defaultValue="john.doe@example.com"
            className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-secondary-black mb-1.5 md:mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            defaultValue="+880 1XXX XXXXXX"
            className="w-full p-2 sm:p-3 text-sm sm:text-base rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all"
          />
        </div>

        <button className="w-full bg-primary-green text-primary-black font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base md:text-lg mt-4">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
