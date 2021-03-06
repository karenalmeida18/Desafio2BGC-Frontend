import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   padding: 10px;
   background: #024a58;   

   .load {
     margin: auto;
     text-align: center;
     font-size: 30pt;
     width: 100%;
     color: #fff;
   }
   ${props => props.load && css`
        .load {
            animation: ${rotate} 2s linear infinite;
        }
    `}
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
   height: 280px;
   padding: 16px;
   border-radius: 2px;
   color: #012e41;
   cursor: pointer;
   transition: .2s all;

   :hover{
     box-shadow: 0 0 20px;
     transform: scale(1.04);
   }
   .reserved-span {
     font-style: italic;
     color: gray;
     font-weight: lighter;
     letter-spacing: 2px;
   }

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   img {
     width: 80%;
     height: 45%;
     margin: 5px 0;
     object-fit: cover;
   }
   span {
      margin: 5px 0;
      font-size: 12pt;
   }
   p{
     font-weight: bold;
     margin: 5px 0;
     text-align: center;
   }
   button {
     width: 80%;
     height: 100%;
     font-weight: bold;
     border: none;
     color: #fff;
     padding: 8px;
     background: #012e41;
     :hover {
        transform: scale(1.09);
     }
     
   }
   .btn-shop{
     width: 100%;
     display: flex;
     align-items: center;
     background: #012e41;
     svg { 
       padding: 4px;
       width: 20%;
       background: #fff;
       height: 100%;
       border: 1px solid #012e41;
       :hover {
        transform: scale(1.09);
        background: #10D2A9;
        border: none;
       }
     }
   }

`
