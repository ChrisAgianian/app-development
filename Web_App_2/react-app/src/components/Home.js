import React from 'react';
import Card from './Card';
import pcservices from '../images/homeicons/pcservices.png';
import pcproducts from '../images/homeicons/pcproducts.png';
import contactus from '../images/homeicons/contactus.png';

function Home() {
  return (
    <div className="home">
      <h2 className='hometitle'>Welcome to Chris' Amazing Computer Services</h2>
      <p className='homepar'>We pride ourselves in providing the best customer service possible. Our expert team of technicians
      will analyze your needs and problems and tailor a solution that fits every customers' specifications. 
      We also have a dedicated page where we sell our own products at a reduced market price. Check it out today!</p>
      <div className="home-card-container">
        <Card 
          title="PC Services" 
          imageUrl= {pcservices}
          link = "/Services"
        />
        <Card 
          title="Popular Products" 
          imageUrl= {pcproducts}
          link = "/Products"
        />
        <Card 
          title="Contact Us" 
          imageUrl= {contactus}
          link = "/Contact"
        />
      </div>
    </div>
  );
}

export default Home;