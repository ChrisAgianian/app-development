import React from 'react';
import Card from './Card';
import accessories from '../images/productsicons/accessories.png';
import gamingpcs from '../images/productsicons/gamingpcs.png';
import laptops from '../images/productsicons/laptops.png';
import printers from '../images/productsicons/printers.png';
import routers from '../images/productsicons/routers.png';
import smartphones from '../images/productsicons/smartphones.png';
import Modal from './Modal';
import { useState } from "react";

function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (title, imgUrl, price, productId) => {
    setModalContent({ title, imgUrl, price, productId });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const updateTotal = (productId, price, quantity) => {
    
  };
  return (
    <div className="products">
      <h2 className='productstitle'>Products</h2>
      <p className='productspar'>Explore our Products. Get 40% Off on orders of 100$ or more - use coupon code 40OFFMYPC</p>
      <div className="products-card-container">
        <Card 
          title="Gaming PCs" 
          imageUrl= {gamingpcs}
          onClick={() => openModal("Gaming PCs", gamingpcs, "100", "addToCart1")}
        />
        <Card 
          title="PC Accessories" 
          imageUrl= {accessories}
          onClick={() => openModal("PC Accessories", accessories, "100", "addToCart1")}
        />
        <Card 
          title="Laptops" 
          imageUrl= {laptops}
          onClick={() => openModal("Laptops" , laptops, "100", "addToCart1")}
        />
        <Card 
          title="Routers & Modems" 
          imageUrl={routers}
          onClick={() => openModal("Routers & Modems", routers, "100", "addToCart1")}
        />
        <Card 
          title="Printers" 
          imageUrl={printers}
          onClick={() => openModal("Printers", printers, "100", "addToCart1")}
        />
        <Card 
          title="Mobile Phones" 
          imageUrl={smartphones}
          onClick={() => openModal("Mobile Phones" , smartphones, "100", "addToCart1")}
        />
      </div>
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          closeModal={closeModal}
          title={modalContent.title}
          imgUrl={modalContent.imgUrl}
          price={modalContent.price}
          productId={modalContent.productId}
          updateTotal={updateTotal}
        />
      )}
    </div>
  );
}

export default Products;