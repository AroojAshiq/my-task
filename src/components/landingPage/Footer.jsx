import React from "react";
import Logo from "../../assests/logo.svg";

export default function Footer() {
  return (
    <>
      <div className="xl:px-52 lg:px-20 md:px-10 px-5">
        <div className="h-auto grid w-full lg:grid-cols-4 grid-cols-1 lg:gap-y-0 md:gap-y-10 gap-y-5 justify-center items-center lg:items-start  md:py-20 py-10 bg-white">
          <div className="w-60 md:mx-auto">
            <img
              src={Logo}
              alt="logo"
              className="h-11 w-54 lg:mx-0 md:mx-auto mx-0 flex-shrink-0"
            />
            <p className="text-sm font-normal lg:text-left md:text-center text-left mt-5 leading-5 text-[#425466]">
              Xpertly’s automation-as-a-service model acts as an agile extension
              to your in-house IT team...
            </p>
          </div>

          <div className="w-36 md:mx-auto md:flex justify-center block items-center flex-col">
            <h1 className="text-lg font-semibold md:text-center lg:text-left text-left w-full text-[#242555]">
              QUICK LINKS
            </h1>
            <ul className="lg:mt-8 mt-5 space-y-2 lg:block md:flex flex-col justify-center items-center">
              <li className="text-sm font-normal leading-7 text-[#425466]">
                Home
              </li>
              <li className="text-sm font-normal leading-7 text-[#425466]">
                About
              </li>
              <li className="text-sm font-normal leading-7 text-[#425466]">
                Pricing
              </li>
              <li className="text-sm font-normal leading-7 text-[#425466]">
                Features
              </li>
              <li className="text-sm font-normal leading-7 text-[#425466]">
                Become a Partner
              </li>
              <li className="text-sm font-normal leading-7 text-[#425466]">
                What is Automation
              </li>
              <li className="text-sm font-normal leading-7 text-[#425466]">
                Contact Us
              </li>
            </ul>
          </div>

          <div className="w-40 md:mx-auto">
            <h1 className="text-lg w-full lg:text-left md:text-center text-left font-semibold text-[#242555]">
              CONTACT
            </h1>
            <div className="lg:mt-8 mt-5 lg:block md:flex flex-col items-center">
              <p className="text-sm font-normal leading-7 text-[#425466]">
                Call 1-700-800-9000
              </p>
              <p className="text-sm font-normal leading-7 text-[#425466]">
                Email: info@xpertly.io
              </p>
            </div>

            <h1 className="text-lg lg:text-left md:text-center text-left lg:mt-8 mt-5 font-semibold text-[#242555]">
              SOCIAL
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="31"
              viewBox="0 0 72 31"
              fill="none"
              className="lg:mt-8 mt-5 mx-0 lg:mx-0 md:mx-auto"
            >
              <path
                d="M41.4805 15.6522C41.4805 23.9365 48.1962 30.6522 56.4805 30.6522C64.7648 30.6522 71.4805 23.9365 71.4805 15.6522C71.4805 7.36795 64.7648 0.652222 56.4805 0.652222C48.1962 0.652222 41.4805 7.36795 41.4805 15.6522Z"
                fill="#50ABF1"
              />
              <path
                d="M49.4813 20.4248C50.7488 21.2023 52.2523 21.6522 53.864 21.6522C58.3919 21.6522 62.0623 18.1018 62.0623 13.7228C62.0623 13.6135 62.0599 13.505 62.0556 13.3968C62.2193 13.2721 63.2322 12.4869 63.4805 11.9821C63.4805 11.9821 62.658 12.3127 61.8529 12.3906C61.8513 12.3906 61.8494 12.391 61.8478 12.391C61.8478 12.391 61.8494 12.3902 61.8521 12.3883C61.9263 12.3404 62.9634 11.6576 63.1038 10.844C63.1038 10.844 62.522 11.1444 61.7074 11.4071C61.5725 11.4505 61.4313 11.4931 61.2858 11.5325C60.7607 10.9905 60.0143 10.6522 59.1859 10.6522C57.5967 10.6522 56.309 11.8973 56.309 13.4332C56.309 13.6499 56.3348 13.8608 56.3836 14.0634C56.1615 14.0546 52.7798 13.8712 50.4791 11.1765C50.4791 11.1765 49.1042 12.992 51.2985 14.8589C51.2985 14.8589 50.6315 14.8332 50.056 14.5006C50.056 14.5006 49.8446 16.7001 52.3296 17.2624C52.3296 17.2624 51.8407 17.4416 51.0606 17.3138C51.0606 17.3138 51.4968 19.091 53.7046 19.2571C53.7046 19.2571 51.9588 20.7825 49.4805 20.4246L49.4813 20.4248Z"
                fill="white"
              />
              <path
                d="M30.4805 15.6522C30.4805 23.9365 23.7648 30.6522 15.4805 30.6522C7.19623 30.6522 0.480499 23.9365 0.480499 15.6522C0.480499 7.36795 7.19623 0.652222 15.4805 0.652222C23.7648 0.652222 30.4805 7.36795 30.4805 15.6522Z"
                fill="#475993"
              />
              <path
                d="M19.1792 7.65534L17.2604 7.65222C15.1047 7.65222 13.7115 9.10115 13.7115 11.3437V13.0458H11.7822C11.6155 13.0458 11.4805 13.1828 11.4805 13.3518V15.8179C11.4805 15.9869 11.6157 16.1237 11.7822 16.1237H13.7115V22.3464C13.7115 22.5154 13.8465 22.6522 14.0132 22.6522H16.5304C16.6971 22.6522 16.8322 22.5152 16.8322 22.3464V16.1237H19.088C19.2547 16.1237 19.3897 15.9869 19.3897 15.8179L19.3906 13.3518C19.3906 13.2706 19.3587 13.1929 19.3022 13.1355C19.2457 13.0781 19.1688 13.0458 19.0887 13.0458H16.8322V11.6029C16.8322 10.9095 16.9952 10.5574 17.8863 10.5574L19.1789 10.5569C19.3455 10.5569 19.4805 10.4199 19.4805 10.2511V7.9612C19.4805 7.79251 19.3456 7.65565 19.1792 7.65534Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="lg:w-40 w-full md:flex flex-col items-center">
            <h1 className="text-lg lg:text-left md:text-center text-left font-semibold text-[#242555]">
              SIGNUP
            </h1>
            <button className="h-10 w-40 lg:mt-10 mt-6 rounded border border-[#00ACEE] text-[#00ACEE] text-sm font-semibold">
              TRY XPRETLY FREE
            </button>
          </div>
        </div>
      </div>

      <div className="xl:px-52 border-t py-3 border-dashed lg:px-20 md:px-10 px-5">
        <div className="flex md:flex-row flex-col md:justify-between md:items-start items-center ">
          <p className="md:text-sm text-xs font-medium leading-7 text-[#425466]">
            © 2021 Xpertly, All Rights Reserved
          </p>
          <ul className="flex gap-x-5">
            <li className="md:text-sm text-xs font-medium leading-7 text-[#425466]">
              Privacy Policy
            </li>
            <li className="md:text-sm text-xs font-medium leading-7 text-[#425466]">
              Terms & Conditions
            </li>
            <li className="md:text-sm text-xs font-medium leading-7 text-[#425466]">
              Disclaimer
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
