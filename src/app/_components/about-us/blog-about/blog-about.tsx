import Image from "next/image";
import Link from "next/link";

export default function BlogAbout() {
  return (
    <>
      <div className=" relative py-20">
        <div className="flex justify-center items-center flex-wrap gap-20">
          <div className="">
            <Image
              src={"/images/about/banner-1.png"}
              alt="banner-1"
              width={500}
              height={200}
              className="w-64 lg:w-fit"
            />
          </div>
          <div className="w-[500px] p-3">
            <h2 className="text-4xl lg:text-6xl font-santa leading-18 ">
              Our <span className="text-pink-600">Journey</span> Began With a
              Simple Dream
            </h2>
            <p className="text-gray-600 text-sm mt-5 mb-10 leading-7 text-justify">
              Our goal is to make the best ice cream using only the finest,
              natural ingredients. From rich, creamy classics to adventurous new
              creations, every flavor is meticulously crafted in-house to ensure
              the highest quality and freshness.We take pride in offering a
              diverse range of options, including dairy-free, vegan, and
              gluten-free choices, so everyone can find their perfect scoop.
            </p>
            <Link href={"/"} className="bg-pink-600 text-white text-xs font-semibold px-5 py-2 rounded-full shadow-lg shadow-pink-400">Read More</Link>
          </div>
        </div>
        <Image
          src={"/images/about/figure-right.png"}
          alt="banner-2"
          width={200}
          height={200}
          className="absolute top-5 right-0 w-32 lg:w-fit"
        />
      </div>
    </>
  );
}
