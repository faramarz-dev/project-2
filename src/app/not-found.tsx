"use client"
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-white ">
      <h1 className="text-6xl font-bold mb-4 font-serif">404</h1>
      <p className="text-xl mb-6 font-semibold">Sorry! The Page Not Found ;</p>
      <Link
        href="/"
        className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition font-semibold"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}
