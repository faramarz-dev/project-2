import CategoryCard from "./category-card/category-card";
import { CategoriesData } from "@/data/categories.data";

export default function Categories() {
  return (
    <>
      <div className="mt-24">
        <h2 className="text-6xl leading-20 text-center font-santa">
          Explore Our <span className="text-pink-600">Categories</span>
        </h2>
        <p className="text-gray-600 text-center py-5">
          Browse through our different categories to find your favorite ice
          cream treats.
        </p>
        <div className="flex justify-center gap-10 mt-16 flex-wrap">
          {CategoriesData.map((item) => (
            <CategoryCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
