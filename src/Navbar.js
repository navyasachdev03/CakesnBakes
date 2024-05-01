import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Image src="logo.png" alt="Logo" className="img"/>
        <h5 className="h5">Cakes'n'Bakes</h5> 
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/order">Order</Link>
        <Link to="/account">Account</Link>
        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
      </div>
    </div>

  );
}

export default Navbar;
