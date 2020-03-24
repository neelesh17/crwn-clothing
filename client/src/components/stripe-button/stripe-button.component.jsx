import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pulishableKey = 'pk_test_j2reW8TXrEMYxEgMx3O4trxG00Xx6JkWsC';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue with your payment. Please make sure you use the provided credit card');
        });
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={ onToken }  
            stripeKey= { pulishableKey }
        />
    )
}

export default StripeCheckoutButton;