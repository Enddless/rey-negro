import React, { useEffect, useState } from 'react';
import Approach from '../approach';
import GetPrice from '../getPrice';
import Hero from '../hero';
import Price from '../price';
import ProductList from '../product-list';
import Quality from '../quality';
import useGetProducts from '../../hooks/useGetProducts';
import { TProducts } from '../../types/types';

function MainContent() {
  const itemsPerPage = 3;
  const { products = [], isLoading } = useGetProducts();

  const [products200g, setProducts200g] = useState<TProducts[]>([]);
  const [products500g, setProducts500g] = useState<TProducts[]>([]);
  const [products1000g, setProducts1000g] = useState<TProducts[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      setProducts200g(products.filter((product) => product.weight === 200));
      setProducts500g(products.filter((product) => product.weight === 500));
      setProducts1000g(products.filter((product) => product.weight === 1000));
    }
  }, [products]);

  return (
    <main className='content' id='Главная'>
      <Hero />
      <ProductList items={products200g.slice(0, itemsPerPage)} isLoading={isLoading} />
      <Quality />
      <ProductList items={products500g.slice(0, itemsPerPage)} isLoading={isLoading} />
      <Approach />
      <ProductList items={products1000g.slice(0, itemsPerPage)} isLoading={isLoading} />
      <Price />
      <GetPrice />
    </main>
  );
}

export default MainContent;
