import React, { useState } from 'react';
import './Order.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Order() {
  const [Data, setData] = useState({
    name: '',
    email: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({...Data, [name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thankyou for successfully placing an order!');
  };

  return (
    <div id="order" className="order">
      <Container>
        <h2>Make an Order</h2><br/>
        <Row>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Row>
              <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your Name..."
                  value={Data.name}
                  onChange={handleChange}
                />
              </Form.Group>
              </Col>
              <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your Email..."
                  value={Data.email}
                  onChange={handleChange}
                />
              </Form.Group>
              </Col>
              </Row><br/>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Enter your Address..."
                  value={Data.address}
                  onChange={handleChange}
                />
              </Form.Group><br/>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  placeholder="Your Customised Order..."
                  value={Data.message}
                  onChange={handleChange}
                />
              </Form.Group><br/>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
          <Image src="o1.png" className="oimg"/>
        </Row><br/>
        <Row>
          <Col>
          <h2>Visit Us</h2>
          <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112131.26437818067!2d77.09423579726564!3d28.566699299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d9a7f9b20b%3A0xa7319c21104a302c!2sNikon%20Experience%20Zone!5e0!3m2!1sen!2sin!4v1691576485817!5m2!1sen!2sin`}
              width="100%"
              height="400"
              style={{border: 0}}
              allowfullscreen
          ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Order;
