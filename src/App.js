import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}