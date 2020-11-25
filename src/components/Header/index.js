import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';

import { CgProfile, CgShoppingCart } from "react-icons/cg";

function Header({ user }) {
  const history = useHistory();
  return (
    <Container>
      <p onClick={() => history.push('/')}> SHOPMINIONS </p>

      <Cart>
        <CgProfile onClick={() => history.push('/login')} />
        <CgShoppingCart />
      </Cart>

    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);