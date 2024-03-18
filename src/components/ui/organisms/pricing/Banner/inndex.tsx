"use client";
import React, { useState } from "react";

const Banner = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(0);
  const [escrowFee, setEscrowFee] = useState<number>(0);

  const handlePriceChange = (event: any) => {
    const newPrice = parseFloat(event.target.value);
    setPurchasePrice(newPrice);
  };

  const calculateFee = () => {
    const fee = purchasePrice * 0.02; // 1.5% as a decimal
    setEscrowFee(parseFloat(fee.toFixed(2))); // Format fee to two decimal places
  };
  return (
    <div className="bg-purple-300">
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Fee Calculator
        </h2>
        <p className="mt-5">
          {" "}
          Enter your goods purchase price to calculate your escrow fee which is
          2%.
        </p>

        <div className="flex mt-5">
          <input
            type="number"
            className="rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Purchase Price"
            value={purchasePrice}
            onChange={handlePriceChange}
          />
          <button
            className="ml-3 rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline none focus:ring-indigo-500 focus:border-indigo-500"
            onClick={calculateFee}
          >
            Calculate Fee
          </button>
        </div>

        <div className="mt-5  items-center gap-x-6">
          {escrowFee > 0 && (
            <p className="mt-5 mb-5 text-gray-600">Escrow Fee: ₦{escrowFee}</p>
          )}
          <a
            href="/signup"
            className="rounded-md mt-3 bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
