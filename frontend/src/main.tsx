import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from './store/products/products.api';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <ApiProvider api={productsApi}>
          <App />
        </ApiProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
