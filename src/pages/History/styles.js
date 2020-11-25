import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background: #fff; 
  
   display: flex;
   flex-direction: column;
   align-items: center;
   > .title-history {
    padding: 15px;
    background: #10D2A9;
    width: 100%;
    color: #024a58; 
    text-align: center;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 400px){
    font-size: 8pt;
    }
    > svg {
      font-size: 20pt;
      margin-right: 20px;
      cursor: pointer;
    }
   }
   > button {
    border: none;
    border-radius: 20px;
    color: #fff;
    background: #10D2A9;
    padding: 15px;
    margin : 15px 0;
    width: 30%;
    transition: .2s background;
    font-weight: bold;
    @media(max-width: 400px){
     font-size: 8pt;
     width: 80%;
    }
   }

`
export const ReservetionCard = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  margin: 10px 0;
  border-bottom: 1px solid gray;
  color: gray;

  justify-content: space-around;
  display: flex; 
 
  @media(max-width: 400px){
    font-size: 8pt;
    width: 80%;
  }

  > img  {
    width: 10%;
    object-fit: cover;
  }
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h4 {
      color: #024a58; 
    }
  }



`
