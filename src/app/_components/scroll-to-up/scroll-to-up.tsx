"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import React from "react";

function ScrollToUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 1000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed z-50 bottom-4 right-4  rounded-full shadow-xl transform transition-all duration-300 ease-in${
          showButton
            ? "opacity-100 scale-75 bg-gradient-to-r from-slate-100 to-pink-100 hover:scale-90 hover:shadow-2xl"
            : "opacity-0 scale-0"
        }`}
      >
        <Image
          src="/images/icons/scrollUp.png"
          alt="scrollUp"
          width={65}
          height={40}
        />
      </button>
    </>
  );
}

export default ScrollToUp;
