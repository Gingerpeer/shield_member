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
  // signature
  const [signature,setSignature] = useState('')

  useEffect(()=>{
    console.log(childrenAmount)
  },[childrenAmount,setChildrenAmount])
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
          childrenAmount={childrenAmount}
          setChildrenAmount={setChildrenAmount}
          childTitle={childTitle}
          setChildTitle={setChildTitle}
          childFullNames={childFullNames}
          setChildFullNames={setChildFullNames}
          childSurname={childSurname}
          setChildSurname={setChildSurname}
          childID={childID}
          setChildID={setChildID}
          childTitle2={childTitle2}
          setChildTitle2={setChildTitle2}
          childFullNames2={childFullNames2}
          setChildFullNames2={setChildFullNames2}
          childSurname2={childSurname2}
          setChildSurname2={setChildSurname2}
          childID2={childID2}
          setChildID2={setChildID2}
          childTitle3={childTitle3}
          setChildTitle3={setChildTitle3}
          childFullNames3={childFullNames3}
          setChildFullNames3={setChildFullNames3}
          childSurname3={childSurname3}
          setChildSurname3={setChildSurname3}
          childID3={childID3}
          setChildID3={setChildID3}
          childTitle4={childTitle4}
          setChildTitle4={setChildTitle4}
          childFullNames4={childFullNames4}
          setChildFullNames4={setChildFullNames4}
          childSurname4={childSurname4}
          setChildSurname4={setChildSurname4}
          childID4={childID4}
          setChildID4={setChildID4}
          childTitle5={childTitle5}
          setChildTitle5={setChildTitle5}
          childFullNames5={childFullNames5}
          setChildFullNames5={setChildFullNames5}
          childSurname5={childSurname5}
          setChildSurname5={setChildSurname5}
          childID5={childID5}
          setChildID5={setChildID5}
          childTitle6={childTitle6}
          setChildTitle6={setChildTitle6}
          childFullNames6={childFullNames6}
          setChildFullNames6={setChildFullNames6}
          childSurname6={childSurname6}
          setChildSurname6={setChildSurname6}
          childID6={childID6}
          setChildID6={setChildID6}
          />} />
        <Route path='/5' element={<Five
          pbTitle={pbTitle}
          setPbTitle={setPbTitle}
          pbFullNames={pbFullNames}
          setPbFullNames={setPbFullNames}
          pbSurname={pbSurname}
          setPbSurname={setPbSurname}
          pbID={pbID}
          setPbID={setPbID}
          pbCellNumber={pbCellNumber}
          setPbCellNumber={setPbCellNumber}
          nlTitle={nlTitle}
          setNlTitle={setNlTitle}
          nlFullNames={nlFullNames}
          setNlFullNames={setNlFullNames}
          nlSurname={nlSurname}
          setNlSurname={setNlSurname}
          nlIDNumber={nlIDNumber}
          setNlIDNumber={setNlIDNumber}
          nlCellNumber={nlCellNumber}
          setNlCellNumber={setNlCellNumber}
          />} />
        <Route path='/6' element={<Six
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          />} />
        <Route path='/7' element={<Seven
          signature={signature}
          setSignature={setSignature}
          />} />
      </Routes>
    </div>
  );
}

export default App
