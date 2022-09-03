import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

function Appinfo() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full col-span-2 rounded"
              src="https://i.postimg.cc/8z7nhFM6/Download.gif"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4">
              <h6 className="text-[28px] text-center lg:text-left sm:text-[46px] font-semibold ">
                Download Chopmoney Now!
              </h6>
              <p className="text-[17px] text-[#6e727d] text-center lg:text-left mb-[10px]">
                If you're looking for a smart and easy way to stick to
                your budget, Chopmoney is the perfect solution.
              </p>
              <p className="text-[17px] text-[#6e727d] text-center lg:text-left">
                With our daily payouts, you can save up and spend  wisely
                - all while living your best life. Best of all, it's free 
                to use
              </p>
              <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
              <a
                href="#"
                title=""
                className="inline-flex px-8 mr-4 py-4 mt-8 text-lg font-bold text-black transition-all duration-200 bg-[#ECEC0B] border border-transparent  sm:mt-10 font-pj hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Apple Store
                <AiFillApple className="text-xl inline m-auto ml-2" />
              </a>
              <a
                href="#"
                title=""
                className="inline-flex px-8 mr-4 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-black border border-transparent  sm:mt-10 font-pj hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Play Store{" "}
                <FaGooglePlay className="text-sm inline m-auto ml-4" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appinfo;
