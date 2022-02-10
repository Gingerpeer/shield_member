// Imports
import { useState } from 'react'
import { Routes, Route } from 'react-router';
// Components
import Header from './components/Header';
// Pages
import Home from './pages/Home'
// Styles
import './App.css';
import Continue from './components/Continue';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
