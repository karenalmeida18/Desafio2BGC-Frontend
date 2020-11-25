import React, { useState } from 'react';
import { Auth } from "aws-amplify";

import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Container, Content } from '../../pages/Login/styles';

import Header from '../../components/Header';
import { CgSpinner } from "react-icons/cg";

export default function Register() {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
    code: '',
  })
  const [confirmCode, setConfirmCode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) toast.error('Por favor, preencha todos os campos!');
    else {
      setLoading(true);
      try {
        await Auth.signUp(email, password);
        setConfirmCode(true);
        setLoading(false);
      }
      catch (e) {
        setLoading(false);
        toast.error(e.message);
      }
    }
  }

  async function handleConfirm(event) {
    event.preventDefault();

    if (!code) toast.error('Por favor, insera o código de confirmação!');
    else {
      setLoading(true);
      try {
        await Auth.confirmSignUp(email, code);
        await Auth.signIn(email, password);
        setLoading(false);
        history.push('/history');
      }
      catch (e) {
        toast.error(e.message);
        setLoading(false);
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
          <input value={code} name="code" onChange={handleChange('code')} placeholder="código" type="text" />
          <button className="login" type="submit">
            {loading ? <CgSpinner /> : <span>CONFIRMAR</span>}
          </button>

        </Content>
        :
        <Content load={loading} onSubmit={handleSubmit}>
          <h2> REGISTRO </h2>

          <input onChange={handleChange('email')} placeholder="email" type="text" />
          <input onChange={handleChange('password')} placeholder="senha" type="password" />
          <button className="login" type="submit">
            {loading ? <CgSpinner /> : <span>CADASTRAR</span>}
          </button>

        </Content>

      }

    </Container >
  )
}