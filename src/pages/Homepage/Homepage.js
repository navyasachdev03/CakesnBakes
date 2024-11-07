import React, {useState, useRef} from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Bakery from '../../components/Bakery/Bakery';
import Image from 'react-bootstrap/Image';
import bakeries from '../../data/bakeries';


const Homepage = ({user}) => {
  const homeRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const handleSearch = (query) => {
    const results = bakeries.filter(bakery =>
      bakery.desc.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setShowAll(false);
  };

  const handleClear = () => {
    setSearchResults([]);
    setShowAll(true);
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

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
                  src="assets/c1.avif" 
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="assets/c2.avif"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="assets/c3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <div>
          <div className='bakery-list'>
            {searchResults.map((bakery) => (
              <Bakery 
                key={bakery.id}
                name={bakery.name}
                image={bakery.image}
                rating={bakery.rating}
                desc={bakery.desc}
                location={bakery.location}
                map={bakery.map}
              />
            ))}
          </div>
          <button className="clear-btn" onClick={handleClear}>Clear Search</button>
        </div>
      ) : showAll ? (
        <p></p>
      ) : (
        <p></p>
      )}

    </div>
  );
}

export default Homepage;
