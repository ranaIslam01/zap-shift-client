import React from "react";
import tinyDeliveryman from "../../assets/tiny-deliveryman.png";
import CornarIcon from "../../assets/cornar-arrow.png";
import first from "../../assets/agents/1.png";
import second from "../../assets/agents/2.png";
import third from "../../assets/agents/3.png";
import four from "../../assets/agents/4.png";
import five from "../../assets/agents/5.png";
import six from "../../assets/agents/6.png";
import seven from "../../assets/agents/7.png";
import eight from "../../assets/agents/8.png";

const HowEarning = () => {
  return (
    <div>
      <div className="max-w-2xl md:mx-auto mx-10 space-y-5 py-16">
        <img src={tinyDeliveryman} alt="tinydeliveryman" />
        <h1 className="text-4xl text-primary-black font-bold">
          How Earning Works
        </h1>
        <h2 className="text-secondary-black">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </h2>
        <div className="flex items-center">
          <button className="text-primary-black bg-primary-green cursor-pointer px-10 rounded-full py-2 font-bold text-lg border border-primary-white">
            Be a Rider
          </button>
          <img className="h-12" src={CornarIcon} alt="cornar arrow" />
        </div>
      </div>

      <div className="flex flex-col lg:px-30 px-10 lg:py-10 py-6">
        <h1 className="text-4xl font-bold text-primary-black text-center">
          Our Top Agents
        </h1>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10  lg:py-20">

          {/* 1 */}
          <div className="space-y-1">
            <img className="rounded-2xl w-70 h-auto mb-4" src={first} alt="img" />
            <h1 className="text-xl font-semibold text-primary-black">Devon Lane</h1>
            <h2 className="text-secondary-black">Naperville</h2>
          </div>

          {/* 1 */}
          <div className="space-y-1">
            <img className="rounded-2xl w-70 h-auto mb-4" src={second} alt="img" />
            <h1 className="text-xl font-semibold text-primary-black">Devon Lane</h1>
            <h2 className="text-secondary-black">Naperville</h2>
          </div>

          {/* 1 */}
          <div className="space-y-1">
            <img className="rounded-2xl w-70 h-auto mb-4" src={third} alt="img" />
            <h1 className="text-xl font-semibold text-primary-black">Devon Lane</h1>
            <h2 className="text-secondary-black">Naperville</h2>
          </div>

          {/* 1 */}
          <div className="space-y-1">
            <img className="rounded-2xl w-70 h-auto mb-4" src={four} alt="img" />
            <h1 className="text-xl font-semibold text-primary-black">Devon Lane</h1>
            <h2 className="text-secondary-black">Naperville</h2>
          </div>

          {/* 1 */}
          <div className="space-y-1">
            <img className="rounded-2xl w-70 h-auto mb-4" src={five} alt="img" />
            <h1 className="text-xl font-semibold text-primary-black">Devon Lane</h1>
            <h2 className="text-secondary-black">Naperville</h2>
          </div>

          {/* 1 */}
          <div className="space-y-1">
            <img className="rounded-2xl w-70 h-auto mb-4" src={six} alt="img" />
            <h1 className="text-xl font-semibold text-primary-black">Devon Lane</h1>
            <h2 className="text-secondary-black">Naperville</h2>
          </div>

          {/* 1 */}
          <div className="space-y-1">
            <img className="rounded-2xl w-70 h-auto mb-4" src={seven} alt="img" />
            <h1 className="text-xl font-semibold text-primary-black">Devon Lane</h1>
            <h2 className="text-secondary-black">Naperville</h2>
          </div>

          {/* 1 */}
          <div className="space-y-1">
            <img className="rounded-2xl w-70 h-auto mb-4" src={eight} alt="img" />
            <h1 className="text-xl font-semibold text-primary-black">Devon Lane</h1>
            <h2 className="text-secondary-black">Naperville</h2>
          </div>

      

        </div>
      </div>
    </div>
  );
};

export default HowEarning;
