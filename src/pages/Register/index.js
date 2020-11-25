import React, { useState } from 'react';
import { Auth } from "aws-amplify";

import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Container, Content } from '../../pages/Login/styles';

import Header from '../../components/Header';


export default function Register() {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
    code: '',
  })
  const [confirmCode, setConfirmCode] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) toast.error('Por favor, preencha todos os campos!');
    else {
      try {
        await Auth.signUp(email, password);
        setConfirmCode(true);
      }
      catch (e) {
        console.log(e);
        toast.error(e.message);
      }
    }
  }

  async function handleConfirm(event) {
    event.preventDefault();

    if (!code) toast.error('Por favor, insera o código de confirmação!');
    else {
      try {
        await Auth.confirmSignUp(email, code);
        await Auth.signIn(email, password);
        history.push('/history');
      }
      catch (e) {
        console.log(e);
        toast.error(e.message);
      }
    }
  }

  const { email, password, code } = values;
  return (
    <Container>
      <Header />
      {confirmCode ?
        <Content onSubmit={handleConfirm}>
          <h2> CONFIRMAR CÓDIGO </h2>

          <label> Digite o código que recebeu em seu email : </label>
          <input name="code" onChange={handleChange('code')} placeholder="código" type="text" />
          <button className="login" type="submit"> CONFIRMAR </button>
      
        </Content>
        :
        <Content onSubmit={handleSubmit}>
          <h2> REGISTRO </h2>

          <input onChange={handleChange('email')} placeholder="email" type="text" />
          <input onChange={handleChange('password')} placeholder="senha" type="password" />
          <button className="login" type="submit"> CADASTRAR</button>

        </Content>

      }

    </Container >
  )
}