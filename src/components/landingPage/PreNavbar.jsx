import React from "react";
import Phone from "../../assests/phoneIcon.svg";

export default function PreNavbar() {
  return (
    <div className="h-10 w-full flex items-center justify-center gap-x-5 bg-[#081D32]">
      <p className="text-white lg:text-sm text-xs font-medium tracking-[.15em] leading-normal">
        NEED ASSISTANCE
      </p>
      <div className="flex items-center gap-x-1">
        <img src={Phone} alt="call" className="h-3 w-3" />
        <p className="text-white lg:text-sm text-xs font-bold">
          +1 (700) 800 9000
        </p>
      </div>
    </div>
  );
}
