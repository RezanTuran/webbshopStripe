import React, {CSSProperties} from 'react';
import {Products} from './Product';
import { RouteProps } from 'react-router-dom';
import { Typography, Container, Button } from '@material-ui/core';
import { CartConsumer, ContextState } from '../contexts/cartContxt';


export interface State {
    location: any
    pathname: any
}
interface Props {
    location: any
    pathname: any
}
export class ProductView extends React.Component<Props & RouteProps, State> {

        render() {
            console.log(this.props.location)
            let test = this
            
            let newString = test.props.location.pathname.replace("/product/", "");
            
            let productToDisplay = Products.filter(function (product) {
            return product.name === newString;
        }); 
        return(
            <Container>
                <div style={productPageCard}>
                            <Typography variant="h4" >{productToDisplay[0].name} </Typography><br/>
                            <img style={imgStyle} src={ require("./../assets/images/" + productToDisplay[0].img) } alt="produktImg" />
                            <br/>
                            <Typography variant="h5">Pris: {productToDisplay[0].price} :-</Typography>
                            <Typography variant="h6">stl: {productToDisplay[0].size}</Typography>
                            <Typography style={textPosition} variant="h6">{productToDisplay[0].description}</Typography>
                            <Typography style={textPosition}>{productToDisplay[0].extraDescription}</Typography>
                <CartConsumer>
                  {(contextData: ContextState) => {
                    //console.log(contextData.cartItems)
                    return (
                      <Button variant="contained" color="primary" onClick={() => contextData.addProductToCart(productToDisplay[0])}>
                        KÖP</Button>
                    )
                  }}
                </CartConsumer>
                </div>
            </Container>
        )
            }
           }


           let productPageCard:CSSProperties ={
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            maxWidth: 'px',
            textAlign: 'center',
            fontFamily: 'arial',
            margin: '5px',
            padding: '10px'
            
          }

          let imgStyle:CSSProperties ={
            width: '50%',
          
        }

        let textPosition:CSSProperties = {
            textAlign: 'left'
        }