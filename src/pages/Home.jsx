import React from 'react';
import reactLogo from '../assets/react.svg';
import { useNavigate } from 'react-router-dom';
import bigImage from '../assets/first1.png';
import './Home.css';

const Home = ({newArrivals}) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };
  

  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${bigImage})` }} >
        <div className="hero-content">
          <h1>New Mobile Phones</h1>
          <button>Get Offer Now!</button>
        </div>
      </section>

      <section className="new-arrival">
        <h2>Mobile Collections</h2>
        <div className="arrival-grid">
          {newArrivals.map((item) => (
            <div key={item.id} className="arrival-item" onClick={() => handleCardClick(item.id)}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p className='original-price'>PKR {item.price}</p>
              <p className='sale-price'>PKR {item.saleprice}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <h2 style={{color:'black'}}>WHY CHOOSE US</h2>
        <div className="reasons">
          <div className="reason">
            <div className="image-container">
              <img className="image" src={reactLogo} alt="Return and Exchange" />
            </div>
            <h3>Gifts</h3>
            <p>Free Premium Box and Shopping Bag</p>
          </div>
          <div className="reason">
            <div className="image-container">
              <img className="image" src={reactLogo} alt="Return and Exchange" />
            </div>
            <h3>Return And Exchange</h3>
            <p>Easy 14 Days Return and Refund</p>
          </div>
          <div className="reason">
            <div className="image-container">
              <img className="image" src={bigImage} alt="Return and Exchange" />
            </div>
            <h3>Fast Delivery</h3>
            <p>Fast Delivery All Over Pakistan</p>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Home;