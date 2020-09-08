import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './contexts/cartContxt'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div style={{backgroundColor:'white'}}>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>

  );
};


export default App;
