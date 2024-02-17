"use client"

import React, { useState } from 'react';
import BuyersLayout from '@/components/ui/layouts/buyerdashboardlayout';




const BuyerPayment = () => {
    const publicKey = process.env.TEST_PUBLIC_KEY;
    const amount = 30000;
    const email = 'hackman@jonhdoe.com';
    console.log("Public Key:", publicKey);

    return (
        <>
            <BuyersLayout>
                <h1>Simple Pay Page</h1>

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
// );
// };