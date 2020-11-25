import React, { useState, useRef } from 'react';

import { Link } from 'react-router-dom';

import { API } from "aws-amplify";
import { s3Upload } from "../../libs/awsLib";

import { Container, Content } from './styles';

import { BsArrowLeft } from "react-icons/bs";

export default function Adm() {
  const [values, setValues] = useState({
    title: '',
    price: '',
  })
  const file = useRef(null);

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title || !price) {
      alert('preencha todos os campos!');
    } else {
      try {
       const image = file.current && await s3Upload(file.current);
       console.log('teste', image);
       await API.post('products', '/products', {
          body: { title, price, image },
        })
        alert('produto cadastrado com sucesso.');
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  }

  const { title, price } = values;
  return (
    <Container>
      <h1>PAINEL DO ADMNISTRADOR </h1>
      <Link to="/"> <BsArrowLeft /> voltar ao site </Link>

      <Content onSubmit={handleSubmit}>
        <h2> CRIAR NOVO PRODUTO  </h2>

        <label>TÍTULO</label>
        <input onChange={handleChange('title')} placeholder="insira o título do produto aqui " type="text" />
        <label>PREÇO</label>
        <input onChange={handleChange('price')} placeholder="insira o preço do produto aqui" type="text" />

        <input onChange={handleFileChange} type="file" /> 
        <button type="submit">SALVAR</button>

      </Content>

    </Container>
  )
}