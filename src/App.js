import './App.css';
import Navbar from './components/Navbar';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Users from './components/Users';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

function App() {

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<AboutUs />} />
          <Route path='/Users' element={<Users />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
