import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
  z-index: 2;
  
  display: flex;
  align-items: center;
  justify-content: center;
  .title-reserved {
    color: gray;
    padding: 10px;
  }
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Modal = styled.div`
  padding: 20px 10px;
  width: 40%;
  border-radius: 3px;
  background: #fff;
  @media(max-width: 400px){
    width: 95%;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title-login {
    align-self: flex-start;
    padding: 5px 10px;
    color: gray;
    font-size: 10pt;
    margin-top: 10px;
  }
  h4 {
    border-bottom: 1px solid #e2e3e3;
    width: 100%;
    text-align: center;
    color: #024a58;
    padding-bottom: 10px;
  }
  span {
    font-size: 10pt;
    color: gray;
    border-bottom: 1px solid #d3d4d5;
    cursor: pointer;
    :hover {
      color: #024a58;
    }
  }
  > div {
    margin-top: 10px;
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
  input {
    width: 95%;
    outline: none;
    border: 1px solid #d3d4d5;
    margin: 5px 0;
    padding: 10px;
    border-radius: 3px;
    font-style: italic;
    :focus {
      border: 1px solid #595c5f ;
    }
  }
  button {
    width: 49%;
    font-weight: bold;
    border: none;
    padding: 10px;
    border-radius: 3px;
    ${props => props.load && css`
        svg {
            animation: ${rotate} 2s linear infinite;
        }
    `}
  }
  .send {
    background: #024a58; 
    color: #fff;
    :hover {
      background: #035f71;
    }
  }
  .cancel {
    background: #fff;
    color: #024a58;
    border: 1px solid #024a58;
    :hover {
      background: #f0f1f1;
    }
  }
`;

export const Description = styled.div`
  width: 100%;
  background:  #f0f1f1 ;
  font-size: 10pt;
  color: #024a58;
  margin: 10px 0;
  
  display: flex;
  flex-direction: column;

  .title-description {
    font-size: 10.5pt;
    background: #e2e3e3;
    width: 100%;
    text-align: center;
    padding: 10px;
  }

  h5 {
    font-size:  9.5pt;
  }

  div {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-self: flex-start;
  }
`;