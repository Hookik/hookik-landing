import Image from "next/image";
import React from "react";
import { howItWorksForCreators } from "@/constants/forCreators";
import GradientBackground from "@/components/GradientBackground";

const HowItWorksForCreatorsSection = () => {
  return (
    <>
      <GradientBackground>
        <div className="flex flex-col gap-y-10 my-16 container mx-auto max-w-[1400px] px-4 items-center">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-bold text-3xl text-[#00002E] text-center">
              How It Works For Creators
            </h2>
            <p className="text-[#4B5563] text-center">
              Getting started is simple - follow these steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorksForCreators.map((item) => (
              <div
                key={item?.id}
                className="w-full p-4 flex flex-col gap-y-6 flex-1 rounded-xl border border-[#E2E8F0] bg-white shadow-lg"
              >
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#8937CE]">
                  <p className="text-xl font-semibold text-white">{item?.id}</p>
                </div>
                <div className="flex flex-col gap-y-4 h-28">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="opacity-75 leading-6 text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="w-full h-48 rounded-xl">
                  <Image
                    src={`/images/${item?.image}.jpeg`}
                    alt="Hero Banner"
                    width={5000}
                    height={250}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="px-10 py-3 w-64 justify-center items-center bg-[#8937CE] flex font-medium text-sm text-white rounded-full gap-x-2">
            Apply as Creator
          </button>
        </div>
      </GradientBackground>
    </>
  );
};

export default HowItWorksForCreatorsSection;
