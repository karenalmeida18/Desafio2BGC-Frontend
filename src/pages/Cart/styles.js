import styled from 'styled-components'

export const Container = styled.div `
  width: 100%;
  height: 100%;
`;

export const CartContainer = styled.div `
  width: 70%;
  margin: 15px auto;
  border: 1px solid #d3d4d5;
  border-radius: 5px;
  
  display: flex;
  flex-direction: column;
  
  @media(max-width: 400px){
    font-size: 8pt;
    width: 90%;
    button {
      font-size: 6pt;
    }
  }

  h4 {
    text-align: center;
    padding: 10px 0;
    color: #024a58;
    width: 100%;
    background: #d3d4d5;
  }
  .cart-item{
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 10px 30px;
    
  }
  img {
    width: 10%;
  }
  button  {
    font-weight: bold;
    border: none;
    color: #fff;
    padding: 8px;
    align-self: flex-end;
    border-radius: 5px;
    background: #024a58;
  }
  svg:hover {
    color: red;
    cursor: pointer;
    transform: scale(1.2);
  }

  footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d3d4d5;
    padding: 10px 30px;
  }
`;