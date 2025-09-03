import { ICategoryCard } from "./category-card.types";
import Image from "next/image";
import Link from "next/link";

const CategoryCard: React.FC<ICategoryCard> = ({ title, image }) => {
  return (
    <>
      <div className="relative w-60 ">
        <Image src={image} alt={title} width={260} height={200} className="rounded-xl " />
        <Link href={"/"} className="absolute bottom-4 font-semibold bg-white w-[95%] left-1.5 py-1 px-2 rounded-2xl flex justify-between items-center">
          {title} <span className="bg-pink-600 h-10 rounded-full w-10 text-center text-white text-2xl flex items-center justify-center">&rarr;</span>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
