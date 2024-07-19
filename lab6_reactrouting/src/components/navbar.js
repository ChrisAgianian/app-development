import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = function(){
    return(
        <>
            <nav className='navbar'>
                <div>
                    <Link>QCC</Link> {/*instead of <a><a/> we use Link now */}
                </div>
                <div className='btngroup'>
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/about">About Us</Link></button>
                    <button><Link to="/contact">Contact Us</Link></button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;