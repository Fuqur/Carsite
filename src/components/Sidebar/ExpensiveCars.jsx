import React from 'react';
import Categories from '../Categories/Categories';
import Expensive from './Expensive';

const ExpensiveCars = () => {
  return (
    <Categories
      title="Expensive cars"
      customProducts={Expensive}
      amount={10}
    />
  );
};

export default ExpensiveCars;