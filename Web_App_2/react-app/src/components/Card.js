import React from 'react';
import { Link } from 'react-router-dom';


function Card({ title, description, imageUrl, link, onClick}) {

  return (
    <div className="card" onClick={onClick}>
    <Link to={link}>
      <img src={imageUrl} alt=""/>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
    </div>
  );
}

export default Card;