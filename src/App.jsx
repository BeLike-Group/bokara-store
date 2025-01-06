import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected imports
import Navbar from '././componnet/Navbar/Navbar'
import Login from './componnet/Login/Login';
import Dashboard from './componnet/Dashboard/Dashboard';
import HeroSection from './componnet/HeroSection/HeroSection';
import Main from './componnet/HeroSection/Main';
import Products from './componnet/HeroSection/Products';
import Footer from './componnet/Footer/Footer';
import ProductDetail from './componnet/HeroSection/ProductDetail';
import CartPage from './componnet/HeroSection/CartPage';
import { CartProvider } from './CartContext';
import Contact from './componnet/HeroSection/Contact/Contact';
import About from './componnet/About/About';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserLogin from './componnet/UserLogin/UserLogin';
import AdminLogin from './componnet/AdminLogin/AdminLogin';
import ADashboard from './componnet/AdminDashboard/ADashboard';

const App = () => {
  return (
    <CartProvider>
    <Router> {/* Use BrowserRouter as Router */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/user-account" element={<UserLogin/>} />
        <Route path="/admin-account" element={<AdminLogin/>} />
        <Route path="/create-account" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/Adashboard" element={<ADashboard/>} />

        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/aboutus" element={<About/>} />
        
        
      </Routes>
    </Router>
    </CartProvider>
  );
};


export default App;

