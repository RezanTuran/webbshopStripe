import React from 'react';
import StripeCheckoutButton from '../Stripe/StipePay'



const CheckOutStripe = (totalPrice) => {
    //console.log("BYN",totalPrice.value);
    return(
    
        <div>
            <StripeCheckoutButton totalPrice={totalPrice.value} />
        </div>
    );
};



    

export default CheckOutStripe;