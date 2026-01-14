import React from 'react';

const MyProfile = () => {
  return (
    <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-sm border border-primary-white">
      <h2 className="text-2xl font-bold mb-6 text-primary-black">User Profile</h2>
      
      <div className="flex items-center gap-6 mb-8 pb-8 border-b border-primary-white">
        <div className="w-24 h-24 bg-primary-green rounded-full flex items-center justify-center text-3xl font-bold text-secondary-green">
          JD
        </div>
        <div>
          <h3 className="text-xl font-bold text-main-black">John Doe</h3>
          <p className="text-secondary-black">john.doe@example.com</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-secondary-black mb-1">Full Name</label>
          <input 
            type="text" 
            defaultValue="John Doe" 
            className="w-full p-3 rounded-xl border border-primary-white focus:outline-none focus:ring-2 focus:ring-primary-green transition-all" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-black mb-1">Phone Number</label>
          <input 
            type="text" 
            defaultValue="+880 1XXX XXXXXX" 
            className="w-full p-3 rounded-xl border border-primary-white focus:outline-none focus:ring-2 focus:ring-primary-green transition-all" 
          />
        </div>
        <button className="bg-primary-green text-primary-black font-bold px-6 py-3 rounded-xl hover:bg-secondary-green hover:text-white transition-all duration-300">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;