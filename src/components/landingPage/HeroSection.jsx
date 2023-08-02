import React from "react";
import Banner from "../../assests/banner.svg";
import Navbar from "./Navbar";
import Wave from "../../assests/wave.svg";
import Dashboard from "../../assests/dashboard.png";

export default function HeroSection() {
  return (
    <div
      className={`lg:h-[80vh] xl:h-[95vh] sm:h-[110vh] h-screen md:h-[135vh] bg-[#0A2540] relative`}
    >
      <div className="absolute">
        <img src={Banner} alt="banner" className="xl:h-72 lg:h-64 h-40 " />
      </div>
      <div className="absolute w-full">
        <div className="xl:px-52 lg:px-20 md:px-10 px-5">
          <Navbar />
        </div>
      </div>
      <div
        className="absolute w-full xl:bottom-0 top-24 flex md:items-center lg:flex-row flex-col xl:gap-x-0 gap-x-5 xl:pl-52 lg:pl-20 md:px-10 px-5
      "
      >
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:block z-10 xl:space-y-5 space-y-2">
          <h1
            className="xl:text-5xl md:text-4xl text-3xl lg:w-72 lg:text-left text-center w-full xl:leading-[65px]  font-normal text-white
          "
          >
            Powerful Automations On-Demand
          </h1>
          <p className="md:text-lg text-base md:w-5/6 w-full lg:text-left text-center leading-7 font-normal text-white">
            Xpertly provides customised, versatile, and on-demand automations
            for your business, boosting efficiency and freeing up your
            resources.
          </p>
          <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-3 gap-x-3">
            <button className="xl:w-56 w-48 text-sm h-12 font-medium leading-6 xl:text-base text-white bg-[#46A0D8] rounded flex-shrink-0">
              Book a FREE Consultation
            </button>
            <button className="xl:w-56  w-48 text-sm h-12 font-medium leading-6 xl:text-base text-white border border-white rounded flex-shrink-0">
              What is Automation?
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full z-10 xl:pt-14 pt-8 flex items-end">
          <img src={Dashboard} alt="banner" className="h-full w-full" />
        </div>
      </div>
      <div className="absolute xl:-bottom-1 hidden md:block  -bottom-1">
        <img src={Wave} alt="wave" />
      </div>
    </div>
  );
}
