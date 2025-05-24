"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { APP_URL } from "@/lib/contsants";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="w-full bg-white z-50">
        <div className="flex container mx-auto justify-between items-center py-5 max-w-[1400px] px-4">
          <Link href={"/"}>
            <Image
              src="/images/main_logo.png"
              alt="Hookik Logo"
              width={120}
              height={35}
            />
          </Link>

          <div className="hidden items-center gap-x-10 xl:flex">
            <Link href={"/"} className={pathname === "/" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
              Home
            </Link>
            <Link href={"/brands"} className={pathname === "/brands" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
              For Brands
            </Link>
            <Link href={"/creators"} className={pathname === "/creators" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
              For Creators
            </Link>
            <Link href={"/shoppers"} className={pathname === "/shoppers" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
              Shop
            </Link>
            <Link href={"/about"} className={pathname === "/about" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
              About Us
            </Link>
            <Link href={"/blog"} className={pathname === "/blog" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
              Blog
            </Link>
            <Link href={"/contact"} className={pathname === "/contact" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
              Contact
            </Link>
          </div>

          <div className="hidden items-center gap-x-4 xl:flex">
            <Link href={`${APP_URL}login`}>
              <button className="font-medium px-8 py-3 border rounded-full bg-white border-[#E2E8F0] cursor-pointer">
                Sign In
              </button>
            </Link>
            <Link href={`${APP_URL}signup`}>
              <button className="px-8 py-3 bg-[#7237D7] font-medium text-white rounded-full cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>

          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="text-2xl xl:hidden"
          >
            <HiOutlineMenuAlt2 />
          </button>
        </div>
      </nav>
      {showMenu && <MobileNavbar pathname={pathname} />}
    </>
  );
};

export default Navbar;

const MobileNavbar = ({ pathname }) => {
  return (
    <>
      <div className="flex flex-col px-4 py-10 text-sm xl:hidden w-full gap-y-6 z-50 bg-white">
        <Link href={"/"} className="[#8937CE]">
          Home
        </Link>
        <Link href={"/brands"} className={pathname === "/brands" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
          For Brands
        </Link>
        <Link href={"/creators"} className={pathname === "/creators" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
          For Creators
        </Link>
        <Link href={"/shoppers"} className={pathname === "/shoppers" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
          Shop
        </Link>
        <Link href={"/about"} className={pathname === "/about" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
          About Us
        </Link>
        <Link href={"/blog"} className={pathname === "/blog" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
          Blog
        </Link>
        <Link href={"/contact"} className={pathname === "/contact" ? "text-[#8937CE] font-semibold" : "text-gray-700"}>
          Contact
        </Link>
        <Link href={`${APP_URL}login`}>
          <button className="font-medium text-sm px-8 py-3 border rounded-full bg-white border-[#E2E8F0]">
            Sign In
          </button>
        </Link>
        <Link href={`${APP_URL}signup`}>
          <button className="px-8 py-3 text-sm bg-[#7237D7] font-medium text-white rounded-full">
            Get Started
          </button>
        </Link>
      </div>
    </>
  );
};
