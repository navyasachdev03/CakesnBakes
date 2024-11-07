import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faInfoCircle, faList, faClipboardList, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <Image src="assets/logo.png" alt="Logo" className="img" />
          <h5 className="h5">Cakes'n'Bakes</h5>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/about">
          <FontAwesomeIcon icon={faInfoCircle} />
          <h6>About</h6>
        </Link>
        <Link to="/catalog">
          <FontAwesomeIcon icon={faList} />
          <h6>Catalog</h6>
        </Link>
        <Link to="/order">
          <FontAwesomeIcon icon={faClipboardList} />
          <h6>Order</h6>
        </Link>
        <Link to="/account">
          <FontAwesomeIcon icon={faUser} />
          <h6>Account</h6>
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;