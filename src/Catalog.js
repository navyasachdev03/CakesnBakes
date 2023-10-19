import React from 'react';
import './Catalog.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Catalog() {
    return (
      <div id="catalog" className="catalog">
        <h2>Our Catalog</h2>
        <Container className="ex">
          <Row>
            <Col md={3} className="catalog-cell">
              <Image src="ca1.jpg" className="catalog-image" />
              <div className="text-overlay">$150</div>
              <p>Customised Cakes</p>
            </Col>
            <Col md={3} className="catalog-cell">
                <Image src="ca2.jpg" className="catalog-image" />
                <div className="text-overlay">$60</div>
                <p>Pastries</p>
            </Col>
            <Col md={3} className="catalog-cell">
              <Image src="ca3.jpg" className="catalog-image" />
              <div className="text-overlay">$10</div>
              <p>Cookies</p>
            </Col>
            <Col md={3} className="catalog-cell">
                <Image src="ca4.jpg" className="catalog-image" />
                <div className="text-overlay">$25</div>
                <p>Cupcakes</p>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="catalog-cell">
              <Image src="ca5.jpg" className="catalog-image" />
              <div className="text-overlay">$20</div>
              <p>Tarts</p>
            </Col>
            <Col md={3} className="catalog-cell">
                <Image src="ca6.jpg" className="catalog-image" />
                <div className="text-overlay">$40</div>
                <p>Macarons</p>
            </Col>
            <Col md={3} className="catalog-cell">
              <Image src="ca7.jpg" className="catalog-image" />
              <div className="text-overlay">$10</div>
              <p>Breads</p>
            </Col>
            <Col md={3} className="catalog-cell">
                <Image src="ca8.jpg" className="catalog-image" />
                <div className="text-overlay">$10</div>
                <p>Croissants</p>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
  
  export default Catalog;