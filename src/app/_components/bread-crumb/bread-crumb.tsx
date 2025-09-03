import Link from "next/link";
import { BreadCrumbProps } from "./bread-crumb.types";

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ul className="flex items-center bg-white w-fit rounded-full justify-center space-x-2 py-2 px-4 mx-auto  ">
          {items.map((item, index) => (
            <li
              key={`${index}-bread-crumb`}
              className={`flex items-center ${
                index !== items.length - 1
                  ? "text-gray-600"
                  : "text-purple-800 font-bold"
              } `}
            >
              <Link href={item.href} className="hover:underline hover:text-pink-600">
                {item.label}
              </Link>
              {index !== items.length - 1 && (
                <span className="mx-2 text-gray-400 hover:text-pink-600">&gt;</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default BreadCrumb;
