import React, { useState } from 'react';

const Pricing = () => {
  const [parcelType, setParcelType] = useState('');
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  const handleCalculate = () => {
    if (weight > 0) {
      const baseFare = 50;
      const additionalWeightCharge = (weight - 1) * 20;
      const cost = weight > 1 ? baseFare + additionalWeightCharge : baseFare;
      setTotalCost(cost);
    } else {
      setTotalCost(0);
    }
  };

  const handleReset = () => {
    setParcelType('');
    setDestination('');
    setWeight('');
    setTotalCost(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-4xl shadow-sm w-full max-w-5xl p-8 md:p-16">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary-black mb-4">Pricing Calculator</h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
          <div className="h-px bg-gray-100 w-full mt-10"></div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary-black">Calculate Your Cost</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Form Controls */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Parcel type</label>
              <select 
                value={parcelType}
                onChange={(e) => setParcelType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none appearance-none bg-white text-gray-400"
              >
                <option value="">Select Parcel type</option>
                <option value="document">Document</option>
                <option value="box">Box / Parcel</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Destination</label>
              <select 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none appearance-none bg-white text-gray-400"
              >
                <option value="">Select Delivery Destination</option>
                <option value="inside-dhaka">Inside Dhaka</option>
                <option value="outside-dhaka">Outside Dhaka</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (KG)</label>
              <input 
                type="number"
                placeholder="Contact"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none placeholder:text-gray-300"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button 
                onClick={handleReset}
                className="px-8 py-3 border border-[#d4f07d] text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-all"
              >
                Reset
              </button>
              <button 
                onClick={handleCalculate}
                className="flex-1 bg-[#d4f07d] text-[#003d29] py-3 rounded-lg font-bold hover:bg-[#c2e061] transition-all"
              >
                Calculate
              </button>
            </div>
          </div>

          {/* Pricing Result */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="text-7xl md:text-8xl font-black text-black">
              {totalCost} Tk
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;