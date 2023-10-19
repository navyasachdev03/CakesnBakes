import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Navbar from './Navbar';
import About from './About';
import Catalog from './Catalog';
import Order from './Order';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Homepage />
        <About />
        <Catalog />
        <Order />
      </div>
      <Footer />
    </div>
  );
}

export default App;
