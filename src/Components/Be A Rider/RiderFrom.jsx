import React, { useState } from "react";
import agentPending from "../../assets/agent-pending.png";

const RiderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    license: "",
    email: "",
    region: "",
    district: "",
    nid: "",
    phone: "",
    bikeModel: "",
    bikeReg: "",
    about: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-black mb-3 sm:mb-4 md:mb-5">
            Be a Rider
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-black mb-4 sm:mb-6 md:mb-8">
              Tell us about yourself
              <div className="h-0.5 w-full bg-gray-100 mt-2 sm:mt-3"></div>
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-3 sm:space-y-4 md:space-y-5"
            >
              {/* Input Fields */}
              {[
                {
                  label: "Your Name",
                  name: "name",
                  type: "text",
                  placeholder: "Your Name",
                },
                {
                  label: "Driving License Number",
                  name: "license",
                  type: "text",
                  placeholder: "Driving License Number",
                },
                {
                  label: "Your Email",
                  name: "email",
                  type: "email",
                  placeholder: "Your Email",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 md:mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#10b981] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  />
                </div>
              ))}

              {/* Select Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 md:mb-2">
                    Your Region
                  </label>
                  <select
                    name="region"
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#10b981] outline-none transition-all text-gray-500"
                  >
                    <option value="">Select Region</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chattogram">Chattogram</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 md:mb-2">
                    Your District
                  </label>
                  <select
                    name="district"
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#10b981] outline-none transition-all text-gray-500"
                  >
                    <option value="">Select District</option>
                  </select>
                </div>
              </div>

              {/* Other Fields - Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: "NID No", name: "nid", placeholder: "NID" },
                  {
                    label: "Phone Number",
                    name: "phone",
                    placeholder: "Phone Number",
                  },
                  {
                    label: "Bike Model & Year",
                    name: "bikeModel",
                    placeholder: "Bike Brand Model Year",
                  },
                  {
                    label: "Bike Registration No",
                    name: "bikeReg",
                    placeholder: "Registration Number",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 md:mb-2">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      name={field.name}
                      placeholder={field.placeholder}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#10b981] outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                ))}
              </div>

              {/* About Textarea */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 md:mb-2">
                  Tell Us About Yourself
                </label>
                <textarea
                  name="about"
                  placeholder="Share your experience and why you want to join our team..."
                  rows="3"
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-[#10b981] outline-none transition-all placeholder:text-gray-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-green hover:bg-opacity-90 text-primary-black font-bold py-2.5 sm:py-3 md:py-3.5 rounded-md transition-colors duration-300 shadow-sm text-sm sm:text-base md:text-lg"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Illustration Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center pt-6 sm:pt-8 md:pt-10 lg:pt-0">
            <div className="relative w-full max-w-sm md:max-w-md">
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
