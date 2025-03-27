import React from 'react';
// import './CardGrid.css';

const CardGrid = ({ heading, NewArrivals }) => {
    console.log(NewArrivals);
  return (
    <section className="new-arrival">
      <h2>{heading}</h2>
      <div className="arrival-grid">
        {NewArrivals.map((item) => (
          <div key={item.id} className="arrival-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;