import React from "react";
import customerTop from "../../../assets/customer-top.png";
import reviewQuote from "../../../assets/reviewQuote.png";
import download from "../../../assets/download.png";

const Testimonial = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center flex flex-col justify-center items-center gap-4">
        <img src={customerTop} alt="img" />
        <h1 className="text-2xl font-bold text-primary-black">
          What our customers are sayings
        </h1>
        <p className="text-secondary-black">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-10">

         {/* 1 */}
        <div className="p-8 shadow-xl rounded-2xl bg-white flex flex-col gap-6">
          <img src={reviewQuote} alt="quote icon" className="w-10" />
          
          <p className="text-gray-600 italic">
            "A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day."
          </p>
          
          <div className="border-b border-primary-black border-dashed w-full"></div>
          
          <div className="flex items-center gap-4">
            <img src={download} alt="user" className="w-12 h-12 rounded-full object-cover bg-black" />
            <div className="flex flex-col">
              <h1 className="font-bold text-primary-black text-lg">Awlad Hossin</h1>
              <h2 className="text-sm text-gray-500">Senior Product Designer</h2>
            </div>
          </div>
        </div>

         {/* 2 */}
        <div className="p-8 shadow-xl rounded-2xl bg-white flex flex-col gap-6">
          <img src={reviewQuote} alt="quote icon" className="w-10" />
          
          <p className="text-gray-600 italic">
            A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. 
          </p>
          
          <div className="border-b border-primary-black border-dashed w-full"></div>
          
          <div className="flex items-center gap-4">
            <img src={download} alt="user" className="w-12 h-12 rounded-full object-cover bg-black" />
            <div className="flex flex-col">
              <h1 className="font-bold text-primary-black text-lg">Nasir Uddin</h1>
              <h2 className="text-sm text-gray-500">CEO</h2>
            </div>
          </div>
        </div>

         {/* 3 */}
        <div className="p-8 shadow-xl rounded-2xl bg-white flex flex-col gap-6">
          <img src={reviewQuote} alt="quote icon" className="w-10" />
          
          <p className="text-gray-600 italic">
            A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. 
          </p>
          
          <div className="border-b border-primary-black border-dashed w-full"></div>
          
          <div className="flex items-center gap-4">
            <img src={download} alt="user" className="w-12 h-12 rounded-full object-cover bg-black" />
            <div className="flex flex-col">
              <h1 className="font-bold text-primary-black text-lg">Rasel Ahamed</h1>
              <h2 className="text-sm text-gray-500">Web developer</h2>
            </div>
          </div>
        </div>

         {/* 4 */}
        <div className="p-8 shadow-xl rounded-2xl bg-white flex flex-col gap-6">
          <img src={reviewQuote} alt="quote icon" className="w-10" />
          
          <p className="text-gray-600 italic">
            "A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day."
          </p>
          
          <div className="border-b border-primary-black border-dashed w-full"></div>
          
          <div className="flex items-center gap-4">
            <img src={download} alt="user" className="w-12 h-12 rounded-full object-cover bg-black" />
            <div className="flex flex-col">
              <h1 className="font-bold text-primary-black text-lg">Awlad Hossin</h1>
              <h2 className="text-sm text-gray-500">Senior Product Designer</h2>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
