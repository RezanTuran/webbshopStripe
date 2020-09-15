import React from 'react';

async function getShoes() {
    const result = await fetch('http://localhost:3001/api/shoes')
    const shoes = await result.json()
    console.log(shoes);
}
getShoes()
const Api = () => {
    return(
        <div>
          
    
        </div>
    );
};

export default Api;
