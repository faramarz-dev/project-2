import React from "react";

function Statictis() {
  return (
    <>
      <div className="h-[500px] b py-24 mt-24 bg-gradient-to-br from-pink-100 via-blue-100 to-white">
        <div className="text-center">
          <h2 className="text-center text-6xl font-santa ">
            Our <span className="text-pink-600">Statistics</span>
          </h2>
          <p className="text-sm text-gray-600 mt-4" >What makes us special through our impressive statistics.</p>
          <div className="flex justify-center gap-3 px-2 mt-14">
            <div className="bg-white rounded-lg shadow-lg w-44 h-36 flex flex-col py-10 items-center shadow-pink-600">
              <h3 className="font-serif font-bold text-4xl">91<span className="text-pink-600  text-base ">+</span></h3>
              <p className="text-xs text-gray-500 mt-2">Awards Win</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg w-44 h-36 flex flex-col py-10 items-center shadow-pink-600">
              <h3 className="font-serif font-bold text-4xl">95<span className="text-pink-600 text-base ">%</span></h3>
              <p className="text-xs text-gray-500 mt-2">Satisified Clients</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg w-44 h-36 flex flex-col py-10 items-center shadow-pink-600">
              <h3 className="font-serif font-bold text-4xl">48<span className="text-pink-600 text-base">+</span></h3>
              <p className="text-xs text-gray-500 mt-2">Years of Experience</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg w-44 h-36 flex flex-col py-10 items-center shadow-pink-600">
              <h3 className="font-serif font-bold text-4xl">143<span className="text-pink-600 text-base">+</span></h3>
              <p className="text-xs text-gray-500 mt-2">Employees Working</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statictis;
