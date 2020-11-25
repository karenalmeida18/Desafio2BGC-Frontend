import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';

import { CgProfile, CgShoppingCart } from "react-icons/cg";

function Header({ cartLength }) {
  const history = useHistory();
  return (
    <Container>
      <p onClick={() => history.push('/')}> SHOPMINIONS </p>

      <Cart>
        <div>
          <CgShoppingCart onClick={() => history.push('/cart')} />
          <p>{cartLength} itens</p>
        </div>
        <div>
          <CgProfile onClick={() => history.push('/login')} />
          <p> perfil</p>
        </div>
      </Cart>

    </Container>
  )
}
const mapStateToProps = state => ({
  cartLength: state.cart.length,
});

export default connect(mapStateToProps)(Header);