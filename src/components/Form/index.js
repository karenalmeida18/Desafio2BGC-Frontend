import React from 'react';

import { API } from "aws-amplify";
import { sendEmail } from "../../libs/sendEmail";

import { Container, Modal, Description } from './styles';
import { toast } from 'react-toastify';

export default function Form(props) {

  async function handleReserved() {
    try {
      const response = await API.put('products', `/reserved/${props.id}`);

      if (response.success) {
        toast.success('Produto reservado com sucesso!');
        sendEmail('karenalmeida340@gmail.com');
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <Container >
      <Modal>
        <h4> RESERVAR PRODUTO </h4>
        <Description>
          <h5 className="title-description"> DESCRIÇÃO DA RESERVA </h5>
          <p> <strong> NOME DO PRODUTO </strong> : {props.title} </p>
          <p> <strong> PREÇO DO PRODUTO </strong> : {props.price} </p>
        </Description>

        <p className="title-login"> FAÇA LOGIN PARA PROSSEGUIR COM A RESERVA  </p>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <span> cadastrar conta  </span>
        <div >
          <button onClick={() => props.onClose()} className="cancel">CANCELAR</button>
          <button onClick={() => handleReserved()} className="send">CONFIRMAR</button>
        </div>
      </Modal>
    </Container>

  )
}