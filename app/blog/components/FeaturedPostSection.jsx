"use client";

import Spinner from "@/app/components/Spinner";
import { convertDate } from "@/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import {
  IoChevronForward,
  IoChevronBack,
  IoChevronForwardOutline,
} from "react-icons/io5";

const FeaturedPostSection = ({ featuredPosts, isLoading }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);
    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const post = featuredPosts[index];

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-y-5 my-16 container mx-auto max-w-[1400px] px-4">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">Featured Post</p>
            <div className="flex gap-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <IoChevronBack className="text-lg" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
              >
                <IoChevronForwardOutline className="text-lg" />
              </button>
            </div>
          </div>

          {post && (
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-[50%]">
                <Image
                  src={post?.image}
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
                        {post?.category?.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <FaRegCalendar className="text-xl text-[#6B7280]" />
                      <p className="text-xs text-[#6B7280] font-medium">
                        {convertDate(post?.created_at)}
                      </p>
                    </div>
                  </div>

                  <p className="text-xl font-semibold">{post.title}</p>
                  <div
                    className="text-sm opacity-60 leading-6 font-medium line-clamp-4"
                    dangerouslySetInnerHTML={{ __html: post.description }}
                  ></div>
                </div>

                <div className="flex flex-col gap-y-5">
                  <Link href={`/blog/${post?.slug}`}>
                    <div className="flex gap-x-3 mt-4 items-center text-[#8937CE]">
                      <p className=" text-xs font-medium">Learn More</p>
                      <IoChevronForward className="text-lg" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FeaturedPostSection;
