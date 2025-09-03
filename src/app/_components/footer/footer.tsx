import Image from "next/image";
import Link from "next/link";
import ScrollToUp from "../scroll-to-up/scroll-to-up";

export default function Footer() {
  return (
    <>
      <ScrollToUp />
      <footer className="bg-pink-100">
        <div className="xl:w-[80%] xl:mx-auto h-full ">
          <div className="flex justify-between items-center border-b py-20 border-gray-400 flex-col xs:gap-15 xl:flex-row">
            <div>
              <Image
                src={"/images/logo/logo.png"}
                alt="logo"
                width={150}
                height={50}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <h4 className="col-span-2 text-2xl font-semibold">Navigation</h4>
              <ul className="list-disc marker:text-pink-700 leading-10 text-sm text-gray-700">
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
              </ul>
              <ul className="list-disc marker:text-pink-700 leading-10 text-sm text-gray-700">
                <li>Products</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="">
              <div className="flex items-center space-x-2 mb-14">
                <span className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-5 h-5 fill-black"
                  >
                    <path d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
                  </svg>
                </span>
                <div className="flex flex-col gap-2">
                  <h5 className="font-semibold">Address:</h5>
                  <p className="text-sm text-gray-700">
                    121 King Street Melbourne, 3000, Australia
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-10 h-10  bg-pink-400 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-black"
                  >
                    <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z" />
                  </svg>
                </span>
                <div className="flex flex-col gap-2">
                  <h5 className="font-semibold">Email:</h5>
                  <p className="text-sm text-gray-700">info@example.com</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-10 h-10 flex items-center justify-center">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 5.5C21 14.06 14.06 21 5.5 21c-.39 0-.78-.01-1.15-.04-.43-.03-.65-.04-.85-.16a1 1 0 0 1-.45-.38c-.1-.2-.1-.44-.1-.93v-2.82c0-.4 0-.6.07-.77.06-.15.15-.28.27-.38.14-.12.33-.2.71-.34l3.21-1.17c.44-.16.66-.24.87-.22.18.01.35.07.5.18.17.12.29.32.53.72l.82 1.37c2.65-1.2 4.81-3.36 6-6l-1.37-.82c-.4-.24-.6-.36-.72-.53a1 1 0 0 1-.18-.5c-.02-.21.06-.43.22-.87l1.17-3.21c.14-.38.22-.57.34-.71.1-.12.23-.21.38-.27.17-.07.37-.07.77-.07h2.82c.49 0 .73 0 .93.1.2.1.35.25.45.38.12.2.13.42.16.85.03.37.04.76.04 1.15Z"
                      className="fill-black"
                    />
                  </svg>
                </span>
                <div className="flex flex-col gap-2 ">
                  <h4 className="text-2xl font-semibold">+12345678012</h4>
                  <p className="text-sm text-gray-700">
                    Got Questions? Call us 24/7
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-10 mt-16">
                <span className="bg-pink-400 h-10 w-10 flex items-center justify-center rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="-5 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                  >
                    <path d="M6.82 20v-9h2.73l.45-4H6.82v-2c0-1 .03-2 1.44-2h1.46V0c-.25 0-1.5-.1-2.77-.1C4 0 2.34 1.66 2.34 4.7V7H0v4h2.34v9h4.48z" />
                  </svg>
                </span>
                <span className="bg-pink-400 h-10 w-10 flex items-center justify-center rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 11c0-3.77 0-5.66 1.17-6.83C5.34 3 7.23 3 11 3h2c3.77 0 5.66 0 6.83 1.17C21 5.34 21 7.23 21 11v2c0 3.77 0 5.66-1.17 6.83C18.66 21 16.77 21 13 21h-2c-3.77 0-5.66 0-6.83-1.17C3 18.66 3 16.77 3 13v-2Z"
                      stroke="#33363F"
                      strokeWidth="2"
                    />
                    <circle cx="16.5" cy="7.5" r="1.5" fill="#33363F" />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#33363F"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span className="bg-pink-400 h-10 w-10 flex items-center justify-center rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 -0.5 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.17 19c2.3.09 4.24-1.71 4.33-4.01V9c-.09-2.3-2.03-4.1-4.33-4H6.83C4.53 5 2.59 6.8 2.5 9v6c.09 2.3 2.03 4.1 4.33 4h11.34Z"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 9.18l3.17 2.15c.2.12.33.33.33.57s-.13.45-.33.56L12 14.83c-.6.41-1.5.06-1.5-.58V9.75c0-.63.91-1 1.5-.57Z"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <p className="text-center py-3  text-xs text-gray-500">
            Copyright © 2024 BlackRise Themes Inc All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
