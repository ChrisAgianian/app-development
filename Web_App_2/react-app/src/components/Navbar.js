import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navcontainer'>
        <div className='navtitle'>
            <h1 className='title'>Computer Services by Chris Agianian</h1>
        </div>

        <nav className='navbar'>
            <div className='btngroup'>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/Services">Our Services</Link></button>
            <button><Link to="/Products">Our Products</Link></button>
            <button><Link to="/Contact">Contact Us</Link></button>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;