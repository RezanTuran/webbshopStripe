import React from 'react';
import ReactDOM from 'react-dom';


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
ReactDOM.render(<Api />, document.getElementById('root'));

export default Api;
