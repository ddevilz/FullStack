import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/Homepage'
import { BrowserRouter } from 'react-router-dom';
import Recipe from './pages/Recipe';
import {Routes,Route} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:recipeId" element= {<Recipe/>}/> 
    </Routes>
  </BrowserRouter> 
);

