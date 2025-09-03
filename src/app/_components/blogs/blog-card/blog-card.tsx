import { IBlogCardProps } from "./blog-card.types";
import Link from "next/link";
import Image from "next/image";

export const BlogCard: React.FC<IBlogCardProps> = ({
  title,
  description,
  image,
  slug,
  date,
  author,
}) => {
  return (
    <>
      <div className="w-fit h-[450px] rounded-2xl bg-white shadow-lg ">
        {/* image */}
        <div>
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="rounded-t-2xl h-56 object-cover"
          />
        </div>
        {/* author & date */}
        <div className="flex justify-between p-2">
          <span className="flex gap-2 text-gray-600 text-sm items-center">
            {/* author icon */}
            <span >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#ff1493"
                  d="M16 15.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2.2c-6.7 0-11 3.7-11 5.5v3.4h22v-3.4c0-2.2-4.1-5.5-11-5.5z"
                />
              </svg>
            </span>
            {author}
          </span>

          <span className="flex gap-2 text-gray-600 text-sm items-center">
            {/* date icon */}
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10h16M8 3v4M16 3v4"
                  stroke="#ff1493"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <g fill="lightGray">
                  <rect x="6" y="12" width="3" height="3" rx="0.5" />
                  <rect x="10.5" y="12" width="3" height="3" rx="0.5" />
                  <rect x="15" y="12" width="3" height="3" rx="0.5" />
                </g>
              </svg>
            </span>
            {date}
          </span>
        </div>
        {/* title & desc */}
        <div className="p-2">
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-sm text-gray-600 md:mb-10 mt-3">{description}</p>
        </div>
        <Link href={`/blogs/${slug}`} className="p-2 text-sm text-blue-500 underline font-semibold hover:text-pink-600">Read More</Link>
      </div>
    </>
  );
};
