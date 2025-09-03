"use client"; // این خط مشخص می‌کند که این کامپوننت باید در سمت کلاینت اجرا شود (در Next.js 13+)

import Link from "next/link"; // ایمپورت کامپوننت لینک از Next.js برای ناوبری سمت کلاینت
import { usePathname } from "next/navigation"; // هوک برای گرفتن مسیر فعلی از ناوبری Next.js

// تعریف کامپوننت NavLink با پراپ‌های href و children
export const NavLinks = ({
  href,
  children,
}: {
  href: string; // مسیر مقصد لینک
  children: React.ReactNode; // محتوای داخل لینک (مثلاً متن یا آیکون)
}) => {
  const pathname = usePathname(); // گرفتن مسیر فعلی صفحه
  const isActive = pathname === href; // بررسی اینکه آیا لینک فعال است یا نه

  return (
    <Link
      href={href} // مسیر لینک
      className={`group  relative w-24 text-center  transition-colors duration-100
        ${isActive
          ? "font-semibold text-pink-500 border-b border-pink-500 shadow-md shadow-pink-500 scale-y-125 rounded-bl-xl rounded-tr-xl"
          : "text-violet-800  hover:text-pink-600 "}
        lg:mt-0 lg:text-center`} // کلاس‌های Tailwind برای استایل‌دهی به لینک
    >
      {children} {/* نمایش محتوای داخل لینک */}

      {/* فقط وقتی لینک فعال نیست افکت نمایشی زیرش بیاد */}
      {!isActive && (
        <span
          className="absolute bottom-0 left-0 h-[2px] w-full bg-pink-600 
          transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
        ></span> // افکت خط زیر لینک هنگام هاور، فقط وقتی لینک فعال نیست
      )}
    </Link>
  );
};