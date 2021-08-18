import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { StateProvider } from './context/CountryContext';
import ThemeProvider from './context/ThemeContext';
import './index.css';


ReactDOM.render(
  <ThemeProvider>
    <StateProvider>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </StateProvider>
  </ThemeProvider>,
  document.getElementById('root')
);