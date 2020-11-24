import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Cart } from './styles';

import { CgProfile, CgShoppingCart } from "react-icons/cg";


export default function Header() {
  const history = useHistory();

  return (
    <Container>
      <p> SHOPMINIONS </p>

      <Cart>
        <CgProfile onClick={() => history.push('/login')} />
        <CgShoppingCart />
      </Cart>

    </Container>
  )
}