import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { API, Auth } from "aws-amplify";
import { sendEmail } from "../../libs/sendEmail";
import { signIn } from "../../libs/signIn";

import { connect } from 'react-redux';
import * as UserActions from '../../store/actions/user';
import * as CartActions from '../../store/actions/cart';

import { Container, Modal, Description } from './styles';
import { toast } from 'react-toastify';

import { CgSpinner } from "react-icons/cg";

function Form(props) {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false);


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  //se o usuario já estiver logado 
  async function handleReserved() {
    console.log(props.id)
    setLoading(true);
    try {
      const response = await API.put('products', `/reserved`, {
        body: { productId: props.id }
      });
      if (response.success) {
        toast.success('Produto reservado com sucesso!');
        sendEmail(props.user.email, props.products.map(item => item.title));
        setLoading(false);
        props.onClose();
        props.clear();
        window.location.reload();
      }
    }
    catch (e) {
      toast.error(e);
      setLoading(false);
    }
  }

  //se o suário não estiver logado
  async function handleReservedSignIn() {
    setLoading(true);
    const res = await signIn(email, password);
    if (res) {
      props.setLogin(res.attributes);

      try {
        const response = await API.put('products', `/reserved`, {
          body: { productId: props.id }
        });

        if (response.success) {
          toast.success('Produto reservado com sucesso!');
          sendEmail(email, props.products.map(item => item.title));
          setLoading(false);
          props.onClose();
          props.clear();
          window.location.reload();
        }
      }
      catch (e) {
        toast.error(e);
        setLoading(false);
      }
    }
    setLoading(false);
  }

  async function handleLogout() {
    await Auth.signOut();
    props.logout();
    history.push('/login');
  }

  const { email, password } = values;
  return (
    <Container >
      <Modal load={loading}>

        <h4> RESERVAR PRODUTO </h4>
        <Description>
          <h5 className="title-description"> DESCRIÇÃO DA RESERVA </h5>
          {props.products.map(item => (
            <div key={item.productId}>
              <p> <strong> NOME DO PRODUTO </strong> : {item.title} </p>
              <p> <strong> PREÇO DO PRODUTO </strong> : {item.price} </p>
            </div>
          ))}

        </Description>
        {
          props.user.email ?
            <>
              <p className="title-reserved"> reservar produto por  : {props.user.email} </p>
              <span onClick={() => handleLogout()}> reservar em outra conta </span>
            </>
            :
            <>
              <p className="title-login"> FAÇA LOGIN PARA PROSSEGUIR COM A RESERVA  </p>
              <input onChange={handleChange('email')} placeholder="email" type="text" />
              <input onChange={handleChange('password')} placeholder="senha" type="password" />
              <span onClick={() => history.push('/register')}> cadastrar conta  </span>
            </>
        }
        <div >
          <button onClick={() => props.onClose()} className="cancel">CANCELAR</button>
          <button onClick={() => props.user.email ? handleReserved() : handleReservedSignIn()} className="send">
            {loading ? <CgSpinner /> : <p> CONFIRMAR </p>}
          </button>
        </div>

      </Modal>
    </Container>

  )
}

const MapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setLogin: (data) => dispatch(UserActions.setLogin(data)),
  logout: () => dispatch(UserActions.logout()),
  clear: () => dispatch(CartActions.clear())
});

export default connect(MapStateToProps, mapDispatchToProps)(Form);