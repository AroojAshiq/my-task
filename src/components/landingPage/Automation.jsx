import React from "react";
import Slider from "./Slider";
import Circle from "../../assests/circle.svg";

export default function Authomation() {
  return (
    <div className="h-auto flex items-center flex-col bg-[#E8F3FD] w-full py-20">
      <h1 className="text-center text-[#0A2540] text-4xl font-semibold leading-[52px]">
        Your Partner in Automation
      </h1>
      <div className="relative w-full md:h-80 h-96">
        <div className="absolute w-full lg:px-0 px-5">
          <Slider />
        </div>
        <div className="absolute flex justify-end h-full w-3/2 right-0 -top-14">
          <img src={Circle} alt="circle" className="h-full w-full" />
        </div>
      </div>
      <button className="text-white md:text-base lg:mt-10 md:mt-0 mt-6 text-sm font-medium leading-6 h-12 md:w-72 w-56 flex-shrink-0 rounded bg-[#0A2540]">
        Learn More About Xpertly
      </button>
    </div>
  );
}
