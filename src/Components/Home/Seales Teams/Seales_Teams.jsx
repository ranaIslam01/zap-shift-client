import React from "react";
import casio from "../../../assets/brands/casio.png";
import amazon from "../../../assets/brands/amazon.png";
import monster from "../../../assets/brands/moonstar.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import randstand from "../../../assets/brands/randstad.png";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const Seales_Teams = () => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-primary-black text-xl text-center font-semibold">
          We've helped thousands of sales teams
        </h1>
        <div className="flex justify-between px-30 py-10">
          <img src={casio} alt="img" />
          <img src={amazon} alt="img" />
          <img src={monster} alt="img" />
          <img src={star} alt="img" />
          <img src={startPeople} alt="img" />
          <img src={randstand} alt="img" />
        </div>
      </div>
      <div className="border-b border-dashed border-secondary-black w-[85%] mx-auto"></div>

      <div className="py-20 px-30 space-y-20">
         
         {/* 1 */}
        <div className="flex gap-10 ">
          <div>
            <img src={liveTracking} alt="img2" />
          </div>

          <div className="border-l border-dashed border-secondary-black p-10 space-y-5 h-30 flex flex-col items-start mt-4 justify-center">
            <h1 className="font-bold text-primary-black text-lg">
              Live Parcel Tracking
            </h1>
            <p className="text-secondary-black">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
         
         {/* 2 */}
        <div className="flex gap-10 ">
          <div>
            <img src={safeDelivery} alt="img2" />
          </div>

          <div className="border-l border-dashed border-secondary-black p-10 space-y-5 h-30 flex flex-col items-start mt-4 justify-center">
            <h1 className="font-bold text-primary-black text-lg">
              100% Safe Delivery
            </h1>
            <p className="text-secondary-black">
             We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
         
         {/* 3 */}
        <div className="flex gap-10 ">
          <div>
            <img src={safeDelivery} alt="img2" />
          </div>

          <div className="border-l border-dashed border-secondary-black p-10 space-y-5 h-30 flex flex-col items-start mt-4 justify-center">
            <h1 className="font-bold text-primary-black text-lg">
              24/7 Call Center Support
            </h1>
            <p className="text-secondary-black">
              Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
            </p>
          </div>
        </div>



      </div>
      <div className="border-b border-dashed border-secondary-black w-[85%] mx-auto"></div>
    </div>
  );
};

export default Seales_Teams;
