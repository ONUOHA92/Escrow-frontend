"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What is SafeTrade?",
    answer:
      "Safetrade is a digital escrow solution designed to enhance trust and security in digital transactions. It offers escrow services that protect both buyers and sellers..",
  },
  {
    question: "How does SafeTrade work?",
    answer:
      "SafeTrade acts as a trusted intermediary, securing funds until both parties confirm that the transaction terms are met.",
  },
  {
    question: "How is my money secured?",
    answer:
      "All SafeTrade payments are processed with PCI/DSS Certified payment processors and all funds are safely held in a CBN-Licensed Deposit Money Bank.",
  },
];
const faqsPrice = [
  {
    question: "What is SafeTrade?",
    answer:
      "Safetrade is a digital escrow solution designed to enhance trust and security in digital transactions. It offers escrow services that protect both buyers and sellers..",
  },
  {
    question: "How does SafeTrade work?",
    answer:
      "SafeTrade acts as a trusted intermediary, securing funds until both parties confirm that the transaction terms are met.",
  },
  {
    question: "How is my money secured?",
    answer:
      "All SafeTrade payments are processed with PCI/DSS Certified payment processors and all funds are safely held in a CBN-Licensed Deposit Money Bank.",
  },
];

const FrequncyQuestion = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            General
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>

        <div className="mx-auto max-w-4xl mt-20 divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Pricing
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FrequncyQuestion;
