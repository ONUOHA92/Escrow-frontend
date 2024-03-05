import React from "react";

const Banner = () => {
  return (
    <div className="bg-purple-300">
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Fee Calculator
        </h2>
        <p className="mt-5">
          {" "}
          Enter your goods purchase price to calculate your escrow fee.
        </p>

        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
