import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const CheckInfo = ({
  sourceIncome,
  setSourceIncome,
  sourceIncomeDetails,
  setSourceIncomeDetails,
  dpip,
  dpipDetails,
  fppo,
  fppoDetails,
  closeDpipFppo,
  closeDpipFppoDetails,
  setDpip,
  setDpipDetails,
  setFppo,
  setFppoDetails,
  setCloseDpipFppo,
  setCloseDpipFppoDetails
}) => {
  const [error, setError] = useState('')
  const [showNext,setShowNext] = useState(false)



  const checkAll = () =>{
    if(dpip == ''){
      setError('You have not indicated if you are a DPIP')
    }else if(fppo == ''){
      setError('You have not indicated if you are a FPPO')
    }else if(closeDpipFppo == ''){
      setError('You have not indicated if you are a close family member or have any association with a DPIP or FPPO')
    }else{
      setShowNext(true)
      setError('Please check that all info is correct then click next')
    }
  }

  return(
    <div className='page'>
      <div id='clientDueDiligence'>
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Client Due Diligence:</h6>
        <p>DPIP refers to a Domestic Prominent Influential Person that is an individual who holds, including in an acting position for a period exceeding 6 months, or who has held at any time in the proceeding 12 months in the Republic the following positions:</p>
        <ul>
          <li>President or Deputy President</li>
          <li>Government minister or Deputy minister</li>
          <li>Member of a royal family or senior traditional 
          leader</li>
          <li>Premier of a Province</li>
          <li>Executive Council member of a Province</li>
          <li>Leader of a political party</li>
          <li>Executive mayor of a municipality</li>
          <li>Municipal manager or CFO of a municipality</li>
          <li>Head, accounting officer of CFO of a national / 
          provincial department or government 
           component</li>
          <li>Chairperson of the board of directors</li>
          <li>Chairperson of the audit committee</li>
          <li>Executive Officer</li>
          <li>Chief Financial Officer (CFO)</li>
        </ul>
        <p>FPPO refers to a Foreign Prominent Influential Person that is an individual who holds, or who has held at any time in the proceeding 12 months, in a foreign country, a prominent public function:</p>
        <ul>
          <li>Head of State / Head of a Country or 
          Government</li>
          <li>Member of a foreign Royal family</li>
          <li>Government Minister or equivalent senior 
          politician or leader of a political party</li>
          <li>Senior executive of a state-owned corporation</li>
          <li>High ranking member of the military (General; 
            Lieutenant General; Admiral or Vice Admiral)</li>
          <li>Senior judicial official</li>
        </ul>
        <p>As part of our responsibilities as an Accountable Institution in terms of the Financial Intelligence Centre Act 38 of 2001, we are required to gather the following client information prior to concluding the transaction.</p>
      </div>
      <Form>
        <Form.Group className='mb-2' controlId='sourceIncome'>
          <Form.Label className='Label' style={{fontSize: '12px'}}>* What is the source of Funds?</Form.Label>
          <Form.Select onChange={(e)=>setSourceIncome(e.target.value)} >
            <option>Salary</option>
            <option>Pension</option>
            <option>Business Income</option>
            <option>Dividend</option>
            <option>Savings</option>
            <option>Other</option>
          </Form.Select>
          {sourceIncome == 'Other' &&<Form.Control className='Control' type='text' placeholder='Please provide details:' onChange={(e)=>setSourceIncomeDetails(e.target.value)} style={{ marginTop: '20px' }} />}
        </Form.Group>      

        <Form.Group className='mb-2' controlId='dpip'>
          <Form.Label className='Label' style={{fontSize: '12px'}}>* Are you a Domestic Prominent Influential Persons (DPIP)?</Form.Label>
          <Form.Select onChange={(e)=>setDpip(e.target.value)} >
            <option>Choose Yes or No</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
          {dpip == 'Yes' &&<Form.Control className='Control' type='text' placeholder='Please provide details:' onChange={(e)=>setDpipDetails(e.target.value)} style={{ marginTop: '20px' }} />}
        </Form.Group>

        <Form.Group className='mb-2' controlId='fppo'>
          <Form.Label className='Label' style={{fontSize: '12px'}}>* Are you a Foreign Prominent Public Officials (FPPO),?</Form.Label>
          <Form.Select onChange={(e)=>setFppo(e.target.value)} >
            <option>Choose Yes or No</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
          {fppo == 'Yes' &&<Form.Control className='Control' type='text' placeholder='Please provide details:' onChange={(e)=>setFppoDetails(e.target.value)} style={{ marginTop: '20px' }} />}
        </Form.Group>

        <Form.Group className='mb-2' controlId='closeDpipFppo'>
          <Form.Label className='Label' style={{fontSize: '12px'}}>* Is a close family member or any associates of yours a DPIP or FPPO?</Form.Label>
          <Form.Select onChange={(e)=>setCloseDpipFppo(e.target.value)} >
            <option>Choose Yes or No</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
          {closeDpipFppo == 'Yes' &&<Form.Control className='Control' type='text' placeholder='Please provide details:' onChange={(e)=>setCloseDpipFppoDetails(e.target.value)} style={{ marginTop: '20px' }} />}
        </Form.Group>
      </Form>
      <div style={{textAlign: 'center', padding: '5vw'}}><h6 style={{color: 'red', fontWeight: 'bold',textAlign: 'center'}}>{error}</h6></div>
        <div>
        <Link to='/6'>
        <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginLeft: '20vw' }}>BACK</Button>
      </Link>
      {showNext &&  <Link to='/addinfo'>
          <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '5vw' }} >NEXT</Button>
        </Link>}
        {!showNext && <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginRight: '20vw', marginBottom: '5vh' }} onClick={checkAll} >Submit</Button>}
        </div>
   </div>
  )
}
export default CheckInfo