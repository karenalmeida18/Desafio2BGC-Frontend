import React from 'react';

import { Container, Modal } from './styles';

export default function Form(props) {
  return (
    <Container >
      <Modal>
        <p> RESERVA - {props.title}</p>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <div >
          <button  onClick={() => props.onClose()} className="cancel">CANCELAR</button>
          <button className="send">ENVIAR</button>
        </div>
      </Modal>
    </Container>

  )
}