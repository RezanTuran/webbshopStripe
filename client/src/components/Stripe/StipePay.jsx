import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"

const StripeCheckoutButton = ({ totalPrice }) => {
    
    let [responseData, setResponseData] = React.useState('')
    const priceForStripe = totalPrice * 100;
    const publishableKey ='pk_test_51HMTp2IFKCcAoJyN5fiHwp6EwNIPvRPfRoOW2w9Ky80xmaGkN6NindMP06szreaUexh4PZECFaotYIw35lD9mPU900NKCXkZBP';
    
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
    alert("Betalningen genomfört");
    console.log("response", response);
    setResponseData(response.data)
    console.log(responseData)
    
    })
    .catch((error) => {
    console.log("Payment Error: ", error);
    alert(
    "Betalningen misslyckades vänligen försök igen...!"
    );
    });
    };
    
    return (
    <StripeCheckout
    label="Betala med kort"
    name="Skor Butik"
    billingAddress
    shippingAddress
    image='https://w0.pngwave.com/png/99/998/computer-icons-user-profile-50-png-clip-art.png'
    description={`Total pris: ${totalPrice} KR`}
    amount={priceForStripe}
    panelLabel="Betala"
    token={onToken}
    stripeKey={publishableKey}
    />
    
    );
   };
    
   export default StripeCheckoutButton;
