import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SendParcelForm = () => {
  const [parcelType, setParcelType] = useState('Document');
  const [serviceData, setServiceData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [errors, setErrors] = useState({});
  const axiosSecure = useAxiosSecure();
  
  const [formData, setFormData] = useState({
    parcelName: '',
    parcelWeight: '',
    senderName: '',
    senderContact: '',
    senderRegion: '',
    senderWarehouse: '',
    senderAddress: '',
    pickupInstruction: '',
    receiverName: '',
    receiverContact: '',
    receiverRegion: '',
    receiverWarehouse: '',
    receiverAddress: '',
    deliveryInstruction: ''
  });

  // JSON ডাটা লোড করা
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // টাইপ করার সাথে সাথে এরর রিমুভ হবে
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // ভ্যালিডেশন চেক লজিক
  const validate = () => {
    let newErrors = {};
    const phoneRegex = /^\d{11}$/;

    // প্রয়োজনীয় ফিল্ডগুলো চেক করা
    if (!formData.parcelName.trim()) newErrors.parcelName = "Parcel name is required";
    if (!formData.parcelWeight || formData.parcelWeight <= 0) newErrors.parcelWeight = "Enter valid weight";
    
    // Sender Validation
    if (!formData.senderName.trim()) newErrors.senderName = "Required";
    if (!phoneRegex.test(formData.senderContact)) newErrors.senderContact = "Invalid phone";
    if (!formData.senderRegion) newErrors.senderRegion = "Select region";
    if (!formData.senderAddress.trim()) newErrors.senderAddress = "Address is required";

    // Receiver Validation
    if (!formData.receiverName.trim()) newErrors.receiverName = "Required";
    if (!phoneRegex.test(formData.receiverContact)) newErrors.receiverContact = "Invalid phone";
    if (!formData.receiverRegion) newErrors.receiverRegion = "Select region";
    if (!formData.receiverAddress.trim()) newErrors.receiverAddress = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (validate()) {
    try {
      const finalData = { 
        ...formData, 
        parcelType,
        status: 'pending',
        orderDate: new Date() 
      };

      const response = await axiosSecure.post('/parcels', finalData);

      if (response.data.insertedId) {
        // --- সফল হলে SweetAlert ---
        Swal.fire({
          title: "Success!",
          text: "Your parcel booking has been confirmed.",
          icon: "success",
          confirmButtonColor: "#28a745", // আপনার থিমের সাথে মিল রেখে কালার দিতে পারেন
          confirmButtonText: "Great!"
        });
        
        // ফর্ম ক্লিয়ার করার লজিক (ঐচ্ছিক)
        // setFormData(initialState); 
      }
    } catch (error) {
      console.error("Error submitting parcel:", error);
      
      // --- এরর হলে SweetAlert ---
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33"
      });
    }
  } else {
    // ভ্যালিডেশন এরর মেসেজ (ঐচ্ছিক SweetAlert)
    Swal.fire({
      title: "Validation Failed",
      text: "Please fill all the required fields correctly.",
      icon: "warning",
      confirmButtonColor: "#f39c12"
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

  const labelStyle = "block text-[13px] font-bold text-primary-black mb-1.5 uppercase tracking-tight";
  const inputStyle = (fieldName) => `
    w-full p-2.5 border rounded-md focus:outline-none focus:ring-1 transition-all text-sm placeholder:text-gray-300
    ${errors[fieldName] ? 'border-red-500 focus:ring-red-500 bg-red-50' : 'border-primary-white focus:ring-primary-green bg-white'}
  `;

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 lg:p-20 font-sans text-primary-black">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-12">
        
        {/* Parcel Category & Basics */}
        <section className="space-y-6">
          <div className="flex gap-10 items-center">
            {['Document', 'Non-Document'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="parcelType" 
                  checked={parcelType === type} 
                  onChange={() => setParcelType(type)}
                  className="w-4 h-4 accent-primary-green cursor-pointer"
                />
                <span className="text-sm font-bold transition-colors">{type}</span>
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-1">
              <label className={labelStyle}>Parcel Name</label>
              <input name="parcelName" placeholder="Parcel Name" onChange={handleInputChange} className={inputStyle('parcelName')} />
              {errors.parcelName && <span className="text-red-500 text-[10px] font-bold uppercase">{errors.parcelName}</span>}
            </div>
            <div className="space-y-1">
              <label className={labelStyle}>Weight (kg)</label>
              <input name="parcelWeight" placeholder="Enter weight" type="number" onChange={handleInputChange} className={inputStyle('parcelWeight')} />
              {errors.parcelWeight && <span className="text-red-500 text-[10px] font-bold uppercase">{errors.parcelWeight}</span>}
            </div>
          </div>
        </section>

        <hr className="border-primary-white" />

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
          
          {/* Sender Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-l-4 border-primary-green pl-3">Sender Info</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className={labelStyle}>Name</label>
                <input name="senderName" placeholder="Rana Islam" onChange={handleInputChange} className={inputStyle('senderName')} />
                {errors.senderName && <span className="text-red-500 text-[10px] font-bold">{errors.senderName}</span>}
              </div>
              <div className="space-y-1">
                <label className={labelStyle}>Contact Number</label>
                <input name="senderContact" placeholder="01XXXXXXXXX" onChange={handleInputChange} className={inputStyle('senderContact')} />
                {errors.senderContact && <span className="text-red-500 text-[10px] font-bold">{errors.senderContact}</span>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className={labelStyle}>Your Region</label>
                <select name="senderRegion" onChange={handleInputChange} className={inputStyle('senderRegion')}>
                  <option value="">Select Region</option>
                  {regions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className={labelStyle}>Sender Pickup Wire house</label>
                <select name="senderWarehouse" onChange={handleInputChange} className={inputStyle()}>
                  <option value="">Select Service Center</option>
                  {serviceData.filter(i => i.region === formData.senderRegion).map(i => <option key={i.city} value={i.city}>{i.city}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className={labelStyle}>Address</label>
              <input name="senderAddress" placeholder="Full Pickup Address" onChange={handleInputChange} className={inputStyle('senderAddress')} />
              {errors.senderAddress && <span className="text-red-500 text-[10px] font-bold">{errors.senderAddress}</span>}
            </div>
            <div className="space-y-1">
              <label className={labelStyle}>Pickup Instruction</label>
              <textarea name="pickupInstruction" placeholder="Pickup Instruction" rows="3" onChange={handleInputChange} className="w-full p-2.5 border border-primary-white rounded-md focus:ring-1 focus:ring-primary-green outline-none resize-none text-sm" />
            </div>
          </div>

          {/* Receiver Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold border-l-4 border-primary-green pl-3">Receiver Info</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className={labelStyle}>Name</label>
                <input name="receiverName" placeholder="Recipient Name" onChange={handleInputChange} className={inputStyle('receiverName')} />
                {errors.receiverName && <span className="text-red-500 text-[10px] font-bold">{errors.receiverName}</span>}
              </div>
              <div className="space-y-1">
                <label className={labelStyle}>Contact</label>
                <input name="receiverContact" placeholder="01XXXXXXXXX" onChange={handleInputChange} className={inputStyle('receiverContact')} />
                {errors.receiverContact && <span className="text-red-500 text-[10px] font-bold">{errors.receiverContact}</span>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className={labelStyle}>Receiver Region</label>
                <select name="receiverRegion" onChange={handleInputChange} className={inputStyle('receiverRegion')}>
                  <option value="">Select Region</option>
                  {regions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className={labelStyle}>Receiver Delivery Wire house</label>
                <select name="receiverWarehouse" onChange={handleInputChange} className={inputStyle()}>
                  <option value="">Select Service Center</option>
                  {serviceData.filter(i => i.region === formData.receiverRegion).map(i => <option key={i.city} value={i.city}>{i.city}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className={labelStyle}>Address</label>
              <input name="receiverAddress" placeholder="Full Delivery Address" onChange={handleInputChange} className={inputStyle('receiverAddress')} />
              {errors.receiverAddress && <span className="text-red-500 text-[10px] font-bold">{errors.receiverAddress}</span>}
            </div>
            <div className="space-y-1">
              <label className={labelStyle}>Delivery Instruction</label>
              <textarea name="deliveryInstruction" placeholder="Delivery Instruction" rows="3" onChange={handleInputChange} className="w-full p-2.5 border border-primary-white rounded-md focus:ring-1 focus:ring-primary-green outline-none resize-none text-sm" />
            </div>
          </div>
        </div>

        {/* Submit Area */}
        <div className="pt-8 border-t border-primary-white space-y-6">
          <p className="text-sm font-bold italic text-secondary-black">
            * PickUp Time ~ 4pm-7pm ~ Approx.
          </p>
          <button 
            type="submit" 
            className="bg-primary-green text-primary-black font-extrabold py-3.5 px-12 rounded-md hover:bg-opacity-90 transition-all shadow-md active:scale-95"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcelForm;