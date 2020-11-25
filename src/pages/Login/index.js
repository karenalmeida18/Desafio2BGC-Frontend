import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as UserActions from '../../store/actions/user'

import { toast } from 'react-toastify';

import { Auth } from 'aws-amplify';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import { CgSpinner } from "react-icons/cg";

import { isAuthenticated } from '../../services/auth';

function Login({ setLogin }) {
  const history = useHistory();
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
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
        const response = await Auth.signIn(email, password);
        setLogin(response.attributes);
        toast.success("Login feito com sucesso");
        history.push('/history');
        setLoading(false);
      }
      catch (e) {
        toast.error(e.message);
        setLoading(false);
      }
    }
  }

  const { email, password } = values;

  return (
    <>
    {isAuthenticated() ? <Redirect to="/history" /> : null}
    <Container>
      <Header />
      <Content load={loading} onSubmit={handleSubmit}>
        <h2> LOGIN </h2>

        <input onChange={handleChange('email')} placeholder="email" type="text" />
        <input onChange={handleChange('password')} placeholder="senha" type="password" />

        <button className="login" type="submit">
          {loading ? <CgSpinner /> : <span>ENTRAR</span>}
        </button>
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