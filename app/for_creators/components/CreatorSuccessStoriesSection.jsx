import { creatorSuccessStories } from "@/constants/forCreators";
import Image from "next/image";
import React from "react";

const CreatorSuccessStoriesSection = () => {
  return (
    <>
      <div className="flex flex-col gap-y-10 my-16 container mx-auto max-w-[1400px] px-4 items-center">
        <div className="flex flex-col gap-y-4">
          <h2 className="font-bold text-3xl text-[#00002E] text-center">
            Creator Success Stories
          </h2>
          <p className="text-[#4B5563] text-center">
            Hear from creators who have grown their audience and income with
            hookik
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {creatorSuccessStories.map((item) => (
            <div
              key={item?.id}
              className="w-full p-4 flex flex-col gap-y-6 flex-1 rounded-xl border border-[#E2E8F0] bg-white shadow-lg"
            >
              <div className=" flex gap-x-5 items-center">
                <div className="w-16 h-16">
                  <Image
                    src={`/images/${item?.image}.jpeg`}
                    alt="Hero Banner"
                    width={5000}
                    height={250}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-xl font-semibold">{item?.name}</p>
                  <p className="text-sm opacity-70">{item?.bio}</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 h-28">
                <p className="font-bold text-lg">{item.title}</p>
                <p className="opacity-75 leading-6 italic text-sm">
                  "{item.testimony}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreatorSuccessStoriesSection;
