import React from 'react';
import track from '../../../assets/bookingIcon.png'

const How_It_Works = () => {
   return (
      <div>
         <div className='bg-gray-100 px-30 py-20'>
            <h1 className='font-bold text-primary-black text-2xl'>How it Works</h1>

            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 py-6'>
               
               {/* card 1 */}
               <div className='p-10 bg-white shadow-xl'>
                  <img src={track} alt="track" />
                  <h1 className='text-primary-black font-semibold'>Booking Pick & Drop</h1>
                  <p className='text-secondary-black'>From personal packages to business shipments — we deliver on time, every time.</p>
               </div>
               
               {/* card 2 */}
               <div className='p-10 bg-white shadow-xl'>
                  <img src={track} alt="track" />
                  <h1 className='text-primary-black font-semibold'>Cash On Delivery</h1>
                  <p className='text-secondary-black'>From personal packages to business shipments — we deliver on time, every time.</p>
               </div>
               
               {/* card 3 */}
               <div className='p-10 bg-white shadow-xl'>
                  <img src={track} alt="track" />
                  <h1 className='text-primary-black font-semibold'>Delivery Hub</h1>
                  <p className='text-secondary-black'>From personal packages to business shipments — we deliver on time, every time.</p>
               </div>
               
               {/* card 4 */}
               <div className='p-10 bg-white shadow-xl'>
                  <img src={track} alt="track" />
                  <h1 className='text-primary-black font-semibold'>Booking SME & Corporate</h1>
                  <p className='text-secondary-black'>From personal packages to business shipments — we deliver on time, every time.</p>
               </div>

               


            </div>
         </div>
      </div>
   );
};

export default How_It_Works;