import React from 'react';
import { PaystackButton } from 'react-paystack'

const PayButton = ({ amount, email }: any) => {
    const publicKey = process.env.TEST_SECRET_KEY;
    const [reference, setReference] = React.useState('');

    const handlePaystackSuccessAction = (reference: any) => {
        // handle payment success
    }

    const componentProps = {
        email,
        amount,
        publicKey,
        text: 'Pay Now',
        onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
        onClose: () => alert('Payment canceled by user.'),
    };

    return <PaystackButton {...componentProps} />;
};

export default PayButton;