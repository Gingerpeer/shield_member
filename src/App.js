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
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';
import Six from './pages/Six';
import Seven from './pages/Seven';
// Styles
import './App.css';

function App() {
  // Page One
  const [forceNumber, setForceNumber] = useState('12345678')
  const [armsOfService, setArmsOfService] = useState('')
  const [rankTitle, setRankTitle] = useState('')
  const [fullNames, setFullNames] = useState('')
  const [surname, setSurname] = useState('')
  const [IDNumber, setIDNumber] = useState('')
  // Page Two
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
  // Page Three
  const [unitName, setUnitName] = useState('')
  const [unitSwitchBoardNumber, setUnitSwitchBoardNumber] = useState('')
  // Membership Type / Marital Status
  const [maritalStatus,setMaritalStatus] = useState('')
  const [monthlyPremium,setMonthlyPremium] = useState(0)
  // Spouse's Details
  const [spouseTitle,setSpouseTitle] = useState('')
  const [spouseFullNames,setSpouseFullNames] = useState('')
  const [spouseSurname,setSpouseSurname] = useState('')
  const [spouseID,setSpouseID] = useState('')
  // Dependents under 21
  const [childrenAmount,setChildrenAmount] = useState(1)
        // needs to loop over the amount of children and add to state
        const [childTitle,setChildTitle] = useState('')
        const [childFullNames,setChildFullNames] = useState('')
        const [childSurname,setChildSurname] = useState('')
        const [childID,setChildID] = useState('')
      const [childTitle2,setChildTitle2] = useState('')
      const [childFullNames2,setChildFullNames2] = useState('')
      const [childSurname2,setChildSurname2] = useState('')
      const [childID2,setChildID2] = useState('')
      const [childTitle3,setChildTitle3] = useState('')
      const [childFullNames3,setChildFullNames3] = useState('')
      const [childSurname3,setChildSurname3] = useState('')
      const [childID3,setChildID3] = useState('')
    const [childTitle4,setChildTitle4] = useState('')
    const [childFullNames4,setChildFullNames4] = useState('')
    const [childSurname4,setChildSurname4] = useState('')
    const [childID4,setChildID4] = useState('')
    const [childTitle5,setChildTitle5] = useState('')
    const [childFullNames5,setChildFullNames5] = useState('')
    const [childSurname5,setChildSurname5] = useState('')
    const [childID5,setChildID5] = useState('')
    const [childTitle6,setChildTitle6] = useState('')
    const [childFullNames6,setChildFullNames6] = useState('')
    const [childSurname6,setChildSurname6] = useState('')
    const [childID6,setChildID6] = useState('')
  
  // Primary Beneficiary;s Details
  const [pbTitle,setPbTitle] = useState('')
  const [pbFullNames,setPbFullNames] = useState('')
  const [pbSurname,setPbSurname] = useState('')
  const [pbID,setPbID] = useState('')
  const [pbCellNumber,setPbCellNumber] = useState('')
  // next in Line to beneficiary's details
  const [nlTitle,setNlTitle] = useState('')
  const [nlFullNames,setNlFullNames] = useState('')
  const [nlSurname,setNlSurname] = useState('')
  const [nlIDNumber,setNlIDNumber] = useState('')
  const [nlCellNumber,setNlCellNumber] = useState('')
  // payment method
  const [paymentMethod,setPaymentMethod] = useState('')

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
        <Route path='/3' element={<Three 
          unitName={unitName}
          setUnitName={setUnitName}
          unitSwitchBoardNumber={unitSwitchBoardNumber}
          setUnitSwitchBoardNumber={setUnitSwitchBoardNumber}
          maritalStatus={maritalStatus}
          setMaritalStatus={setMaritalStatus}
          monthlyPremium={monthlyPremium}
          setMonthlyPremium={setMonthlyPremium}
          spouseTitle={spouseTitle}
          setSpouseTitle={setSpouseTitle}
          spouseFullNames={spouseFullNames}
          setSpouseFullNames={setSpouseFullNames}
          spouseSurname={spouseSurname}
          setSpouseSurname={setSpouseSurname}
          spouseID={spouseID}
          setSpouseID={setSpouseID}
          />} />
        <Route path='/4' element={<Four
          
          />} />
        <Route path='/5' element={<Five
          
          />} />
        <Route path='/6' element={<Six
          
          />} />
        <Route path='/7' element={<Seven
          
          />} />
      </Routes>
    </div>
  );
}

export default App
