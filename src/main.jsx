import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import AgeCalculatorContextProvider from './context/ageCalculatorContextProvider';
import InputHandlerContextProvider from './context/InputHandlerContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AgeCalculatorContextProvider>
      <InputHandlerContextProvider>
        <App />
      </InputHandlerContextProvider>
    </AgeCalculatorContextProvider>
  </React.StrictMode>
);
