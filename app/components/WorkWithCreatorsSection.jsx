import {
  workWithCreatorsCategories,
  workWithCreatorsImages,
} from "@/constants/workWithCreators";
import Image from "next/image";
import React from "react";

const WorkWithCreatorsSection = () => {
  return (
    <>
      <div className="flex flex-col gap-y-10 my-20 container mx-auto max-w-[1200px] items-center px-4">
        <div className="flex flex-col gap-y-4">
          <h2 className="font-bold text-4xl text-[#00002E] text-center">
            Work with creators that want to WIN
          </h2>
          <p className="text-[#4B5563] text-center">
            Flexible pricing to attract creators of all sizes across any niche
          </p>
        </div>

        <div className="w-full md:w-[70%] flex flex-wrap justify-between gap-10 items-center">
          {workWithCreatorsCategories?.map((item) => (
            <div key={item?.id} className="flex items-center gap-x-3">
              {item?.icon}
              <p className="text-sm font-medium">{item?.name}</p>
            </div>
          ))}
        </div>
        <div className="w-full">
          {/* Scroll wrapper: only scroll on small, normal layout on md+ */}
          <div className="overflow-x-auto lg:overflow-x-visible">
            <div className="flex flex-row flex-nowrap items-center gap-6 lg:gap-10">
              {workWithCreatorsImages.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-64 h-96 rounded-xl">
                  <Image
                    src={`/images/${item}.png`}
                    alt="Creator"
                    width={5000}
                    height={1000}
                    className="w-full h-auto object-cover rounded-t-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between lg:w-[70%] flex-col md:flex-row items-center gap-10 mt-20 divide-y-2 md:divide-y-0  md:divide-x-2 divide-[#B9BED1]">
          <div className="flex flex-col md:pr-10 pb-10 items-center md:items-start gap-y-2">
            <h2 className="text-6xl font-bold text-[#8937CE]">3000+</h2>
            <p className="opacity-75 text-sm">Creators on the platform </p>
          </div>

          <div className="flex flex-col md:pr-10 pb-10 items-center md:items-start gap-y-2">
            <h2 className="text-6xl font-bold text-[#8937CE]">99+</h2>
            <p className="opacity-75 text-sm">Campaign Delivered </p>
          </div>

          <div className="flex flex-col md:pr-10 pb-10 items-center md:items-start gap-y-2">
            <h2 className="text-6xl font-bold text-[#8937CE]">80M+</h2>
            <p className="opacity-75 text-sm">Views Generated </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithCreatorsSection;
