import React from "react";
// import tiniDelevaryMan from "../../../assets/tiny-deliveryman.png";
import CornarIcon from "../../../assets/cornar-arrow.png";
import bigDeliveryman from "../../../assets/big-deliveryman.png";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 sm:py-16 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center h-screen">
      {/* left section  */}
      <section className="flex flex-col gap-6 order-2 md:order-1">
        {/* <div className="w-16 sm:w-20 md:w-24">
          <img src={tiniDelevaryMan} alt="tinidelevaryman" className="w-full" />
        </div> */}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-black font-bold leading-tight md:leading-snug">
          We Make Sure Your{" "}
          <span className="text-[#ACC857]">Parcel Arrives</span> On Time – No
          Fuss.
        </h1>

        <p className="text-secondary-black text-base sm:text-lg md:text-base lg:text-lg leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link to='/sendpercelform' className="flex cursor-pointer hover:opacity-90 transition w-full sm:w-auto">
            <button className="text-primary-black bg-primary-green cursor-pointer px-4 sm:px-5 rounded-xl md:rounded-2xl py-2 md:py-3 font-medium text-sm sm:text-base md:text-lg border border-primary-white hover:bg-opacity-90 transition w-full sm:w-auto">
              Track Your Parcel
            </button>
            <img
              className="h-10 md:h-12 hidden sm:block"
              src={CornarIcon}
              alt="cornar arrow"
            />
          </Link>

          <Link to="/be-a-rider">
            <button className="text-primary-black cursor-pointer px-4 sm:px-5 rounded-xl md:rounded-2xl py-2 md:py-3 font-medium text-sm sm:text-base md:text-lg border border-primary-white hover:bg-gray-100 transition w-full sm:w-auto">
              Be A Rider
            </button>
          </Link>
        </div>

        <div className="flex gap-3 py-4">
          <div className="w-16 sm:w-20 p-1 bg-secondary-black rounded-full"></div>
          <div className="w-12 sm:w-14 p-1 bg-[#C3DFE2] rounded-full"></div>
          <div className="w-12 sm:w-14 p-1 bg-[#C3DFE2] rounded-full"></div>
          <div className="w-12 sm:w-14 p-1 bg-[#C3DFE2] rounded-full"></div>
        </div>
      </section>

      {/* right section  */}
      <section className="flex justify-center items-center order-1 md:order-2">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          <img
            src={bigDeliveryman}
            alt="bigdelivaryman"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
