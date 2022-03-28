// Imports
import { useState } from 'react';
import { Routes, Route } from 'react-router';
// Components
import Header from './components/Header';
// Pages

import Upload from './pages/upload';
// Styles
import './App.css';


function App() {
  
  // Page One
 
  
  // id parameter
  const [idParam,setIdParam] = useState('')
  
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/:id' element={<Upload idParam={idParam} setIdParam={setIdParam} />} />
          <Route path='/' element={<Upload idParam={idParam} setIdParam={setIdParam} />} />
        </Routes>
    </div>
  );
}

export default App
