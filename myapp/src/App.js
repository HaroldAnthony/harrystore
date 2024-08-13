import React from 'react';
import Home from './Components/Home';
import Privacy from './Components/Privacy';
import Contact from './Components/Contact';
import Loginform from './Components/Loginform';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

const App = () => {
  return <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/loginform' element={<Loginform/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
  </div>
}

export default App