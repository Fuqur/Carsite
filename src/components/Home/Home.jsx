import React from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Products.jsx';
import { useSelector } from 'react-redux';
import Mustsee from '../Products/Mustsee';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Cheap from '../Products/cheap';

const Home = () => {
  const { customProducts } = useSelector((state) => state);

  return (
    <>
      <Poster />
        <Products products={customProducts} amount={5} title="Trending" />
        <Categories title="Soon..." customProducts={Mustsee} amount={5} />
      <Banner/>
      <Categories customProducts={Cheap} amount={3} title="Cheapest options" />
    </>
  );
};

export default Home;