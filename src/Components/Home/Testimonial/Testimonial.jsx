import React from "react";
import customerTop from "../../../assets/customer-top.png";
import reviewQuote from "../../../assets/reviewQuote.png";
import download from "../../../assets/download.png";

const Testimonial = () => {
  const testimonials = [
    { id: 1, name: "Awlad Hossin", role: "Senior Product Designer", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 2, name: "Nasir Uddin", role: "CEO", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 3, name: "Rasel Ahamed", role: "Web developer", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." },
    { id: 4, name: "Awlad Hossin", role: "Senior Product Designer", text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day." }
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center flex flex-col justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-16">
        <img src={customerTop} alt="img" className="w-16 sm:w-20 md:w-24 h-auto" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-black">
          What our customers are saying
        </h1>
        <p className="text-secondary-black text-sm sm:text-base leading-relaxed max-w-2xl">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-6 sm:p-7 md:p-8 shadow-md hover:shadow-xl rounded-2xl bg-white flex flex-col gap-5 transition-shadow">
            <img src={reviewQuote} alt="quote icon" className="w-8 sm:w-9 md:w-10" />
            
            <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed">
              {testimonial.text}
            </p>
            
            <div className="border-b border-primary-black border-dashed w-full"></div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <img src={download} alt="user" className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full object-cover bg-black flex-shrink-0" />
              <div className="flex flex-col min-w-0">
                <h2 className="font-bold text-primary-black text-sm sm:text-base md:text-base truncate">{testimonial.name}</h2>
                <h3 className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.role}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
