import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as CartActions from '../../store/actions/cart'

import { API } from "aws-amplify";

import { Container, CardsList, CardMinion } from './styles';

import Header from '../../components/Header';
import Form from '../../components/Form';

import { CgShoppingCart, CgSpinner } from "react-icons/cg";

function Home({ addItem }) {
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadProducts() {
      try {
        const response = await API.get('products', '/products');
        setProductsData(response);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  function handleOpen(product) {
    setVisible(true);
    setProduct([product]);
  }

  return (
    <Container load={loading}>

      <Header />
      {visible && <Form
        products={product}
        id={[product[0].productId]}
        onClose={() => setVisible(false)} />}

      {loading ? <CgSpinner className="load" /> :

        <CardsList>

          {productsData.map(product => (
            <CardMinion key={product.productId}>
              <p> {product.title} </p>
              <img src={`https://shopminions-upload.s3-sa-east-1.amazonaws.com/${product.image}`} alt="product" />
              <span> R$ {product.price} </span>
              {product.reservedBy ? <p className="reserved-span"> reservado </p> :
                <p className="btn-shop"> <CgShoppingCart onClick={() => addItem(product)} />
                  <button onClick={() => handleOpen(product)}>RESERVAR</button></p>
              }
            </CardMinion>
          ))}

        </CardsList>
      }

    </Container>
  )
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch)

export default connect(null, mapDispatchToProps)(Home);