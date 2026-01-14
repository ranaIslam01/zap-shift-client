import React from 'react';
import service from '../../../assets/service.png'

const Our_Services = () => {
   const servicesData = [
      { id: 1, title: "Express & Standard Delivery", description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.", highlight: false },
      { id: 2, title: "Nationwide Delivery", description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.", highlight: true },
      { id: 3, title: "Fulfillment Solution", description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.", highlight: false },
      { id: 4, title: "Cash on Home Delivery", description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.", highlight: false },
      { id: 5, title: "Corporate Service / Contract In Logistics", description: "Customized corporate services which includes warehouse and inventory management support.", highlight: false },
      { id: 6, title: "Parcel Return", description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.", highlight: false }
   ];

   return (
      <div className='mx-2 sm:mx-4 md:mx-6 lg:mx-10 bg-primary-black rounded-2xl p-4 sm:p-6 md:p-10 lg:p-20'>
         <div className='max-w-3xl mx-auto text-center text-primary-white space-y-3 sm:space-y-5 mb-8 sm:mb-10 px-2'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Our Services</h1>
            <p className='text-sm sm:text-base leading-relaxed'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
         </div>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6'>
            {servicesData.map((svc) => (
               <div key={svc.id} className={`rounded-2xl p-6 sm:p-8 md:p-10 text-center flex flex-col justify-center items-center space-y-3 transition-transform hover:scale-105 ${svc.highlight ? 'bg-primary-green' : 'bg-white'}`}>
                  <img className='w-12 sm:w-14 md:w-16 h-auto' src={service} alt="service" />
                  <h2 className='font-semibold text-primary-black text-base sm:text-lg md:text-base leading-snug'>{svc.title}</h2>
                  <p className={`text-sm sm:text-base leading-relaxed text-secondary-black`}>{svc.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Our_Services;
