import React from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './Catalog.css';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, removeFromCart }) {

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
    toast.error(`${item.name} removed from cart`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
    });
  };

  const navigate = useNavigate();
  function moveToCatalog() {
    navigate('/catalog');
  }


  if (cartItems.length === 0) {
    return (
      <div id="cart">
        <h2>Cart</h2>
        <p className='x'>Your cart is Empty!</p>
        <button onClick={() => moveToCatalog()} className='m'>Order Now</button>
      </div>
    );
  }

  return (
    <div id="cart">
      <h2>Cart</h2>
      <Container className="ex">
        <Row>
          {cartItems.map((item) => (
            <Col key={item.id} md={2} className="catalog-cell">
              <Image src={item.image} className="catalog-image" />
              <div className="text-overlay">
                <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
              </div>
              <p>
                {item.name}
                <br />
                {item.price}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cart;