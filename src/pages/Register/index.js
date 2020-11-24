import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Content } from '../../pages/Login/styles';

import Header from '../../components/Header';


export default function Register() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
  }

  const { email, password } = values;
  return (
    <Container>
      <Header/>
      <Content onSubmit={handleSubmit}>
        <h2> REGISTRO </h2>
        
        <input onChange={handleChange('email')} placeholder="email" type="text" />
        <input onChange={handleChange('password')} placeholder="senha" type="password" />


        <button className="register" type="submit"> CADASTRAR</button>
      </Content>

    </Container>
  )
}