import React, { useState, useEffect } from 'react';

import { Container, ReservetionCard } from './styles';

import Header from '../../components/Header';
import { API } from "aws-amplify";

export default function History() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProductsReserved() {
      try {
        const response = await API.get('products', '/reserved');
        console.log(response);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    }
    loadProductsReserved();
  }, []);


  return (
    <Container>
      <Header />
      <p className="title-history"> Histórico de produtos comprado por Name </p>

      {products.length > 0 ?
        products.map(product => (
          <ReservetionCard key={product.productId}>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product" />

            <div>
              <h4> Produto : </h4>
              <p>{product.title} </p>

            </div>

            <div>
              <h4> Preço </h4>
              <p>{product.price}</p>

            </div>
          </ReservetionCard>
        ))
        : <h1> nenhum produto reservado nesta conta. </h1>}

    </Container>
  )
}