import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   background: #024a58; 
   padding: 5px 40px;
   font-size: clamp(1rem, 5vh, 4rem);
   color:  #f0f0f0;
   font-style: italic;
   border-bottom: 1px solid gray;

   display: flex;
   justify-content: space-between;
   align-items: center;

   @media(max-width: 600px){
     padding: 10px;
     font-size: 16pt;
   }
   p {
     cursor: pointer;
   }
`

export const Cart = styled.div`
   display: flex;
   justify-content: space-between;
  
   svg{
     cursor: pointer;
     transition: .2s opacity;
     :hover {
       opacity: 0.5;
     }
   }
   div {
     display: flex;
     align-items: center;
     padding: 10px;
     flex-direction: column;

     p {
       font-size: 8pt;
       font-weight: bold;
     }
   }
`