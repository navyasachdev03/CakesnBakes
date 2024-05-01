import React from 'react';
import './Catalog.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Image from 'react-bootstrap/Image';

function Catalog({addToCart}) {

  const products = [
    { id: 1, name: 'Customised Cakes', price: '$150', image: 'ca1.jpg' },
    { id: 2, name: 'Pastries', price: '$60', image: 'ca2.jpg' },
    { id: 3, name: 'Cookies', price: '$10', image: 'ca3.jpg' },
    { id: 4, name: 'Cupcakes', price: '$25', image: 'ca4.jpg' },
    { id: 5, name: 'Tarts', price: '$20', image: 'ca5.jpg' },
    { id: 6, name: 'Macarons', price: '$40', image: 'ca6.jpg' },
    { id: 7, name: 'Breads', price: '$10', image: 'ca7.jpg' },
    { id: 8, name: 'Croissants', price: '$10', image: 'ca8.jpg' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
    });
  };

    return (
      <div id="catalog" className="catalog">
        <h2>Catalog</h2>
        <p>Search by Product</p>
        <Container className="ex">
        <Row className='r'>
            {products.map((product) => (
            <Col key={product.id} md={1} className="catalog-cell">
              <Image src={product.image} className="catalog-image" />
              <div className="text-overlay">
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
              <p>
                {product.name}
                <br />
                {product.price}
              </p>
            </Col>
          ))}
        </Row>
        </Container>
      </div>
    );
  }
  
  export default Catalog;
