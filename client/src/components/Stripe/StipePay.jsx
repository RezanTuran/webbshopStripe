
import React, {useContext} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartContext} from '../../contexts/cartContxt';
import { Button } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HMTp2IFKCcAoJyN5fiHwp6EwNIPvRPfRoOW2w9Ky80xmaGkN6NindMP06szreaUexh4PZECFaotYIw35lD9mPU900NKCXkZBP');


function StipePay() {
  const { cartItems } = useContext(CartContext);

 const  line_items= cartItems.map( item =>{
  const container = {};

  container['name'] = item.theItem.name;
  container['quantity'] = item.quantity;
  container['amount']= item.theItem.price*100;
  container['currency']= "sek";

  return container;

 })
 

const handleClick = async (event) => {

    const stripe = await stripePromise;
    const response = await fetch('/create-checkout-session', { method: 'POST' , body: JSON.stringify(line_items),
  headers: { 'Accept': 'application/json','Content-Type': 'application/json'}});

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      
    }
  };

  return (
    <Button 
        role="link"
        onClick={handleClick} 
        variant="contained"
        color="primary"
        startIcon={<PaymentIcon />}>Betala med kort
    </Button>
  );
}

export default StipePay;