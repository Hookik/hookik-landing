import React from "react";
import { IoChevronForward } from "react-icons/io5";

const FootBanner = ({ title, description, btnLabel, route }) => {
  return (
    <>
      <div className="w-full py-16 bg-gradient-to-br from-[#7237D7] to-[#4F46E5] flex px-4 justify-center text-white">
        <div className="flex flex-col items-center gap-y-10 xl:w-[60%]">
          <h2 className="font-bold text-3xl text-center">{title}</h2>
          <p className="text-center">{description}</p>
          <button className="px-10 py-3 text-sm text-[#8937CE] bg-white rounded-full flex justify-center items-center gap-x-2">
            <p className="font-medium text-sm">{btnLabel}</p>
            <IoChevronForward className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FootBanner;
