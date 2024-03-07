import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { store } from './store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
