import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import dcLogo from './assets/img/dc-logo.png';

function App() {


  return (
    <>
      <header>
        <div className='container d-flex justify-content-evenly'>

          <img src={dcLogo} alt="dcLogo" />

          <nav class="nav">
            <a class="nav-link" aria-current="page" href="#">Character</a>
            <a class="nav-link" href="#">Comic</a>
            <a class="nav-link" href="#">Movies</a>
            <a class="nav-link" href="#">TV</a>
            <a class="nav-link" aria-current="page" href="#">Games</a>
            <a class="nav-link" href="#">Collectibles</a>
            <a class="nav-link" href="#">Video</a>
            <a class="nav-link" href="#">Fans</a>
            <a class="nav-link" href="#">News</a>
            <a class="nav-link" href="#">Shop</a>
          </nav>

        </div>
      </header>
      <main></main>
      <footer></footer>

    </>
  )
}

export default App
