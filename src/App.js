import React, {useState, useRef} from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Catalog from './pages/Catalog/Catalog';
import Order from './pages/Order/Order';
import Footer from './components/Footer/Footer';
import Account from './pages/Account/Account';
import Cart from './pages/Cart/Cart';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const homeRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = (username) => {
    setUser(username);
    // if (homeRef.current) {
    //   homeRef.current.scrollIntoView({ behavior: 'smooth' });
    // }
    navigate('/');
  };

  const handleLogout = () => {
    setUser(null);
    // if (homeRef.current) {
    //   homeRef.current.scrollIntoView({ behavior: 'smooth' });
    // }
    navigate('/');
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/account" element={<Account onLogin={handleLogin} onLogout={handleLogout} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/catalog" element={<Catalog addToCart={addToCart}/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>} />
          <Route exact path="/" element={<div ref={homeRef}>{user ? <Homepage user={user} /> : <Homepage />}</div>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
