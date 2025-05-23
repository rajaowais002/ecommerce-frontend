import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import UsedPhones from './pages/UsedPhones';
import NewArrival from './pages/NewArrivals';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import SearchResults from './components/SearchResults';
import { CartProvider } from './components/CartContext';
import ChatWidget from './components/ChatWidget';
import { ToastContainer } from 'react-toastify';
import { newArrivals } from './Data/new';
import { products } from './Data/products';
import { usedPhones } from './Data/used_phones';
import Signin from './pages/Signin';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <ChatWidget />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home newArrivals={newArrivals} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/new" element={<New products={products} />} />
            <Route path="/used-phones" element={<UsedPhones usedPhones= {usedPhones}/>} />
            {/* <Route path="/new-arrival" element={<NewArrival />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults products={products} />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/product/:id" element={<ProductDetails data={{ newArrivals, products ,usedPhones}} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;