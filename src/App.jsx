// import react from 'react'
import React from 'react';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Home from './components/home'
import Destination from './components/destination'
import Crew from './components/crew'
import Technology from './components/technology'
import Nav from './components/nav';
import './App.css'
import './styles/Nav.css'
import './styles/Hero.css'
import './styles/destination.css'
import './styles/Crew.css'
import './styles/technology.css'
// <Destination />
// <Home />
// {/* <Crew />  */}
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/destination" element={<Destination />} />
      {/* default  */}
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>

  )
}

export default App
