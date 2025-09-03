import React, { useMemo } from "react";
import Link from "next/link";
import { IPagination } from "./pagination.types";

const Pagination: React.FC<IPagination> = ({
  totalItems,
  activePage,
  itemsPerPage,
  extraParams = {}, // پارامترهای اضافی مثل category, search, ...
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  // 🔹 ساخت URL با حفظ پارامترهای اضافی
  const buildUrl = (page: number) => {
    const params = new URLSearchParams();
    params.set("page", page.toString());

    Object.entries(extraParams).forEach(([key, value]) => {
      if (value) params.set(key, value.toString());
    });

    return `?${params.toString()}`;
  };

  // 🔹 ساخت صفحات قابل نمایش
  const visiblePages = useMemo(() => {
    const start = Math.max(1, activePage - 2);
    const end = Math.min(pageCount, activePage + 2);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [activePage, pageCount]);

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-4 scale-75 md:scale-90">
      {activePage > 1 && (
        <Link
          href={buildUrl(activePage - 1)}
          className="px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-400 text-white rounded-full shadow-xl hover:scale-105 transition-all duration-300"
        >
          Prev
        </Link>
      )}

      {visiblePages.map((page) => (
        <Link
          key={page}
          href={buildUrl(page)}
          className={`px-4 py-2 rounded-full text-center shadow-xl transition-all duration-300 ${
            activePage === page
              ? "bg-pink-600 text-white font-bold hover:scale-110"
              : "bg-gray-200 text-gray-600 hover:bg-pink-300 hover:text-white hover:scale-105"
          }`}
        >
          {page}
        </Link>
      ))}

      {activePage < pageCount && (
        <Link
          href={buildUrl(activePage + 1)}
          className="px-4 py-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full shadow-xl hover:scale-105 transition-all duration-300"
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;