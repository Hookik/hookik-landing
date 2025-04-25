import { latestArticles } from "@/constants/latestArticles";
import { userCategories } from "@/constants/userCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

const LatestArticles = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 my-16 container mx-auto max-w-[1400px] px-4">
        <p className="text-2xl font-bold">Latest Articles</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {latestArticles?.map((item) => (
            <div
              key={item?.id}
              className="w-full pb-4 rounded-xl border border-[#E2E8F0]"
            >
              <div className="w-full h-36 flex justify-center items-center">
                <Image
                  src={`/images/${item?.image}.jpeg`}
                  alt="Hero Banner"
                  width={5000}
                  height={250}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="flex flex-col gap-y-4 mt-5 px-4">
                <div className="flex items-center gap-x-4">
                  <div className="px-5 py-1 rounded-full bg-[#7237D71A]">
                    <p className="text-xs font-medium text-[#8937CE]">
                      {item?.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FaRegCalendar className="text-xl text-[#6B7280]" />
                    <p className="text-xs text-[#6B7280] font-medium">
                      {item?.date}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-xl text-[#00002E]">
                  {item?.title}
                </p>
                <p className="text-[#4B5563] text-sm leading-6">
                  {item?.description}
                </p>
                <Link href={""}>
                  <div className="flex gap-x-3 items-center text-[#8937CE]">
                    <p className="underline text-xs underline-offset-6 font-medium">
                      Read More
                    </p>
                    <IoChevronForward className="text-lg" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex mt-10 justify-center">
          <button className="px-10 py-3 w-56 justify-center items-center border border-[#8937CE] flex font-medium text-sm text-[#8937CE] rounded-full">
            Learn More Articles
          </button>
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
