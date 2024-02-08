import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FizzBuzz from './FuzzBuzz.jsx'
import AnagramChecker from './AnagramChecker.jsx'
import FilmList from './AfficheFilm.jsx'
import CountdownTimer from './afficheTime.jsx'
import Counter from './counter.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './navBar';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        
        <Route path="/AnagramChecker" element={<AnagramChecker/>}/>
        <Route path="/Counter" element={<Counter/>}/>  
        <Route path="/FizzBuzz" element={<FizzBuzz/>}/>
        <Route path="/afficheTime" element={<CountdownTimer/>}/>  
        <Route path="/AfficheFilm" element={<FilmList/>}/>
        
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
