import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.4);
  top: 0;
  left: 0;
  z-index: 2;
  
  display: flex;
  align-items: center;
  justify-content: center;

`;
export const Modal = styled.div`
  padding: 20px 5px;
  width: 35%;
  border-radius: 3px;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    margin-bottom: 10px;
    color: #024a58;
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
    border: 1px solid gray;
    margin: 5px 0;
    padding: 10px;
  }
  button {
    width: 49%;
    font-weight: bold;
    border: none;
    padding: 10px;
  }
  .send {
    background: #024a58; 
    color: #fff;
  }
  .cancel {
    background: #fff;
    color: #024a58;
    border: 1px solid #024a58;
  }
`;
