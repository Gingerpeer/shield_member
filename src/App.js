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
import Two from './pages/Two'
// Styles
import './App.css';

function App() {
  const [forceNumber, setForceNumber] = useState('12345678')
  const [armsOfService, setArmsOfService] = useState('')
  const [rankTitle, setRankTitle] = useState('')
  const [fullNames, setFullNames] = useState('')
  const [surname, setSurname] = useState('')
  const [IDNumber, setIDNumber] = useState('')
  const [cellNumber, setCellNumber] = useState('0712345678')
  const [altCellNumber, setAltCellNumber] = useState('')
  const [landlineNumber, setLandlineNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [streetName, setStreetName] = useState('')
  const [complexName, setComplexName] = useState('')
  const [unitNumber, setUnitNumber] = useState('')
  const [suburb, setSuburb] = useState('')
  const [town, setTown] = useState('')
  const [postalCode, setPostalCode] = useState('')
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
        <Route path='/2' element={<Two
          cellNumber={cellNumber}
          setCellNumber={setCellNumber} 
          altCellNumber={altCellNumber}
          setAltCellNumber={setAltCellNumber}
          landlineNumber={landlineNumber}
          setLandlineNumber={setLandlineNumber}
          emailAddress={emailAddress}
          setEmailAddress={setEmailAddress}
          streetNumber={streetNumber}
          setStreetNumber={setStreetNumber}
          streetName={streetName}
          setStreetName={setStreetName}
          complexName={complexName}
          setComplexName={setComplexName}
          unitNumber={unitNumber}
          setUnitNumber={setUnitNumber}
          suburb={suburb}
          setSuburb={setSuburb}
          town={town}
          setTown={setTown}
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          />} />
        <Route path='/3' />
        <Route path='/4' />
        <Route path='/5' />
      </Routes>
    </div>
  );
}

export default App;
