import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as UserActions from '../../store/actions/user'

import { Container, ReservetionCard } from './styles';
import { BsArrowLeft } from "react-icons/bs";

import Header from '../../components/Header';

import { API, Auth } from "aws-amplify";

function History({ user, logout }) {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProductsReserved() {
      try {
        const response = await API.get('products', '/reserved');
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    }
    loadProductsReserved();
  }, []);

  async function handleLogout() {
    await Auth.signOut();
    logout();
    history.push('/');
  }

  return (
    <Container>
      <Header />
      <p className="title-history"> <BsArrowLeft onClick={() => history.push('/') }/> Histórico de produtos reservado por {user.email} </p>
      {products.length > 0 ?
        <>
          {products.map(product => (
            <ReservetionCard key={product.productId}>
            <img src={`https://shopminions-upload.s3-sa-east-1.amazonaws.com/${product.image}`} alt="product" />
              <div>
                <h4> Produto : </h4>
                <p>{product.title} </p>
              </div>
              <div>
                <h4> Preço </h4>
                <p>{product.price}</p>
              </div>
            </ReservetionCard>
          ))}
          <button onClick={() => handleLogout()}> SAIR DESSA CONTA </button>
        </>
        :
        <ReservetionCard>
        <h4> nenhum produto reservado nesta conta. </h4>
        </ReservetionCard>
      }

    </Container>
  )
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(History);