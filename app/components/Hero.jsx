import Image from "next/image";
import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import Link from "next/link";
import { APP_URL } from "@/lib/contsants";

const Hero = () => {
  const userCategories = [
    {
      id: 1,
      name: "For Creators",
      url: "creators",
      icon: <LuUsers className="text-2xl text-[#8937CE]" />,
    },
    {
      id: 2,
      name: "For Brands",
      url: "brands",
      icon: <FaRegChartBar className="text-2xl text-[#8937CE]" />,
    },
    {
      id: 3,
      name: "For Shoppers",
      url: "shoppers",
      icon: <FiShoppingBag className="text-2xl text-[#8937CE]" />,
    },
  ];
  return (
    <>
      <div className="w-full py-14 bg-gradient-to-br from-[#F5F3FF] via-[#FFFFFF] to-[#EEF2FF]">
        <div className="container mx-auto max-w-[1400px] px-4 gap-10 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="flex flex-col gap-y-5 w-full lg:w-[45%]">
            <p className="text-3xl leading-14 font-bold xl:text-5xl xl:leading-15">
              Connecting Products,{" "}
              <span className="text-[#8937CE]">Creators</span> and Communities.
            </p>
            <p className="font-medium opacity-60 leading-7">
              At Hookik, it’s not about hiring — it’s about partnering.
              Creators choose the products they believe in, tell real stories, and help your brand reach the right people — naturally, authentically, powerfully.
            </p>

            <p className="font-meduim font-bold">
              Your products. Their passion. One community
            </p>

            <div className="flex flex-col sm:items-center gap-4 sm:flex-row">
              <Link href={`${APP_URL}creator/signup`} passHref>
                <button className="px-10 py-3 w-56 justify-center items-center bg-[#8937CE] flex font-medium text-sm text-white rounded-full gap-x-2 cursor-pointer">
                  Join as Creator
                  <IoChevronForward className="text-2xl" />
                </button>
              </Link>
              <Link href={"/faq"} passHref>
                <button className="px-10 py-3 w-56 justify-center items-center border border-[#8937CE] flex font-medium text-sm text-[#8937CE] rounded-full cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-x-4">
              {userCategories.map((item) => (
                <Link
                  href={item?.url}
                  key={item?.id}
                  className="flex mt-4 flex-col items-center gap-y-4 p-4 rounded-lg border border-transparent transition-all duration-300 hover:border-[#8937CE] hover:shadow-md cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-[#7237D71A] transition-colors duration-300 group-hover:bg-[#8937CE1A]">
                    {item?.icon}
                  </div>
                  <p className="font-medium text-sm text-center transition-colors duration-300 group-hover:text-[#8937CE]">
                    {item?.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-[80%] lg:w-[55%] mx-auto lg:mx-0">
            <Image
              src="/images/hero_image.png"
              alt="Hero Banner"
              width={1000}
              height={500}
              className="w-full h-auto object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
