"use client";
import GradientBackground from "@/components/GradientBackground";
import PageLayout from "@/template/PageLayout";
import { FiSearch } from "react-icons/fi";
import FeaturedPostSection from "./components/FeaturedPostSection";
import LatestArticles from "./components/LatestArticles";
import {
  useGetBlogsQuery,
  useGetCategoriesQuery,
  useGetFeaturedPostQuery,
} from "@/services/blog.api";
import { useEffect, useState } from "react";
import SelectInput from "@/components/SelectInput";
import { useForm } from "react-hook-form";

export default function Blog() {
  const [searchParam, setSearchParam] = useState("");
  const { control, watch } = useForm();
  const selectedCategory = watch("category");

  const { data: categoriesData } = useGetCategoriesQuery();

  const {
    data: blogPosts,
    isLoading: blogPostIsLoading,
    refetch: blogRefetch,
  } = useGetBlogsQuery({
    is_paginated: "no",
    category: selectedCategory || "",
    search: searchParam,
    featured: "no",
  });
  const {
    data: featuredPost,
    isLoading: featuredPostIsLoading,
    refetch: featPostRefetch,
  } = useGetFeaturedPostQuery({ is_paginated: "no" });

  useEffect(() => {
    blogRefetch();
    featPostRefetch();
    console.log({ featuredPost });
  }, []);

  return (
    <PageLayout footBanner={false}>
      <GradientBackground>
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center px-4 py-16 gap-y-8">
          <p className="text-4xl font-bold text-center">Hookik Blog</p>
          <p className="text-sm opacity-75 text-center">
            Insights, tips, and resources for creators and brands
          </p>

          <div className="flex flex-wrap items-center justify-center w-full gap-6">
            <div className="w-full mx-auto flex items-center md:w-[60%] relative">
              <FiSearch className="text-2xl ml-6 absolute text-[#9CA3AF]" />
              <input
                type="text"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                className="py-3 px-8 pl-16 border w-full font-medium text-sm rounded-full border-[#D1D5DB] placeholder:text-[#9CA3AF] focus:outline-[#8937CE]"
                placeholder="Search articles..."
              />
              <div className="w-52 ml-3">
                <SelectInput
                  name="category"
                  label="Choose a Category"
                  control={control}
                  rules={{ required: false }}
                  options={categoriesData?.data}
                />
              </div>
            </div>
          </div>
        </div>
      </GradientBackground>

      {searchParam === "" && !selectedCategory && (
        <FeaturedPostSection
          featuredPosts={featuredPost?.data}
          isLoading={featuredPostIsLoading}
        />
      )}

      <LatestArticles posts={blogPosts?.data} isLoading={blogPostIsLoading} />
    </PageLayout>
  );
}
