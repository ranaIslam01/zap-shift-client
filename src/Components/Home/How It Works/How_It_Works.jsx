import React from "react";
import track from "../../../assets/bookingIcon.png";

const How_It_Works = () => {
  const cards = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 sm:py-16 md:py-20">
      <h1 className="font-bold text-primary-black text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10">
        How it Works
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-6 sm:p-8 md:p-10 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={track}
              alt="track"
              className="w-12 sm:w-14 md:w-16 h-auto mb-4"
            />
            <h2 className="text-primary-black font-semibold text-base sm:text-lg md:text-base mb-3">
              {card.title}
            </h2>
            <p className="text-secondary-black text-sm sm:text-base md:text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How_It_Works;
