import React from "react";

import {
  ArrowPathIcon,
  CreditCardIcon,
  CloudArrowUpIcon,
  ShoppingCartIcon,
  CheckCircleIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Buy confidently from unfamiliar sellers",
    description:
      "In today's digital marketplace, buying from unfamiliar sellers can feel risky. However, with our strategy, you can shop with confidence:",
    icon: CheckCircleIcon,
  },
  {
    name: "Shop confidently knowing your money is safe",
    description:
      "In today's digital age, shopping online offers unparalleled convenience, but concerns about security can sometimes deter buyers. Rest assured, we have security measures in place to protect your hard-earned money",
    icon: LockClosedIcon,
  },
  {
    name: "Secure payments until orders arrive",
    description:
      "In an era of online shopping, ensuring secure payments until orders arrive is crucial for a worry-free shopping experience. with our platform, you can safeguard your transactions",
    icon: CreditCardIcon,
  },
  {
    name: "Avoid potential scams and fraudulent sellers",
    description:
      "Online shopping offers convenience, but it also comes with risks. Protect yourself from scams and fraudulent sellers with our platform",
    icon: FingerPrintIcon,
  },
];

const Feature = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6  lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-4xl pt-20 font-bold tracking-tight text-purple-900 sm:text-3xl">
            Buy and Sell with Total Confidence
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Whether you are buying that dream item or selling to eager customers
            online, Safetrade provides a secure and transparent way to safeguard
            your transactions, ensuring your money stays safe and your orders
            reach you as promised.
          </p>
        </div>
        <div className="mx-auto mt-10  max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl py-10 grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-purple-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-900">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default Feature;
