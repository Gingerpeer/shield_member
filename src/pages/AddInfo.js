import { useState } from 'react'
import { Link } from 'react-router-dom'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// styles
import '../App.css'
const AddInfo = ({
  agsb,
  setAgsb,
  rhcb,
  setRhcb,
  cgsb,
  setCgsb,
  asb,
  setAsb,
  other,
  setOther,
  otherDetails,
  setOtherDetails,
  prevCancelation,
  setPrevCancelation,
  prevWaiting,
  setPrevWaiting,
  prevCanYes,
  setPrevCanYes,
  marketingConsent,
  setMarketingConsent
})=>{
  const [error, setError] = useState('')
  const [showNext,setShowNext] = useState(false)

  const checkAll = () =>{
    console.log(agsb,rhcb,cgsb,asb,other,otherDetails,prevCancelation,prevWaiting,marketingConsent)
    setShowNext(true)
    setError('Please check that all info is correct then click next')
  }
  return(
    <div className="page">
      <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Additional Information</h6>
      <Form>
        <Form.Label>I have selected this plan for the following reasons:</Form.Label>
        <Form.Check 
        type="checkbox"
        id="custom-switch"
        label="Affordable Group Scheme Benefits"
        onChange={()=>setAgsb('Affordable Group Scheme Benefits')}
         />
         <Form.Check 
        type="checkbox"
        id="custom-switch"
        label="Rainbow Holiday Club Benefits"
        onChange={()=>setRhcb('Rainbow Holiday Club Benefits')}
         />
         <Form.Check 
        type="checkbox"
        id="custom-switch"
        label="Compulsory Group Scheme Benefits"
        onChange={()=>setCgsb('Compulsory Group Scheme Benefits')}
         />
         <Form.Check 
        type="checkbox"
        id="custom-switch"
        label="Adopt - a - Student Benefits"
        onChange={()=>setAsb('Adopt - a - Student Benefits')}
         />
         <Form.Check 
        type="checkbox"
        id="custom-switch"
        label="Other"
        onChange={()=>setOther('Other')}
         />
         {other == 'Other'&&<Form.Control onChange={(e)=>setOtherDetails(e.target.value)} />}
         <Form.Label style={{fontWeight: "bold"}}>I hereby consent that my personal information may be used for marketing purposes *:</Form.Label>
         <p style={{
          maxWidth: "75vw",
          fontSize: "12px",
          paddingLeft: "10vw"           
         }}>*Marketing means the  marketing of SA Army Foundation's new or enhance offerings promoted by the SA Army Foundation; Maxi Forces Financial Services (Pty) Ltd (the broker) and/or Shield Life Ltd (the insurer)</p>
         <Form.Check 
            style={{
              maxWidth: "25vw",
              marginLeft: "32vw"
            }}
            type="checkbox"
            id="custom-switch"
            label="Yes"
            onChange={()=>setMarketingConsent(true)}
         />
         <p style={{textAlign: "center"}}>__________________</p>
         <Form.Check 
            style={{
              maxWidth: "25vw",
              marginLeft: "32vw"
            }}
            type="checkbox"
            id="custom-switch"
            label="No"
            onChange={()=>setMarketingConsent(false)}
         />
         <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Pre-existing Funeral Cover</h6>
         <Form.Label style={{fontWeight: "bold"}}>In order for the Insurer to determine whether a waiting period is applicable, you the potential member must confirm the following:</Form.Label>
         <Form.Label>Have you recently, more than 31 days before signature date, cancelled a funeral policy with another Insurer?</Form.Label>
         <Form.Check 
            style={{
              maxWidth: "25vw",
              marginLeft: "32vw"
            }}
            type="checkbox"
            id="custom-switch"
            label="Yes"
            onChange={()=>setPrevCanYes(true)}
         />
         <p style={{textAlign: "center"}}>__________________</p>
         <Form.Check 
            style={{
              maxWidth: "25vw",
              marginLeft: "32vw"
            }}
            type="checkbox"
            id="custom-switch"
            label="No"
            onChange={()=>setPrevCanYes(false)}
         />
         {prevCanYes &&<Form.Label>If yes, did you complete a waiting period under that previous funeral policy?</Form.Label>}
         {prevCanYes &&<Form.Control onChange={(e)=>setPrevCancelation(e.target.value)} />}
         <Form.Label style={{fontWeight: 'bold'}}>Waiver of waiting period only applicable on claim stage, if proper evidence of pre-existing funeral cover where the waiting periods have been completed, can be provided.</Form.Label>
      </Form>
      <div style={{textAlign: 'center', padding: '5vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
      <div>
        <Link to='/checkInfo'>
        <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginLeft: '20vw' }}>BACK</Button>
      </Link>
      {showNext &&  <Link to='/7'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '5vw' }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '5vh' }} onClick={checkAll} >Submit</Button>}
        </div>
    </div>
  )
}
export default AddInfo