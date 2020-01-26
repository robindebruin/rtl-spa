import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';

/**
 * Simple header and react-router-dom
 * provider to handles all routes provided in Routes
 */

function App() {
  return (
    <Router>
      <Header />
      <Routes></Routes>
    </Router>
  );
}

export default App;
