import React, { useEffect, useState } from 'react';

const SendParcelForm = () => {
  const [parcelType, setParcelType] = useState('Document');
  const [districts, setDistricts] = useState([]);
  
  // ১. ইনপুট ফিল্ডের ডাটা রাখার জন্য স্টেট
  const [formData, setFormData] = useState({
    parcelName: '',
    parcelWeight: '',
    senderName: '',
    senderAddress: '',
    senderPhone: '',
    senderDistrict: '',
    pickupInstruction: '',
    receiverName: '',
    receiverAddress: '',
    receiverPhone: '',
    receiverDistrict: '',
    deliveryInstruction: ''
  });

  // ২. JSON ডাটা লোড করা এবং ইউনিক ডিস্ট্রিক্ট বের করা
  useEffect(() => {
    fetch('serviceCenter.json')
      .then(res => res.json())
      .then(data => {
        // ডুপ্লিকেট জেলা এড়াতে Set ব্যবহার করা হয়েছে
        const uniqueDistricts = [...new Set(data.map(item => item.district))];
        setDistricts(uniqueDistricts);
        console.log("Districts loaded successfully");
      })
      .catch(err => console.error("Error fetching JSON:", err));
  }, []);

  // ৩. ইনপুট হ্যান্ডেলার
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ৪. সাবমিট হ্যান্ডেলার
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, parcelType };
    console.log("Final Booking Data:", finalData);
    alert("Parcel Booking Submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Form tag wrapped around content */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg px-6 lg:px-30 py-10 w-full max-w-7xl">
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
                <input name="parcelName" onChange={handleInputChange} required type="text" placeholder="Parcel Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Parcel Weight (KG)</label>
                <input name="parcelWeight" onChange={handleInputChange} required type="number" placeholder="Parcel Weight (KG)" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
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
                <input name="senderName" onChange={handleInputChange} required type="text" placeholder="Sender Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Address</label>
                <input name="senderAddress" onChange={handleInputChange} required type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Sender Phone No</label>
                <input name="senderPhone" onChange={handleInputChange} required type="text" placeholder="Sender Phone No" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Your District</label>
                <select name="senderDistrict" onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700 bg-white">
                  <option value="">Select your District</option>
                  {districts.map((d, i) => <option key={i} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Pickup Instruction</label>
                <textarea name="pickupInstruction" onChange={handleInputChange} rows="3" placeholder="Pickup Instruction" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300 resize-none"></textarea>
              </div>
            </section>

            {/* Receiver Details */}
            <section className="space-y-4">
              <h2 className="text-md font-bold text-teal-900">Receiver Details</h2>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Receiver Name</label>
                <input name="receiverName" onChange={handleInputChange} required type="text" placeholder="Receiver Name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Receiver Address</label>
                <input name="receiverAddress" onChange={handleInputChange} required type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Receiver Contact No</label>
                <input name="receiverPhone" onChange={handleInputChange} required type="text" placeholder="Receiver Contact No" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Receiver District</label>
                <select name="receiverDistrict" onChange={handleInputChange} required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 text-gray-700 bg-white">
                  <option value="">Select your District</option>
                  {districts.map((d, i) => <option key={i} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Delivery Instruction</label>
                <textarea name="deliveryInstruction" onChange={handleInputChange} rows="3" placeholder="Delivery Instruction" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 placeholder:text-gray-300 resize-none"></textarea>
              </div>
            </section>
          </div>

          {/* Footer Info & Button */}
          <div className="pt-4">
            <p className="text-xs font-medium text-gray-700 mb-4">* PickUp Time 4pm-7pm Approx.</p>
            <button type="submit" className="bg-primary-green text-teal-900 font-bold py-2 px-6 rounded hover:opacity-90 transition duration-200">
              Proceed to Confirm Booking
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SendParcelForm;