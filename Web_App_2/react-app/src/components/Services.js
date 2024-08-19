import React from 'react';
import Card from './Card';
import { useState } from "react";
import distributed from '../images/servicesicons/distributed.png';
import gamingpc from '../images/servicesicons/gamingpc.png';
import hardware from '../images/servicesicons/hardware.png';
import network from '../images/servicesicons/network.png';
import server from '../images/servicesicons/server.png';
import update from '../images/servicesicons/update.png';
import Modal from './Modal';


function Services() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (title, imgUrl, price, productId) => {
    setModalContent({ title, imgUrl, price, productId });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateTotal = (productId, price, quantity) => {
    
  };
  return (
    <div className="services">
      <h2 className='servicetitle'>Services</h2>
      <p className='servicepar'>Schedule your call today and speak with one of our representatives. We will try to address any issues you are facing!</p>
      <div className="services-card-container">
        <Card 
          title="Hardware Solutions" 
          imageUrl={hardware}
          onClick={() => openModal("Hardware Solutions", hardware, "100", "addToCart1")}
        />
        <Card 
          title="Networking Solutions" 
          imageUrl={network}
          onClick={() => openModal("Networking Solutions" , network, "200", "addToCart2")}
        />
        <Card 
          title="Gaming PC Building" 
          imageUrl={gamingpc}
          onClick={() => openModal("Gaming PC Building", gamingpc, "300", "addToCart3")}
        />
        <Card 
          title="Server Building" 
          imageUrl={server}
          onClick={() => openModal("Server Building" , server, "400", "addToCart4")}
        />
        <Card 
          title="Software Updates" 
          imageUrl={update}
          onClick={() => openModal("Software Updates", update, "500", "addToCart5")}
        />
        <Card 
          title="Distributed Systems" 
          imageUrl={distributed}
          onClick={() => openModal("Distributed Systems", distributed, "600", "addToCart6")}
        />
      </div>
      {modalContent && 
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          title={modalContent.title}
          imgUrl={modalContent.imgUrl}
          price={modalContent.price}
          productId={modalContent.productId}
          updateTotal={updateTotal}
        />
      }
    </div>
  );
}

export default Services;