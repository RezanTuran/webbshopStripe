import React, { CSSProperties } from 'react';
import { Button, Typography, IconButton } from '@material-ui/core';
import { CartConsumer, ContextState } from '../contexts/cartContxt'
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

export default function cartView() {
    return (
        <CartConsumer>
            {(contextData: ContextState) => {
                let totalPrice = 0;

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
                        <Link to="/Checkout">
                            <Button variant="contained" color="primary" onClick={cardValidation}>Till Betalning</Button>
                        </Link>
                        <br/>

                        <Link to="/Product">
                            <Button variant="contained" color="primary">Tillbaka</Button>
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

