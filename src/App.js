// Imports
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
// Components
import Header from './components/Header';
// Pages
import Home from './pages/Home'
import No from './pages/No';
import Information from './pages/Information';
import One from './pages/One'
// Styles
import './App.css';


function App() {
  const [forceNumber, setForceNumber] = useState('12345678')
  const [armsOfService, setArmsOfService] = useState('')
  const [rankTitle, setRankTitle] = useState('')
  const [fullNames, setFullNames] = useState('')
  const [surname, setSurname] = useState('')
  const [IDNumber, setIDNumber] = useState('')
  useEffect(()=>{
    console.log(forceNumber)
  },[forceNumber])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/no' element={<No />} />
        <Route path='/instructions' element={<Information />} />
        <Route path='/1' element={<One 
          forceNumber={forceNumber} 
          setForceNumber={setForceNumber}
          armsOfService={armsOfService}
          setArmsOfService={setArmsOfService}
          rankTitle={rankTitle}
          setRankTitle={setRankTitle}
          fullNames={fullNames}
          setFullNames={setFullNames}
          surname={surname}
          setSurname={setSurname}
          IDNumber={IDNumber}
          setIDNumber={setIDNumber}
           />} />
        <Route path='/2' />
        <Route path='/3' />
        <Route path='/4' />
        <Route path='/5' />
      </Routes>
    </div>
  );
}

export default App;
