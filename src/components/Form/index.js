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
    setLoading(true);
    try {
      const response = await API.put('products', `/reserved/${props.id}`);

      if (response.success) {
        console.log(props.user.email);
        toast.success('Produto reservado com sucesso!');
        sendEmail(props.user.email, props.title);
        setLoading(false);
        props.onClose();
      }
    }
    catch (e) {
      console.log(e);
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
        const response = await API.put('products', `/reserved/${props.id}`);

        if (response.success) {
          toast.success('Produto reservado com sucesso!');
          console.log(email);
          sendEmail(email, props.title);
          setLoading(false);
          props.onClose();
        }
      }
      catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
    setLoading(false);
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
      <Modal loading={loading}>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch)

export default connect(MapStateToProps, mapDispatchToProps)(Form);