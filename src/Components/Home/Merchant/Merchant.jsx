import React from "react";
import locationMerchent from "../../../assets/location-merchant.png";
import merchentBg from "../../../assets/be-a-merchant-bg.png";

const Merchant = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative bg-primary-black mx-2 sm:mx-4 md:mx-6 lg:mx-10 xl:mx-20 p-6 sm:p-10 md:p-12 lg:p-20 my-8 sm:my-12 md:my-16 lg:my-20 rounded-2xl gap-6 md:gap-8">
      <div className="z-10 space-y-4 sm:space-y-5 flex flex-col justify-center">
        <h1 className="text-primary-white font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-snug">
          Merchant and Customer Satisfaction is Our First Priority
        </h1>
        <p className="text-primary-white text-sm sm:text-base leading-relaxed">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. ZapShift courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button className="text-primary-black bg-primary-green cursor-pointer px-4 sm:px-5 lg:px-6 rounded-full py-2 md:py-3 text-sm sm:text-base lg:text-lg border border-primary-white font-semibold hover:bg-opacity-90 transition whitespace-nowrap">
            Become a Merchant
          </button>
          <button className="text-primary-green bg-transparent border border-primary-green cursor-pointer px-4 sm:px-5 lg:px-6 rounded-full py-2 md:py-3 font-semibold text-sm sm:text-base lg:text-lg hover:bg-primary-green hover:text-primary-black transition whitespace-nowrap">
            Earn with ZapShift
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0 opacity-30 md:opacity-100 -z-10 md:z-0">
        <img src={merchentBg} alt="bg" className="w-full h-auto" />
      </div>
      <div className="flex justify-center items-center">
        <img
          src={locationMerchent}
          alt="img"
          className="w-full max-w-sm md:max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Merchant;
