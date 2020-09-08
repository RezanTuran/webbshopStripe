import React, { CSSProperties } from 'react';


const Contact = () => {
    return(
        <>
        <div>
            <h3 style={{textAlign: 'center'}}>Kontakt</h3>
        </div>
        <div style={contactPage}>
            <p><span style={fettText}>Tel:</span> 07388911XXX</p>
            <p><span style={fettText}>E-post:</span> rezanturan@gmail.com</p>
            <p><span style={fettText}>Adress:</span> Uppegårsvägen 62 Stenungsund 44238</p>
        </div>
        </>
    );
};

const contactPage: CSSProperties = {
    height: '100vh',
    fontSize: '20px',
    fontWeight: 'bold',
}
const fettText: CSSProperties = {
   fontWeight: 'bold',
   color: 'red'
}
    

export default Contact;