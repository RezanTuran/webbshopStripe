// import React from 'react';
// import StripeCheckout from "react-stripe-checkout";
// import axios from 'axios';
// //import { CartConsumer, ContextState } from '../../contexts/cartContxt';


// const StripeCheckoutButton = ({ totalPrice }) => {
//    // console.log("SBYN",totalPrice)
//     let [responseData, setResponseData] = React.useState('')
//     const priceForStripe = totalPrice * 100;
//     const publishableKey = 'pk_test_51HMTp2IFKCcAoJyN5fiHwp6EwNIPvRPfRoOW2w9Ky80xmaGkN6NindMP06szreaUexh4PZECFaotYIw35lD9mPU900NKCXkZBP';
    
//     const onToken = (token) => {
//         axios({
//             url: "payment",
//             method: "post",
//             data: {
//             amount: priceForStripe,
//             token: token,
//         },
//     })
    
//     .then((response) => {
//         alert("succesful payment");
//         console.log("response", response);
//         setResponseData(response.data)
//         console.log(responseData)
//     })

//     .catch((error) => {
//         console.log("Payment Error: ", error);
//         alert("There was an issue with your payment! Please make sure you use the provided credit card.");
//     });
//     };
    
// return (
    
//     <StripeCheckout
//     label="Pay by Stripe"
//     name="Skor"
//     billingAddress
//     shippingAddress
//     description={`Your total is $${totalPrice}`}
//     amount={priceForStripe}
//     panelLabel="Pay by Stripe"
//     token={onToken}
//     stripeKey={publishableKey}
//     totalPrice={totalPrice}
//     />
    

   
//     );
//    };
    
//    export default StripeCheckoutButton;

import React, {useContext} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartContext} from '../../contexts/cartContxt';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HMTp2IFKCcAoJyN5fiHwp6EwNIPvRPfRoOW2w9Ky80xmaGkN6NindMP06szreaUexh4PZECFaotYIw35lD9mPU900NKCXkZBP');


function StipePay() {
  const { cartItems } = useContext(CartContext);
 // console.log("ST",cartItems[0]);

 const  line_items= cartItems.map( item =>{
  const container = {};

  container['name'] = item.theItem.name;
  container['quantity'] = item.quantity;
  container['amount']= item.theItem.price*100;
  container['currency']= "sek";

  return container;

 })
 

const handleClick = async (event) => {


   // console.log("LI",line_items[0]);
    // Get Stripe.js instance
    const stripe = await stripePromise;
   //console.log(JSON.stringify(line_items));
    // Call your backend to create the Checkout Session
    const response = await fetch('/create-checkout-session', { method: 'POST' , body: JSON.stringify(line_items),
  headers: { 'Accept': 'application/json','Content-Type': 'application/json'}});

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}

export default StipePay;