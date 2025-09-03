/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#ff6600", // رنگ سفارشی
        dark: "#1a1a1a",
      },
      screens: {
        xs: "360px", // breakpoint سفارشی برای موبایل
        "3xl": "1600px", // breakpoint بزرگ‌تر
      },
      fontFamily: {
        vintage: ["VintageKing", "sans-serif"],
        stagera: ["Stagera", "sans-serif"],
        santa: ["Santa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
