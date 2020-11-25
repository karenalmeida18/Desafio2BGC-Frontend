import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background: #fff; 
   color: #024a58; 

   display: flex;
   flex-direction: column;
   align-items: center;
   > p {
      margin: 10px 0;
   }

`

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;


export const Content = styled.form `
   margin: 10px 0;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 50%;
   padding: 30px 50px;

   @media(max-width: 400px){
      width: 100%;
   }


   h2 {
      margin-bottom: 20px;
      align-self: center;
   }

   input {
      border: 0;
      border-bottom: 1px solid gray;
      padding: 10px;
      margin: 10px 0;
      :focus {
       border-bottom: 2px solid #035f71;
      }
   }
   button {
      border: none;
      border-radius: 20px;
      color: #fff;
      padding: 15px;
      margin-top : 15px;
      transition: .2s background;
      ${props => props.load && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
   }

   p{
     margin: 0 auto;
     margin-top: 10px;
   }
   .login {
    background: #024a58;
    transition: .2s background;
    :hover, :focus {
      background: #035f71;
    }
   }

   .register {
    background: #fff;
    border: 1px solid #024a58;
    color: #024a58;
    :hover, :focus {
      background: #f0f1f1;
    }
   }
`
