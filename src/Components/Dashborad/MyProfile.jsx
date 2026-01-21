import React, { useEffect, useState } from "react";
import { User, Mail, Phone } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  const [usersDetails, setUsersDetails] = useState([]);

  // MongoDB থেকে ইউজার ডাটা নিয়ে আসা
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsersDetails(data));
  }, []);

  // বর্তমান ইউজারের ডাটা খুঁজে বের করা (ইমেইল দিয়ে)
  const currentUser = usersDetails.find((u) => u.email === user?.email);

  return (
    <div className="max-w-2xl w-full bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-primary-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 sm:mb-6 md:mb-8 text-primary-black uppercase tracking-tight">
        User Profile
      </h2>

      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-primary-white">
        <div className="w-20 sm:w-24 h-20 sm:h-24 shrink-0 bg-primary-green rounded-full flex items-center justify-center text-2xl sm:text-3xl font-black text-primary-black overflow-hidden border-2 border-primary-green">
          {/* লজিক: প্রথমে MongoDB এর ছবি, তারপর Google এর ছবি, শেষে নামের প্রথম অক্ষর */}
          {currentUser?.image || user?.photoURL ? (
            <img
              className="h-full w-full object-cover"
              src={currentUser?.image || user?.photoURL}
              alt="photo"
              onError={(e) => {
                e.target.src = "https://i.ibb.co/7p0y9A8/default-avatar.png";
              }}
            />
          ) : (
            <span className="uppercase">
              {currentUser?.name ? currentUser.name.charAt(0) : "U"}
            </span>
          )}
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-extrabold text-primary-black uppercase">
            {/* MongoDB এর নাম আগে প্রাধান্য পাবে */}
            {currentUser?.name || user?.displayName}
          </h3>
          <p className="text-secondary-black font-medium text-sm sm:text-base">
            {user?.email}
          </p>
          <span className="inline-block mt-2 px-3 py-1 bg-primary-green/20 text-primary-black text-[10px] font-bold rounded-full uppercase">
            Role: {currentUser?.role || "user"}
          </span>
        </div>
      </div>

      {/* Form Section */}
      <div className="space-y-4 sm:space-y-5">
        <div>
          <label className="block text-xs sm:text-[10px] font-black uppercase tracking-widest text-secondary-black mb-2 ml-1">
            Full Name
          </label>
          <input
            type="text"
            readOnly
            value={currentUser?.name || user?.displayName || ""}
            className="w-full p-2.5 sm:p-3.5 text-sm sm:text-base font-bold text-primary-black rounded-xl border border-primary-white focus:outline-none focus:ring-2 focus:ring-primary-green transition-all bg-gray-50/50"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-[10px] font-black uppercase tracking-widest text-secondary-black mb-2 ml-1">
            Email Address
          </label>
          <input
            type="email"
            disabled
            value={user?.email || ""}
            className="w-full p-2.5 sm:p-3.5 text-sm sm:text-base font-bold text-gray-400 rounded-xl border border-primary-white bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-xs sm:text-[10px] font-black uppercase tracking-widest text-secondary-black mb-2 ml-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+880 1XXX XXXXXX"
            className="w-full p-2.5 sm:p-3.5 text-sm sm:text-base font-bold text-primary-black rounded-xl border border-primary-white focus:outline-none focus:ring-2 focus:ring-primary-green transition-all bg-gray-50/50"
          />
        </div>

        <button className="w-full bg-primary-green text-primary-black font-black px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base uppercase tracking-widest mt-4 shadow-sm active:scale-[0.98]">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;