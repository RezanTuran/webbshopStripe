import { Button, Link } from '@material-ui/core';
import React, { CSSProperties } from 'react';

export  interface Products{
    img: string
  }
  

  export const Products: Products[] = [
    { 
      "img": "paymentError.png"
    },
  ]

const Error = () => {

    function toHomPage() {
        window.location.href = './product'
    }

    return(
        <div style={errorPage}>
            <h1 style={{ fontSize: "20px"}}>Betalningen Misslyckades! </h1>
            <Link onClick={toHomPage}>
                <Button 
                    variant="contained" 
                    color="primary"
                    >
                        Klick här för att komma till startsidan
                </Button>
            </Link>
            <img style={errorImage} src={ require("../../assets/" + Products[0].img) } alt="produktImg" />
        </div>
    );
};

const errorPage : CSSProperties = {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    height: '100vh', 
    //backgroundImage: "url(" + "/client/src/assets/paymentError.png" + ")",
}
const errorImage : CSSProperties = {
    width: '300px',
    height: '250px',
    marginTop: '3em'
}


export default Error;