import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import httpClient from '../api/index';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const http = httpClient();
const Products = ({ cat, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await http.get(
          cat ? `/products?category=${cat}` : '/products'
        );
        console.log(res);
        // setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
