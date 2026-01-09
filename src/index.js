import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

AOS.init({
  duration: 1000,
  once: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
