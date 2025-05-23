"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import SelectInput from "@/components/SelectInput";
import { useState } from "react";

export default function SearchForm({ categories }) {
  const { control, watch } = useForm();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const selectedCategory = watch("category");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (selectedCategory) params.set("category", selectedCategory);
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-6">
      <div className="w-full mx-auto flex items-center md:w-[60%] relative">
        <FiSearch className="text-2xl ml-6 absolute text-[#9CA3AF]" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="py-3 px-8 pl-16 border w-full font-medium text-sm rounded-full border-[#D1D5DB] placeholder:text-[#9CA3AF] focus:outline-[#8937CE]"
          placeholder="Search articles..."
        />
        <div className="w-52 ml-3">
          <SelectInput
            name="category"
            label="Choose a Category"
            control={control}
            rules={{ required: false }}
            options={categories}
          />
        </div>
      </div>
    </div>
  );
}
