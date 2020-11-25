import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Cart } from './styles';

import { CgProfile } from "react-icons/cg";

export default function Header() {
  const history = useHistory();
  return (
    <Container>
      <p onClick={() => history.push('/')}> SHOPMINIONS </p>

      <Cart>
        <CgProfile onClick={() => history.push('/login')} />
        {/*<CgShoppingCart />*/}
      </Cart>

    </Container>
  )
}