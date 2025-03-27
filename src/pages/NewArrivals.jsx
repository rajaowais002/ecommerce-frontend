import React from 'react';
import bigImage from '../assets/mobile-bg.jpeg';
import CardGrid from '../components/CardGrid';
import reactLogo from '../assets/react.svg';


const NewArrivals = () => {
  const NewArrivals = [
    { id: 1, name: 'Phone 1', image: bigImage },
    { id: 2, name: 'Phone 2', image: bigImage },
    { id: 3, name: 'Phone 3', image: bigImage },
    { id: 4, name: 'Phone 4', image: bigImage },
    { id: 5, name: 'Phone 5', image: bigImage },
    { id: 6, name: 'Phone 6', image: bigImage },
    { id: 7, name: 'Phone 7', image: bigImage },
    { id: 8, name: 'Phone 8', image: reactLogo },
    { id: 9, name: 'Phone 9', image: reactLogo },
    { id: 10, name: 'Phone 10', image: bigImage }
  ];

  return (
    <div>
      <CardGrid heading="New Arrivals" NewArrivals={NewArrivals} />
    </div>
  );
};

export default NewArrivals;