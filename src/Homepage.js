import React, {useRef} from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Image from 'react-bootstrap/Image';

const Homepage = ({user}) => {
  const homeRef = useRef(null);
  return (
    <div id="home" ref={homeRef}>
      <Container>
        <Row>
          <Col>
            {user && <h3>Hello {user}</h3>}
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

