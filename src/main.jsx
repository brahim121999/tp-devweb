import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FizzBuzz from './FuzzBuzz.jsx'
import AnagramChecker from './AnagramChecker.jsx'
import FilmList from './AfficheFilm.jsx'
import CountdownTimer from './afficheTime.jsx'
import Counter from './counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <FizzBuzz/>
  <AnagramChecker/>
  <FilmList/>
  <Counter/>
  <CountdownTimer/>
    
  </React.StrictMode>,
)
