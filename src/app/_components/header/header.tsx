"use client";

import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "./header-navbar/header-navbar";
export const Header: React.FC = () => {
  return (
    <>
      {/* header */}
      <div className="bg-gradient-to-br from-pink-200 via-blue-200 to-white h-[800px] relative w-full">
        {/* navbar */}
        <HeaderNavbar />
        {/* banner */}
        <div className="relative z-1 top-20 ">
          <Image
            src={"/images/header/figure-banner.png"}
            alt=""
            width={200}
            height={50}
            className="h-64 top-0 absolute"
          />
          <div className="flex items-center">
            <div className="w-full lg:w-1/2 xs:mt-32 xl:mt-5 mx-10 xl:mx-52">
              <h2 className="text-2xl xl:text-3xl font-stagera">
                Welcome to The
              </h2>
              <h1 className="text-5xl xl:text-9xl font-santa mt-10 leading-14 xl:leading-40">
                Discover <span className="text-pink-600">Sweet</span> Delights
              </h1>
              <p className=" mt-8 text-justify text-gray-600 mb-10 xl:w-1/2">
                Relish the timeless taste of handcrafted ice cream, made with
                passion and the finest ingredients.
              </p>
              <Link
                href="/"
                className="text-white text-xs lg:text-sm font-semibold bg-pink-700 p-2 rounded-full"
              >
                Browse Our Classic Flavors &rarr;
              </Link>
            </div>
            <Image
              src={"/images/header/banner-image.png"}
              alt=""
              width={500}
              height={100}
              className="w-52 xl:w-[450px] absolute -bottom-60 right-0 xl:-bottom-20 xl:right-70"
            />
          </div>
        </div>
        {/* waves */}
        <div className="absolute bottom-0 w-full ">
          <svg
            width="100%"
            height=""
            id="svg"
            viewBox="0 0 1440 260"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0,400 L 0,150 C 29.59445196289313,137.3490289254766 59.18890392578626,124.69805785095319 81,113 C 102.81109607421374,101.30194214904681 116.83883625974806,90.55679752166387 136,113 C 155.16116374025194,135.44320247833613 179.45575103522154,191.0747520623913 204,220 C 228.54424896477846,248.9252479376087 253.33815959936578,251.14419422877106 280,205 C 306.6618404006342,158.85580577122894 335.19161056731537,64.3484710225245 361,78 C 386.80838943268463,91.6515289774755 409.8953981313728,213.4619216811309 431,224 C 452.1046018686272,234.5380783188691 471.2267969071935,133.80384225295194 499,99 C 526.7732030928065,64.19615774704805 563.1974142398532,95.32270930706127 585,112 C 606.8025857601468,128.67729069293873 613.9835461333937,130.9053205188029 635,123 C 656.0164538666063,115.0946794811971 690.8684012265721,97.05600861772714 721,95 C 751.1315987734279,92.94399138227286 776.5428489603175,106.87064501028854 798,108 C 819.4571510396825,109.12935498971146 836.9602029321576,97.46141134111869 859,87 C 881.0397970678424,76.53858865888131 907.616339311052,67.28370962523672 930,86 C 952.383660688948,104.71629037476328 970.5744398236352,151.40375015793438 999,169 C 1027.4255601763648,186.59624984206562 1066.085901394407,175.10128974302572 1090,161 C 1113.914098605593,146.89871025697428 1123.081954598736,130.1910908699627 1143,122 C 1162.918045401264,113.80890913003729 1193.586280210648,114.1343467771234 1223,136 C 1252.413719789352,157.8656532228766 1280.5729245586715,201.27152202154372 1304,202 C 1327.4270754413285,202.72847797845628 1346.122021554665,160.7795651367018 1368,145 C 1389.877978445335,129.2204348632982 1414.9389892226675,139.61021743164912 1440,150 L 1440,400 L 0,400 Z"
              stroke="none"
              strokeWidth="0"
              fill="#fff"
              fillOpacity="1"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};
