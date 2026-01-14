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
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: liveTracking,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: safeDelivery,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: safeDelivery,
    },
  ];

  const brands = [casio, amazon, monster, star, startPeople, randstand];

  return (
    <div>
      <div className="py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-10">
        <h1 className="text-primary-black text-xl sm:text-2xl md:text-3xl text-center font-semibold mb-6 sm:mb-10 md:mb-12">
          We've helped thousands of sales teams
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center justify-center">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img
                src={brand}
                alt="brand"
                className="w-16 sm:w-20 md:w-24 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-dashed border-secondary-black w-[90%] sm:w-[85%] mx-auto"></div>

      <div className="py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-10 space-y-8 md:space-y-12 lg:space-y-16">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-start md:items-center"
          >
            <div className="shrink-0 w-full md:w-auto md:min-w-62.5">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full md:w-auto md:max-w-xs h-auto"
              />
            </div>

            <div className="border-l-0 md:border-l border-dashed border-secondary-black md:pl-6 lg:pl-10 py-4 md:py-0 space-y-3 md:space-y-4">
              <h2 className="font-bold text-primary-black text-lg sm:text-xl md:text-lg lg:text-xl">
                {feature.title}
              </h2>
              <p className="text-secondary-black text-sm sm:text-base md:text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b border-dashed border-secondary-black w-[90%] sm:w-[85%] mx-auto"></div>
    </div>
  );
};

export default Seales_Teams;
