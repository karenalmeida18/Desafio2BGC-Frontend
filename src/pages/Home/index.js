import React from 'react';

import { Container, CardsList, CardMinion } from './styles';

import Header from '../../components/Header';

export default function Home(){
  return(
    <Container>

      <Header/>

      <CardsList>

        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <button>RESERVAR</button>
        </CardMinion>
        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <button>RESERVAR</button>
        </CardMinion>
        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <button>RESERVAR</button>
        </CardMinion>
        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <button>RESERVAR</button>
        </CardMinion>
        <CardMinion>
          <p>MINION STUART </p>
          <img src="https://images-na.ssl-images-amazon.com/images/I/71MN--u2SEL._AC_SL1500_.jpg" alt="product"/>
          <span> R$ 2,99</span>
          <button>RESERVAR</button>
        </CardMinion>
        
      </CardsList>

    </Container>
  )
}