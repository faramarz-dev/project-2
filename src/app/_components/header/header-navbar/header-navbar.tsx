"use client";

import Link from "next/link";
import { NavLinks } from "../navlinks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavItemsData } from "@/data/navItems.data";

export default function HeaderNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* navbar */}

      <div
        className={`fixed z-50 lg:left-1/2 lg:transform lg:-translate-x-1/2 xs:w-full lg:rounded-b-full ${
          isScrolled
            ? " backdrop-blur-xl shadow-xl shadow-pink-300"
            : "backdrop-blur-xl shadow-xl shadow-pink-300"
        }`}
      >
        <div className="flex justify-between xl:justify-between items-center py-4 px-6">
          {/* logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={100}
                height={50}
              />
            </Link>
          </div>

          {/* menu icon */}
          <div className="lg:hidden">
            <div
              className="flex flex-col justify-between w-6 h-5 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`block h-0.5 bg-pink-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-pink-600 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-pink-600 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </div>

          {/* nav links */}
          <div className="hidden lg:flex items-center gap-5 text-sm md:text-base text-center">
            {NavItemsData.map((item, index) => (
              <NavLinks href={item.href} key={index}>
                {item.label}
              </NavLinks>
            ))}

            {/* search */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-600 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-40 text-xs pl-10 border p-2 rounded-2xl border-gray-500 outline-none focus:border-pink-600 focus:border-2"
              />
            </div>
          </div>
          <div className="hidden lg:block text-center p-1 rounded-xl bg-pink-600 text-white shadow-lg shadow-pink-600 font-semibold hover:shadow-lg hover:text-black hover:bg-pink-100 whitespace-nowrap">
            <Link href="/">Login / SignUp</Link>
          </div>
        </div>

        {/* mobile menu */}

        {isMenuOpen && (
          <div className="flex flex-col items-center md:flex-row lg:hidden px-4 py-3 gap-3 backdrop-blur-xl">
            {NavItemsData.map((item, index) => (
              <NavLinks href={item.href} key={index}>
                {item.label}
              </NavLinks>
            ))}

            {/*  mobile search */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search food"
                className="w-full pl-10 border px-3 py-2 rounded-2xl border-gray-500 outline-none focus:border-pink-600 focus:border-2"
              />
            </div>
            {/* mobile login */}
            <div className="text-center p-2 rounded-xl shadow-2 shadow-pink-600 text-pink-600 font-bold hover:shadow-lg hover:shadow-pink-500 hover:bg-pink-100 whitespace-nowrap">
              <Link href="/">Login / SignUp</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
