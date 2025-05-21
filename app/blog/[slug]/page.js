"use client";
import React, { useEffect } from "react";

import { useGetSingleBlogPostsQuery } from "@/services/blog.api";
import { FaRegCalendar } from "react-icons/fa";
import { convertDate } from "@/helper";
import Spinner from "@/app/components/Spinner";
import { useParams } from "next/navigation";
import PageLayout from "@/template/PageLayout";

const EachBlogPosts = () => {
  const params = useParams();
  const slug = params?.slug;

  const { data: blogPostData, isLoading: postLoading } =
    useGetSingleBlogPostsQuery(slug);

  useEffect(() => console.log({ blogPostData }), [blogPostData]);
  return (
    <>
      <PageLayout footBanner={false}>
        {postLoading ? (
          <Spinner />
        ) : (
          <div className="min-h-screen bg-grey100 overflow-y-auto">
            <div className="w-full min-h-[50vh] bg-gradient-to-br from-[#F5F3FF] via-[#FFFFFF] to-[#EEF2FF] lg:px-10 px-4 py-10">
              <div className="flex flex-col items-center gap-y-5 w-full sm:w-[80%] mx-auto xl:w-[50%] mt-20">
                <div className="flex gap-x-7 items-center">
                  <div className="px-5 py-1 rounded-full bg-[#7237D71A]">
                    <p className="text-xs font-medium text-[#8937CE]">
                      {blogPostData?.data?.category?.name}
                    </p>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <FaRegCalendar className="text-xl text-[#6B7280]" />
                    <p className="text-xs text-[#6B7280] font-medium">
                      {convertDate(blogPostData?.data?.created_at) || "00:00"}
                    </p>
                  </div>
                </div>
                <h1 className="text-3xl font-semibold mb-6 text-center">
                  {blogPostData?.data?.title}
                </h1>
                <img
                  src={blogPostData?.data?.image}
                  alt="Hero Banner"
                  className="w-full h-auto object-cover mb-10 rounded-xl"
                />

                <div
                  className="leading-7 text-justify prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: blogPostData?.data?.description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </PageLayout>
    </>
  );
};

export default EachBlogPosts;
