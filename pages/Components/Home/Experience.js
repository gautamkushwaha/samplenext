import React from "react";

export default function Experience() {
  return (
    <div className="w-[100vw] bg-white mx-auto my-[50px]">
      <div className="relative">
        <img
          src="sec-right-path.png"
          className="absolute top-0 right-0 w-[13%] hidden md:block h-[300px]"
          alt="Image 1"
        />
        <img
          src="sec-left-path.png"
          className="absolute bottom-0 left-0 w-[13%] h-[400px] hidden md:block"
          alt="Image 2"
        />

        <div className="mx-auto mt-10">
          <div className="text-center mb-4">
            <p className="text-2xl font-bold">Extensions</p>
            <h2 className="text-4xl font-bold mt-[20px] mb-[30px]">Ending with .com is just the beginning.</h2>
          </div>

          <div className="flex justify-center gap-5">
            <div className="w-1/5"></div> {/* Left gap for the image */}
            <div className="w-[80%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-5 p-5">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center"
                  >
                    <img
                      src={`image${index + 1}.png`}
                      className="mb-5 "
                      alt={`Image ${index + 1}`}
                    />
                    <p className="text-gray-500 text-lg mb-2 p-2">$12.99/1st year</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/5"></div> {/* Right gap for the image */}
          </div>
        </div>
      </div>

    </div>

  );
}