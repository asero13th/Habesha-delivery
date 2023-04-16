import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import "./styles/header.css"
import "./styles/footer.css"
import "./styles/hero-section.css"
import './styles/category.css'
import "./styles/home.css"
import "./styles/product-card.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


reportWebVitals();
