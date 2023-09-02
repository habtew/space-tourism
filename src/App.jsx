// import react from 'react'
import React from 'react';
import { BrowserRouter as Router,Routes ,Route, Link } from 'react-router-dom';
import { crewData, technologyData, destinationData} from './data/destinationdata';
import Home from './components/home'
import Destination from './components/destination'
import Crew from './components/crew'
import Technology from './components/technology'
// import Nav from './components/nav';

import './App.css'
import './styles/Nav.css'
import './styles/Hero.css'
import './styles/destination.css'
import './styles/Crew.css'
import './styles/technology.css'
// <Destination />
// <Home />
// {/* <Crew />  */}

function Nav(){
  function handleClick() {
    document.body.classList.toggle('nav-open');
  }

  return (
    <header>
      <div className="logo">
        <img src="../public/shared/logo.svg" alt="Logo" />
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={handleClick}
      >
        <img src="../public/shared/icon-hamburger.svg" alt="Toggle Navigation" />
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/crew" className="nav__link">
              Crew
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/technology" className="nav__link">
              Technology
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/destination" className="nav__link">
              Destination
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
    <Nav />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/crew" element={<Crew 
          data = {crewData}
      />} />
      <Route path="/technology" element={<Technology 
          data = {technologyData}
      />} />
      <Route path="/destination" element={<Destination 
          data = {destinationData}
      />} />
      {/* default  */}
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>

  )
}

export default App
