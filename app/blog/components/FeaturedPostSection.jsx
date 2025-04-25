import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

const FeaturedPostSection = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 my-16 container mx-auto max-w-[1400px] px-4">
        <p className="text-2xl font-bold">Featured Post</p>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[50%]">
            <Image
              src={`/images/featured_post.jpeg`}
              alt="Hero Banner"
              width={5000}
              height={250}
              className="w-full h-auto object-cover rounded-l-xl"
            />
          </div>

          <div className="flex flex-col py-4 justify-between lg:w-[50%]">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-4">
                <div className="px-5 py-1 rounded-full bg-[#7237D71A]">
                  <p className="text-xs font-medium text-[#8937CE]">
                    Marketing Trends
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <FaRegCalendar className="text-xl text-[#6B7280]" />
                  <p className="text-xs text-[#6B7280] font-medium">
                    Oct 18, 2025
                  </p>
                </div>
              </div>

              <p className="text-xl font-semibold">
                The Evolution of Creator Marketing in the Digital Age
              </p>
              <p className="text-sm opacity-60 leading-6 font-medium">
                How influencer marketing has transformed from simple product
                placements to strategic brand partnerships that drive real
                business results.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="text-sm opacity-60 leading-6 font-medium">
                Jessica Wong
              </p>
              <Link href={""}>
                <div className="flex gap-x-3 items-center text-[#8937CE]">
                  <p className=" text-xs font-medium">Learn More</p>
                  <IoChevronForward className="text-lg" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPostSection;
