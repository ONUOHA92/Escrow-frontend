"use client";

import React, { useState } from "react";
import BuyersLayout from "@/components/ui/layouts/buyerdashboardlayout";

const BuyerPayment = () => {
  const publicKey = process.env.TEST_PUBLIC_KEY;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  //   const [itemName, setItemName] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Construct Paystack URL
    const paystackUrl = `https://paystack.com/pay/f9m8s4c5rr?name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&amount=${encodeURIComponent(amount)}`;

    // Redirect to Paystack payment page
    window.location.href = paystackUrl;
  };

  return (
    <>
      <BuyersLayout>
        <div className="mt-10">
          <h2 className="mb-10 lg:text-2xl sm:text-[20px]  text-center text-gray-700">
            Make your payment into the escrow Account below
          </h2>

          <form onSubmit={handleSubmit} className="max-w-md  mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-500 font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-500 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* <div className="mb-4">
              <label
                htmlFor="itemName"
                className="block text-gray-500 font-bold mb-2"
              >
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div> */}
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-500 font-bold mb-2"
              >
                Amount (in Naira)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Pay with Paystack
            </button>
          </form>
        </div>
      </BuyersLayout>
    </>
  );
};

export default BuyerPayment;

// return (
//   <div>
//     <h1>Simple Pay Page</h1>
//     <PayButton amount={amount} email={email} />
//   </div>
