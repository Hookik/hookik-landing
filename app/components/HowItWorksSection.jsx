import Image from "next/image";
import React from "react";
import WorkStepCard from "./WorkStepCard";
import {
  howItWorks,
  howItWorksForBrands,
  howItWorksForCreators,
} from "@/constants/howItWorks";
import GradientBackground from "@/components/GradientBackground";
import { IoChevronForward } from "react-icons/io5";

const HowItWorksSection = () => {
  return (
    <>
      <div className="flex flex-col gap-y-10 max-w-[1400px] mx-auto my-16 px-4">
        <div className="flex flex-col gap-y-4">
          <h2 className="font-bold text-3xl text-[#00002E] text-center">
            How It Works
          </h2>
          <p className="text-[#4B5563] text-center">
            We make connecting creators with brands simple and effective
          </p>
        </div>

        <div className="flex w-full flex-col gap-5 justify-between md:flex-row items-center">
          <p className="text-xl font-semibold text-[#8937CE]">For Creators</p>
          <button className="px-8 py-3 border border-[#8937CE] text-[#8937CE] bg-white rounded-full flex justify-center items-center gap-x-2">
            <p className="font-medium text-sm">Apply as Creator</p>
            <IoChevronForward className="text-2xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {howItWorksForCreators?.map((item) => (
            <div
              key={item?.id}
              className="w-full p-4 flex flex-col gap-y-6 flex-1 rounded-xl border border-[#E2E8F0] bg-white shadow-lg"
            >
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#7237D71A]">
                <p className="text-xl font-semibold text-[#8937CE]">
                  {item?.id}
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="font-bold text-lg">{item.title}</p>
                <p className="opacity-75 leading-6 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-10 max-w-[1200px] mx-auto">
          <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[45%]">
            <Image
              src={`/images/creator_hype.png`}
              alt="Hero Banner"
              width={5000}
              height={250}
              className="w-full h-auto object-cover rounded-t-xl"
            />
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center md:items-start gap-y-7">
            <p className="text-xl text-[#01081B] font-bold leading-7">
              Creators post organically & compete for the most views
            </p>
            <p className="opacity-70 text-sm">
              Creators post on their own social channels, helping you reach new
              audiences and validate content organically.
            </p>
            <button className="px-10 py-3 bg-[#8937CE] flex w-48 justify-center font-medium text-sm text-white rounded-full gap-x-2">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-5 mt-10 justify-between md:flex-row items-center">
          <p className="text-xl font-semibold text-[#8937CE]">For Brands</p>
          <button className="px-8 py-3 border border-[#8937CE] text-[#8937CE] bg-white rounded-full flex justify-center items-center gap-x-2">
            <p className="font-medium text-sm">Apply as Brand</p>
            <IoChevronForward className="text-2xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorksForBrands?.map((item) => (
            <div
              key={item?.id}
              className="w-full p-4 flex flex-col gap-y-6 flex-1 rounded-xl border border-[#E2E8F0] bg-white shadow-lg"
            >
              <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#7237D71A]">
                <p className="text-xl font-semibold text-[#8937CE]">
                  {item?.id}
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="font-bold text-lg">{item.title}</p>
                <p className="opacity-75 leading-6 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-20 flex flex-col md:flex-row-reverse items-center gap-10 max-w-[1200px] mx-auto">
          <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[45%]">
            <Image
              src={`/images/campaign_image.png`}
              alt="Hero Banner"
              width={5000}
              height={250}
              className="w-full h-auto object-cover rounded-t-xl"
            />
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-center md:items-start gap-y-7">
            <p className="text-xl text-[#01081B] font-bold">
              Launch a Campaign
            </p>
            <p className="opacity-70 text-sm">
              Describe what you need, launch a campaign, and sit back while the
              submissions roll in.
            </p>
            <button className="px-10 py-3 bg-[#8937CE] flex w-48 justify-center font-medium text-sm text-white rounded-full gap-x-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksSection;
