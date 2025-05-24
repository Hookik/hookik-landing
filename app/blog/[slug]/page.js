// app/blog/[slug]/page.js
import React from "react";
import PageLayout from "@/template/PageLayout";
import { FaRegCalendar } from "react-icons/fa";
import { convertDate } from "@/helper";
import { API_URL } from "@/lib/contsants";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const res = await fetch(`${API_URL}/blog/${params.slug}`, {
    next: { revalidate: 60 },
  });
  const json = await res.json();
  return {
    title: json.data?.seo_title || "Blog",
    description: json.data?.seo_description || "",
  };
}

export default async function EachBlogPosts({ params }) {
  const slug = params.slug;

  const res = await fetch(`${API_URL}/blog/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return (
      <PageLayout footBanner={false}>
        <div className="min-h-screen flex justify-center items-center">
          <p className="text-lg text-red-500">Failed to load blog post.</p>
        </div>
      </PageLayout>
    );
  }

  const blogPostData = await res.json();

  const post = blogPostData?.data;

  return (
    <PageLayout footBanner={false}>
      <div className="min-h-screen bg-grey100">
        <div className="w-full min-h-[50vh] bg-gradient-to-br from-[#F5F3FF] via-[#FFFFFF] to-[#EEF2FF] lg:px-10 px-4 py-10">
          <div className="flex flex-col items-center gap-y-5 w-full sm:w-[80%] mx-auto xl:w-[50%] mt-20">
            <div className="flex gap-x-7 items-center">
              <div className="px-5 py-1 rounded-full bg-[#7237D71A]">
                <p className="text-xs font-medium text-[#8937CE]">
                  {post?.category?.name}
                </p>
              </div>

              <div className="flex items-center gap-x-2">
                <FaRegCalendar className="text-xl text-[#6B7280]" />
                <p className="text-xs text-[#6B7280] font-medium">
                  {convertDate(post?.created_at) || "00:00"}
                </p>
              </div>
            </div>

            <h1 className="text-3xl font-semibold mb-6 text-center">
              {post?.title}
            </h1>

            <Image
              src={post?.image}
              width={5000}
              height={500}
              alt="Hero Banner"
              className="w-full h-auto object-cover mb-10 rounded-xl"
            />

            <div
              className="leading-7 text-justify prose max-w-none"
              dangerouslySetInnerHTML={{
                __html: post?.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
