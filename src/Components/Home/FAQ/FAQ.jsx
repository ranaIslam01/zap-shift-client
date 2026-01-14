import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowUpRight } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How does this posture corrector work?",
      answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer: "Yes, our posture corrector is designed with adjustable straps to fit various body shapes and sizes, making it suitable for teenagers and adults alike."
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer: "Absolutely. Regular use helps train your muscle memory, reducing the strain on your spine and alleviating chronic back and neck pain."
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer: "Depending on the model, some of our advanced versions include sensors that vibrate when they detect slouching to remind you to sit upright."
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer: "You can sign up for our newsletter or click the 'Notify Me' button on the product page to receive an email alert as soon as it's available."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 font-sans">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#003d3d] mb-3 sm:mb-4 md:mb-5">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="text-secondary-black text-sm sm:text-base leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-3xl space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className={`border rounded-xl transition-all duration-300 ${
              openIndex === index ? 'bg-[#e6f2f2] border-[#a3cccc] shadow-md' : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left"
            >
              <span className="font-semibold text-[#003d3d] text-sm sm:text-base md:text-lg leading-snug pr-4">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUp className="text-[#003d3d] w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <ChevronDown className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-secondary-black text-xs sm:text-sm md:text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex items-center justify-center">
        <button className="flex items-center bg-[#d4f06d] hover:bg-[#c5e64d] transition-colors rounded-full overflow-hidden group">
          <span className="px-4 sm:px-6 py-2 sm:py-3 font-bold text-[#003d3d] text-sm sm:text-base">See More FAQ's</span>
          <span className="bg-[#1a1a1a] p-2 sm:p-3 text-white group-hover:bg-black transition">
            <ArrowUpRight size={18} className="sm:w-5 sm:h-5" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
