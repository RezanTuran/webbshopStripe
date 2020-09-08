import React from 'react';

export  interface DonePageImg{
    img: string
  }
  

  export const Products = [
    { 
      "img": "gif.gif"
    },
]

const Done = () => {
    return (
        <div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h5>Tack för att du handlas hos oss..</h5>
                <h6>Välkommen åter!</h6>
            </div>
            <img style={{width:'100%'}} src={ require("../../assets/images/" + Products[0].img) } alt="produktImg" />
        </div>
    );
};


export default Done;