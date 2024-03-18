// AccordionItem.tsx
"use client";
import React, { useState } from "react";

interface AccordionItemProps {
  item: NavigationItem;
  handleNavigationClick: HandleNavigationClick;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
  current: boolean;
}

type HandleNavigationClick = (index: number) => void;

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  handleNavigationClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="group inline-block">
      <button
        className={`group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ${
          item.current
            ? "bg-gray-50 text-purple-900"
            : "text-gray-700 hover:text-purple-600 hover:bg-gray-50"
        }`}
        onClick={toggleDropdown}
      >
        <item.icon
          className={`h-6 w-6 shrink-0 ${
            item.current
              ? "text-purple-900"
              : "text-gray-400 group-hover:text-purple-600"
          }`}
          aria-hidden="true"
        />
        {item.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ml-1 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className=" z-10 transition-all duration-300 top-full m mt-1 w-40 ml-5 bg-white rounded-md ">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-gray-100"
          >
            Create Deal
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 text-center hover:bg-gray-100"
          >
            Withdrawal
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Dropdown Item 3
          </a>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
