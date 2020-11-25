import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as UserActions from '../../store/actions/user'

import { toast } from 'react-toastify';

import { Auth } from 'aws-amplify';

import { Container, Content } from './styles';

import Header from '../../components/Header';

import { isAuthenticated } from '../../services/auth';

function Login({ setLogin }) {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) toast.error('Por favor, preencha todos os campos!');
    else {
      try {
        const response = await Auth.signIn(email, password);
        setLogin(response.attributes);
        toast.success("Login feito com sucesso");
        history.push('/history');
      }
      catch (e) {
        console.log(e);
        toast.error(e.message);
      }
    }
  }

  const { email, password } = values;

  return (
    <>
    {isAuthenticated() ? <Redirect to="/history" /> : null}
    <Container>
      <Header />
      <Content onSubmit={handleSubmit}>
        <h2> LOGIN </h2>

        <input onChange={handleChange('email')} placeholder="email" type="text" />
        <input onChange={handleChange('password')} placeholder="senha" type="password" />

        <button className="login" type="submit">ENTRAR</button>
        <p> ou </p>
        <button onClick={() => history.push('/register')} className="register" type="submit"> CADASTRAR</button>
      </Content>

    </Container>
    </>
  )
}

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(UserActions, dispatch)
  
export default connect(null, mapDispatchToProps)(Login);