import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { API, Auth } from "aws-amplify";
import { sendEmail } from "../../libs/sendEmail";
import { signIn } from "../../libs/signIn";

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as UserActions from '../../store/actions/user'

import { Container, Modal, Description } from './styles';
import { toast } from 'react-toastify';

function Form(props) {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleReserved() {
    try {
      const response = await API.put('products', `/reserved/${props.id}`);

      if (response.success) {
        toast.success('Produto reservado com sucesso!');
        sendEmail(props.user.email);
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async function handleReservedSignIn() {
    const res = await signIn(email, password);
    if(res) {
    props.setLogin(res.attributes);
    try {
      const response = await API.put('products', `/reserved/${props.id}`);

      if (response.success) {
        toast.success('Produto reservado com sucesso!');
        sendEmail(res.attributes.email);
      }
    }
    catch (e) {
      console.log(e);
    }
  }
}

  async function handleLogout() {
    const response = await Auth.signOut();
    console.log(response);
    props.logout();
    history.push('/login');
  }

  const { email, password } = values;
  return (
    <Container >
      <Modal>
        <h4> RESERVAR PRODUTO </h4>
        <Description>
          <h5 className="title-description"> DESCRIÇÃO DA RESERVA </h5>
          <p> <strong> NOME DO PRODUTO </strong> : {props.title} </p>
          <p> <strong> PREÇO DO PRODUTO </strong> : {props.price} </p>
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
              <span> cadastrar conta  </span>
            </>
        }
        <div >
          <button onClick={() => props.onClose()} className="cancel">CANCELAR</button>
          <button onClick={() => props.user.email ? handleReserved() : handleReservedSignIn()} className="send">CONFIRMAR</button>
        </div>
      </Modal>
    </Container>

  )
}

const MapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch)

export default connect(MapStateToProps, mapDispatchToProps)(Form);