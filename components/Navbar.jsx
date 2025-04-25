"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
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
            <Link href={"/"} className="text-primary">
              Home
            </Link>
            <Link href={"/for_brands"} className="">
              For Brands
            </Link>
            <Link href={"/for_creators"} className="">
              For Creators
            </Link>
            <Link href={"/for_shoppers"} className="">
              Shop
            </Link>
            <Link href={"/about"} className="">
              About us
            </Link>
            <Link href={"/blog"} className="">
              Blog
            </Link>
            <Link href={"/contact"} className="">
              Contact
            </Link>
          </div>

          <div className="hidden items-center gap-x-4 xl:flex">
            <button className="font-medium px-8 py-3 border rounded-full bg-white border-[#E2E8F0]">
              Sign In
            </button>
            <button className="px-8 py-3 bg-[#7237D7] font-medium text-white rounded-full">
              Get Started
            </button>
          </div>

          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="text-2xl lg:hidden"
          >
            <HiOutlineMenuAlt2 />
          </button>
        </div>
      </nav>
      {showMenu && <MobileNavbar />}
    </>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <>
      <div className="flex flex-col px-4 py-10 text-sm xl:hidden w-full gap-y-6 z-50 bg-white">
        <Link href={"/"} className="text-primary">
          Home
        </Link>
        <Link href={"/for_brands"} className="">
          For Brands
        </Link>
        <Link href={"/for_creators"} className="">
          For Creators
        </Link>
        <Link href={"/for_shoppers"} className="">
          Shop
        </Link>
        <Link href={"/about"} className="">
          About us
        </Link>
        <Link href={"/blog"} className="">
          Blog
        </Link>
        <Link href={"/contact"} className="">
          Contact
        </Link>
        <button className="font-medium text-sm px-8 py-3 border rounded-full bg-white border-[#E2E8F0]">
          Sign In
        </button>
        <button className="px-8 py-3 text-sm bg-[#7237D7] font-medium text-white rounded-full">
          Get Started
        </button>
      </div>
    </>
  );
};
