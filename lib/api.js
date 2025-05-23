// lib/api.js

import { API_URL } from "./contsants";

const BASE_API_URL = API_URL;

export async function getBlogs({ category = "", search = "" }) {
  const params = new URLSearchParams({
    is_paginated: "no",
    category,
    search,
    featured: "no",
  });

  const res = await fetch(`${BASE_API_URL}/blogs?${params.toString()}`, {
    next: { revalidate: 60 },
  });

  return res.json();
}

export async function getFeaturedPost() {
  const res = await fetch(`${BASE_API_URL}/blogs/featured?is_paginated=no`, {
    next: { revalidate: 60 },
  });

  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_API_URL}/blog/categories`, {
    next: { revalidate: 60 },
  });

  return res.json();
}

export async function getLatestPosts(limit = 4) {
  const res = await fetch(`${BASE_API_URL}/blogs/latest?limit=${limit}`, {
    next: { revalidate: 60 },
  });

  return res.json();
}
