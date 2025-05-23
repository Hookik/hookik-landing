import Image from "next/image";
import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import Link from "next/link";
import { APP_URL } from "@/lib/contsants";

const Hero = () => {
  return (
    <>
      <div className="w-full py-14 bg-gradient-to-br from-[#F5F3FF] via-[#FFFFFF] to-[#EEF2FF]">
        <div className="container mx-auto max-w-[1400px] px-4 gap-10 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="flex flex-col gap-y-5 w-full lg:w-[50%]">
            <p className="text-3xl leading-14 font-bold xl:text-5xl xl:leading-15">
              Grow Your Influence &{" "}
              <span className="text-[#8937CE]">Earn More</span>
            </p>
            <p className="font-medium opacity-60 leading-7">
              Join thousands of creators connecting with perfect-fit brands and
              monetizing your passion. Build your audience while earning from
              authentic partnerships.
            </p>

            <div className="flex flex-col sm:items-center gap-4 sm:flex-row">
              <Link href={`${APP_URL}creator/signup`}>
                <button className="px-10 py-3 w-64 justify-center items-center bg-[#8937CE] flex font-medium text-sm text-white rounded-full gap-x-2 cursor-pointer">
                  Apply as Creator
                  <IoChevronForward className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-[80%] lg:w-[50%] mx-auto lg:mx-0">
            <Image
              src="/images/for_creator_hero.png"
              alt="Hero Banner"
              width={1000}
              height={500}
              className="w-full h-[400px] object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
