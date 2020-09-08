import React from 'react';


async function getShoes() {
    const result = await fetch('http://localhost:3001/api/cars')
    const cars = await result.json()
    console.log(cars);
}
getShoes()
const Api = () => {
    return(
        <div>
          
        </div>
    );
};


export default Api;