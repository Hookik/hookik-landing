import GradientBackground from "@/components/GradientBackground";
import { whyBrandsChooseHookik } from "@/constants/forBrands";
import { whyCreatorsloveHookik } from "@/constants/forCreators";
import { whyChooseHookik } from "@/constants/whyChooseHookik";
import { whyChooseUs } from "@/constants/whyChooseUs";
import React from "react";

const WhyBrandsChooseHookikSection = () => {
  return (
    <>
      <GradientBackground>
        <div className="flex flex-col gap-y-10 my-16 container mx-auto max-w-[1400px] px-4 items-center">
          <div className="flex flex-col gap-y-4">
            <h2 className="font-bold text-3xl text-[#00002E] text-center">
              Why Brands Choose hookik
            </h2>
            <p className="text-[#4B5563] text-center">
              We help brands connect with the perfect creators for authentic
              marketing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyBrandsChooseHookik?.map((item) => (
              <div
                key={item?.id}
                className="w-full p-4 flex flex-col gap-y-6 flex-1 rounded-xl border border-[#E2E8F0] bg-white shadow-lg"
              >
                <div className="w-14 h-14 flex justify-center items-center rounded-full bg-[#7237D71A]">
                  {item?.icon}
                </div>
                <div className="flex flex-col gap-y-4">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="opacity-75 text-sm leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GradientBackground>
    </>
  );
};

export default WhyBrandsChooseHookikSection;
