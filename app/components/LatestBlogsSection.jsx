import Image from "next/image";
import React from "react";
import { IoChevronForward } from "react-icons/io5";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { convertDate } from "@/helper";

const LatestBlogsSection = ({ posts }) => {
  return (
    <>
      <div className="flex flex-col gap-y-10 max-w-[1400px] mx-auto my-16 px-4">
        <div className="flex w-full flex-col gap-5 justify-between md:flex-row items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Latest from Our Blog
            </h2>
            <p className="font-medium opacity-60 leading-7">Insights and resources for creators and brands</p>
          </div>
          <Link href={"/blog"}>
            <button className="px-8 py-3 border border-[#8937CE] text-[#8937CE] bg-white rounded-full flex justify-center items-center gap-x-2 cursor-pointer">
              <p className="font-medium text-sm">View All Articles</p>
              <IoChevronForward className="text-2xl" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts?.map((item) => (
            <div
              key={item?.id}
              className="w-full pb-4 rounded-xl border border-[#E2E8F0]"
            >
              <div className="w-full h-36 flex justify-center items-center">
                <Image
                  src={item?.image}
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
                      {item?.category?.name}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FaRegCalendar className="text-xl text-[#6B7280]" />
                    <p className="text-xs text-[#6B7280] font-medium">
                      {convertDate(item?.created_at)}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-xl text-[#00002E]">
                  {item?.title}
                </p>
                <div
                  className="text-[#4B5563] text-sm leading-6 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: item?.description || "",
                  }}
                ></div>

                <Link href={`/blog/${item?.slug}`}>
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
      </div>
    </>
  );
};

export default LatestBlogsSection;
