import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import InputHandlerContextProvider from './context/InputHandlerContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InputHandlerContextProvider>
      <App />
    </InputHandlerContextProvider>
  </React.StrictMode>
);
