import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as CartActions from '../../store/actions/cart'

import { Container, CartContainer } from './styles';

import Header from '../../components/Header';
import Form from '../../components/Form';

import { BsTrash } from "react-icons/bs";

function Cart({ cart, removeItem, total }) {
  const [visible, setVisible] = useState(false);
  const totalFormat = total.toFixed(2);

  return (
    <Container>
      <Header />
      {visible && <Form products={cart}
        id={cart.map(item => item.productId)}
        onClose={() => setVisible(false)} />}

      <CartContainer>
        <h4> MEU CARRINHO </h4>
        {cart.length > 0 ? <>
          {cart.map(product => (
            <div className="cart-item" key={product.productId}>
              <img src={`https://shopminions-upload.s3-sa-east-1.amazonaws.com/${product.image}`} alt="product" />
              <p> {product.title} </p>
              <p> {product.price} </p>
              <BsTrash onClick={() => removeItem(product.productId)} />
            </div>
          ))}
          <footer>
            <button onClick={() => setVisible(true)}> FINALIZAR COMPRA </button>
            <p> Total:  R${totalFormat} </p>
          </footer>
        </>
          : <p style={{ textAlign: 'center', padding: '10px' }}> Nenhum produto no carrinho.</p>}
      </CartContainer>

    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
  total: state.cart.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, 0)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);