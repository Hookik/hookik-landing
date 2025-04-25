import { userCategories } from "@/constants/userCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoChevronForward } from "react-icons/io5";

const CategorySection = () => {
  return (
    <>
      <div className="flex flex-col gap-y-10 my-16 container mx-auto max-w-[1400px] px-4 items-center">
        <div className="flex flex-col gap-y-4">
          <h2 className="font-bold text-3xl text-[#00002E] text-center">
            The Ultimate Creator-Brand Partnership Platform
          </h2>
          <p className="text-[#4B5563] text-center">
            Connect all the pieces of the creator economy in one seamless
            platform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {userCategories?.map((item) => (
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
                <div className="p-4 rounded-full absolute bg-[#8937CE]">
                  {item?.icon}
                </div>
              </div>
              <div className="flex flex-col gap-y-4 mt-3 px-4">
                <p className="font-semibold text-xl text-[#00002E]">
                  {item?.name}
                </p>
                <p className="text-[#4B5563] text-sm leading-6">
                  {item?.description}
                </p>
                <Link href={""}>
                  <div className="flex gap-x-3 items-center text-[#8937CE]">
                    <p className="underline text-xs underline-offset-6 font-medium">
                      Learn More
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

export default CategorySection;
