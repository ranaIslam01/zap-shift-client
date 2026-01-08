import React from 'react';
import service from '../../../assets/service.png'

const Our_Services = () => {
   return (
      <div>
         <div className='m-10 bg-primary-black rounded-2xl p-20'>
            <div className='max-w-3xl mx-auto text-center text-primary-white space-y-5'>
               <h1 className='text-3xl font-bold '>Our Services</h1>
               <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            <div>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
                  
                  {/* card 1 */}
                  <div className='bg-white rounded-2xl p-10 text-center flex flex-col justify-center items-center space-y-3'>
                     <img className='w-14 flex justify-center items-center' src={service} alt="service" />
                     <h1 className='font-semibold text-primary-black w-50 text-lg'>Express  & Standard Delivery</h1>
                     <p className='text-secondary-black'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                  </div>
                  
                  {/* card 2 */}
                  <div className='bg-primary-green rounded-2xl p-10 text-center flex flex-col justify-center items-center space-y-3'>
                     <img className='w-14 flex justify-center items-center' src={service} alt="service" />
                     <h1 className='font-semibold text-primary-black w-50 text-lg'>Nationwide Delivery</h1>
                     <p className='text-secondary-black'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                  </div>
                  
                  {/* card 3 */}
                  <div className='bg-white rounded-2xl p-10 text-center flex flex-col justify-center items-center space-y-3'>
                     <img className='w-14 flex justify-center items-center' src={service} alt="service" />
                     <h1 className='font-semibold text-primary-black w-50 text-lg'>Fulfillment Solution</h1>
                     <p className='text-secondary-black'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                  </div>
                  
                  {/* card 4 */}
                  <div className='bg-white rounded-2xl p-10 text-center flex flex-col justify-center items-center space-y-3'>
                     <img className='w-14 flex justify-center items-center' src={service} alt="service" />
                     <h1 className='font-semibold text-primary-black w-50 text-lg'>Cash on Home Delivery</h1>
                     <p className='text-secondary-black'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                  </div>
                  
                  {/* card 5 */}
                  <div className='bg-white rounded-2xl p-10 text-center flex flex-col justify-center items-center space-y-3'>
                     <img className='w-14 flex justify-center items-center' src={service} alt="service" />
                     <h1 className='font-semibold text-primary-black w-50 text-lg'>Corporate Service / Contract In Logistics</h1>
                     <p className='text-secondary-black'>Customized corporate services which includes warehouse and inventory management support.</p>
                  </div>
                  
                  {/* card 6 */}
                  <div className='bg-white rounded-2xl p-10 text-center flex flex-col justify-center items-center space-y-3'>
                     <img className='w-14 flex justify-center items-center' src={service} alt="service" />
                     <h1 className='font-semibold text-primary-black w-50 text-lg'>Parcel Return</h1>
                     <p className='text-secondary-black'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                  </div>

                  

               </div>
            </div>
         </div>
      </div>
   );
};

export default Our_Services;