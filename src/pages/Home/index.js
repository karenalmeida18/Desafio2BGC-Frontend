import React, { useState, useEffect } from 'react';

import { API } from "aws-amplify";

import { Container, CardsList, CardMinion } from './styles';

import Header from '../../components/Header';
import Form from '../../components/Form';

import { CgShoppingCart } from "react-icons/cg";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await API.get('products', '/products');
        setProductsData(response);
      } catch (error) {
        console.log(error.response);
      }
    }
    loadProducts();
  }, []);

  function handleOpen(text) {
    setVisible(true);
    setTitle(text);
  }

  return (
    <Container>

      <Header />
      {visible && <Form title={title} onClose={() => setVisible(false)} />}

      <CardsList>

        {productsData.map(product => (
          <CardMinion key={product.productId}>
            <p> {product.title} </p>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product" />
            <span> R${product.price} </span>
            <p className="btn-shop"> <CgShoppingCart /> <button onClick={() => handleOpen(`${product.title}`)}>RESERVAR</button></p>
          </CardMinion>
        ))}

      </CardsList>

    </Container>
  )
}