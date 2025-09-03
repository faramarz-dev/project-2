"use client";
import BreadCrumb from "../bread-crumb/bread-crumb";

const ContactUs = () => {
  const BreadCrumpItem = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ];
  return (
    <>
      {/* header contact */}
      <div className=" h-[500px] bg-gradient-to-br from-pink-100 via-blue-100 to to-white">
        <div className="flex flex-col items-center justify-center h-full gap-5">
          <h1 className="text-7xl font-santa">Contact Us</h1>
          <BreadCrumb items={BreadCrumpItem} />
        </div>
      </div>
      {/*  contact main*/}
      <div className="py-24 bg-gray-50 ">
        {/* contact title */}
        <div className="text-center">
          <h2 className="text-6xl font-santa leading-20">
            Get in <span className="text-pink-600 ">Touch</span> With Us
          </h2>
          <p className="text-sm text-gray-600 mt-4">
            Reach out and connect with us today for any inquiries or assistance!
          </p>
        </div>
        {/* contact  */}
        <div className="flex justify-center gap-10 mt-24 flex-wrap">
          {/* calls */}
          <div className="flex flex-col gap-6">
            {/* location */}
            <div className="flex h-36 px-4 w-72 items-center gap-4 rounded-xl bg-white shadow-lg">
              {/* loaction icon */}
              <div>
                <span className="flex items-center justify-center bg-pink-600 w-16 h-16 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-7 h-7 fill-white"
                  >
                    <path d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
                  </svg>
                </span>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2">Our Loaction</h5>
                <p className="text-gray-600 text-sm ">
                  121 King Street, Melbourne Victoria 3000 Australia
                </p>
              </div>
            </div>
            {/* call number */}
            <div className="flex h-36 px-4 w-72 items-center gap-4 rounded-xl bg-white shadow-lg">
              {/* call icon */}
              <span className="flex items-center justify-center bg-pink-600 w-16 h-16 rounded-full">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 5.5C21 14.06 14.06 21 5.5 21c-.39 0-.78-.01-1.15-.04-.43-.03-.65-.04-.85-.16a1 1 0 0 1-.45-.38c-.1-.2-.1-.44-.1-.93v-2.82c0-.4 0-.6.07-.77.06-.15.15-.28.27-.38.14-.12.33-.2.71-.34l3.21-1.17c.44-.16.66-.24.87-.22.18.01.35.07.5.18.17.12.29.32.53.72l.82 1.37c2.65-1.2 4.81-3.36 6-6l-1.37-.82c-.4-.24-.6-.36-.72-.53a1 1 0 0 1-.18-.5c-.02-.21.06-.43.22-.87l1.17-3.21c.14-.38.22-.57.34-.71.1-.12.23-.21.38-.27.17-.07.37-.07.77-.07h2.82c.49 0 .73 0 .93.1.2.1.35.25.45.38.12.2.13.42.16.85.03.37.04.76.04 1.15Z"
                    className="fill-white"
                  />
                </svg>
              </span>
              <div>
                <h5 className="text-xl font-semibold mb-2">Phone Number</h5>
                <p className="text-gray-600 text-sm">+12345678912</p>
                <p className="text-gray-600 text-sm">+98765432132</p>
              </div>
            </div>
            {/* email */}
            <div className="flex h-36 px-4 w-72 items-center gap-4 rounded-xl bg-white shadow-lg">
              {/* email icon */}
              <span className="flex items-center justify-center bg-pink-600 w-16 h-16 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-9 h-9 fill-white"
                >
                  <path d="M13.025 17H3.707l5.963-5.963L12 12.83l2.33-1.794 1.603 1.603a5.463 5.463 0 0 1 1.004-.41l-1.808-1.808L21 5.9v6.72a5.514 5.514 0 0 1 1 .64V5.5A1.504 1.504 0 0 0 20.5 4h-17A1.504 1.504 0 0 0 2 5.5v11A1.5 1.5 0 0 0 3.5 18h9.525c-.015-.165-.025-.331-.025-.5s.01-.335.025-.5zM3 16.293V5.901l5.871 4.52zM20.5 5c.009 0 .016.005.025.005L12 11.57 3.475 5.005c.009 0 .016-.005.025-.005zm-2 8a4.505 4.505 0 0 0-4.5 4.5 4.403 4.403 0 0 0 .05.5 4.49 4.49 0 0 0 4.45 4h.5v-1h-.5a3.495 3.495 0 0 1-3.45-3 3.455 3.455 0 0 1-.05-.5 3.498 3.498 0 0 1 5.947-2.5H20v.513A2.476 2.476 0 0 0 18.5 15a2.5 2.5 0 1 0 1.733 4.295A1.497 1.497 0 0 0 23 18.5v-1a4.555 4.555 0 0 0-4.5-4.5zm0 6a1.498 1.498 0 0 1-1.408-1 1.483 1.483 0 0 1-.092-.5 1.5 1.5 0 0 1 3 0 1.483 1.483 0 0 1-.092.5 1.498 1.498 0 0 1-1.408 1zm3.5-.5a.5.5 0 0 1-1 0v-3.447a3.639 3.639 0 0 1 1 2.447z" />
                </svg>
              </span>
              <div>
                <h5 className="text-xl font-semibold mb-2">Email Us at</h5>
                <p className="text-gray-600 text-sm">info@example.com</p>
                <p className="text-gray-600 text-sm">example@gmail.com</p>
              </div>
            </div>
          </div>
          {/* input */}
          <div>
            <form action="contact" className="w-[350px] lg:w-[600px]">
              <div className="grid grid-cols-2 gap-6 text-xs md:text-sm text-gray-600">
                <div>
                  <p>First Name</p>
                  <input
                    type="text"
                    className=" p-2 rounded-full mt-3 border border-gray-300 outline-0 focus:border-pink-600 w-full"
                  />
                </div>
                <div>
                  <p>Last Name</p>
                  <input
                    type="text"
                    className=" p-2 rounded-full mt-3 border border-gray-300 outline-0 focus:border-pink-600 w-full"
                  />
                </div>
                <div>
                  <p>Email Address</p>
                  <input
                    type="email"
                    className=" p-2 rounded-full mt-3 border border-gray-300 outline-0 focus:border-pink-600 w-full"
                  />
                </div>
                <div>
                  <p>Phone</p>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={11}
                    className="no-spinner p-2 rounded-full mt-3 border border-gray-300 outline-0 focus:border-pink-600 w-full"
                  />
                </div>
                <div className="col-span-2">
                  <p>Message</p>
                  <textarea
                    name="message"
                    id="1"
                    role="textbox"
                    rows={7}
                    className=" mt-3 rounded-xl border border-gray-300 outline-0 focus:border-pink-600 w-full p-2"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="bg-pink-600 text-white py-3 px-4 rounded-full mt-6 text-sm font-semibold shadow-md hover:shadow-lg shadow-pink-800 cursor-pointer"
              >
                Submit Now &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
