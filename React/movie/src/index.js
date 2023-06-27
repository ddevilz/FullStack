import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from "react-router-dom"
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/:imdbID" element= {<Card />}/> 
    </Routes>
  </BrowserRouter>
);
