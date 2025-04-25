"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import { FAQ } from "@/constants/FAQ";
import GradientBackground from "@/components/GradientBackground";

const FAQSection = () => {
  const [active, setActive] = useState(null);
  return (
    <>
      <GradientBackground>
        <div className="my-20 mx-auto flex flex-col items-center gap-10 container max-w-[1400px] px-4">
          <div className="flex flex-col gap-y-4 w-full lg:w-1/2">
            <p className="text-3xl font-semibold leading-9 text-center">Frequently Asked Questions</p>
            <p className="text-sm opacity-60 leading-6 text-center">
              Find answers to common questions about using hookik
            </p>
            {/* <div className="flex gap-x-8 items-center">
              <button className="px-10 py-3 border font-medium text-sm text-black rounded-full">
                More Questions
              </button>

              <a
                href=""
                className="underline text-sm font-medium underline-offset-4"
              >
                Contact Us
              </a>
            </div> */}
          </div>

          <div className="flex flex-col gap-y-4 w-full lg:w-1/2">
            {FAQ?.map((item, index) => (
              <Accordion
                key={index}
                {...item}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </div>
      </GradientBackground>
    </>
  );
};

export default FAQSection;
