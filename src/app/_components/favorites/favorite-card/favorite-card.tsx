import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IFavoritesCard } from "./favorite-card.types";

const FavoriteCard: React.FC<IFavoritesCard> = ({
  title,
  image,
  description,
  price,
  rate,
}) => {
  return (
    <>
      <div className="bg-gray-100 w-60 p-4 rounded-xl flex flex-col justify-between">
        <div>
          <Image
            src={image}
            alt=""
            width={300}
            height={50}
            className="bg-gradient-to-bl from-pink-200 via-amber-50 to-violet-200 w-full h-52 rounded-xl p-6 "
          />
          <div className="flex py-3">
            <h3 className="text-xl font-semibold ">{title}</h3>
            <span className="text-xs font-semibold flex gap-2 h-fit items-center">
            <FaStar color="#FFC107" size={15}/>
              {rate}/5
            </span>
          </div>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-pink-600 font-semibold text-lg">${price}</p>
          <Link href={"/"} className="bg-violet-900 rounded-full p-3">
            <IoCartOutline color="#fff" size={30} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FavoriteCard;
