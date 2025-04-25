import GradientBackground from "@/components/GradientBackground";
import Image from "next/image";
import React from "react";

const HowHookikWorks = () => {
  return (
    <>
      <GradientBackground>
        <div className="flex flex-col items-center gap-y-10 container max-w-[1400px] mx-auto px-4">
          <div className="flex-col items-center flex gap-y-4">
            <h2 className="font-bold text-3xl text-[#00002E] text-center">
              How hookik Works
            </h2>
            <p className="text-[#4B5563] text-center">
              Our platform makes collaboration simple for everyone involved
            </p>
          </div>

          <div className="w-full md:w-[80%]">
            <Image
              src={`/images/shopper_dashboard.png`}
              alt="Hero Banner"
              width={5000}
              height={250}
              className="w-full h-auto object-cover rounded-t-xl"
            />
          </div>
        </div>
      </GradientBackground>
    </>
  );
};

export default HowHookikWorks;
