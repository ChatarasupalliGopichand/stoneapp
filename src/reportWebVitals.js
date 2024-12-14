import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Pass a function to log results or send to an analytics endpoint
reportWebVitals(console.log);
