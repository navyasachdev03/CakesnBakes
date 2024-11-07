import React from 'react';
import './Catalog.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Image from 'react-bootstrap/Image';
import products from '../../data/products';

function Catalog({addToCart}) {

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
              <Image src={`assets/${product.image}`} className="catalog-image" />
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
