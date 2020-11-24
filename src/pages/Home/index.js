import React, { useState, useEffect } from 'react';

import { API } from "aws-amplify";

import { Container, CardsList, CardMinion } from './styles';

import Header from '../../components/Header';
import Form from '../../components/Form';

import { CgShoppingCart } from "react-icons/cg";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');
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

  function handleOpen(product) {
    setVisible(true);
    setTitle(product.title);
    setPrice(product.price);
    setId(product.productId)
  }

  return (
    <Container>

      <Header />
      {visible && <Form
        title={title}
        price={price}
        id={id}
        onClose={() => setVisible(false)} />}

      <CardsList>

        {productsData.map(product => (
          <CardMinion key={product.productId}>
            <p> {product.title} </p>
            <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product" />
            <span> R${product.price} </span>
            <p className="btn-shop"> <CgShoppingCart /> <button onClick={() => handleOpen(product)}>RESERVAR</button></p>
          </CardMinion>
        ))}

      </CardsList>

    </Container>
  )
}