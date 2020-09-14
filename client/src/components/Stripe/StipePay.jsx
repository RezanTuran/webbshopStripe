import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"


const StripeCheckoutButton = ({ totalPrice }) => {
    let [responseData, setResponseData] = React.useState('')
    const priceForStripe = totalPrice * 100;
    const publishableKey =
    'pk_test_51HMTp2IFKCcAoJyN5fiHwp6EwNIPvRPfRoOW2w9Ky80xmaGkN6NindMP06szreaUexh4PZECFaotYIw35lD9mPU900NKCXkZBP';
    
    
    const onToken = (token) => {
    axios({
    url: "payment",
    method: "post",
    data: {
    amount: priceForStripe,
    token: token,
    
    },
    
    })
    
    .then((response) => {
    alert("succesful payment");
    console.log("response", response);
    setResponseData(response.data)
    console.log(responseData)
    
    
    })
    .catch((error) => {
    console.log("Payment Error: ", error);
    alert(
    "There was an issue with your payment! Please make sure you use the provided credit card."
    );
    });
    };
    
    return (
    <StripeCheckout
    label="Pay by Stripe"
    name="Skor"
    billingAddress
    shippingAddress
    description={`Your total is $${totalPrice}`}
    amount={priceForStripe}
    panelLabel="Pay by Stripe"
    token={onToken}
    stripeKey={publishableKey}
    />
    
    
    
    );
   };
    
   export default StripeCheckoutButton;