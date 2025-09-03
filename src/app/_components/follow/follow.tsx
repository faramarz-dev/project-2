import Image from "next/image";

export default function Follow() {
  return (
    <>
      <div className="mt-24 py-32 text-center bg-gradient-to-br from-pink-100 via-blue-100 to-white ">
        <div className="">
          <h2 className="text-6xl font-santa">
            Follow Us on <span className="text-pink-600">Instagram</span>
          </h2>
          <p className="text-gray-600 text-sm mt-6">
            Join our Instagram community for updates, special deals, and more!
          </p>
        </div>
        <div className="overflow-hidden xs:py-10 xl:p-10 flex justify-center gap-4 xl:gap-10 mt-14 relative w-fit mx-auto flex-wrap">
            <span className="bg-pink-400 w-24 h-24 rounded-full absolute left-0 top-0 z-0"></span>
          <Image
            src={"/images/instagram/follow-1.png"}
            alt=""
            width={200}
            height={200}
            className="z-1 w-[40%] sm:w-fit md:w-48"
          />
          <Image
            src={"/images/instagram/follow-2.png"}
            alt=""
            width={200}
            height={100}
            className="w-[40%] sm:w-fit md:w-48"
          />
          <Image
            src={"/images/instagram/follow-3.png"}
            alt=""
            width={200}
            height={100}
            className="w-[40%] sm:w-fit md:w-48"
          />
          <Image
            src={"/images/instagram/follow-4.png"}
            alt=""
            width={200}
            height={100}
            className="z-1 w-[40%] sm:w-fit md:w-48"
          />
            <span className="bg-pink-800 w-24 h-24 rounded-full absolute right-0 bottom-0 z-0 "></span>
        </div>
      </div>
    </>
  );
}
