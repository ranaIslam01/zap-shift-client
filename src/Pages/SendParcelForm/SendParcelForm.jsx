import React, { useState } from 'react';

const SendParcelForm = () => {
  const [parcelType, setParcelType] = useState('Document');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg px-30 py-10 w-full ">
        <h1 className="text-4xl font-bold text-primary-black mb-10 text-center">Send A Parcel</h1>
        
        <div className="space-y-6">
          {/* Parcel Category Section */}
          <section>
            <h2 className="text-xl font-bold text-primary-black mb-4">Enter your parcel details</h2>
            <div className="flex gap-6 mb-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="type" 
                  checked={parcelType === 'Document'} 
                  onChange={() => setParcelType('Document')}
                  className="w-4 h-4 accent-green-600"
                />
                <span className="text-gray-700 font-medium text-sm">Document</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="type" 
                  checked={parcelType === 'Not-Document'} 
                  onChange={() => setParcelType('Not-Document')}
                  className="w-4 h-4 accent-green-600"
                />
                <span className="text-gray-700 font-medium text-sm">Not-Document</span>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Parcel Name</label>
                <input type="text" placeholder="Parcel Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Parcel Weight (KG)</label>
                <input type="text" placeholder="Parcel Weight (KG)" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Sender and Receiver Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Sender Details */}
            <section className="space-y-4">
              <h2 className="text-md font-bold text-teal-900">Sender Details</h2>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Sender Name</label>
                <input type="text" placeholder="Sender Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Address</label>
                <input type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Sender Phone No</label>
                <input type="text" placeholder="Sender Phone No" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Your District</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-400 bg-white">
                  <option>Select your District</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Pickup Instruction</label>
                <textarea rows="3" placeholder="Pickup Instruction" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300 resize-none"></textarea>
              </div>
            </section>

            {/* Receiver Details */}
            <section className="space-y-4">
              <h2 className="text-md font-bold text-teal-900">Receiver Details</h2>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Receiver Name</label>
                <input type="text" placeholder="Sender Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Receiver Address</label>
                <input type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Receiver Contact No</label>
                <input type="text" placeholder="Sender Contact No" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Receiver District</label>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-400 bg-white">
                  <option>Select your District</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Delivery Instruction</label>
                <textarea rows="3" placeholder="Delivery Instruction" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300 resize-none"></textarea>
              </div>
            </section>
          </div>

          {/* Footer Info & Button */}
          <div className="pt-4">
            <p className="text-xs font-medium text-gray-700 mb-4">* PickUp Time 4pm-7pm Approx.</p>
            <button className="bg-primary-green text-teal-900 font-bold py-2 px-6 rounded transition duration-200">
              Proceed to Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendParcelForm;