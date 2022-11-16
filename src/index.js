import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginView from './routes/loginView';

/* Importamos  */
import { BrowserRouter , Routes , Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/LoginView" element={<LoginView />} />
    </Routes>
  </BrowserRouter>
);


