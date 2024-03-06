"use client";
import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import ChartComponent from "@/components/ChartComponent";

const transactionDetails = [
  {
    transactionDate: "10:20am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Disputed",
    amount: "₦200000",
  },

  {
    transactionDate: "10:50am",
    name: "Favour Chison",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Disputed",
    amount: "₦2000",
  },

  {
    transactionDate: "12:50am",
    name: "Ifeanyi David",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Disputed",
    amount: "₦500000",
  },
  {
    transactionDate: "1:50am",
    name: "Chisom Jessey",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Disputed",
    amount: "₦40000",
  },
  {
    transactionDate: "2:50am",
    name: "Micheal cliton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Ongoing",
    amount: "₦100000",
  },
  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Completed",
    amount: "₦300000",
  },

  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Ongoing",
    amount: "₦600000",
  },
  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Completed",
    amount: "₦700000",
  },

  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Disputed",
    amount: "₦200000",
  },
  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Declined",
    amount: "₦200000",
  },
  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Cancelled",
    amount: "₦800000",
  },

  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Ongoing",
    amount: "₦100000",
  },
  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Completed",
    amount: "₦300000",
  },

  {
    transactionDate: "10:50am",
    name: "Lindsay Walton",
    transactionId: "202167",
    email: "lindsay.walton@example.com",
    satus: "Pending",
    amount: "₦200000",
  },
];

const itemsPerPage = 5; // Number of items per page

const AdminHome = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(transactionDetails.length / itemsPerPage);

  // Calculate start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    transactionDetails.length
  );

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-7/12 md:pr-4 mb-6 md:mb-0">
          <ChartComponent />
        </div>
        <div className="w-full md:w-5/12 md:pl-4">
          <div className="bg-white p-4 rounded-md shadow-lg md:h-[368px]">
            <h3 className="text-gray-700 text-center pt-10">
              Total number of users{" "}
            </h3>

            <div className="flex justify-center mt-20">
              <UserIcon className="h-10 w-10 text-gray-500" />
              <UserIcon className="h-10 w-10 text-gray-500" />
              <UserIcon className="h-10 w-10 text-gray-500" />
            </div>

            <p className="text-center mt-5 text-gray-500 text-2xl">
              {" "}
              Total: 200
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-10 sm:px-6 lg:px-8 pb-10 shadow-lg">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-purple-900">
              Users
            </h1>
            <p className="mt-2 text-sm text-gray-700">Recent Tranaction</p>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                    >
                      Transaction Time
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Transaction ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {transactionDetails
                    .slice(startIndex, endIndex)
                    .map((transaction) => (
                      <tr key={transaction.email} className="even:bg-gray-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                          {transaction.transactionDate}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-3">
                          {transaction.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {transaction.transactionId}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {transaction.email}
                        </td>
                        <td
                          className={`whitespace-nowrap px-3 py-4 text-sm  ${
                            transaction.satus === "Pending"
                              ? "text-yellow-400 "
                              : transaction.satus === "Ongoing"
                              ? "text-green-400"
                              : transaction.satus === "Disputed"
                              ? "text-pink-400"
                              : transaction.satus === "Declined"
                              ? "text-orange-400"
                              : transaction.satus === "Cancelled"
                              ? "text-red-400"
                              : transaction.satus === "Completed"
                              ? "text-blue-400"
                              : ""
                          }`}
                        >
                          {transaction.satus}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {transaction.amount}
                        </td>
                        {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit<span className="sr-only">, {person.name}</span>
                          </a>
                        </td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav className="flex" aria-label="Pagination">
            {/* Previous page button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
            >
              <span className="sr-only">Previous</span>
              Previous
            </button>

            {/* Page buttons */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === i + 1
                    ? "text-indigo-600 bg-indigo-100"
                    : "text-gray-700 hover:bg-gray-50"
                } mr-2`}
              >
                {i + 1}
              </button>
            ))}

            {/* Next page button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-2 py-2 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
            >
              <span className="sr-only">Next</span>
              Next
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
