import React from 'react';
import CardGrid from '../components/CardGrid';

const UsedPhones = (usedPhones) => {
  return (
    <CardGrid heading="Used Phones" usedPhones={usedPhones} />
  );
};

export default UsedPhones;