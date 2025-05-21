import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./contact.api";

export const blogApi = createApi({
  reducerPath: "blog",
  baseQuery,
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: (params) => ({
        url: "blogs",
        method: "GET",
        params,
      }),
    }),
    getSingleBlogPosts: builder.query({
      query: (slug) => ({
        url: `blog/${slug}`
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: `blog/categories`,
      }),
    }),
    getFeaturedPost: builder.query({
      query: (params) => ({
        url: `blogs/featured`,
        method: "GET",
        params,
      }),
    }),
  }),
});
export const { useGetBlogsQuery, useGetSingleBlogPostsQuery, useGetCategoriesQuery, useGetFeaturedPostQuery } = blogApi;
