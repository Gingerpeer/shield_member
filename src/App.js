// Imports
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
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
import Document1 from './pages/Document1';
import CheckInfo from './pages/CheckInfo';
import AddInfo from './pages/AddInfo';
import Upload from './pages/upload';
// Styles
import './App.css';


function App() {
  
  // Page One
  const [forceNumber, setForceNumber] = useState('')
  const [armsOfService, setArmsOfService] = useState('')
  const [rankTitle, setRankTitle] = useState('')
  const [fullNames, setFullNames] = useState('')
  const [surname, setSurname] = useState('')
  const [IDNumber, setIDNumber] = useState('')
  const [mainId, setMainId] = useState([])
  const [mainAge,setMainAge] = useState('')
  // Page Two
  const [cellNumber, setCellNumber] = useState('')
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
  const [monthlyPremium,setMonthlyPremium] = useState(153)
  // Spouse's Details
  const [spouseTitle,setSpouseTitle] = useState('')
  const [spouseFullNames,setSpouseFullNames] = useState('')
  const [spouseSurname,setSpouseSurname] = useState('')
  const [spouseID,setSpouseID] = useState('')
  const [spouseIdFile,setSpouseIdFile] = useState([])
  const [spouseAge,setSpouseAge] = useState('')
  const [spouseCell,setSpouseCell] = useState('')
  // Dependents under 21
  const [childrenAmount,setChildrenAmount] = useState('')
        // needs to loop over the amount of children and add to state
        const [childTitle,setChildTitle] = useState('Male')
        const [childFullNames,setChildFullNames] = useState('')
        const [childSurname,setChildSurname] = useState('')
        const [childID,setChildID] = useState('')
        const [childAge,setChildAge] = useState('')
      const [childTitle2,setChildTitle2] = useState('Male')
      const [childFullNames2,setChildFullNames2] = useState('')
      const [childSurname2,setChildSurname2] = useState('')
      const [childID2,setChildID2] = useState('')
      const [childAge2,setChildAge2] = useState('')
      const [childTitle3,setChildTitle3] = useState('Male')
      const [childFullNames3,setChildFullNames3] = useState('')
      const [childSurname3,setChildSurname3] = useState('')
      const [childID3,setChildID3] = useState('')
      const [childAge3,setChildAge3] = useState('')
    const [childTitle4,setChildTitle4] = useState('Male')
    const [childFullNames4,setChildFullNames4] = useState('')
    const [childSurname4,setChildSurname4] = useState('')
    const [childID4,setChildID4] = useState('')
    const [childAge4,setChildAge4] = useState('')
    const [childTitle5,setChildTitle5] = useState('Male')
    const [childFullNames5,setChildFullNames5] = useState('')
    const [childSurname5,setChildSurname5] = useState('')
    const [childID5,setChildID5] = useState('')
    const [childAge5,setChildAge5] = useState('')
    const [childTitle6,setChildTitle6] = useState('Male')
    const [childFullNames6,setChildFullNames6] = useState('')
    const [childSurname6,setChildSurname6] = useState('')
    const [childID6,setChildID6] = useState('')
    const [childAge6,setChildAge6] = useState('')
    const [childrenIds,setChildrenIds] = useState([])
  
  // Primary Beneficiary;s Details
  const [pbTitle,setPbTitle] = useState('')
  const [pbFullNames,setPbFullNames] = useState('')
  const [pbSurname,setPbSurname] = useState('')
  const [pbID,setPbID] = useState('')
  const [pbCellNumber,setPbCellNumber] = useState('')
  const [pbIdData,setPbIdData] = useState([])
  const [pbLandline,setPbLandline] = useState('')
  const [pbRelationship,setPbRelationship] = useState('')
  const [pbAge,setPbAge] = useState('')
  // next in Line to beneficiary's details
  const [nlTitle,setNlTitle] = useState('')
  const [nlFullNames,setNlFullNames] = useState('')
  const [nlSurname,setNlSurname] = useState('')
  const [nlIDNumber,setNlIDNumber] = useState('')
  const [nlCellNumber,setNlCellNumber] = useState('')
  const [nlIdData,setNlIdData] = useState([])
  const [nlLandline,setNlLandline] = useState('')
  const [nlRelationship,setNlRelationship] = useState('')
  const [nlAge,setNlAge] = useState('')
  // payment method
  const [paymentMethod,setPaymentMethod] = useState('Payroll')
  const [bankingDetailsDO,setBankingDetailsDO] = useState([])
  // signature
  const [signature,setSignature] = useState('')


  // base64data
  const [base64Data,setBase64Data] = useState('')
  
  // id parameter
  const [idParam,setIdParam] = useState('')
  // const queryString = window.location.pathname
  // const idString = queryString.slice(1)
  
  // client due diligence state
  // due diligence details
  const [sourceIncome,setSourceIncome] = useState('Salary')
  const [sourceIncomeDetails,setSourceIncomeDetails] = useState('')
  const [dpip,setDpip] = useState('')
  const [dpipDetails,setDpipDetails] = useState('')
  const [fppo,setFppo] = useState('')
  const [fppoDetails,setFppoDetails] = useState('')
  const [closeDpipFppo,setCloseDpipFppo] = useState('')
  const [closeDpipFppoDetails,setCloseDpipFppoDetails] = useState('')

  // additional information
  const [agsb,setAgsb] = useState('')
  const [rhcb,setRhcb] = useState('')
  const [cgsb,setCgsb] = useState('')
  const [asb,setAsb] = useState('')
  const [other,setOther] = useState('')
  const [otherDetails, setOtherDetails] = useState('')
  const [prevCanYes, setPrevCanYes] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState('')
  // pre-existing funeral cover
  const [prevCancelation, setPrevCancelation] = useState('')
  const [ prevWaiting, setPrevWaiting] = useState('')

  useEffect(()=>{
    if(maritalStatus == 'Married'){
      
        setMonthlyPremium(264)
      
    }
    if(maritalStatus == 'Single'){
      if(childrenAmount > 0){
        setMonthlyPremium(181)
      }else{setMonthlyPremium(153)}
      
    }
  },[monthlyPremium,setMonthlyPremium,setChildrenAmount,childrenAmount,maritalStatus,setMaritalStatus])
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/:id' element={<Home idParam={idParam} setIdParam={setIdParam} />} />
          <Route exact path='/' element={<Home idParam={idParam} setIdParam={setIdParam} />} />
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
            mainID={mainId}
            setMainId={setMainId}
            mainAge={mainAge}
            setMainAge={setMainAge}
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
            spouseIdFile={spouseIdFile}
            setSpouseIdFile={setSpouseIdFile}
            spouseAge={spouseAge}
            setSpouseAge={setSpouseAge}
            spouseCell={spouseCell}
            setSpouseCell={setSpouseCell}
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
            childAge={childAge}
            setChildAge={setChildAge}
            childTitle2={childTitle2}
            setChildTitle2={setChildTitle2}
            childFullNames2={childFullNames2}
            setChildFullNames2={setChildFullNames2}
            childSurname2={childSurname2}
            setChildSurname2={setChildSurname2}
            childID2={childID2}
            childAge2={childAge2}
            setChildAge2={setChildAge2}
            setChildID2={setChildID2}
            childTitle3={childTitle3}
            setChildTitle3={setChildTitle3}
            childFullNames3={childFullNames3}
            setChildFullNames3={setChildFullNames3}
            childSurname3={childSurname3}
            setChildSurname3={setChildSurname3}
            childID3={childID3}
            setChildID3={setChildID3}
            childAge3={childAge3}
            setChildAge3={setChildAge3}
            childTitle4={childTitle4}
            setChildTitle4={setChildTitle4}
            childFullNames4={childFullNames4}
            setChildFullNames4={setChildFullNames4}
            childSurname4={childSurname4}
            setChildSurname4={setChildSurname4}
            childID4={childID4}
            setChildID4={setChildID4}
            childAge4={childAge4}
            setChildAge4={setChildAge4}
            childTitle5={childTitle5}
            setChildTitle5={setChildTitle5}
            childFullNames5={childFullNames5}
            setChildFullNames5={setChildFullNames5}
            childSurname5={childSurname5}
            setChildSurname5={setChildSurname5}
            childID5={childID5}
            setChildID5={setChildID5}
            childAge5={childAge5}
            setChildAge5={setChildAge5}
            childTitle6={childTitle6}
            setChildTitle6={setChildTitle6}
            childFullNames6={childFullNames6}
            setChildFullNames6={setChildFullNames6}
            childSurname6={childSurname6}
            setChildSurname6={setChildSurname6}
            childID6={childID6}
            setChildID6={setChildID6}
            childAge6={childAge6}
            setChildAge6={setChildAge6}
            childrenIds={childrenIds}
            setChildrenIds={setChildrenIds}
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
            pbIdData={pbIdData}
            setPbIdData={setPbIdData}
            pbLandline={pbLandline}
            setPbLandline={setPbLandline}
            pbRelationship={pbRelationship}
            setPbRelationship={setPbRelationship}
            pbAge={pbAge}
            setPbAge={setPbAge}
            nlLandline={nlLandline}
            setNlLandline={setNlLandline}
            nlRelationship={nlRelationship}
            setNlRelationship={setNlRelationship}
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
            nlIdData={nlIdData}
            setNlIdData={setNlIdData}
            nlAge={nlAge}
            setNlAge={setNlAge}
            />} />
          <Route path='/6' element={<Six
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            monthlyPremium={monthlyPremium}
            setMonthlyPremium={setMonthlyPremium}
            armsOfService={armsOfService}
            maritalStatus={maritalStatus}
            childrenAmount={childrenAmount}
            bankingDetailsDO={bankingDetailsDO}
            setBankingDetailsDO={setBankingDetailsDO}
            />} />
          <Route path='/7' element={<Seven
            monthlyPremium={monthlyPremium}
            signature={signature}
            setSignature={setSignature}
            />} />
          <Route path='/checkInfo' element={<CheckInfo
            sourceIncome={sourceIncome}
            setSourceIncome={setSourceIncome}
            sourceIncomeDetails={sourceIncomeDetails}
            setSourceIncomeDetails={setSourceIncomeDetails}
            dpip={dpip}
            dpipDetails={dpipDetails}
            fppo={fppo}
            fppoDetails={fppoDetails}
            closeDpipFppo={closeDpipFppo}
            closeDpipFppoDetails={closeDpipFppoDetails}
            setDpip={setDpip}
            setDpipDetails={setDpipDetails}
            setFppo={setFppo}
            setFppoDetails={setFppoDetails}
            setCloseDpipFppo={setCloseDpipFppo}
            setCloseDpipFppoDetails={setCloseDpipFppoDetails}
            />} />
          <Route path='/addinfo' element={<AddInfo
                agsb={agsb}
                setAgsb={setAgsb}
                rhcb={rhcb}
                setRhcb={setRhcb}
                cgsb={cgsb}
                setCgsb={setCgsb}
                asb={asb}
                setAsb={setAsb}
                other={other}
                setOther={setOther}
                otherDetails={otherDetails}
                setOtherDetails={setOtherDetails}
                prevCancelation={prevCancelation}
                setPrevCancelation={setPrevCancelation}
                prevWaiting={prevWaiting}
                setPrevWaiting={setPrevWaiting}
                prevCanYes={prevCanYes}
                setPrevCanYes={setPrevCanYes}
                marketingConsent={marketingConsent}
                setMarketingConsent={setMarketingConsent}
            />} />
          <Route path='/document' element={<Document1 
            forceNumber={forceNumber} 
            armsOfService={armsOfService}
            rankTitle={rankTitle}
            fullNames={fullNames}
            surname={surname}
            IDNumber={IDNumber}
            mainID={mainId}
            cellNumber={cellNumber}
            altCellNumber={altCellNumber}
            landlineNumber={landlineNumber}
            emailAddress={emailAddress}
            streetNumber={streetNumber}
            streetName={streetName}
            complexName={complexName}
            unitNumber={unitNumber}
            suburb={suburb}
            town={town}
            postalCode={postalCode}
            unitName={unitName}
            unitSwitchBoardNumber={unitSwitchBoardNumber}
            maritalStatus={maritalStatus}
            monthlyPremium={monthlyPremium}
            spouseTitle={spouseTitle}
            spouseFullNames={spouseFullNames}
            spouseSurname={spouseSurname}
            spouseID={spouseID}
            spouseIdFile={spouseIdFile}
            childrenAmount={childrenAmount}
            childTitle={childTitle}
            childFullNames={childFullNames}
            childSurname={childSurname}
            childID={childID}
            childAge={childAge}
            setChildAge={setChildAge}
            childTitle2={childTitle2}
            childFullNames2={childFullNames2}
            childSurname2={childSurname2}
            childID2={childID2}
            childAge2={childAge2}
            setChildAge2={setChildAge2}
            childTitle3={childTitle3}
            childFullNames3={childFullNames3}
            childSurname3={childSurname3}
            childID3={childID3}
            childAge3={childAge3}
            setChildAge3={setChildAge3}
            childTitle4={childTitle4}
            childFullNames4={childFullNames4}
            childSurname4={childSurname4}
            childID4={childID4}
            childAge4={childAge4}
            setChildAge4={setChildAge4}
            childTitle5={childTitle5}
            childFullNames5={childFullNames5}
            childSurname5={childSurname5}
            childID5={childID5}
            childAge5={childAge5}
            setChildAge5={setChildAge5}
            childTitle6={childTitle6}
            childFullNames6={childFullNames6}
            childSurname6={childSurname6}
            childID6={childID6}
            childAge6={childAge6}
            setChildAge6={setChildAge6}
            childrenIds={childrenIds}
            pbTitle={pbTitle}
            pbFullNames={pbFullNames}
            pbSurname={pbSurname}
            pbID={pbID}
            pbAge={pbAge}
            setPbAge={setPbAge}
            pbCellNumber={pbCellNumber}
            pbIdData={pbIdData}
            setPbIdData={setPbIdData}
            nlTitle={nlTitle}
            nlFullNames={nlFullNames}
            nlSurname={nlSurname}
            nlIDNumber={nlIDNumber}
            nlCellNumber={nlCellNumber}
            nlIdData={nlIdData}
            setNlIdData={setNlIdData}
            nlAge={nlAge}
            setNlAge={setNlAge}
            paymentMethod={paymentMethod}
            signature={signature}
            base64Data={base64Data}
            setBase64Data={setBase64Data}
            bankingDetailsDO={bankingDetailsDO}
            setBankingDetailsDO={setBankingDetailsDO}
            idParam={idParam}
            dpip={dpip}
            dpipDetails={dpipDetails}
            fppo={fppo}
            fppoDetails={fppoDetails}
            closeDpipFppo={closeDpipFppo}
            closeDpipFppoDetails={closeDpipFppoDetails}
            pbLandline={pbLandline}
            pbRelationship={pbRelationship}
            nlLandline={nlLandline}
            nlRelationship={nlRelationship}
            sourceIncome={sourceIncome}
            setSourceIncome={setSourceIncome}
            sourceIncomeDetails={sourceIncomeDetails}
            setSourceIncomeDetails={setSourceIncomeDetails}
            mainAge={mainAge}
            setMainAge={setMainAge}
            spouseAge={spouseAge}
            setSpouseAge={setSpouseAge}
            spouseCell={spouseCell}
            agsb={agsb}
            rhcb={rhcb}
            cgsb={cgsb}
            asb={asb}
            other={other}
            otherDetails={otherDetails}
            prevCancelation={prevCancelation}
            prevWaiting={prevWaiting}
            prevCanYes={prevCanYes}
                setPrevCanYes={setPrevCanYes}
                marketingConsent={marketingConsent}
                setMarketingConsent={setMarketingConsent}
            />} />
            <Route path='/upload' element={<Upload />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
