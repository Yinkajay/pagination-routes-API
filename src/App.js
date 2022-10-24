import './App.css';
import Navbar from './components/Navbar';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import { useState, useEffect } from 'react';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/Members' element={<Members />} />
      </Routes>
    </>
  );
}

export default App;
