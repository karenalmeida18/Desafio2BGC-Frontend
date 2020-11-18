import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   padding: 10px;
   background: #024a58;   
`

export const CardsList = styled.div`
   margin: 5px auto;
   width: max-content;
   padding: 10px;
   
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-gap: 20px;

   @media(max-width : 600px){
    grid-template-columns: 1fr;
   }
   @media(min-width: 600px) and (max-width: 875px){
     grid-template-columns: 2fr 2fr;
   }
   @media(min-width: 1900px){
     grid-template-columns: repeat(8, 1fr);
   }
`

export const CardMinion = styled.div`
   background: #fff;
   width: 200px;
   padding: 16px;
   border-radius: 2px;
   color: #012e41;
   cursor: pointer;
   transition: .2s all;

   :hover{
     box-shadow: 0 0 20px;
     transform: scale(1.04);
   }

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   img {
     width: 80%;
     margin: 5px 0;
     object-fit: cover;
   }
   span {
      margin: 5px 0;
      font-size: 10pt;
   }
   p{
     font-weight: bold;
     margin: 5px 0;
   }
   button {
     width: 95%;
     font-weight: bold;
     border: none;
     background: #012e41;
     color: #fff;
     padding: 10px;
     margin: auto;
   }

`
