import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background: #fff; 
   color: #024a58; 

   display: flex;
   flex-direction: column;
   align-items: center;

   > h1 {
      background: #024a58; 
      color: #fff;
      border-bottom: 1px solid gray;
      padding: 20px;
      width: 100%;
      font-weight: lighter;
      text-align: center;
   }
   a {
      color: gray;
      align-self: flex-start;
      display: flex; 
      align-items: center;
      margin: 5px 10px;
   }
`

export const Content = styled.form `
   margin: 50px 0;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: 1px solid gray;
   width: 80%;
   padding: 30px 50px;

   h2 {
      margin-bottom: 20px;
   }

   input {
      border: 0;
      border-bottom: 1px solid gray;
      padding: 10px;
      margin: 10px 0;
   }
   button {
      background: #024a58;
      border: none;
      color: #fff;
      padding: 15px;
      margin-top : 15px;
      transition: .2s background;
      :hover {
         background: #035f71;
      }
   }
`
