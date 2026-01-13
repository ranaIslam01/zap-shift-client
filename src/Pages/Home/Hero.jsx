import React from "react";
import tiniDelevaryMan from "../../assets/tiny-deliveryman.png";
import CornarIcon from "../../assets/cornar-arrow.png";
import bigDeliveryman from "../../assets/big-deliveryman.png";

const Hero = () => {
  return (
    <div className="px-34 py-20 grid grid-cols-1 md:grid-cols-2">
      {/* left section  */}
      <section>
        <div className="space-y-6">
          <img src={tiniDelevaryMan} alt="tinidelevaryman" />
          <h1 className="text-7xl text-primary-black font-bold leading-20">
            We Make Sure Your{" "}
            <span className="text-[#ACC857]">Parcel Arrives</span> On Time – No
            Fuss.
          </h1>
          <p className="text-secondary-black text-lg">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
          <div className="flex ">
            <div className="flex cursor-pointer">
              <button className="text-primary-black bg-primary-green cursor-pointer px-5 rounded-2xl py-2 font-medium text-lg border border-primary-white">
                Track Your Parcel
              </button>
              <img className="h-12" src={CornarIcon} alt="cornar arrow" />
            </div>
            <button className="text-primary-black cursor-pointer  px-5 rounded-2xl py-2 font-medium text-lg border border-primary-white ml-4">
              Be A Rider
            </button>
          </div>

          <div className="flex gap-4 py-4">
            <div className="w-20 p-1 bg-secondary-black rounded-full"></div>
            <div className="w-14 p-1 bg-[#C3DFE2] rounded-full"></div>
            <div className="w-14 p-1 bg-[#C3DFE2] rounded-full"></div>
            <div className="w-14 p-1 bg-[#C3DFE2] rounded-full"></div>
          </div>
        </div>
      </section>
      {/* right section  */}
      <section>
        <div className="ml-40 flex justify-center items-center">
          <img src={bigDeliveryman} alt="bigdelivaryman" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
