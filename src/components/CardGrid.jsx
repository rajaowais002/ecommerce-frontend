import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardGrid = ({ heading, usedPhones }) => {
  const phonesArray = usedPhones.usedPhones;
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <section className="new-arrival">
      <h2>{heading}</h2>
      <div className="arrival-grid">
        {phonesArray.map((item) => (
          <div key={item.id} className="arrival-item" onClick={() => handleCardClick(item.id)}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;