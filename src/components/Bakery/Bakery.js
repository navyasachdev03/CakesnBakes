import React from 'react';
import './Bakery.css';

const Bakery = ({ name, location, rating, image, desc, map }) => {
  const bakeryImage = `assets/${image}`;
  const bakeryMap = `https://www.google.com/maps/embed?${map}`;

  return (
    <div className="bakery-container">
      <img src={bakeryImage} alt={name} className="bakery-image" />
      <div className="abc">
        <h4 className="bakery-name">{name}</h4>
        <div>
          <img src="assets/star.jpg" className="star" alt="rating" />
          <span className="bakery-rate">{rating}</span>
        </div>
        <p className="bakery-desc">{desc}</p>
        <p className="bakery-location">{location}</p>
        <iframe
          src={bakeryMap}
          title={`${name} map`}
          className="bakery-map"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Bakery;