import React, { useState } from 'react';

import { Container, CardsList, CardMinion } from './styles';

import Header from '../../components/Header';
import Form from '../../components/Form';

import { CgShoppingCart } from "react-icons/cg";

export default function Home(){
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');

  function handleOpen(text){
    setVisible(true);
    setTitle(text);
  }

  return(
    <Container>

      <Header/>
        { visible && <Form title={title} onClose={() => setVisible(false)}/> }

      <CardsList>

        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <p className="btn-shop"> <CgShoppingCart/> <button onClick={() => handleOpen('MINION STUART')}>RESERVAR</button></p>
        </CardMinion>
        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <p className="btn-shop"> <CgShoppingCart/> <button onClick={() => handleOpen('MINION STUART')}>RESERVAR</button></p>
        </CardMinion>
        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <p className="btn-shop"> <CgShoppingCart/> <button onClick={() => handleOpen('MINION STUART')}>RESERVAR</button></p>
        </CardMinion>
        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <p className="btn-shop"> <CgShoppingCart/> <button onClick={() => handleOpen('MINION STUART')}>RESERVAR</button></p>
        </CardMinion>
        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <p className="btn-shop"> <CgShoppingCart/> <button onClick={() => handleOpen('MINION STUART')}>RESERVAR</button></p>
        </CardMinion>
        
        
      </CardsList>

    </Container>
  )
}