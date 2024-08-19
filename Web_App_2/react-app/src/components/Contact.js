import React from 'react';
import Card from './Card';
import contact from '../images/contacticons/contact.png';
import social from '../images/contacticons/social.png';
import careers from '../images/contacticons/careers.png';

function Contact() {
  return (
    <div className="contact">
      <h2 className='contacttitle'>Contact</h2>
      <p className='contactpar'>Contact us or follow us on social media! Interested in working for us? 
      Explore our careers page today!</p>
      <div className="contact-card-container">
        <Card 
          title="Contact us via Phone or Email" 
          imageUrl={contact}
        />
        <Card 
          title="Follow us on Social Media" 
          imageUrl={social}
        />
        <Card 
          title="Explore our Open Positions" 
          imageUrl={careers}
        />
      </div>
    </div>
  );
}

export default Contact;