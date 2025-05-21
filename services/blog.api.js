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
        url: `blog/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogPostsQuery } = blogApi;
