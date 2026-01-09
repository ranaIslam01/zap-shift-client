import React, { useState } from 'react';
import agentPending from '../../assets/agent-pending.png';

const RiderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    license: '',
    email: '',
    region: '',
    district: '',
    nid: '',
    phone: '',
    bikeModel: '',
    bikeReg: '',
    about: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            Be a Rider
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-primary-black mb-8">
              Tell us about yourself
              <div className="h-0.5 w-full bg-gray-100 mt-2"></div>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Input Fields */}
              {[
                { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Your Name' },
                { label: 'Driving License Number', name: 'license', type: 'text', placeholder: 'Driving License Number' },
                { label: 'Your Email', name: 'email', type: 'email', placeholder: 'Your Email' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#10b981] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              ))}

              {/* Select Fields */}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your Region</label>
                  <select 
                    name="region" 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#10b981] outline-none transition-all text-gray-500"
                  >
                    <option value="">Select your Region</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chattogram">Chattogram</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">Your District</label>
                  <select 
                    name="district" 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#10b981] outline-none transition-all text-gray-500"
                  >
                    <option value="">Select your District</option>
                  </select>
                </div>
              </div>

              {/* Other Fields */}
              {[
                { label: 'NID No', name: 'nid', placeholder: 'NID' },
                { label: 'Phone Number', name: 'phone', placeholder: 'Phone Number' },
                { label: 'Bike Brand Model and Year', name: 'bikeModel', placeholder: 'Bike Brand Model and Year' },
                { label: 'Bike Registration Number', name: 'bikeReg', placeholder: 'Bike Registration Number' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#10b981] outline-none transition-all"
                  />
                </div>
              ))}

              {/* About Textarea */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Tell Us About Yourself</label>
                <textarea
                  name="about"
                  placeholder="Tell Us About Yourself"
                  rows="3"
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#10b981] outline-none transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#d4f07d] hover:bg-[#c2e061] text-[#003d29] font-bold py-3.5 rounded-md transition-colors duration-300 shadow-sm"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Illustration Section */}
          <div className="w-full lg:w-1/2 flex items-start justify-center pt-10">
            <div className="relative w-full max-w-lg">
                {/* Placeholder for the image from your screenshot */}
              <img 
                src={agentPending} 
                alt="Delivery Rider" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RiderForm;