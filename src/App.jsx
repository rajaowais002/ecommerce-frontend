import React from 'react';
import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import UsedPhones from './pages/UsedPhones';
import NewArrival from './pages/NewArrivals';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import reactLogo from './assets/react.svg';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import SearchResults from './components/SearchResults';
import { CartProvider } from './components/CartContext';

const App = () => {
  const newArrivals = [
    { id: 1, name: 'Outfumes 1', image: reactLogo, description: 'nj8 jjk kkjDescription for Outfumes 1', price: '22334', saleprice: '20000' },
    { id: 2, name: 'Outfumes 2', image: reactLogo, description: 'Description for Outfumes 1', price: '22334', saleprice: '20000' },
    { id: 3, name: 'Outfumes 3', image: reactLogo, description: 'Description for Outfumes 1', price: '22334', saleprice: '20000' },
    { id: 4, name: 'Outfumes 4', image: reactLogo, description: 'Description for Outfumes 1', price: '22334', saleprice: '20000' },
    { id: 5, name: 'Outfumes 4', image: reactLogo, description: 'Description for Outfumes 1', price: '22334', saleprice: '20000' },
    { id: 6, name: 'Outfumes 4', image: reactLogo, description: 'Description for Outfumes 1', price: '22334', saleprice: '20000' },
    { id: 7, name: 'Outfumes 4', image: reactLogo, description: 'Description for Outfumes 1', price: '22334', saleprice: '20000' },
    { id: 9, name: 'Outfumes 4', image: reactLogo, description: 'Description for Outfumes 1', price: '22334', saleprice: '20000' },
  ];
  const products = [
    {
      id: 10,
      name: 'MAHIR – Luxury Impression of Baccarat Rouge 540',
      price: '2800',
      saleprice: '2500',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 11,
      name: 'OPEN',
      price: '2099',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 12,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: false,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 13,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: false,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 14,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 15,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 16,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 17,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 18,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 19,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 20,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 21,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2,300',
      saleprice: '1,999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 22,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: true,
      image: reactLogo,
    },
    {
      id: 23,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2,300',
      saleprice: '1,999',
      onSale: true,
      inStock: false,
      image: reactLogo,
    },
    {
      id: 24,
      name: 'INSPIRATION – Impression of Dunhill Desire',
      price: '2300',
      saleprice: '1999',
      onSale: true,
      inStock: false,
      image: reactLogo,
    },
  ];
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home newArrivals={newArrivals} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/new" element={<New products={products} />} />
            <Route path="/used-phones" element={<UsedPhones />} />
            <Route path="/new-arrival" element={<NewArrival />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults products={products} />} />
            <Route path="/product/:id" element={<ProductDetails data={{ newArrivals, products }} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;