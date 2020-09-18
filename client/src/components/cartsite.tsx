import React, { CSSProperties, useEffect } from 'react';
import { Button, Typography, IconButton } from '@material-ui/core';
import { CartConsumer, ContextState } from '../contexts/cartContxt'
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import StipePay from './Stripe/StipePay'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactDOM from 'react-dom';

export default function CartView() {


    let totalPrice = 0;

    let totalPriceEur=0 ;
   // window.addEventListener('load', currencyApi)
  
    useEffect(() => {
        currencyApi();
    }, []);

    
  

    async function currencyApi() {
        const response = await fetch('http://localhost:3001/currency-api', {
            method: "POST",
        });
        const session = await response.json()
       // console.log("SS",session);
        totalPriceEur=totalPrice/session; 
        totalPriceEur= Math.round((totalPriceEur + Number.EPSILON) * 100) / 100;
       ReactDOM.render(<h6>EUR: {totalPriceEur}</h6>, document.getElementById('eur'));
        //console.log("TP",totalPriceEur);
    }
    return (
        
        <CartConsumer>
            {(contextData: ContextState) => {
    
                function cardValidation(){
                    if(totalPrice === 0){
                        alert("Kundvagnen är tomt")
                        window.location.reload();
                    }
                }
                   
                

                return (
                    <div>
                        <Typography variant="h4" style={{textAlign: 'center'}}>Kundkorg</Typography>
                    <div style={productCardContainer}>
                        {
                            contextData.cartItems.length ?
                                contextData.cartItems.map((cartItem, index: number) => {
                                    totalPrice = totalPrice + cartItem.theItem.price * cartItem.quantity;
                                    return (
                                    <div style={productCard}>  
                                        <div key={cartItem.theItem.id}>
                                            <Typography variant="h5"> {cartItem.theItem.name}</Typography>
                                            <img style={imgStyle} src={require("./../assets/images/" + cartItem.theItem.img)} alt="pic" />
                                            <p style={price}> {cartItem.theItem.price} SEK</p>
                                            <div >
                                                <Button variant="contained" style={addItem} onClick={() => contextData.addProductToCart(cartItem.theItem)}> + </Button>
                                                <Button variant="contained" style={deleteItem} onClick={() => contextData.deletefromcart(cartItem.theItem, index)}> - </Button>
                                                <IconButton aria-label="delete" onClick={() => contextData.deleteOneProduct(cartItem.theItem, index)}><DeleteIcon fontSize="large"/></IconButton>
                                                <Typography>Antal: x {cartItem.quantity}</Typography>
                                                <Button aria-label="delete" onClick={() => contextData.clearProductCart(cartItem.theItem, index)}><RemoveShoppingCartIcon fontSize="large"/>Rensa Kundkorgen</Button>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                                )
                                :
                                (
                                <div>                
                                    <Typography variant="h5">Din varukorg är tom</Typography>
                                </div>
                                )

                        }
                    </div>
                    
                
                        <h6>{contextData.cartItems.length ? "Total pris är: " + totalPrice : "Total pris är: 0"} kr</h6>

                        <div id="eur"></div>

                            <Link onClick={cardValidation} to="">
                                <StipePay />
                            </Link>
                        <br/>

                        <Link to="/Product">
                            <Button 
                                variant="contained" 
                                color="primary"  
                                startIcon={<ArrowBackIcon />}>Tillbaka
                            </Button>
                        </Link>
                    </div>
                )
            }}
            
        </CartConsumer>
        
    )
};

let productCard:CSSProperties ={
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '20px',
    textAlign: 'center',
    fontFamily: 'arial',
}
let imgStyle:CSSProperties ={
    width: '100%',
    height: '200px'
}
let productCardContainer:CSSProperties  ={
    display: 'flex',
    flexWrap: 'wrap',
}
let price:CSSProperties ={
    color: 'gray',
    fontSize: '22px'
  }

let addItem:CSSProperties ={
    backgroundColor: 'green',
    color: 'white'
}

let deleteItem:CSSProperties ={
    backgroundColor: 'red',
    color: 'white'
}

