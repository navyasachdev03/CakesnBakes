import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from 'react-bootstrap/Image';

function Homepage() {
  return (
    <div id="home">
      <Container>
        <Row>
          <Col>
            <h1>Welcome to Cakes'n'Bakes</h1>
            <p>A home of fresh baking</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="c1.avif" 
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="c2.avif"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="c3.jpeg" 
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
