import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './Pages/Home';
import Logement from './Pages/Logement';
import Error from './Pages/Error';
import APropos from './Pages/APropos';

import reportWebVitals from './reportWebVitals';
import './fonts/Montserrat-VariableFont_wght.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/Accueil" element={<App />}></Route>
        <Route exact path="/APropos" element={<APropos />}></Route>
        <Route exact path="/Logement/:id" element={<Logement />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
