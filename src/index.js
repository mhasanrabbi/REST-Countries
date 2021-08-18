import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { StateProvider } from './context/CountryContext';
import './index.css';


ReactDOM.render(
    <StateProvider>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </StateProvider>,
  document.getElementById('root')
);