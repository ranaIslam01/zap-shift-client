import React, { useState, useEffect } from 'react';
import agent from '../../assets/agent-pending.png';

const BeARider = () => {
  const [serviceData, setServiceData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  
  const [formData, setFormData] = useState({
    name: '',
    license: '',
    email: '',
    region: '',
    district: '',
    nid: '',
    phone: '',
    bikeBrandModel: '',
    bikeRegistration: '',
    about: ''
  });

  const [errors, setErrors] = useState({});

  // JSON ডেটা লোড করা
  useEffect(() => {
    fetch('serviceCenter.json')
      .then(res => res.json())
      .then(data => {
        setServiceData(data);
        const uniqueRegions = [...new Set(data.map(item => item.region))];
        setRegions(uniqueRegions);
      })
      .catch(err => console.error("Error fetching JSON:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // রিজিয়ন অনুযায়ী ডিস্ট্রিক্ট ফিল্টার
    if (name === 'region') {
      const filteredDistricts = serviceData
        .filter(item => item.region === value)
        .map(item => item.district);
      setDistricts([...new Set(filteredDistricts)]);
      setFormData(prev => ({ ...prev, region: value, district: '' }));
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.license) newErrors.license = "License is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required";
    if (!formData.phone || formData.phone.length < 11) newErrors.phone = "Valid phone required";
    if (!formData.bikeBrandModel) newErrors.bikeBrandModel = "Bike model is required";
    if (!formData.bikeRegistration) newErrors.bikeRegistration = "Registration number is required";
    if (!formData.region) newErrors.region = "Select region";
    if (!formData.district) newErrors.district = "Select district";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted Data:", formData);
      alert("Registration Successful!");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-primary-black p-6 md:p-12 lg:px-24 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Form Section */}
        <div className="space-y-10">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-black">Be a Rider</h1>
            <p className="text-secondary-black max-w-lg">
              Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <h2 className="text-2xl font-bold border-b border-primary-white pb-2">Tell us about yourself</h2>

            {/* Basic Info */}
            <div className="grid grid-cols-1 gap-5">
              {[
                { id: 'name', label: 'Your Name', placeholder: 'Your Name' },
                { id: 'license', label: 'Driving License Number', placeholder: 'Driving License Number' },
                { id: 'email', label: 'Your Email', placeholder: 'Your Email' },
              ].map((f) => (
                <div key={f.id} className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wide">{f.label}</label>
                  <input
                    name={f.id}
                    placeholder={f.placeholder}
                    onChange={handleChange}
                    className={`p-3.5 border rounded-lg outline-none focus:ring-2 focus:ring-primary-green ${errors[f.id] ? 'border-red-500' : 'border-primary-white'}`}
                  />
                  {errors[f.id] && <span className="text-red-500 text-xs">{errors[f.id]}</span>}
                </div>
              ))}
            </div>

            {/* Dynamic Selects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide">Your Region</label>
                <select name="region" onChange={handleChange} className="p-3.5 border border-primary-white rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary-green">
                  <option value="">Select Region</option>
                  {regions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide">Your District</label>
                <select name="district" onChange={handleChange} disabled={!formData.region} className="p-3.5 border border-primary-white rounded-lg bg-white outline-none focus:ring-2 focus:ring-primary-green disabled:opacity-50">
                  <option value="">Select District</option>
                  {districts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>

            {/* NID & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide">NID No</label>
                <input name="nid" placeholder="NID" onChange={handleChange} className="p-3.5 border border-primary-white rounded-lg focus:ring-2 focus:ring-primary-green outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide">Phone Number</label>
                <input name="phone" placeholder="Phone Number" onChange={handleChange} className="p-3.5 border border-primary-white rounded-lg focus:ring-2 focus:ring-primary-green outline-none" />
              </div>
            </div>

            {/* Bike Info - যুক্ত করা হয়েছে */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide">Bike Brand Model and Year</label>
                <input 
                  name="bikeBrandModel" 
                  placeholder="e.g. Yamaha FZS v3 2023" 
                  onChange={handleChange} 
                  className={`p-3.5 border rounded-lg focus:ring-2 focus:ring-primary-green outline-none ${errors.bikeBrandModel ? 'border-red-500' : 'border-primary-white'}`} 
                />
                {errors.bikeBrandModel && <span className="text-red-500 text-xs">{errors.bikeBrandModel}</span>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wide">Bike Registration Number</label>
                <input 
                  name="bikeRegistration" 
                  placeholder="e.g. DHAKA METRO-LA-123456" 
                  onChange={handleChange} 
                  className={`p-3.5 border rounded-lg focus:ring-2 focus:ring-primary-green outline-none ${errors.bikeRegistration ? 'border-red-500' : 'border-primary-white'}`} 
                />
                {errors.bikeRegistration && <span className="text-red-500 text-xs">{errors.bikeRegistration}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold uppercase tracking-wide">Tell Us About Yourself</label>
              <textarea name="about" rows="3" onChange={handleChange} className="p-3.5 border border-primary-white rounded-lg focus:ring-2 focus:ring-primary-green outline-none resize-none" placeholder="Tell us why you want to join..."></textarea>
            </div>

            <button type="submit" className="w-full bg-primary-green text-primary-black font-extrabold py-4 rounded-lg hover:bg-secondary-green hover:text-white transition-all uppercase tracking-widest">
              Submit
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="hidden lg:block sticky top-10">
          <img src={agent} alt="Rider" className="w-full h-auto drop-shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default BeARider;