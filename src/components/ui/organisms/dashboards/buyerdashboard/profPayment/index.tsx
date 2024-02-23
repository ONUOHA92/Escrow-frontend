"use client";

import React, { useState } from "react";
import BuyersLayout from "@/components/ui/layouts/buyerdashboardlayout";

const ProfOfPayment = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
    // Do something with the selected file, like upload it
  };

  const handleSubmit = () => {
    // Submit the selected file here
    console.log("Submitting file:", selectedFile);
  };

  return (
    <>
      <BuyersLayout>
        <div className="mx-auto lg:w-[700px] mt-10">
          <h2 className="mb-10 text-[20px] text-center text-gray-500">
            Please upload prove of payment here
          </h2>

          <label className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <span className="mt-2 block text-sm font-semibold text-gray-500">
              Please upload Prove of Payment
            </span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </BuyersLayout>
    </>
  );
};

export default ProfOfPayment;
