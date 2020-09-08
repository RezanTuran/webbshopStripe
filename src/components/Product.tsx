import React, { CSSProperties, Component } from 'react';
import { Button, Container } from '@material-ui/core';
import { CartConsumer, ContextState } from '../contexts/cartContxt'
import { Link } from 'react-router-dom'

export  interface Products{
  id: number
  name: string
  description: string
  extraDescription: string
  size:number
  price: number
  img: string
}

export const Products: Products[] = [
  { 
    "id": 0,
    "name":"Adidas - Superstar classic",
    "description": "Unik design",
    "extraDescription": "Superstar Ftwr White/Black/White är tillverkade av en kombination av olika material. Den välkända snäcktån är tillverkad av gummi, något som ger skorna en unik design samtidigt som den skyddar foten mot regn. Större delen av skon är tillverkad av läder, syntet och tyg. Detta gör skorna bekväma att bära samtidigt som de håller formen länge.",
    "size": 41,
    "price": 899,
    "img": "Adidas5.png"
  },
  { 
    "id": 1,
    "name":"Pro Touch - Oz Pro III",
    "description": "Bra löparskor",
    "extraDescription": "Löpar/träningssko anpassad för ett neutralt löpsteg. Skon har en stickad 'knitted' ovandel som ger en fantastiskt flexibilitet, är lätt, sömlös och anpassar sig efter fotens naturliga rörelser. Oz Pro III framfot är mer flexibel än nånsin. Dämpande mellansula",
    "size": 42,
    "price": 589,
    "img": "Protouch.png"
  },
  { 
    "id": 2,
    "name":"Adidas - AlphaBOUNCE ",
    "description": "Running shoes",
    "extraDescription": "Ställ in siktet på seger i de här mångsidiga löparskorna från adidas. Oavsett sport. Skorna är designade för snabbhetsövningar och högintensiva träningspass och erbjuder suverän hållbarhet och stöd i och utanför gymmet. Skornas slitstarka konstruktion och responsiva stötdämpning klarar precis lika hård träning som du.",
    "size": 38,
    "price": 675,
    "img": "Adidas.png"
  },
  { 
    "id": 3,
    "name":"Gant - brown shoes",
    "description": "Bruna skor för hela året",
    "extraDescription": "Brunt är en neutral och stilren färg som kan vara både vintrig och somrig beroende på hur du matchar skorna. Till skillnad från ett par helsvarta skor som kan kännas varma under sommaren, är brunt svalare.",
    "size": 41,
    "price": 499,
    "img": "Gant.png"
  },
  { 
    "id": 4,
    "name":"Nike - Flex trainer 7",
    "description": "Rosa träningsskor",
    "extraDescription": "Kategori: Fitness sko, färg: rosa, yttermatterial: syntetisk, textil",
    "size": 40,
    "price": 359,
    "img": "Nike2.png"
  },
  { 
    "id": 5,
    "name":"Nike - basketball green",
    "description": "Bra kvalite",
    "extraDescription": "",
    "size": 40,
    "price": 359,
    "img": "Nike4.png"
  },
  { 
    "id": 6,
    "name":"Nike - Free RN blue",
    "description": "Ultra lätta",
    "extraDescription": "",
    "size": 40,
    "price": 359,
    "img": "Nike3.png"
  },
  { 
    "id": 7,
    "name":"Adidas - Superstar classic",
    "description": "Unik design",
    "extraDescription": "Superstar Ftwr White/Black/White är tillverkade av en kombination av olika material. Den välkända snäcktån är tillverkad av gummi, något som ger skorna en unik design samtidigt som den skyddar foten mot regn. Större delen av skon är tillverkad av läder, syntet och tyg. Detta gör skorna bekväma att bära samtidigt som de håller formen länge.",
    "size": 42,
    "price": 899,
    "img": "Adidas5.png"
  },
  { 
    "id": 8,
    "name":"Adidas - Superstar classic",
    "description": "Unik design",
    "extraDescription": "Superstar Ftwr White/Black/White är tillverkade av en kombination av olika material. Den välkända snäcktån är tillverkad av gummi, något som ger skorna en unik design samtidigt som den skyddar foten mot regn. Större delen av skon är tillverkad av läder, syntet och tyg. Detta gör skorna bekväma att bära samtidigt som de håller formen länge.",
    "size": 43,
    "price": 899,
    "img": "Adidas5.png"
  },
  { 
    "id": 9,
    "name":"Nike - basketball green",
    "description": "Stabila skor",
    "extraDescription": "",
    "size": 40,
    "price": 359,
    "img": "Nike4.png"
  },
  { 
    "id": 10,
    "name":"Gant - brown shoes",
    "description": "Bruna skor för hela året",
    "extraDescription": "Brunt är en neutral och stilren färg som kan vara både vintrig och somrig beroende på hur du matchar skorna. Till skillnad från ett par helsvarta skor som kan kännas varma under sommaren, är brunt svalare.",
    "size": 42,
    "price": 499,
    "img": "Gant.png"
  },
  { 
    "id": 11,
    "name":"Pro Touch - Oz Pro III",
    "description": "Bra löparskor",
    "extraDescription": "Löpar/träningssko anpassad för ett neutralt löpsteg. Skon har en stickad 'knitted' ovandel som ger en fantastiskt flexibilitet, är lätt, sömlös och anpassar sig efter fotens naturliga rörelser. Oz Pro III framfot är mer flexibel än nånsin. Dämpande mellansula",
    "size": 43,
    "price": 589,
    "img": "Protouch.png"
  },
];

export interface Props{

}
export interface State{

}
 
class Product extends Component<{}, State> {
 

 render() {
  return(
    <Container>
          <div style={productCardContainer}>
             {Products.map((product) =>{
                return(

                  <div key = {product.id}>
                  <div key={product.id} style={productCard}>
                <Link to={"/product/" + product.name}>
                    <img style={imgStyle} src={ require("./../assets/images/" + product.img) } alt="produktImg" />
                </Link>
                      <h3 style={{color: 'red'}}>{ product.name }</h3>
                  <p style={price}>{ product.price } :- </p>
                  <p>{ product.description }</p>
                  <p>stl.{ product.size }</p>
                  <CartConsumer>
                  {(contextData: ContextState) => {
                    //console.log(contextData.cartItems)
                    return (
                      <Button style={button} variant="contained" color="primary" onClick={() => contextData.addProductToCart(product)}>
                        KÖP</Button>
                    )
                  }}
                </CartConsumer>
      </div>
                </div>
                )
              })}
          </div>
          </Container>
    );
    }
  }

let productCard:CSSProperties ={
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  maxWidth: '300px',
  textAlign: 'center',
  fontFamily: 'arial',
  margin: '5px'
  
}

let productCardContainer:CSSProperties  ={
    display: 'flex',
    flexWrap: 'wrap',
}

let imgStyle:CSSProperties ={
    width: '100%',
    height: '200px'
}

let price:CSSProperties ={
  color: 'gray',
  fontSize: '22px'
  
}

let button:CSSProperties ={
  width: '99%',
  borderRadius: '0',
  
  
}


export default Product;
