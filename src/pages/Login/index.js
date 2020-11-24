import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Auth } from 'aws-amplify';

import { Container, Content } from './styles';

import Header from '../../components/Header';

export default function Login() {
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
        await Auth.signIn(email, password);
      }
      catch (e) {
        console.log(e);
        toast.error(e.message);
      }
    }
  }

  const { email, password } = values;

  return (
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
  )
}