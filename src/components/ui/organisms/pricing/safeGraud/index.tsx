import React from "react";

const faqs = [
  {
    question: "Fee Breakdown",
    answer:
      "For every transaction, a fee of 2% + ₦100 is charged to cover the processing, escrow, and disbursement services. This fee can be paid entirely by one party or split between the buyer and seller at varying percentages, allowing for flexibility and fairness. There are no hidden charges and transaction fee is one of the lowest in the industry.",
  },
  {
    question: "Payment options for buyers",
    answer:
      "Bank Transfer  Credit & Debit Card.     If you've agreed to pay all or some of the fee, it's automatically added to the purchase price of the item you are buying.",
  },
  {
    question: "Disbursement options for sellers and brokers",
    answer:
      "Upon initiating a transaction, sellers and brokers have the freedom to specify their preferred disbursement method. Once all transaction terms are met and verified, safetrade will credit the seller's wallet. From there, the seller can easily request a withdrawal for their funds. The processing time for withdrawals is the same or the next business day, in line with their chosen disbursement method.",
  },
  {
    question: "",
    answer:
      "For transactions involving shared escrow fees, the agreed-upon amount will be deducted transparently from either the purchase price or the broker's commission, ensuring fairness and accountability throughout the process.",
  },
  // More questions...
];

const KnowMore = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl w-[350px] font-bold leading-10 tracking-tight text-purple-700">
                Safeguarding Transactions with Clear and Affordable Fees
              </h2>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-2xl font-semibold leading-7 text-purple-700">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
