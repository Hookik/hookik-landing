import Image from "next/image";
import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

const Hero = () => {
  const userCategories = [
    {
      id: 1,
      name: "For Creators",
      icon: <LuUsers className="text-2xl text-[#8937CE]" />,
    },
    {
      id: 2,
      name: "For Brands",
      icon: <FaRegChartBar className="text-2xl text-[#8937CE]" />,
    },
    {
      id: 3,
      name: "For Shoppers",
      icon: <FiShoppingBag className="text-2xl text-[#8937CE]" />,
    },
  ];
  return (
    <>
      <div className="w-full py-14 bg-gradient-to-br from-[#F5F3FF] via-[#FFFFFF] to-[#EEF2FF]">
        <div className="container mx-auto max-w-[1400px] px-4 gap-10 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="flex flex-col gap-y-5 w-full lg:w-[50%]">
            <p className="text-4xl leading-14 font-bold xl:text-6xl xl:leading-20">
              Connect <span className="text-[#8937CE]">Creators</span> with{" "}
              <span className="text-[#8937CE]">Brands</span> That Matter{" "}
            </p>
            <p className="font-medium opacity-60 leading-7">
              The platform where authentic influencer marketing happens. Create
              campaigns, discover products, and grow your audience.
            </p>

            <div className="flex flex-col sm:items-center gap-4 sm:flex-row">
              <button className="px-10 py-3 w-56 justify-center items-center bg-[#8937CE] flex font-medium text-sm text-white rounded-full gap-x-2">
                Join as Creator
                <IoChevronForward className="text-2xl" />
              </button>

              <button className="px-10 py-3 w-56 justify-center items-center border border-[#8937CE] flex font-medium text-sm text-[#8937CE] rounded-full">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-x-10">
              {userCategories.map((item) => (
                <div
                  key={item?.id}
                  className="flex mt-4 flex-col items-center gap-y-4"
                >
                  <div className="p-3 rounded-full bg-[#7237D71A]">
                    {item?.icon}
                  </div>
                  <p className="font-medium text-sm">{item?.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-[80%] lg:w-[50%] mx-auto lg:mx-0">
            <Image
              src="/images/hero_image.png"
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
