import React from 'react';

import { Container, Cart } from './styles';

import { CgProfile, CgShoppingCart } from "react-icons/cg";


export default function Header() {
  return (
    <Container>
      <p> SHOPMINIONS </p>

      <Cart>
        <CgProfile />
        <CgShoppingCart />
      </Cart>

    </Container>
  )
}