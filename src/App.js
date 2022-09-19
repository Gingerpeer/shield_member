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
import ExtendedFamily from './pages/ExtendedFamily';
import ExtendedFamily2 from './pages/ExtendedFamily2';
import ExtendedFamily3 from './pages/ExtendedFamily3';
import ExtendedFamily4 from './pages/ExtendedFamily4';
import ExtendedFamily5 from './pages/ExtendedFamily5';
import ExtendedFamily6 from './pages/ExtendedFamily6';
import ExtendedFamily7 from './pages/ExtendedFamily7';
import ExtendedFamily8 from './pages/ExtendedFamily8';
import ExtendedFamilyPayment from './pages/ExtendedFamilyPayment';
import Document1 from './pages/Document1';
import CheckInfo from './pages/CheckInfo';
import AddInfo from './pages/AddInfo';
import Upload from './pages/upload';
// Styles
import './App.css';

function App() {

  // Home Page
  const [agentCode, setAgentCode] = useState('')

  // Page One
  const [forceNumber, setForceNumber] = useState('')
  const [armsOfService, setArmsOfService] = useState('')
  const [rankTitle, setRankTitle] = useState('')
  const [fullNames, setFullNames] = useState('')
  const [surname, setSurname] = useState('')
  const [IDNumber, setIDNumber] = useState('')
  const [mainId, setMainId] = useState([])
  const [mainAge, setMainAge] = useState('')
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
  const [maritalStatus, setMaritalStatus] = useState('')
  const [monthlyPremium, setMonthlyPremium] = useState(153)
  // Spouse's Details
  const [spouseTitle, setSpouseTitle] = useState('')
  const [spouseFullNames, setSpouseFullNames] = useState('')
  const [spouseSurname, setSpouseSurname] = useState('')
  const [spouseID, setSpouseID] = useState('')
  const [spouseIdFile, setSpouseIdFile] = useState([])
  const [spouseAge, setSpouseAge] = useState('')
  const [spouseCell, setSpouseCell] = useState('')
  // Dependents under 21
  const [childrenAmount, setChildrenAmount] = useState('')
  // needs to loop over the amount of children and add to state
  const [childTitle, setChildTitle] = useState('Male')
  const [childFullNames, setChildFullNames] = useState('')
  const [childSurname, setChildSurname] = useState('')
  const [childID, setChildID] = useState('')
  const [childAge, setChildAge] = useState('')
  const [childTitle2, setChildTitle2] = useState('Male')
  const [childFullNames2, setChildFullNames2] = useState('')
  const [childSurname2, setChildSurname2] = useState('')
  const [childID2, setChildID2] = useState('')
  const [childAge2, setChildAge2] = useState('')
  const [childTitle3, setChildTitle3] = useState('Male')
  const [childFullNames3, setChildFullNames3] = useState('')
  const [childSurname3, setChildSurname3] = useState('')
  const [childID3, setChildID3] = useState('')
  const [childAge3, setChildAge3] = useState('')
  const [childTitle4, setChildTitle4] = useState('Male')
  const [childFullNames4, setChildFullNames4] = useState('')
  const [childSurname4, setChildSurname4] = useState('')
  const [childID4, setChildID4] = useState('')
  const [childAge4, setChildAge4] = useState('')
  const [childTitle5, setChildTitle5] = useState('Male')
  const [childFullNames5, setChildFullNames5] = useState('')
  const [childSurname5, setChildSurname5] = useState('')
  const [childID5, setChildID5] = useState('')
  const [childAge5, setChildAge5] = useState('')
  const [childTitle6, setChildTitle6] = useState('Male')
  const [childFullNames6, setChildFullNames6] = useState('')
  const [childSurname6, setChildSurname6] = useState('')
  const [childID6, setChildID6] = useState('')
  const [childAge6, setChildAge6] = useState('')
  const [childrenIds, setChildrenIds] = useState([])

  // Add wider Family 
  const [addExtendFamily, setExtendFamily] = useState(false);
  const [memberRelation, setMemberRelation] = useState('');
  const [relationship, setRelationship] = useState('');
  const [name, setName] = useState('');
  const [relationSurname, setRelationSurname] = useState('');
  const [title, setTitle] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState('');
  const [benefit, setBenefit] = useState('');
  const [premium, setPremium] = useState(0);
  const [subRelationship, setSubRelationship] = useState([]);
  const [ageArray, setageArray] = useState([]);
  const [benefits, setBenefits] = useState([]);

  // Add wider Family 2
  const [addExtendFamily2, setExtendFamily2] = useState('');
  const [memberRelation2, setMemberRelation2] = useState('');
  const [relationship2, setRelationship2] = useState('');
  const [name2, setName2] = useState('');
  const [relationSurname2, setRelationSurname2] = useState('');
  const [title2, setTitle2] = useState('');
  const [dateOfBirth2, setDateOfBirth2] = useState('');
  const [age2, setAge2] = useState('');
  const [benefit2, setBenefit2] = useState('');
  const [premium2, setPremium2] = useState(0);
  const [subRelationship2, setSubRelationship2] = useState([]);
  const [ageArray2, setageArray2] = useState([]);
  const [benefits2, setBenefits2] = useState([]);

  // Add wider Family 3
  const [addExtendFamily3, setExtendFamily3] = useState('');
  const [memberRelation3, setMemberRelation3] = useState('');
  const [relationship3, setRelationship3] = useState('');
  const [name3, setName3] = useState('');
  const [relationSurname3, setRelationSurname3] = useState('');
  const [title3, setTitle3] = useState('');
  const [dateOfBirth3, setDateOfBirth3] = useState('');
  const [age3, setAge3] = useState('');
  const [benefit3, setBenefit3] = useState('');
  const [premium3, setPremium3] = useState(0);
  const [subRelationship3, setSubRelationship3] = useState([]);
  const [ageArray3, setageArray3] = useState([]);
  const [benefits3, setBenefits3] = useState([]);

  // Add wider Family 4
  const [addExtendFamily4, setExtendFamily4] = useState('');
  const [memberRelation4, setMemberRelation4] = useState('');
  const [relationship4, setRelationship4] = useState('');
  const [name4, setName4] = useState('');
  const [relationSurname4, setRelationSurname4] = useState('');
  const [title4, setTitle4] = useState('');
  const [dateOfBirth4, setDateOfBirth4] = useState('');
  const [age4, setAge4] = useState('');
  const [benefit4, setBenefit4] = useState('');
  const [premium4, setPremium4] = useState(0);
  const [subRelationship4, setSubRelationship4] = useState([]);
  const [ageArray4, setageArray4] = useState([]);
  const [benefits4, setBenefits4] = useState([]);

  // Add wider Family 5
  const [addExtendFamily5, setExtendFamily5] = useState('');
  const [memberRelation5, setMemberRelation5] = useState('');
  const [relationship5, setRelationship5] = useState('');
  const [name5, setName5] = useState('');
  const [relationSurname5, setRelationSurname5] = useState('');
  const [title5, setTitle5] = useState('');
  const [dateOfBirth5, setDateOfBirth5] = useState('');
  const [age5, setAge5] = useState('');
  const [benefit5, setBenefit5] = useState('');
  const [premium5, setPremium5] = useState(0);
  const [subRelationship5, setSubRelationship5] = useState([]);
  const [ageArray5, setageArray5] = useState([]);
  const [benefits5, setBenefits5] = useState([]);

  // Add wider Family 6
  const [addExtendFamily6, setExtendFamily6] = useState('');
  const [memberRelation6, setMemberRelation6] = useState('');
  const [relationship6, setRelationship6] = useState('');
  const [name6, setName6] = useState('');
  const [relationSurname6, setRelationSurname6] = useState('');
  const [title6, setTitle6] = useState('');
  const [dateOfBirth6, setDateOfBirth6] = useState('');
  const [age6, setAge6] = useState('');
  const [benefit6, setBenefit6] = useState('');
  const [premium6, setPremium6] = useState(0);
  const [subRelationship6, setSubRelationship6] = useState([]);
  const [ageArray6, setageArray6] = useState([]);
  const [benefits6, setBenefits6] = useState([]);

  // Add wider Family 7
  const [addExtendFamily7, setExtendFamily7] = useState('');
  const [memberRelation7, setMemberRelation7] = useState('');
  const [relationship7, setRelationship7] = useState('');
  const [name7, setName7] = useState('');
  const [relationSurname7, setRelationSurname7] = useState('');
  const [title7, setTitle7] = useState('');
  const [dateOfBirth7, setDateOfBirth7] = useState('');
  const [age7, setAge7] = useState('');
  const [benefit7, setBenefit7] = useState('');
  const [premium7, setPremium7] = useState(0);
  const [subRelationship7, setSubRelationship7] = useState([]);
  const [ageArray7, setageArray7] = useState([]);
  const [benefits7, setBenefits7] = useState([]);

  // Add wider Family 8
  const [addExtendFamily8, setExtendFamily8] = useState('');
  const [memberRelation8, setMemberRelation8] = useState('');
  const [relationship8, setRelationship8] = useState('');
  const [name8, setName8] = useState('');
  const [relationSurname8, setRelationSurname8] = useState('');
  const [title8, setTitle8] = useState('');
  const [dateOfBirth8, setDateOfBirth8] = useState('');
  const [age8, setAge8] = useState('');
  const [benefit8, setBenefit8] = useState('');
  const [premium8, setPremium8] = useState(0);
  const [subRelationship8, setSubRelationship8] = useState([]);
  const [ageArray8, setageArray8] = useState([]);
  const [benefits8, setBenefits8] = useState([]);

  // Primary Beneficiary;s Details
  const [pbTitle, setPbTitle] = useState('')
  const [pbFullNames, setPbFullNames] = useState('')
  const [pbSurname, setPbSurname] = useState('')
  const [pbID, setPbID] = useState('')
  const [pbCellNumber, setPbCellNumber] = useState('')
  const [pbIdData, setPbIdData] = useState([])
  const [pbLandline, setPbLandline] = useState('')
  const [pbRelationship, setPbRelationship] = useState('')
  const [pbAge, setPbAge] = useState('')
  // next in Line to beneficiary's details
  const [nlTitle, setNlTitle] = useState('')
  const [nlFullNames, setNlFullNames] = useState('')
  const [nlSurname, setNlSurname] = useState('')
  const [nlIDNumber, setNlIDNumber] = useState('')
  const [nlCellNumber, setNlCellNumber] = useState('')
  const [nlIdData, setNlIdData] = useState([])
  const [nlLandline, setNlLandline] = useState('')
  const [nlRelationship, setNlRelationship] = useState('')
  const [nlAge, setNlAge] = useState('')
  // payment method
  const [paymentMethod, setPaymentMethod] = useState('Payroll')
  const [otherText, setOtherText] = useState('');
  const [bankingDetailsDO, setBankingDetailsDO] = useState([])
  // wider Family payment method
  const [extendedMonthlyPremium, setExtendedMonthlyPremium] = useState(0)
  const [extendedPaymentMethod, setExtendedPaymentMethod] = useState('Payroll')
  const [otherExtendedText, setOtherExtendedText] = useState('');
  const [extendedBankingDetailsDO, setExtendedBankingDetailsDO] = useState([])
  // signature
  const [signature, setSignature] = useState('')

  // base64data
  const [base64Data, setBase64Data] = useState('')

  // id parameter
  const [idParam, setIdParam] = useState('')
  // const queryString = window.location.pathname
  // const idString = queryString.slice(1)

  // client due diligence state
  // due diligence details
  const [sourceIncome, setSourceIncome] = useState('Salary')
  const [sourceIncomeDetails, setSourceIncomeDetails] = useState('')
  const [dpip, setDpip] = useState('')
  const [dpipDetails, setDpipDetails] = useState('')
  const [fppo, setFppo] = useState('')
  const [fppoDetails, setFppoDetails] = useState('')
  const [closeDpipFppo, setCloseDpipFppo] = useState('')
  const [closeDpipFppoDetails, setCloseDpipFppoDetails] = useState('')

  // additional information
  const [agsb, setAgsb] = useState('')
  const [rhcb, setRhcb] = useState('')
  const [cgsb, setCgsb] = useState('')
  const [asb, setAsb] = useState('')
  const [other, setOther] = useState('')
  const [otherDetails, setOtherDetails] = useState('')
  const [prevCanYes, setPrevCanYes] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState('')
  // pre-existing funeral cover
  const [prevCancelation, setPrevCancelation] = useState('')
  const [prevWaiting, setPrevWaiting] = useState('')

  useEffect(() => {
    if (maritalStatus == 'Married') {

      setMonthlyPremium(264)

    }
    if (maritalStatus == 'Single') {
      if (childrenAmount > 0) {
        setMonthlyPremium(181)
      } else { setMonthlyPremium(153) }

    }
  }, [monthlyPremium, setMonthlyPremium, setChildrenAmount, childrenAmount, maritalStatus, setMaritalStatus])
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/:id' element={<Home idParam={idParam} setIdParam={setIdParam} />} />
          <Route exact path='/' element={<Home idParam={idParam} setIdParam={setIdParam}
            agentCode={agentCode} setAgentCode={setAgentCode} />} />
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
            otherText={otherText}
            setOtherText={setOtherText}
            monthlyPremium={monthlyPremium}
            setMonthlyPremium={setMonthlyPremium}
            armsOfService={armsOfService}
            maritalStatus={maritalStatus}
            childrenAmount={childrenAmount}
            bankingDetailsDO={bankingDetailsDO}
            setBankingDetailsDO={setBankingDetailsDO}
          />} />
          <Route path='/7' element={<ExtendedFamily
            addExtendFamily={addExtendFamily}
            setExtendFamily={setExtendFamily}
            memberRelation={memberRelation}
            setMemberRelation={setMemberRelation}
            relationship={relationship}
            setRelationship={setRelationship}
            name={name}
            setName={setName}
            relationSurname={relationSurname}
            setRelationSurname={setRelationSurname}
            title={title}
            setTitle={setTitle}
            dateOfBirth={dateOfBirth}
            setDateOfBirth={setDateOfBirth}
            age={age}
            setAge={setAge}
            benefit={benefit}
            setBenefit={setBenefit}
            premium={premium}
            setPremium={setPremium}
            subRelationship={subRelationship}
            setSubRelationship={setSubRelationship}
            ageArray={ageArray}
            setageArray={setageArray}
            benefits={benefits}
            setBenefits={setBenefits}
          />} />
          <Route path='/7.2' element={<ExtendedFamily2
            addExtendFamily2={addExtendFamily2}
            setExtendFamily2={setExtendFamily2}
            memberRelation2={memberRelation2}
            setMemberRelation2={setMemberRelation2}
            relationship2={relationship2}
            setRelationship2={setRelationship2}
            name2={name2}
            setName2={setName2}
            relationSurname2={relationSurname2}
            setRelationSurname2={setRelationSurname2}
            title2={title2}
            setTitle2={setTitle2}
            dateOfBirth2={dateOfBirth2}
            setDateOfBirth2={setDateOfBirth2}
            age2={age2}
            setAge2={setAge2}
            benefit2={benefit2}
            setBenefit2={setBenefit2}
            premium2={premium2}
            setPremium2={setPremium2}
            subRelationship2={subRelationship2}
            setSubRelationship2={setSubRelationship2}
            ageArray2={ageArray2}
            setageArray2={setageArray2}
            benefits2={benefits2}
            setBenefits2={setBenefits2}
          />} />
          <Route path='/7.3' element={<ExtendedFamily3
            addExtendFamily3={addExtendFamily3}
            setExtendFamily3={setExtendFamily3}
            memberRelation3={memberRelation3}
            setMemberRelation3={setMemberRelation3}
            relationship3={relationship3}
            setRelationship3={setRelationship3}
            name3={name3}
            setName3={setName3}
            relationSurname3={relationSurname3}
            setRelationSurname3={setRelationSurname3}
            title3={title3}
            setTitle3={setTitle3}
            dateOfBirth3={dateOfBirth3}
            setDateOfBirth3={setDateOfBirth3}
            age3={age3}
            setAge3={setAge3}
            benefit3={benefit3}
            setBenefit3={setBenefit3}
            premium3={premium3}
            setPremium3={setPremium3}
            subRelationship3={subRelationship3}
            setSubRelationship3={setSubRelationship3}
            ageArray3={ageArray3}
            setageArray3={setageArray3}
            benefits3={benefits3}
            setBenefits3={setBenefits3}
          />} />
          <Route path='/7.4' element={<ExtendedFamily4
            addExtendFamily4={addExtendFamily4}
            setExtendFamily4={setExtendFamily4}
            memberRelation4={memberRelation4}
            setMemberRelation4={setMemberRelation4}
            relationship4={relationship4}
            setRelationship4={setRelationship4}
            name4={name4}
            setName4={setName4}
            relationSurname4={relationSurname4}
            setRelationSurname4={setRelationSurname4}
            title4={title4}
            setTitle4={setTitle4}
            dateOfBirth4={dateOfBirth4}
            setDateOfBirth4={setDateOfBirth4}
            age4={age4}
            setAge4={setAge4}
            benefit4={benefit4}
            setBenefit4={setBenefit4}
            premium4={premium4}
            setPremium4={setPremium4}
            subRelationship4={subRelationship4}
            setSubRelationship4={setSubRelationship4}
            ageArray4={ageArray4}
            setageArray4={setageArray4}
            benefits4={benefits4}
            setBenefits4={setBenefits4}
          />} />
          <Route path='/7.5' element={<ExtendedFamily5
            addExtendFamily5={addExtendFamily5}
            setExtendFamily5={setExtendFamily5}
            memberRelation5={memberRelation5}
            setMemberRelation5={setMemberRelation5}
            relationship5={relationship5}
            setRelationship5={setRelationship5}
            name5={name5}
            setName5={setName5}
            relationSurname5={relationSurname5}
            setRelationSurname5={setRelationSurname5}
            title5={title5}
            setTitle5={setTitle5}
            dateOfBirth5={dateOfBirth5}
            setDateOfBirth5={setDateOfBirth5}
            age5={age5}
            setAge5={setAge5}
            benefit5={benefit5}
            setBenefit5={setBenefit5}
            premium5={premium5}
            setPremium5={setPremium5}
            subRelationship5={subRelationship5}
            setSubRelationship5={setSubRelationship5}
            ageArray5={ageArray5}
            setageArray5={setageArray5}
            benefits5={benefits5}
            setBenefits5={setBenefits5}
          />} />
          <Route path='/7.6' element={<ExtendedFamily6
            addExtendFamily6={addExtendFamily6}
            setExtendFamily6={setExtendFamily6}
            memberRelation6={memberRelation6}
            setMemberRelation6={setMemberRelation6}
            relationship6={relationship6}
            setRelationship6={setRelationship6}
            name6={name6}
            setName6={setName6}
            relationSurname6={relationSurname6}
            setRelationSurname6={setRelationSurname6}
            title6={title6}
            setTitle6={setTitle6}
            dateOfBirth6={dateOfBirth6}
            setDateOfBirth6={setDateOfBirth6}
            age6={age6}
            setAge6={setAge6}
            benefit6={benefit6}
            setBenefit6={setBenefit6}
            premium6={premium6}
            setPremium6={setPremium6}
            subRelationship6={subRelationship6}
            setSubRelationship6={setSubRelationship6}
            ageArray6={ageArray6}
            setageArray6={setageArray6}
            benefits6={benefits6}
            setBenefits6={setBenefits6}
          />} />
          <Route path='/7.7' element={<ExtendedFamily7
            addExtendFamily7={addExtendFamily7}
            setExtendFamily7={setExtendFamily7}
            memberRelation7={memberRelation7}
            setMemberRelation7={setMemberRelation7}
            relationship7={relationship7}
            setRelationship7={setRelationship7}
            name7={name7}
            setName7={setName7}
            relationSurname7={relationSurname7}
            setRelationSurname7={setRelationSurname7}
            title7={title7}
            setTitle7={setTitle7}
            dateOfBirth7={dateOfBirth7}
            setDateOfBirth7={setDateOfBirth7}
            age7={age7}
            setAge7={setAge7}
            benefit7={benefit7}
            setBenefit7={setBenefit7}
            premium7={premium7}
            setPremium7={setPremium7}
            subRelationship7={subRelationship7}
            setSubRelationship7={setSubRelationship7}
            ageArray7={ageArray7}
            setageArray7={setageArray7}
            benefits7={benefits7}
            setBenefits7={setBenefits7}
          />} />
          <Route path='/7.8' element={<ExtendedFamily8
            addExtendFamily8={addExtendFamily8}
            setExtendFamily8={setExtendFamily8}
            memberRelation8={memberRelation8}
            setMemberRelation8={setMemberRelation8}
            relationship8={relationship8}
            setRelationship8={setRelationship8}
            name8={name8}
            setName8={setName8}
            relationSurname8={relationSurname8}
            setRelationSurname8={setRelationSurname8}
            title8={title8}
            setTitle8={setTitle8}
            dateOfBirth8={dateOfBirth8}
            setDateOfBirth8={setDateOfBirth8}
            age8={age8}
            setAge8={setAge8}
            benefit8={benefit8}
            setBenefit8={setBenefit8}
            premium8={premium8}
            setPremium8={setPremium8}
            subRelationship8={subRelationship8}
            setSubRelationship8={setSubRelationship8}
            ageArray8={ageArray8}
            setageArray8={setageArray8}
            benefits8={benefits8}
            setBenefits8={setBenefits8}
          />} />
          <Route path='/extendedPayment' element={<ExtendedFamilyPayment
            extendedPaymentMethod={extendedPaymentMethod}
            setExtendedPaymentMethod={setExtendedPaymentMethod}
            otherExtendedText={otherExtendedText}
            setOtherExtendedText={setOtherExtendedText}
            monthlyPremium={monthlyPremium}
            extendedMonthlyPremium={extendedMonthlyPremium}
            setExtendedMonthlyPremium={setExtendedMonthlyPremium}
            armsOfService={armsOfService}
            maritalStatus={maritalStatus}
            childrenAmount={childrenAmount}
            extendedBankingDetailsDO={extendedBankingDetailsDO}
            setExtendedBankingDetailsDO={setExtendedBankingDetailsDO}
            premium={premium}
            premium2={premium2}
            premium3={premium3}
            premium4={premium4}
            premium5={premium5}
            premium6={premium6}
            premium7={premium7}
            premium8={premium8}
          />} />
          <Route path='/8' element={<Seven
            monthlyPremium={monthlyPremium}
            extendedMonthlyPremium={extendedMonthlyPremium}
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
            agentCode={agentCode}
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
            childTitle2={childTitle2}
            childFullNames2={childFullNames2}
            childSurname2={childSurname2}
            childID2={childID2}
            childAge2={childAge2}
            childTitle3={childTitle3}
            childFullNames3={childFullNames3}
            childSurname3={childSurname3}
            childID3={childID3}
            childAge3={childAge3}
            childTitle4={childTitle4}
            childFullNames4={childFullNames4}
            childSurname4={childSurname4}
            childID4={childID4}
            childAge4={childAge4}
            childTitle5={childTitle5}
            childFullNames5={childFullNames5}
            childSurname5={childSurname5}
            childID5={childID5}
            childAge5={childAge5}
            childTitle6={childTitle6}
            childFullNames6={childFullNames6}
            childSurname6={childSurname6}
            childID6={childID6}
            childAge6={childAge6}
            childrenIds={childrenIds}
            memberRelation={memberRelation}
            relationship={relationship}
            name={name}
            relationSurname={relationSurname}
            title={title}
            dateOfBirth={dateOfBirth}
            age={age}
            benefit={benefit}
            premium={premium}
            memberRelation2={memberRelation2}
            relationship2={relationship2}
            name2={name2}
            relationSurname2={relationSurname2}
            title2={title2}
            dateOfBirth2={dateOfBirth2}
            age2={age2}
            benefit2={benefit2}
            premium2={premium2}
            memberRelation3={memberRelation3}
            relationship3={relationship3}
            name3={name3}
            relationSurname3={relationSurname3}
            title3={title3}
            dateOfBirth3={dateOfBirth3}
            age3={age3}
            benefit3={benefit3}
            premium3={premium3}
            memberRelation4={memberRelation4}
            relationship4={relationship4}
            name4={name4}
            relationSurname4={relationSurname4}
            title4={title4}
            dateOfBirth4={dateOfBirth4}
            age4={age4}
            benefit4={benefit4}
            premium4={premium4}
            memberRelation5={memberRelation5}
            relationship5={relationship5}
            name5={name5}
            relationSurname5={relationSurname5}
            title5={title5}
            dateOfBirth5={dateOfBirth5}
            age5={age5}
            benefit5={benefit5}
            premium5={premium5}
            memberRelation6={memberRelation6}
            relationship6={relationship6}
            name6={name6}
            relationSurname6={relationSurname6}
            title6={title6}
            dateOfBirth6={dateOfBirth6}
            age6={age6}
            benefit6={benefit6}
            premium6={premium6}
            memberRelation7={memberRelation7}
            relationship7={relationship7}
            name7={name7}
            relationSurname7={relationSurname7}
            title7={title7}
            dateOfBirth7={dateOfBirth7}
            age7={age7}
            benefit7={benefit7}
            premium7={premium7}
            memberRelation8={memberRelation8}
            relationship8={relationship8}
            name8={name8}
            relationSurname8={relationSurname8}
            title8={title8}
            dateOfBirth8={dateOfBirth8}
            age8={age8}
            benefit8={benefit8}
            premium8={premium8}
            pbTitle={pbTitle}
            pbFullNames={pbFullNames}
            pbSurname={pbSurname}
            pbID={pbID}
            pbAge={pbAge}
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
            paymentMethod={paymentMethod}
            otherText={otherText}
            signature={signature}
            base64Data={base64Data}
            setBase64Data={setBase64Data}
            bankingDetailsDO={bankingDetailsDO}
            extendedMonthlyPremium={extendedMonthlyPremium}
            extendedPaymentMethod={extendedPaymentMethod}
            otherExtendedText={otherExtendedText}
            extendedBankingDetailsDO={extendedBankingDetailsDO}
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
            sourceIncomeDetails={sourceIncomeDetails}
            mainAge={mainAge}
            spouseAge={spouseAge}
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
