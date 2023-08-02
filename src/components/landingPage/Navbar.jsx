import React, { useState } from "react";
import { Menu } from "../../icons/icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-auto w-full items-center justify-between flex py-5">
      <h1 className="text-white lg:text-3xl text-lg font-medium">LOGO</h1>
      <ul className="h-full lg:flex hidden items-center gap-x-5 text-white">
        <li className="group relative">
          <p className="text-white lg:text-sm text-xs font-medium leading-8">
            Home
          </p>
          <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
        </li>
        <li className="group relative">
          <p className="text-white lg:text-sm text-xs font-medium leading-8">
            About
          </p>
          <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
        </li>
        <li className="group relative">
          <p className="text-white lg:text-sm text-xs font-medium leading-8">
            Features
          </p>
          <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
        </li>
        <li className="group relative">
          <p className="text-white lg:text-sm text-xs font-medium leading-8">
            Pricing
          </p>
          <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
        </li>
        <li className="group relative">
          <p className="text-white lg:text-sm text-xs font-medium leading-8">
            Become a Partner
          </p>
          <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
        </li>
        <li className="group relative">
          <p className="text-white lg:text-sm text-xs font-medium leading-8">
            What is Automation
          </p>
          <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
        </li>
        <li>
          <button className="w-36 h-10 flex-shrink-0 rounded-md bg-[#FFC10E] text-[#E8F3FD] lg:text-sm text-xs font-bold">
            Try Xpertly Free
          </button>
        </li>
      </ul>
      <div
        onClick={() => setOpen(true)}
        className="text-white lg:hidden block hover:text-[#FFC10E]"
      >
        <Menu />
      </div>
      <div
        className={
          open
            ? "opacity-100 scale-100 z-20 bg-[#0A2540]  ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
            : "opacity-0 scale-95 absolute z-20 bg-[#0A2540] top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden hidden"
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#E8F3FD] dark:bg-[#078CA0] divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 ">
            <div className="flex items-center justify-between ">
              <div>
                <h1 className="text-[#0A2540] lg:text-3xl text-lg font-medium">
                  LOGO
                </h1>
              </div>
              <div className="-mr-2 ">
                <button
                  type="button"
                  className=" dark:bg-[#003036] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100  "
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-5 bg-[#E8F3FD]">
                <ul className="h-full flex flex-col items-start gap-y-2 text-white">
                  <li className="group relative">
                    <p className="text-[#0A2540] lg:text-sm text-xs font-medium leading-5">
                      Home
                    </p>
                    <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] lg:text-sm text-xs font-medium leading-5">
                      About
                    </p>
                    <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] lg:text-sm text-xs font-medium leading-5">
                      Features
                    </p>
                    <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] lg:text-sm text-xs font-medium leading-5">
                      Pricing
                    </p>
                    <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] lg:text-sm text-xs font-medium leading-5">
                      Become a Partner
                    </p>
                    <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li className="group relative">
                    <p className="text-[#0A2540] lg:text-sm text-xs font-medium leading-5">
                      What is Automation
                    </p>
                    <hr className="border-1 border-red-500 cursor-pointe transition-all duration-500 w-0 group-hover:w-full" />
                  </li>
                  <li>
                    <button className="w-36 h-10 flex-shrink-0 rounded-md bg-[#FFC10E] text-[#E8F3FD] lg:text-sm text-xs font-bold">
                      Try Xpertly Free
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
