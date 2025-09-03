import Image from "next/image";
import { BestSellersData } from "@/data/bestSellers.data";
import { BestSellersCard } from "./best-card/best-card";

function BestSellers() {
  return (
    <>
      <div className="mt-28 relative">
        <div className="text-center">
          <h2 className="text-6xl font-santa">
            Our <span className="text-pink-600">Best</span> Sellers
          </h2>
          <p className="text-gray-600 mt-5">
            Discover the favorites that keep our customers coming back for more.
          </p>
        </div>
        <div className="flex gap-5 justify-center mt-10 mx-auto w-[80%] flex-wrap">
          {BestSellersData.map((item) => (
            <BestSellersCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
              rate={item.rate}
            />
          ))}
        </div>
        <Image
          src={"/images/header/figure-banner.png"}
          alt=""
          width={250}
          height={200}
          className="absolute bottom-40 hidden md:block"
        />
      </div>
    </>
  );
}

export default BestSellers;
