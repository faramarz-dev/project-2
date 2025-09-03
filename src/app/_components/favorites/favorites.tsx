"use client";
import { FavoritesData } from "@/data/favorites.data";
import FavoriteCard from "./favorite-card/favorite-card";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Favorites() {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-blue-100 to-white py-32 relative">
      {/* title */}
      <div className="text-center">
        <h2 className="text-6xl font-santa">
          Our <span className="text-pink-600">Classic</span> Favorites
        </h2>
        <p className="text-gray-600 mt-4">
          Check out our top products that our customers love.
        </p>
      </div>
      {/* slider */}
      <div className="mt-24 mx-auto w-[60%]">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={2}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
          className="h-[500px]"
        >
          {FavoritesData.map((item) => (
            <SwiperSlide key={item.id}>
              <FavoriteCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Image
        src={"/images/favorites/left.png"}
        alt=""
        width={250}
        height={200}
        className="absolute bottom-1 w-32"
      />
      <Image
        src={"/images/favorites/right.png"}
        alt=""
        width={200}
        height={200}
        className="absolute top-0 right-0 w-24"
      />
    </div>
  );
}

export default Favorites;
