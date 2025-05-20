import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.staging.hookik.com/api/v2/",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    // You can add other headers here, e.g., Authorization if needed
    // headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export const contactApi = createApi({
  reducerPath: "contact",
  baseQuery,
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (body) => ({
        url: "user/contact-us/send-message",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useContactUsMutation } = contactApi;
