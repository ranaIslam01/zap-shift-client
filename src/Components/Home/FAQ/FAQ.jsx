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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-30 font-sans">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003d3d] mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-3xl space-y-4">
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className={`border rounded-xl transition-all duration-300 ${
              openIndex === index ? 'bg-[#e6f2f2] border-[#a3cccc]' : 'bg-white border-transparent shadow-sm'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-semibold text-[#003d3d] md:text-lg">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-[#003d3d] w-5 h-5" />
              ) : (
                <ChevronDown className="text-gray-400 w-5 h-5" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-10 flex items-center">
        <button className="flex items-center bg-[#d4f06d] hover:bg-[#c5e64d] transition-colors rounded-full overflow-hidden group">
          <span className="px-6 py-3 font-bold text-[#003d3d]">See More FAQ's</span>
          <span className="bg-[#1a1a1a] p-3 text-white group-hover:bg-black">
            <ArrowUpRight size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;