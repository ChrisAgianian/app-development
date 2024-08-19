import React from "react";
import { Link } from 'react-router-dom';
 
const Footer = () => {

    return(
      <div className="footer">
      <footer>
        <h3 className="footertitle">Computer Services by Chris Agianian</h3>
        <div className="footerbtngroup">
        {/* <button><Link to="/" style={{border: 'none', textDecoration: 'none', color:'white'}}>Home</Link></button>
        <button><Link to="/Services" style={{border: 'none', textDecoration: 'none'}}>Our Services</Link></button>
        <button><Link to="/Products" style={{border: 'none', textDecoration: 'none'}}>Our Products</Link></button>
        <button><Link to="/Conatct" style={{border: 'none', textDecoration: 'none'}}>Contact Us</Link></button> */}
        <Link to="/" style={{border: 'none', textDecoration: 'none', color:'white'}}>Home</Link>
        <Link to="/Services" style={{border: 'none', textDecoration: 'none', color:'white'}}>Our Services</Link>
        <Link to="/Products" style={{border: 'none', textDecoration: 'none', color:'white'}}>Our Products</Link>
        <Link to="/Conatct" style={{border: 'none', textDecoration: 'none', color:'white'}}>Contact Us</Link>
        </div>
        <p>© 2024 Made by Chris AG</p>
      </footer>  
      </div>
    );
}

export default Footer;