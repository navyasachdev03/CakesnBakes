import React, { useState } from 'react';
import './Order.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Order() {
  const [Data, setData] = useState({
    name: '',
    contact: '',
    address: '',
    bakery: '',
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

  const bakeryOptions = ['Nik Bakers', 'Bakers Lounge', 'OvenFresh', 'Bakers Oven', 'Cheesecake and co.', 'Winni Cakes', 'Bakingo', 'Belgian Waffle', 'The Crown Patisserie', 'Super Donuts'];

  return (
    <div id="order" className="order">
      <Container>
        <h2>Make an Order</h2><br/>
        <Row>
          <Col>
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
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  name="contact"
                  placeholder="Enter your Contact No..."
                  value={Data.contact}
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
                <Form.Label>Name of Bakery</Form.Label>
                <Form.Control
                  as="select"
                  name="bakery"
                  value={Data.bakery}
                  onChange={handleChange}
                >
                <option value="">-- Select a Bakery --</option>
                  {bakeryOptions.map((bakery, index) => (
                    <option key={index} value={bakery}>
                      {bakery}
                    </option>
                  ))}</Form.Control>
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
          <Image src="assets/o1.png" className="oimg"/>
        </Row>
      </Container>
    </div>
  );
}

export default Order;
