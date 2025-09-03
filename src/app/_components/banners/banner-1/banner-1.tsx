import Image from "next/image";
import Link from "next/link";

import React from "react";

function Banner_1() {
  return (
    <>
      <div className=" flex justify-center gap-10  mt-20 xl:h-[650px] xs:h-[500px] relative">
        <div className=" relative w-1/2 xl:w-auto">
          <Image
            src={"/images/banners/banner-1.png"}
            alt=""
            width={500}
            height={200}
          
          />
          <span className="border-2 border-black w-8 h-14 rounded-bl-full rounded-tr-full absolute top-2 left-2"></span>
          <span className="bg-pink-600 w-8 h-14 rounded-bl-full rounded-tr-full absolute top-5"></span>
        </div>
        <div className=" w-72 xl:w-96 relative h-96  xl:px-5">
          <h2 className="text-4xl lg:text-6xl font-santa leading-12 lg:leading-20">
            Experience the Art of <span className="text-pink-600">Gelato</span>
          </h2>
          <p className="text-gray-600 mt-5 mb-20 text-sm lg:text-base">
            Handcrafted Flavors with Fresh, Local Ingredients. Enjoy gelato made
            with the finest ingredients and traditional techniques.
          </p>
          <Link
            href={"/"}
            className="bg-pink-700 text-white p-2 rounded-full text-xs lg:text-sm font-semibold"
          >
            See Our Gelato Menu &rarr;
          </Link>
          <span className="border-2 border-black w-8 h-14 rounded-bl-full rounded-tr-full absolute right-0 bottom-6"></span>
          <span className="bg-pink-600 w-8 h-14 rounded-bl-full rounded-tr-full absolute right-2 bottom-3"></span>
        </div>
        <span className="bg-pink-600 w-40 h-20 absolute bottom-0 right-60 rounded-t-full z-1"></span>
        <span className="border-2 w-40 h-36 absolute bottom-5 right-50 rounded-t-full"></span>
      </div>
    </>
  );
}

export default Banner_1;
