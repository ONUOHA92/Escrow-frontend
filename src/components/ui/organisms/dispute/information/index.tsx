"use client";
import React, { useState } from "react";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

interface Button {
  name: string;
  info: string;
}

const button: Button[] = [
  {
    name: "Dispute Resolution",
    info: "DisputeButton",
  },
  {
    name: "Privacy Policy",
    info: "privacyPolicy",
  },
  {
    name: "Terms of Use",
    info: "TermsOfuse",
  },
];

// const features: Feature[] = [
//   {
//     name: "Push to deploy.",
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: "SSL certificates.",
//     description:
//       "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
//     icon: LockClosedIcon,
//   },
//   {
//     name: "Database backups.",
//     description:
//       "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//     icon: ServerIcon,
//   },
// ];

export default function DisputeInformation() {
  const [activeButton, setActiveButton] = useState<string>("DisputeButton");
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl">
                Dispute information
              </p>

              <div className="mt-10  max-w-xl space-y-8 text-base leading-7  text-gray-600 lg:max-w-none">
                {button.map((b) => (
                  <div key={b.name} className="relative ">
                    <button
                      className={`${
                        activeButton === b.info
                          ? "bg-purple-700 text-white"
                          : "bg-white shadow-md text-black"
                      } px-4 py-3 w-full rounded-md`}
                      onClick={() => setActiveButton(b.info)}
                    >
                      {b.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:mt-[6rem] sm:mt-[3rem]">
            {button.map((information) => (
              <div key={information.name}>
                {activeButton === information.info && (
                  <div>
                    {information.info === "DisputeButton" ? (
                      <div className="shadow-lg px-5 py-10">
                        <h3 className="text-3xl font-semibold mb-4">
                          Dispute Resolution
                        </h3>
                        <p>
                          We understand that disputes can sometimes arise during
                          online transactions. At EscrowPro, we&apos;ve designed
                          a clear and straightforward process to address and
                          resolve these issues, ensuring fairness for all
                          parties involved.
                        </p>
                        <ol className="list-decimal pl-6 mt-4">
                          <li>
                            <strong>Dispute Initiation:</strong> If any party
                            involved in a transaction raises a dispute before
                            the payout, the transaction and funds are
                            temporarily placed on hold until the dispute is
                            resolved.
                          </li>
                          <li>
                            <strong>Resolution Center:</strong> Both parties
                            proceed to our Resolution Center, where they can
                            engage in a discussion using our chat feature.
                          </li>
                          <li>
                            <strong>Evidence Submission:</strong> During the
                            resolution process, both parties are encouraged to
                            provide evidence supporting their case, which should
                            align with the listed item and the terms of the
                            sale.
                          </li>
                          <li>
                            <strong>Arbiter&apos;s Verdict (Level 1):</strong>{" "}
                            Our arbiter reviews the evidence presented and
                            issues a verdict. Verdict options are either to
                            credit the merchant or refund the paying customer.
                          </li>
                          <li>
                            <strong>Funds Disbursement:</strong> Once a verdict
                            is reached based on the evidence, funds are
                            disbursed accordingly to the wallet of the
                            prevailing party. Withdrawal to a regular account
                            can then be initiated.
                          </li>
                          <li>
                            <strong>Resolution and Completion:</strong> With the
                            dispute resolved, the transaction is marked as
                            completed, and both parties can move forward.
                          </li>
                        </ol>
                        <p>
                          If a dispute remains unresolved after Level 1, either
                          party involved may choose to escalate the dispute to
                          Level 2. Contact our support team to initiate the
                          arbitration process. (More information can be found in
                          the &apos;dispute area&apos; of your dashboard.)
                        </p>
                        <p>
                          Our aim is to ensure that our dispute resolution
                          process offers a straightforward and transparent
                          approach to address any complexities that may arise
                          during transactions on our platform. Trust in PayScrow
                          is our top priority, and we are here to facilitate
                          resolutions that uphold the principles of fairness and
                          transparency.
                        </p>
                      </div>
                    ) : information.info === "privacyPolicy" ? (
                      <div className="shadow-lg">
                        <div className="shadow-lg p-6">
                          <h3 className="text-xl font-semibold mb-4">
                            Privacy Policy
                          </h3>
                          <p>
                            The Internet is an amazing tool. It has the power to
                            change the way we live, and we&apos;re starting to
                            see that potential today. With only a few
                            mouse-clicks, you can follow the news, look up
                            facts, buy goods and services, and communicate with
                            others from around the world. It&apos;s important to
                            EWOSSY SERVICES LTD to help our customers retain
                            their privacy when they take advantage of all the
                            Internet has to offer.
                          </p>
                          <p>
                            We believe your business is no one else&apos;s. Your
                            privacy is important to you and to us. So we&apos;ll
                            protect the information you share with us. To
                            protect your privacy, EWOSSY SERVICES LTD follows
                            different principles in accordance with world-wide
                            practices for customer privacy and data protection.
                          </p>

                          <h4 className="font-semibold mt-4">
                            Information Protection
                          </h4>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              We won&apos;t sell or give away your personal
                              information to anyone.
                            </li>
                            <li>
                              We&apos;ll use state-of-the-art security measures
                              to protect your information from unauthorized
                              users.
                            </li>
                          </ul>

                          <h4 className="font-semibold mt-4">Notice</h4>
                          <p>
                            We will ask you for personal information when
                            needed, and it will be used for specific purposes
                            such as site registration or subscription services.
                          </p>
                          <p>
                            We use your Personal Information for four primary
                            purposes:
                          </p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              To make the site easier for you to use by not
                              having to enter information more than once.
                            </li>
                            <li>
                              To help you quickly access services or
                              information.
                            </li>
                            <li>
                              To help us create content most relevant to you.
                            </li>
                            <li>
                              To alert you to product upgrades, special offers,
                              updated information and other new services from
                              EWOSSY SERVICES LTD.
                            </li>
                          </ul>

                          <h4 className="font-semibold mt-4">Consent</h4>
                          <p>
                            If you choose not to register or provide personal
                            information, you can still use most of payscrow.net,
                            but you will not be able to access areas that
                            require registration.
                          </p>

                          <p className="mt-3">
                            If you decide to register, you will be able to
                            select the kinds of information you want to receive
                            from us by subscribing to various services, like our
                            electronic newsletters. If you do not want us to
                            communicate with you about other offers regarding
                            EWOSSY SERVICES LTD products, programs, events, or
                            services by e-mail, postal mail, or telephone, you
                            may select the option stating that you do not wish
                            to receive marketing messages from EWOSSY SERVICES
                            LTD.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="shadow-lg px-5 py-10">
                        <h3 className="text-xl font-semibold mb-4">
                          Terms of Use
                        </h3>
                        <p>
                          These Terms of Use (&apos;Terms of Use&apos; or
                          &apos;Agreement&apos;) shall serve as an agreement
                          that sets forth the terms and conditions which will
                          govern your use and participation in the transaction
                          management and escrow services provided on and through
                          PayScrow (the &apos;Services&apos;). By selecting to
                          utilize the Services you shall have also indicated
                          your acceptance of these Terms of Use and your intent
                          and agreement to be bound by them. If you are
                          unwilling to agree to these Terms of Use, you shall
                          discontinue further use of the Services. If you agree
                          to these Terms of Use, you will be bound as follows:
                        </p>

                        <div className="mt-3">
                          1. <strong>Definitions</strong> – &apos;Account&apos;
                          means (i) an account of a Buyer from which payment for
                          the Transaction and related fees will be obtained,
                          (ii) an account of a Seller to which payment for the
                          Transaction and other payments will be credited.
                          &apos;Agreement&apos; refers to this Agreement, the
                          then current operating rules contained on the Site and
                          the Transaction Escrow Instructions. &apos;Transaction
                          Details page&apos; means those pages on the Site where
                          Users provide all requested information in connection
                          with a Transaction. &apos;Escrow Instructions&apos; or
                          &apos;General Instructions&apos; means the document on
                          the Site that contains the terms agreed upon on the
                          Transaction Details page, as well as the other terms
                          and conditions of the escrow transaction including
                          these Terms of Use. “Buyer Inspection Period” means
                          the specific period as agreed by the Parties within
                          which the Buyer may inspect the items upon receipt, in
                          the absence of an agreement between the parties; 5
                          days following the Seller’s notice of delivery.
                          “PayScrow&apos;s notice” in the context of delivery,
                          means PayScrow’s notice to the Seller to ship the
                          items after the deposit of funds by the Buyer in its
                          Account. “Seller Inspection Period” means the period
                          within which the Seller must inspect items returned by
                          the Buyer. It may be as agreed between the parties or
                          as stated by the Seller’s return policy. However, the
                          default period is 5 days following the days of Buyer’s
                          notice of rejection, sent to PayScrow.
                          &apos;User&apos; means Buyer(s) and Seller(s),
                          participating in a Transaction. &apos;Site&apos;
                          refers to the website for the Services which can be
                          found at www.PayScrow.net . “Transaction Completion
                          Code” means a number combination generated on the Site
                          or by a plug in which indicates that the transaction
                          was completed normally. Capitalized terms not defined
                          herein shall have the same meaning as set forth in the
                          General Instructions.
                        </div>

                        <div className="mt-3">
                          2. <strong>Description of the Service</strong> - The
                          Services are Internet-based transaction management and
                          escrow services performed through PayScrow, which
                          Services are intended to facilitate the completion of
                          the underlying transaction under the terms of this
                          Agreement, the Site and the applicable Transaction
                          Escrow Instructions.
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
