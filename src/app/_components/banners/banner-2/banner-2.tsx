import Image from "next/image";
import Link from "next/link";

export default function Banner_2() {
  return (
    <>
      <div className="bg-purple-800 flex justify-between w-full mt-24">
        
        <div className="mt-6 xl:mt-24 xl:mx-10 text-white p-2">
          <h1 className="text-4xl lg:text-8xl font-santa leading-13">Gelato Lovers Special</h1>
          <p className="mb-6 xl:mb-16 text-xs xl:text-xl mt-6 lg:mt-20">Buy Any Two Gelato Pints, Get One <span className="text-yellow-500">Free!</span> </p>
          <Link href={"/"} className="bg-pink-600 p-1 rounded-full text-xs lg:text-sm font-semibold">Claim Offer &rarr;</Link>
        </div>
        <div>
          <Image
            src={"/images/banners/banner-2.png"}
            alt=""
            width={700}
            height={300}
            className="w-72 h-72 object-none xl:w-full xl:h-full xl:object-cover"
          />
        </div>
      </div>
    </>
  );
}
