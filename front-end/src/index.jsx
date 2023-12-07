import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './config/reportWebVitals';
import AppRoutes from './Routes';

import App from './App';
import './styles/index.css';
import { AuthProvider } from './components/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes>
          <App />
        </AppRoutes>
      </BrowserRouter>
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
