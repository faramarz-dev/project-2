"use client";

import { BlogCard } from "./blog-card/blog-card";
import { IBlogsProps } from "./blogs.types";
import BreadCrumb from "../bread-crumb/bread-crumb";

const BreadCrumpItem = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
];

export const Blogs: React.FC<IBlogsProps> = ({ visibleBlogs }) => {
  return (
    <>
      {/* header contact */}
      <div className=" h-[500px] bg-gradient-to-br from-pink-100 via-blue-100 to to-white">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <h1 className="text-7xl font-santa ">Blogs</h1>
          <BreadCrumb items={BreadCrumpItem} />
        </div>
      </div>
      {/* all blogs */}
      <div className="bg-gray-50 py-12">
        <div>
            <h3 className="text-4xl lg:text-6xl font-santa text-center py-24">All Blogs</h3>
        </div>
<div className="w-72 lg:w-1/2 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center ">
            {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
            ))
            }
        </div>
      </div>
    </>
  );
};
