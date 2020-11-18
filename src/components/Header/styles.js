import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   padding: 10px 40px;
   font-size: clamp(1rem, 4.5vh, 4rem);
   color:  #f0f0f0;
   font-style: italic;
   border-bottom: 1px solid gray;

   display: flex;
   justify-content: space-between;

   @media(max-width: 600px){
     padding: 10px 0;
   }
`

export const Cart = styled.div`
   display: flex;
   justify-content: space-between;
  
   svg{
     cursor: pointer;
     margin: 0 5px;
     transition: .2s opacity;

     :hover {
       opacity: 0.5;
     }
   }
`