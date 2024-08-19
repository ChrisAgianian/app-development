import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [previousQuantities, setPreviousQuantities] = useState({
    addToCart1: 0,
    addToCart2: 0,
    addToCart3: 0,
    addToCart4: 0,
    addToCart5: 0,
    addToCart6: 0
  });

  const updateTotal = (productId, price, quantity) => {
    setTotal((prevTotal) => {
      const newTotal = prevTotal - previousQuantities[productId] * price + price * quantity;
      setPreviousQuantities((prev) => ({ ...prev, [productId]: quantity }));
      return newTotal;
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Services" element={<Services/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;