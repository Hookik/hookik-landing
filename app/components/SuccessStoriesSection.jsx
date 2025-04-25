import { successStories } from "@/constants/successStories";
import { userCategories } from "@/constants/userCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronForward } from "react-icons/io5";

const SuccessStoriesSection = () => {
  return (
    <>
      <div className="flex flex-col gap-y-10 my-24 container mx-auto max-w-[1400px] px-4 items-center">
        <div className="flex flex-col justify-between gap-5 items-center w-full md:flex-row">
          <div className="flex flex-col gap-y-2">
            <h2 className="font-bold text-3xl text-center md:text-left text-[#00002E]">
              Success Stories
            </h2>
            <p className="text-[#4B5563] text-center md:text-left">
              Real results from brands and creators using our platform
            </p>
          </div>
          <button className="px-8 py-3 h-[40px] border border-[#8937CE] text-[#8937CE] bg-white rounded-full flex justify-center items-center gap-x-2">
            <p className="font-medium text-sm">Apply as Creator</p>
            <IoChevronForward className="text-2xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {successStories?.map((item) => (
            <div
              key={item?.id}
              className="w-full pb-4 rounded-xl border border-[#E2E8F0]"
            >
              <div className="w-full flex justify-center items-center">
                <Image
                  src={`/images/${item?.image}.png`}
                  alt="Hero Banner"
                  width={5000}
                  height={250}
                  className="w-full h-auto object-cover rounded-t-xl"
                />
              </div>
              <div className="flex flex-col gap-y-4 mt-3 px-4">
                <p className="font-semibold text-xl text-[#00002E]">
                  {item?.title}
                </p>
                <p className="text-[#4B5563] text-sm leading-6">
                  {item?.description}
                </p>
                <div className="flex justify-around items-center">
                  <div className="flex flex-col gap-y-2 items-center">
                    <p className="text-xs opacity-70">Reach</p>
                    <p className="font-medium text-[#8937CE]">2M+</p>
                  </div>

                  <div className="flex flex-col gap-y-2 items-center">
                    <p className="text-xs opacity-70">Engagement</p>
                    <p className="font-medium text-[#8937CE]">8.7%</p>
                  </div>

                  <div className="flex flex-col gap-y-2 items-center">
                    <p className="text-xs opacity-70">ROI</p>
                    <p className="font-medium text-[#8937CE]">450%</p>
                  </div>
                </div>
                <Link href={""}>
                  <div className="flex gap-x-3 items-center text-[#8937CE]">
                    <p className="underline underline-offset-6 text-xs font-medium">
                      Read the full case study
                    </p>
                    <IoChevronForward className="text-lg" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesSection;
