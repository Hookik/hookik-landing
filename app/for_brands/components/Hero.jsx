import Image from "next/image";
import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

const Hero = () => {
  return (
    <>
      <div className="w-full py-14 bg-gradient-to-br from-[#F5F3FF] via-[#FFFFFF] to-[#EEF2FF]">
        <div className="container mx-auto max-w-[1400px] px-4 gap-10 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="flex flex-col gap-y-5 w-full lg:w-[50%]">
            <p className="text-4xl leading-14 font-bold xl:text-6xl xl:leading-20">
              Grow Your Brand with{" "}
              <span className="text-[#8937CE]">Authentic</span> Creator
              Partnerships
            </p>
            <p className="font-medium opacity-60 leading-7">
              Connect with creators who genuinely love your products and have
              audiences that match your target market.
            </p>

            <div className="flex flex-col sm:items-center gap-4 sm:flex-row">
              <button className="px-10 py-3 w-64 justify-center items-center bg-[#8937CE] flex font-medium text-sm text-white rounded-full gap-x-2">
                Join As Brand
                <IoChevronForward className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[80%] lg:w-[50%] mx-auto lg:mx-0">
            <Image
              src="/images/brand_hero_image.jpeg"
              alt="Hero Banner"
              width={1000}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
