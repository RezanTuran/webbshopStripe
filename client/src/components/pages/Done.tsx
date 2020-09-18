import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error'

export  interface DonePageImg{
    img: string
  }
  

  export const Products = [
    { 
      "img": "gif.gif"
    },
]

const Done = () => {

    window.addEventListener('load', main)

    function main() {
        verifyCheckOutSession()
    }

    async function verifyCheckOutSession() {
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get('session_id');
    
        if(sessionId){
          console.log(sessionId);
            const response = await fetch('http://localhost:3001/verify-checkout-session', {
                headers: {"Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify( {sessionId} )
            });
            const session = await response.json()
            console.log(session.isVerfied);
            
            if(session.isVerfied){
                alert("Tack för din betalning!")
            }else{
                const App = () => <Error />;
                const rootElement = document.getElementById("root");
                ReactDOM.render(<App />, rootElement);
            }
    }
}
     
    return (
        <div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h5>Tack för din beställning!</h5>
                <h6>Välkommen åter!</h6>
            </div>
            <img style={{width:'100%'}} src={ require("../../assets/images/" + Products[0].img) } alt="produktImg" />
        </div>
    );
};

export default Done;
