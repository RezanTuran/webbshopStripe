import React from 'react';
import StripeCheckoutButton from '../Stripe/StipePay'



const CheckOutStripe = (totalPrice) => {
    return(
    
        <div>
            <StripeCheckoutButton totalPrice={totalPrice.value} />
        </div>
    );
};



    

export default CheckOutStripe;