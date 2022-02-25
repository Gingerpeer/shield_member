import Form  from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useEffect } from 'react'

const CheckInfo = ({
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

  useEffect(()=>{
    if(dpip === 'No'){
      setDpipDetails('N/A')
      setDpip('')
    }
    if(fppo === 'No'){
      setFppoDetails('N/A')
      setFppo('')
    }
    if(closeDpipFppoDetails === 'No'){
      setCloseDpipFppoDetails('N/A')
      setCloseDpipFppo('')
    }
  },[dpip,fppo,closeDpipFppoDetails,setDpipDetails,setDpip,setFppoDetails,setFppo,setCloseDpipFppoDetails,setCloseDpipFppo])
  return(
    <div className='page'>
      <div id='clientDueDiligence'>
        <h6 style={{fontWeight: '600', marginTop: '25px', textAlign: 'center', color: '#BB1A1B', marginBottom: '25px'}}>Client Due Diligence:</h6>
        <p>DPIP refers to a Domestic Prominent Influential Person that is an individual who holds, including in an acting position for a period exceeding 6 months, or who has held at any time in the proceeding 12 months in the Republic the following positions:</p>
        <ul>
          <li>* President or Deputy Present</li>
          <li>* Government minister or Deputy minister</li>
          <li>* Member of a royal family or senior traditional 
          leader</li>
          <li>* Premier of a Province</li>
          <li>* Executive Council member of a Province</li>
          <li>* Leader of a political party</li>
          <li>* Executive mayor of a municipality</li>
          <li>* Municipal manager or CFO of a municipality</li>
          <li>* Head, accounting officer of CFO of a national / 
          provincial department or government 
           component</li>
          <li>* Chairperson of the board of directors</li>
          <li>* Chairperson of the audit committee</li>
          <li>* Executive Officer</li>
          <li>* Chief Financial Officer (CFO)</li>
        </ul>
        <p>FPPO refers to a Foreign Prominent Influential Person that is an individual who holds, or who has held at any time in the proceeding 12 months, in a foreign country, a prominent public function:</p>
        <ul>
          <li>* Head of State / Head of a Country or 
          Government</li>
          <li>* Member of a foreign Royal family</li>
          <li>* Government Minister or equivalent senior 
          politician or leader of a political party</li>
          <li>* Senior executive of a state-owned corporation</li>
          <li>* High ranking member of the military (General; 
            Lieutenant General; Admiral or Vice Admiral)</li>
          <li>* Senior judicial official</li>
        </ul>
      </div>
      <Form>
        <Form.Group className='mb-2' controlId='dpip'>
          <Form.Label className='Label' style={{fontSize: '12px'}}>Are you a Domestic Prominent Influential Persons (DPIP)?</Form.Label>
          <Form.Select onChange={(e)=>setDpip(e.target.value)} >
            <option>Choose Yes or No</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
          {dpip == 'Yes' &&<Form.Control className='Control' type='text' placeholder='Please provide details:' onChange={(e)=>setDpipDetails(e.target.value)} style={{ marginTop: '20px' }} />}
        </Form.Group>

        <Form.Group className='mb-2' controlId='fppo'>
          <Form.Label className='Label' style={{fontSize: '12px'}}>Are you a Foreign Prominent Public Officials (FPPO),?</Form.Label>
          <Form.Select onChange={(e)=>setFppo(e.target.value)} >
            <option>Choose Yes or No</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
          {fppo == 'Yes' &&<Form.Control className='Control' type='text' placeholder='Please provide details:' onChange={(e)=>setFppoDetails(e.target.value)} style={{ marginTop: '20px' }} />}
        </Form.Group>

        <Form.Group className='mb-2' controlId='closeDpipFppo'>
          <Form.Label className='Label' style={{fontSize: '12px'}}>Is a close family member or any associates of yours a DPIP or FPPO?</Form.Label>
          <Form.Select onChange={(e)=>setCloseDpipFppo(e.target.value)} >
            <option>Choose Yes or No</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
          {closeDpipFppo == 'Yes' &&<Form.Control className='Control' type='text' placeholder='Please provide details:' onChange={(e)=>setCloseDpipFppoDetails(e.target.value)} style={{ marginTop: '20px' }} />}
        </Form.Group>
      </Form>
        <div>
        <Link to='/6'>
        <Button variant='secondary w-25' style={{ fontWeight: '600', background: '#D0D0D0', border: 'none', float:'left', marginTop: '3vw', marginLeft: '20vw' }}>BACK</Button>
      </Link>
      <Link to='/7'>
        <Button variant='danger w-25' style={{ fontWeight: '600', background: '#BB1A1B', border: 'none', float:'right', marginTop: '3vw', marginRight: '20vw' }} >NEXT</Button>
      </Link>
        </div>
   </div>
  )
}
export default CheckInfo