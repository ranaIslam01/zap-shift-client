import React from 'react';
import locationMerchent from '../../../assets/location-merchant.png'
import merchentBg from '../../../assets/be-a-merchant-bg.png'


const Merchant = () => {
   return (
      <div className='grid grid-cols-1 relative md:grid-cols-2 bg-primary-black mx-30 p-20 my-20 rounded-2xl'>
         <div className='z-10 space-y-5'>
            <h1 className='text-primary-white font-bold text-3xl'>Merchant and Customer Satisfaction is Our First Priority</h1>
            <p className='text-primary-white'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
            <div>
               <button className="text-primary-black bg-primary-green cursor-pointer px-5 rounded-full py-2 text-lg border border-primary-white font-semibold mr-4">Become a Merchant</button>
               <button className="text-primary-green bg-transparent border border-primary-green cursor-pointer px-5 rounded-full py-2 font-semibold text-lg">Earn with ZapShift Courier</button>
            </div>
         </div>
         <div className='absolute top-0'>
            <img src={merchentBg} alt="bg" />
         </div>
         <div>
            <img src={locationMerchent} alt="img" />
         </div>
      </div>
   );
};

export default Merchant;